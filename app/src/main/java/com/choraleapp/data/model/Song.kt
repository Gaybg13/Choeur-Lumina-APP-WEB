package com.choraleapp.data.model

import com.google.firebase.Timestamp

data class Song(
    val id: String = "",
    val titre: String = "",
    val compositeur: String = "",
    val partitionUrl: String = "",
    val partitionType: String = "link",
    val audioUrl: String = "",
    val audioIsFile: Boolean = false,
    val youtubeUrl: String = "",
    val folderId: String = "",
    val appris: Boolean = false,
    val createdAt: Timestamp? = null,
    val audioUrlsByPupitre: Map<String, String> = emptyMap(),
    val audioFilesByPupitre: Map<String, Boolean> = emptyMap()
)
