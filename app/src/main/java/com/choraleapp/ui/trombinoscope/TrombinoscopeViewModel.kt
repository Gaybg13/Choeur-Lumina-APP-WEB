package com.choraleapp.ui.trombinoscope

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Member
import com.choraleapp.data.repository.MembersRepository
import kotlinx.coroutines.launch

class TrombinoscopeViewModel : ViewModel() {
    private val repository = MembersRepository()

    val membersByPupitre = mutableStateOf<Map<String, List<Member>>>(emptyMap())
    val isLoading = mutableStateOf(true)
    val errorMessage = mutableStateOf<String?>(null)

    init {
        viewModelScope.launch {
            try {
                val members = repository.getAllMembers()
                membersByPupitre.value = members
                    .groupBy { it.pupitre.ifBlank { "Sans pupitre" } }
                    .toSortedMap()
                    .mapValues { (_, list) -> list.sortedBy { it.nom } }
            } catch (e: Exception) {
                errorMessage.value = "Impossible de charger les choristes"
            } finally {
                isLoading.value = false
            }
        }
    }
}