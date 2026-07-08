package com.choraleapp.ui.home

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Event
import com.choraleapp.data.model.Member
import com.choraleapp.data.model.Song
import com.choraleapp.data.repository.AuthRepository
import com.choraleapp.data.repository.EventsRepository
import com.choraleapp.data.repository.SongsRepository
import com.google.firebase.Timestamp
import com.google.firebase.messaging.FirebaseMessaging
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await

class HomeViewModel : ViewModel() {
    private val repository = AuthRepository()
    private val eventsRepository = EventsRepository()
    private val songsRepository = SongsRepository()

    val member = mutableStateOf<Member?>(null)
    val isLoading = mutableStateOf(true)
    val nextEvent = mutableStateOf<Event?>(null)
    val recentSongs = mutableStateOf<List<Song>>(emptyList())

    val currentUserId: String? get() = repository.currentUserId()

    init {
        viewModelScope.launch {
            member.value = repository.getCurrentMember()
            isLoading.value = false
            saveFcmToken()
        }
        loadDashboard()
    }

    private fun loadDashboard() {
        viewModelScope.launch {
            try {
                val nowSeconds = Timestamp.now().seconds
                nextEvent.value = eventsRepository.getAllEvents()
                    .filter { (it.date?.seconds ?: 0) >= nowSeconds }
                    .sortedBy { it.date?.seconds }
                    .firstOrNull()
            } catch (e: Exception) {
                // Non bloquant : la carte affichera simplement "aucun événement"
            }

            try {
                recentSongs.value = songsRepository.getAllSongs()
                    .sortedByDescending { it.createdAt?.seconds ?: 0 }
                    .take(3)
            } catch (e: Exception) {
                // Non bloquant
            }
        }
    }

    fun respondToNextEvent(reponse: String) {
        val event = nextEvent.value ?: return
        val uid = currentUserId ?: return
        viewModelScope.launch {
            try {
                eventsRepository.setReponse(event.id, uid, reponse)
                loadDashboard()
            } catch (e: Exception) {
                // Non bloquant
            }
        }
    }

    private fun saveFcmToken() {
        viewModelScope.launch {
            try {
                val token = FirebaseMessaging.getInstance().token.await()
                repository.updateFcmToken(token)
            } catch (e: Exception) {
                // Non bloquant : les notifications ne marcheront simplement pas
                // pour ce choriste si l'enregistrement échoue.
            }
        }
    }
}