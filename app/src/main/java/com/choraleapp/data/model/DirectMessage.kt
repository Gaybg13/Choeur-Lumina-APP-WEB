package com.choraleapp.data.model

import com.google.firebase.Timestamp

data class DirectMessage(
    val id: String = "",
    val authorUid: String = "",
    val texte: String = "",
    val type: String = "text",
    val mediaUrl: String = "",
    val durationMs: Long = 0L,
    val timestamp: Timestamp? = null,
    val editedAt: Timestamp? = null,
    val deleted: Boolean = false,
    val readBy: List<String> = emptyList(),
    val deliveredBy: List<String> = emptyList(),
    val hiddenFor: List<String> = emptyList(),
    val reactions: Map<String, String> = emptyMap(),
    val replyToId: String = "",
    val replyToText: String = "",
    val replyToAuthor: String = ""
)
