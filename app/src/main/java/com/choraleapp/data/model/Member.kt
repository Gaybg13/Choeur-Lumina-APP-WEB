package com.choraleapp.data.model

import com.google.firebase.Timestamp

data class Member(
    val id: String = "",
    val prenom: String = "",
    val nom: String = "",
    val email: String = "",
    val pupitre: String = "",
    val role: String = "membre",
    val photoUrl: String = "",
    val inviteCode: String = "",
    val claimed: Boolean = false,
    val uid: String = "",
    val fcmToken: String = "",
    val birthdayDay: Int = 0,
    val birthdayMonth: Int = 0,
    val agendaLastSeenAt: Timestamp? = null
)
