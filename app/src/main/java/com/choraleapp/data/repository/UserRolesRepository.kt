package com.choraleapp.data.repository

import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class UserRolesRepository {
    private val db = FirebaseFirestore.getInstance()
    private val rolesRef = db.collection("userRoles")

    suspend fun setRole(uid: String, role: String) {
        rolesRef.document(uid).set(mapOf("role" to role)).await()
    }

    suspend fun deleteRole(uid: String) {
        rolesRef.document(uid).delete().await()
    }
}
