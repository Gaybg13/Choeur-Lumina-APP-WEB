package com.choraleapp.data.model

import com.google.firebase.Timestamp

data class Event(
    val id: String = "",
    val titre: String = "",
    val type: String = "repetition",
    val date: Timestamp? = null,
    val lieu: String = "",
    val description: String = "",
    val reponses: Map<String, String> = emptyMap(),
    val programme: List<String> = emptyList(),
    val compteRendu: String = "",
    val createdAt: Timestamp? = null,
    val createdBy: String = "",
    val cancelled: Boolean = false,
    val cancelledAt: Timestamp? = null,
    val cancelledBy: String = "",
    val synthetic: Boolean = false
)
