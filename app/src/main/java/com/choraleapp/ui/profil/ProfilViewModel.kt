package com.choraleapp.ui.profil

import android.net.Uri
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Member
import com.choraleapp.data.repository.AuthRepository
import com.choraleapp.data.repository.StorageRepository
import kotlinx.coroutines.launch

class ProfilViewModel : ViewModel() {
    private val authRepository = AuthRepository()
    private val storageRepository = StorageRepository()

    val member = mutableStateOf<Member?>(null)
    val isUploadingPhoto = mutableStateOf(false)
    val errorMessage = mutableStateOf<String?>(null)

    init {
        loadMember()
    }

    private fun loadMember() {
        viewModelScope.launch {
            member.value = authRepository.getCurrentMember()
        }
    }

    fun updateBirthday(day: Int, month: Int, onDone: () -> Unit = {}) {
        viewModelScope.launch {
            errorMessage.value = null
            try {
                authRepository.updateBirthday(day, month)
                loadMember()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'enregistrer la date d'anniversaire"
            }
        }
    }

    fun uploadPhoto(uri: Uri) {
        val uid = authRepository.currentUserId() ?: return
        viewModelScope.launch {
            isUploadingPhoto.value = true
            errorMessage.value = null
            try {
                val url = storageRepository.uploadProfilePhoto(uid, uri)
                authRepository.updatePhotoUrl(url)
                loadMember()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'envoyer la photo"
            } finally {
                isUploadingPhoto.value = false
            }
        }
    }
}
