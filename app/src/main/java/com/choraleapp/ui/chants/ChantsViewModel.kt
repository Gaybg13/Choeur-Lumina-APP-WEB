package com.choraleapp.ui.chants

import android.net.Uri
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.Folder
import com.choraleapp.data.model.Song
import com.choraleapp.data.repository.AuthRepository
import com.choraleapp.data.repository.FoldersRepository
import com.choraleapp.data.repository.SongsRepository
import com.choraleapp.data.repository.StorageRepository
import kotlinx.coroutines.launch

class ChantsViewModel : ViewModel() {
    private val songsRepository = SongsRepository()
    private val foldersRepository = FoldersRepository()
    private val authRepository = AuthRepository()
    private val storageRepository = StorageRepository()

    val songs = mutableStateOf<List<Song>>(emptyList())
    val folders = mutableStateOf<List<Folder>>(emptyList())
    val selectedFolderId = mutableStateOf<String?>(null)
    val isLoading = mutableStateOf(true)
    val errorMessage = mutableStateOf<String?>(null)
    val canEdit = mutableStateOf(false)

    init {
        loadAll()
        loadRole()
    }

    private fun loadRole() {
        viewModelScope.launch {
            val role = authRepository.getCurrentMember()?.role ?: "membre"
            canEdit.value = role == "admin" || role == "contributeur"
        }
    }

    private fun loadAll() {
        viewModelScope.launch {
            isLoading.value = true
            try {
                songs.value = songsRepository.getAllSongs().sortedBy { it.titre }
                folders.value = foldersRepository.getAllFolders().sortedBy { it.nom }
            } catch (e: Exception) {
                errorMessage.value = "Impossible de charger les chants"
            } finally {
                isLoading.value = false
            }
        }
    }

    fun selectFolder(folderId: String?) {
        selectedFolderId.value = folderId
    }

    fun addFolder(nom: String, onDone: (Folder) -> Unit) {
        viewModelScope.launch {
            try {
                val folder = foldersRepository.addFolder(nom)
                folders.value = (folders.value + folder).sortedBy { it.nom }
                onDone(folder)
            } catch (e: Exception) {
                errorMessage.value = "Impossible de créer le dossier"
            }
        }
    }

    fun addSong(
        titre: String,
        compositeur: String,
        partitionUrl: String,
        partitionType: String,
        youtubeUrl: String,
        folderId: String,
        appris: Boolean,
        audioUrlsByPupitre: Map<String, String>,
        audioFilesByPupitre: Map<String, Boolean>,
        onDone: () -> Unit
    ) {
        viewModelScope.launch {
            try {
                songsRepository.addSong(
                    Song(
                        titre = titre,
                        compositeur = compositeur,
                        partitionUrl = partitionUrl,
                        partitionType = partitionType,
                        youtubeUrl = youtubeUrl,
                        folderId = folderId,
                        appris = appris,
                        audioUrlsByPupitre = audioUrlsByPupitre,
                        audioFilesByPupitre = audioFilesByPupitre,
                        audioUrl = audioUrlsByPupitre["general"] ?: "",
                        audioIsFile = audioFilesByPupitre["general"] ?: false
                    )
                )
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible d'ajouter le chant"
            }
        }
    }

    suspend fun uploadSongFile(storagePathId: String, fileName: String, fileUri: Uri): String {
        return storageRepository.uploadSongFile(storagePathId, fileName, fileUri)
    }

    suspend fun downloadSongFile(url: String, destination: java.io.File) {
        storageRepository.downloadToFile(url, destination)
    }

    suspend fun deleteStorageFile(url: String) {
        storageRepository.deleteFile(url)
    }

    fun updateSong(
        songId: String,
        titre: String,
        compositeur: String,
        partitionUrl: String,
        partitionType: String,
        youtubeUrl: String,
        folderId: String,
        appris: Boolean,
        audioUrlsByPupitre: Map<String, String>,
        audioFilesByPupitre: Map<String, Boolean>,
        onDone: () -> Unit
    ) {
        viewModelScope.launch {
            try {
                songsRepository.updateSong(
                    songId,
                    Song(
                        id = songId,
                        titre = titre,
                        compositeur = compositeur,
                        partitionUrl = partitionUrl,
                        partitionType = partitionType,
                        youtubeUrl = youtubeUrl,
                        folderId = folderId,
                        appris = appris,
                        audioUrlsByPupitre = audioUrlsByPupitre,
                        audioFilesByPupitre = audioFilesByPupitre,
                        audioUrl = audioUrlsByPupitre["general"] ?: "",
                        audioIsFile = audioFilesByPupitre["general"] ?: false
                    )
                )
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de modifier le chant"
            }
        }
    }

    fun deleteSong(song: Song, onDone: () -> Unit) {
        viewModelScope.launch {
            try {
                if (song.partitionType != "link" && song.partitionUrl.isNotBlank()) {
                    storageRepository.deleteFile(song.partitionUrl)
                }
                if (song.audioIsFile && song.audioUrl.isNotBlank()) {
                    storageRepository.deleteFile(song.audioUrl)
                }
                song.audioUrlsByPupitre.forEach { (key, url) ->
                    if (song.audioFilesByPupitre[key] == true && url.isNotBlank()) {
                        storageRepository.deleteFile(url)
                    }
                }
                songsRepository.deleteSong(song.id)
                loadAll()
                onDone()
            } catch (e: Exception) {
                errorMessage.value = "Impossible de supprimer le chant"
            }
        }
    }
}
