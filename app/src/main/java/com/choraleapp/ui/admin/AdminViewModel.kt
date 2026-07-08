package com.choraleapp.ui.admin

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Member
import com.choraleapp.data.model.Event
import com.choraleapp.data.repository.MembersRepository
import com.choraleapp.data.repository.EventsRepository
import com.choraleapp.data.repository.UserRolesRepository
import com.google.firebase.Timestamp
import kotlinx.coroutines.launch
import java.util.Calendar
import java.util.TimeZone

class AdminViewModel : ViewModel() {
    private val membersRepository = MembersRepository()
    private val userRolesRepository = UserRolesRepository()
    private val eventsRepository = EventsRepository()

    val members = mutableStateOf<List<Member>>(emptyList())
    val events = mutableStateOf<List<Event>>(emptyList())
    val isLoading = mutableStateOf(true)
    val errorMessage = mutableStateOf<String?>(null)
    val lastGeneratedCode = mutableStateOf<String?>(null)

    init {
        loadMembers()
        loadEvents()
    }


    private fun loadEvents() {
        viewModelScope.launch {
            try {
                val startOfToday = Calendar.getInstance(TimeZone.getTimeZone("Europe/Paris")).apply {
                    set(Calendar.HOUR_OF_DAY, 0)
                    set(Calendar.MINUTE, 0)
                    set(Calendar.SECOND, 0)
                    set(Calendar.MILLISECOND, 0)
                }
                val cutoff = Timestamp(startOfToday.time)

                // L'administration ne conserve pas d'historique visible :
                // le filtrage local reste effectif même si la suppression distante
                // est momentanément indisponible.
                events.value = eventsRepository.getAllEvents()
                    .filter { (it.date?.seconds ?: Long.MAX_VALUE) >= cutoff.seconds }
                    .sortedByDescending { it.date?.seconds ?: 0L }

                try {
                    // La map `reponses` est supprimée avec le document événement.
                    eventsRepository.deleteExpiredEvents(cutoff)
                } catch (_: Exception) {
                    // Le backend planifié effectuera le nettoyage ultérieurement.
                }
            } catch (_: Exception) {
            }
        }
    }

    private fun loadMembers() {
        viewModelScope.launch {
            isLoading.value = true
            try {
                members.value = membersRepository.getAllMembers()
                    .sortedWith(compareBy({ it.nom }, { it.prenom }))
            } catch (e: Exception) {
                errorMessage.value = "Impossible de charger les membres"
            } finally {
                isLoading.value = false
            }
        }
    }

    fun addMember(prenom: String, nom: String, pupitre: String, role: String, onDone: () -> Unit) {
        viewModelScope.launch {
            try {
                val member = membersRepository.createMember(prenom, nom, pupitre, role)
                lastGeneratedCode.value = member.inviteCode
                loadMembers()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'ajouter le membre"
            }
        }
    }

    fun updateMember(
        memberId: String,
        prenom: String,
        nom: String,
        pupitre: String,
        role: String,
        uid: String,
        onDone: () -> Unit
    ) {
        viewModelScope.launch {
            try {
                membersRepository.updateMember(memberId, prenom, nom, pupitre, role)
                if (uid.isNotBlank()) {
                    userRolesRepository.setRole(uid, role)
                }
                loadMembers()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de modifier le membre"
            }
        }
    }

    fun regenerateCode(memberId: String, onDone: (String) -> Unit) {
        viewModelScope.launch {
            try {
                val newCode = membersRepository.regenerateInviteCode(memberId)
                loadMembers()
                onDone(newCode)
            } catch (e: Exception) {
                errorMessage.value = "Impossible de régénérer le code"
            }
        }
    }

    fun deleteMember(member: Member, onDone: () -> Unit) {
        viewModelScope.launch {
            try {
                membersRepository.deleteMember(member.id)
                if (member.uid.isNotBlank()) {
                    userRolesRepository.deleteRole(member.uid)
                }
                loadMembers()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de supprimer le membre"
            }
        }
    }

    fun clearGeneratedCode() {
        lastGeneratedCode.value = null
    }
}
