package com.choraleapp.data.repository

import com.choraleapp.data.model.Folder
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class FoldersRepository {
    private val db = FirebaseFirestore.getInstance()
    private val foldersRef = db.collection("folders")

    suspend fun getAllFolders(): List<Folder> {
        val snapshot = foldersRef.get().await()
        return snapshot.documents.mapNotNull { doc ->
            doc.toObject(Folder::class.java)?.copy(id = doc.id)
        }
    }

    suspend fun addFolder(nom: String): Folder {
        val ref = foldersRef.add(mapOf("nom" to nom)).await()
        return Folder(id = ref.id, nom = nom)
    }
}