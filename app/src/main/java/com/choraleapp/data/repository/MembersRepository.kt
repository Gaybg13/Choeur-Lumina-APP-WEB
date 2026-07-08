package com.choraleapp.data.repository

import com.choraleapp.data.model.Member
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class MembersRepository {
    private val db = FirebaseFirestore.getInstance()
    private val membersRef = db.collection("members")

    suspend fun getAllMembers(): List<Member> {
        val snapshot = membersRef.get().await()
        return snapshot.documents.mapNotNull { doc ->
            doc.toObject(Member::class.java)?.copy(id = doc.id)
        }
    }

    suspend fun createMember(prenom: String, nom: String, pupitre: String, role: String): Member {
        val inviteCode = generateInviteCode()
        val data = mapOf(
            "prenom" to prenom,
            "nom" to nom,
            "email" to "",
            "pupitre" to pupitre,
            "role" to role,
            "photoUrl" to "",
            "inviteCode" to inviteCode,
            "claimed" to false,
            "uid" to "",
            "fcmToken" to ""
        )
        val ref = membersRef.add(data).await()
        return Member(
            id = ref.id,
            prenom = prenom,
            nom = nom,
            pupitre = pupitre,
            role = role,
            inviteCode = inviteCode
        )
    }

    suspend fun updateMember(memberId: String, prenom: String, nom: String, pupitre: String, role: String) {
        membersRef.document(memberId).update(
            mapOf(
                "prenom" to prenom,
                "nom" to nom,
                "pupitre" to pupitre,
                "role" to role
            )
        ).await()
    }

    suspend fun regenerateInviteCode(memberId: String): String {
        val newCode = generateInviteCode()
        membersRef.document(memberId).update("inviteCode", newCode).await()
        return newCode
    }

    suspend fun deleteMember(memberId: String) {
        membersRef.document(memberId).delete().await()
    }

    private fun generateInviteCode(): String {
        val chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
        return (1..8).map { chars[kotlin.random.Random.nextInt(chars.length)] }.joinToString("")
    }
}
