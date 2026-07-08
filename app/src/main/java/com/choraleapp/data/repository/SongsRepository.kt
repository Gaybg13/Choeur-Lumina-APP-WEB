package com.choraleapp.data.repository

import com.choraleapp.data.model.Song
import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class SongsRepository {
    private val db = FirebaseFirestore.getInstance()
    private val songsRef = db.collection("songs")

    suspend fun getAllSongs(): List<Song> {
        val snapshot = songsRef.get().await()
        return snapshot.documents.mapNotNull { doc ->
            doc.toObject(Song::class.java)?.copy(id = doc.id)
        }
    }

    suspend fun addSong(song: Song) {
        songsRef.add(
            mapOf(
                "titre" to song.titre,
                "compositeur" to song.compositeur,
                "partitionUrl" to song.partitionUrl,
                "partitionType" to song.partitionType,
                "audioUrl" to song.audioUrl,
                "audioIsFile" to song.audioIsFile,
                "youtubeUrl" to song.youtubeUrl,
                "folderId" to song.folderId,
                "appris" to song.appris,
                "createdAt" to Timestamp.now(),
                "audioUrlsByPupitre" to song.audioUrlsByPupitre,
                "audioFilesByPupitre" to song.audioFilesByPupitre
            )
        ).await()
    }

    suspend fun updateSong(songId: String, song: Song) {
        songsRef.document(songId).update(
            mapOf(
                "titre" to song.titre,
                "compositeur" to song.compositeur,
                "partitionUrl" to song.partitionUrl,
                "partitionType" to song.partitionType,
                "audioUrl" to song.audioUrl,
                "audioIsFile" to song.audioIsFile,
                "youtubeUrl" to song.youtubeUrl,
                "folderId" to song.folderId,
                "appris" to song.appris,
                "audioUrlsByPupitre" to song.audioUrlsByPupitre,
                "audioFilesByPupitre" to song.audioFilesByPupitre
            )
        ).await()
    }

    suspend fun deleteSong(songId: String) {
        songsRef.document(songId).delete().await()
    }
}
