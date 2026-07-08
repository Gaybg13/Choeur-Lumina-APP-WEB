package com.choraleapp.data.repository

import android.net.Uri
import com.google.firebase.storage.FirebaseStorage
import kotlinx.coroutines.tasks.await

class StorageRepository {
    private val storage = FirebaseStorage.getInstance()

    suspend fun uploadProfilePhoto(uid: String, fileUri: Uri): String {
        val ref = storage.reference.child("profile_photos/$uid")
        ref.putFile(fileUri).await()
        return ref.downloadUrl.await().toString()
    }

    suspend fun uploadSongFile(storagePathId: String, fileName: String, fileUri: Uri): String {
        val ref = storage.reference.child("songs/$storagePathId/$fileName")
        ref.putFile(fileUri).await()
        return ref.downloadUrl.await().toString()
    }

    suspend fun downloadToFile(url: String, destination: java.io.File) {
        val ref = storage.getReferenceFromUrl(url)
        ref.getFile(destination).await()
    }

    suspend fun deleteFile(url: String) {
        try {
            storage.getReferenceFromUrl(url).delete().await()
        } catch (e: Exception) {
            // Fichier déjà supprimé ou lien externe : on ignore l'erreur
        }
    }
}
