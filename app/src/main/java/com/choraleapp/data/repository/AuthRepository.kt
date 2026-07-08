package com.choraleapp.data.repository

import com.choraleapp.data.model.Member
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class AuthRepository {
    private val auth = FirebaseAuth.getInstance()
    private val db = FirebaseFirestore.getInstance()
    private val membersRef = db.collection("members")

    fun currentUserId(): String? = auth.currentUser?.uid

    suspend fun login(email: String, password: String) {
        auth.signInWithEmailAndPassword(email, password).await()
    }

    fun logout() {
        auth.signOut()
    }

    suspend fun registerWithInviteCode(
        inviteCode: String,
        email: String,
        password: String,
        birthdayDay: Int,
        birthdayMonth: Int
    ): Result<Unit> {
        return try {
            val authResult = auth.createUserWithEmailAndPassword(email, password).await()
            val uid = authResult.user?.uid
                ?: return Result.failure(Exception("Erreur lors de la création du compte"))

            val query = membersRef
                .whereEqualTo("inviteCode", inviteCode)
                .whereEqualTo("claimed", false)
                .get()
                .await()

            if (query.isEmpty) {
                authResult.user?.delete()?.await()
                auth.signOut()
                return Result.failure(Exception("Code d'invitation invalide ou déjà utilisé"))
            }

            val memberDoc = query.documents.first()
            val role = memberDoc.getString("role") ?: "membre"

            memberDoc.reference.update(
                mapOf(
                    "uid" to uid,
                    "claimed" to true,
                    "email" to email,
                    "birthdayDay" to birthdayDay,
                    "birthdayMonth" to birthdayMonth
                )
            ).await()

            db.collection("userRoles").document(uid).set(mapOf("role" to role)).await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getCurrentMember(): Member? {
        val uid = currentUserId() ?: return null
        val query = membersRef.whereEqualTo("uid", uid).get().await()
        val doc = query.documents.firstOrNull() ?: return null
        return doc.toObject(Member::class.java)?.copy(id = doc.id)
    }

    suspend fun updateFcmToken(token: String) {
        val uid = currentUserId() ?: return
        val query = membersRef.whereEqualTo("uid", uid).get().await()
        val doc = query.documents.firstOrNull() ?: return
        doc.reference.update("fcmToken", token).await()
    }

    suspend fun markAgendaSeen() {
        val uid = currentUserId() ?: return
        val query = membersRef.whereEqualTo("uid", uid).get().await()
        val doc = query.documents.firstOrNull() ?: return
        doc.reference.update("agendaLastSeenAt", com.google.firebase.Timestamp.now()).await()
    }

    suspend fun updateBirthday(day: Int, month: Int) {
        val uid = currentUserId() ?: return
        val query = membersRef.whereEqualTo("uid", uid).get().await()
        val doc = query.documents.firstOrNull() ?: return
        doc.reference.update(
            mapOf(
                "birthdayDay" to day,
                "birthdayMonth" to month
            )
        ).await()
    }

    suspend fun updatePhotoUrl(url: String) {
        val uid = currentUserId() ?: return
        val query = membersRef.whereEqualTo("uid", uid).get().await()
        val doc = query.documents.firstOrNull() ?: return
        doc.reference.update("photoUrl", url).await()
    }
}
