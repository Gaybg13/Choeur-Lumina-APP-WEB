package com.choraleapp.ui.auth

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.repository.AuthRepository
import kotlinx.coroutines.launch

class AuthViewModel : ViewModel() {
    private val repository = AuthRepository()

    val isLoading = mutableStateOf(false)
    val errorMessage = mutableStateOf<String?>(null)

    fun login(email: String, password: String, onSuccess: () -> Unit) {
        viewModelScope.launch {
            isLoading.value = true
            errorMessage.value = null
            try {
                repository.login(email, password)
                onSuccess()
            } catch (e: Exception) {
                errorMessage.value = "Email ou mot de passe incorrect"
            } finally {
                isLoading.value = false
            }
        }
    }

    fun register(inviteCode: String, email: String, password: String, birthdayDay: Int, birthdayMonth: Int, onSuccess: () -> Unit) {
        viewModelScope.launch {
            isLoading.value = true
            errorMessage.value = null
            val result = repository.registerWithInviteCode(inviteCode.trim(), email.trim(), password, birthdayDay, birthdayMonth)
            isLoading.value = false
            result.onSuccess { onSuccess() }
            result.onFailure { errorMessage.value = it.message }
        }
    }
}
