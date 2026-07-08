package com.choraleapp.ui.calendrier

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Event
import com.choraleapp.data.model.Member
import com.choraleapp.data.model.Song
import com.choraleapp.data.repository.AuthRepository
import com.choraleapp.data.repository.EventsRepository
import com.choraleapp.data.repository.MembersRepository
import com.choraleapp.data.repository.MessagingRepository
import com.choraleapp.data.repository.SongsRepository
import com.google.firebase.Timestamp
import com.google.firebase.firestore.ListenerRegistration
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.GregorianCalendar
import java.util.Locale
import java.util.TimeZone

class CalendrierViewModel : ViewModel() {
    private val repository = EventsRepository()
    private val authRepository = AuthRepository()
    private val songsRepository = SongsRepository()
    private val membersRepository = MembersRepository()
    private val messagingRepository = MessagingRepository()

    val events = mutableStateOf<List<Event>>(emptyList())
    val songs = mutableStateOf<List<Song>>(emptyList())
    val members = mutableStateOf<List<Member>>(emptyList())
    val isLoading = mutableStateOf(true)
    val errorMessage = mutableStateOf<String?>(null)
    val canEdit = mutableStateOf(false)
    val hasUnreadEvents = mutableStateOf(false)

    val currentUserId: String? get() = authRepository.currentUserId()

    private var eventListener: ListenerRegistration? = null
    private var regularEventsCache: List<Event> = emptyList()
    private var lastAgendaSeenSeconds: Long = 0L

    init {
        loadAll()
        startEventListener()
        loadSongs()
        loadRole()
        startMidnightRefresh()
    }


    private val parisTimeZone: TimeZone = TimeZone.getTimeZone("Europe/Paris")

    private fun startOfTodayTimestamp(): Timestamp {
        val calendar = Calendar.getInstance(parisTimeZone).apply {
            set(Calendar.HOUR_OF_DAY, 0)
            set(Calendar.MINUTE, 0)
            set(Calendar.SECOND, 0)
            set(Calendar.MILLISECOND, 0)
        }
        return Timestamp(calendar.time)
    }

    private fun startEventListener() {
        eventListener?.remove()
        // Écoute volontairement simple et robuste : on reçoit les événements,
        // puis on filtre localement par jour de Paris. Une indisponibilité
        // temporaire d'une requête filtrée ne doit jamais empêcher l'app de démarrer.
        eventListener = repository.listenEvents { regularEvents ->
            regularEventsCache = regularEvents
            refreshActiveEvents()
        }
    }

    private fun startOfTodaySeconds(): Long = startOfTodayTimestamp().seconds

    private fun activeRegularEvents(): List<Event> {
        val todayStart = startOfTodaySeconds()
        return regularEventsCache.filter { event ->
            (event.date?.seconds ?: Long.MAX_VALUE) >= todayStart
        }
    }

    private fun refreshActiveEvents() {
        val regularEvents = activeRegularEvents()
        val birthdayEvents = buildBirthdayEvents(members.value)
        events.value = (regularEvents + birthdayEvents)
            .sortedBy { it.date?.seconds ?: Long.MAX_VALUE }
        hasUnreadEvents.value = regularEvents.any {
            (it.createdAt?.seconds ?: 0L) > lastAgendaSeenSeconds
        }
    }

    private fun startMidnightRefresh() {
        viewModelScope.launch {
            while (true) {
                val now = Calendar.getInstance(parisTimeZone)
                val nextMidnight = Calendar.getInstance(parisTimeZone).apply {
                    add(Calendar.DAY_OF_YEAR, 1)
                    set(Calendar.HOUR_OF_DAY, 0)
                    set(Calendar.MINUTE, 0)
                    set(Calendar.SECOND, 1)
                    set(Calendar.MILLISECOND, 0)
                }
                delay((nextMidnight.timeInMillis - now.timeInMillis).coerceAtLeast(1000L))
                refreshActiveEvents()
                if (canEdit.value) cleanupExpiredEvents()
            }
        }
    }

    private suspend fun cleanupExpiredEvents() {
        val cutoff = startOfTodayTimestamp()
        try {
            repository.deleteExpiredEvents(cutoff)
        } catch (_: Exception) {
            // Le filtrage local masque déjà les événements passés.
            // Le nettoyage sera retenté par le backend ou à la prochaine ouverture staff.
        }
    }

    private fun loadRole() {
        viewModelScope.launch {
            try {
                val role = authRepository.getCurrentMember()?.role ?: "membre"
                canEdit.value = role == "admin" || role == "contributeur"
                if (canEdit.value) cleanupExpiredEvents()
            } catch (_: Exception) {
                // Une erreur Firebase temporaire ne doit pas fermer l'application.
                canEdit.value = false
            }
        }
    }

    private fun loadSongs() {
        viewModelScope.launch {
            try {
                songs.value = songsRepository.getAllSongs().sortedBy { it.titre }
            } catch (_: Exception) {
            }
        }
    }

    private fun loadAll() {
        viewModelScope.launch {
            isLoading.value = true
            try {
                val regularEvents = repository.getAllEvents()
                regularEventsCache = regularEvents
                val allMembers = membersRepository.getAllMembers()
                members.value = allMembers
                val me = authRepository.getCurrentMember()
                lastAgendaSeenSeconds = me?.agendaLastSeenAt?.seconds ?: 0L
                refreshActiveEvents()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de charger le calendrier"
            } finally {
                isLoading.value = false
            }
        }
    }

    private fun buildBirthdayEvents(allMembers: List<Member>): List<Event> {
        val now = Calendar.getInstance(parisTimeZone)
        val todayStart = Calendar.getInstance(parisTimeZone).apply {
            set(Calendar.HOUR_OF_DAY, 0)
            set(Calendar.MINUTE, 0)
            set(Calendar.SECOND, 0)
            set(Calendar.MILLISECOND, 0)
        }
        val currentYear = now.get(Calendar.YEAR)
        val result = mutableListOf<Event>()

        allMembers
            .filter { it.birthdayDay in 1..31 && it.birthdayMonth in 1..12 }
            .forEach { member ->
                try {
                    fun birthdayCalendar(year: Int) = GregorianCalendar(parisTimeZone).apply {
                        clear()
                        set(year, member.birthdayMonth - 1, member.birthdayDay)
                        isLenient = false
                        set(Calendar.HOUR_OF_DAY, 9)
                        set(Calendar.MINUTE, 0)
                        set(Calendar.SECOND, 0)
                        set(Calendar.MILLISECOND, 0)
                    }

                    val thisYear = birthdayCalendar(currentYear)
                    val nextBirthday = if (thisYear.timeInMillis >= todayStart.timeInMillis) {
                        thisYear
                    } else {
                        birthdayCalendar(currentYear + 1)
                    }

                    val year = nextBirthday.get(Calendar.YEAR)
                    result += Event(
                        id = "birthday_${member.id}_$year",
                        titre = "Anniversaire de ${member.prenom}",
                        type = "anniversaire",
                        date = Timestamp(nextBirthday.time),
                        description = "🎂 Souhaitons un joyeux anniversaire à ${member.prenom} !",
                        synthetic = true
                    )
                } catch (_: Exception) {
                }
            }

        return result
    }

    fun markAgendaSeen() {
        viewModelScope.launch {
            try {
                authRepository.markAgendaSeen()
                lastAgendaSeenSeconds = Timestamp.now().seconds
                hasUnreadEvents.value = false
            } catch (_: Exception) {
            }
        }
    }

    fun addEvent(
        titre: String,
        type: String,
        date: Timestamp?,
        lieu: String,
        description: String,
        onDone: () -> Unit
    ) {
        viewModelScope.launch {
            try {
                repository.addEvent(
                    Event(titre = titre, type = type, date = date, lieu = lieu, description = description),
                    currentUserId.orEmpty()
                )
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'ajouter l'événement"
            }
        }
    }

    fun setReponse(eventId: String, reponse: String) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            try {
                repository.setReponse(eventId, uid, reponse)
                loadAll()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'enregistrer ta réponse"
            }
        }
    }

    fun updateProgramme(eventId: String, songIds: List<String>) {
        viewModelScope.launch {
            try {
                repository.setProgramme(eventId, songIds)
                loadAll()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de mettre à jour le programme"
            }
        }
    }

    fun updateCompteRendu(eventId: String, texte: String) {
        viewModelScope.launch {
            try {
                repository.setCompteRendu(eventId, texte)
                loadAll()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'enregistrer le compte-rendu"
            }
        }
    }

    fun updateEvent(
        eventId: String,
        titre: String,
        type: String,
        date: Timestamp?,
        lieu: String,
        description: String,
        onDone: () -> Unit
    ) {
        viewModelScope.launch {
            try {
                repository.updateEvent(eventId, titre, type, date, lieu, description)
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de modifier l'événement"
            }
        }
    }

    fun cancelEvent(event: Event, onDone: () -> Unit) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            try {
                repository.cancelEvent(event.id, uid)
                val dateLabel = event.date?.toDate()?.let {
                    SimpleDateFormat("d MMMM yyyy", Locale.FRANCE).format(it)
                }.orEmpty()
                messagingRepository.sendEventCancellationSystemMessage(uid, event.titre, dateLabel)
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'annuler l'événement"
            }
        }
    }

    fun deleteEvent(eventId: String, onDone: () -> Unit) {
        viewModelScope.launch {
            try {
                repository.deleteEvent(eventId)
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de supprimer l'événement"
            }
        }
    }

    override fun onCleared() {
        eventListener?.remove()
        super.onCleared()
    }

}
