package com.choraleapp.data.repository

import com.choraleapp.data.model.Event
import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ListenerRegistration
import kotlinx.coroutines.tasks.await

class EventsRepository {
    private val db = FirebaseFirestore.getInstance()
    private val eventsRef = db.collection("events")

    suspend fun getAllEvents(): List<Event> {
        val snapshot = eventsRef.get().await()
        return snapshot.documents.mapNotNull { doc ->
            doc.toObject(Event::class.java)?.copy(id = doc.id)
        }
    }


    suspend fun getEventsFrom(cutoff: Timestamp): List<Event> {
        val snapshot = eventsRef
            .whereGreaterThanOrEqualTo("date", cutoff)
            .orderBy("date")
            .get()
            .await()
        return snapshot.documents.mapNotNull { doc ->
            doc.toObject(Event::class.java)?.copy(id = doc.id)
        }
    }

    fun listenEventsFrom(cutoff: Timestamp, onUpdate: (List<Event>) -> Unit): ListenerRegistration {
        return eventsRef
            .whereGreaterThanOrEqualTo("date", cutoff)
            .orderBy("date")
            .addSnapshotListener { snapshot, _ ->
                if (snapshot != null) {
                    onUpdate(snapshot.documents.mapNotNull { doc ->
                        doc.toObject(Event::class.java)?.copy(id = doc.id)
                    })
                }
            }
    }

    fun listenEvents(onUpdate: (List<Event>) -> Unit): ListenerRegistration {
        return eventsRef.addSnapshotListener { snapshot, error ->
            if (error != null) return@addSnapshotListener
            if (snapshot != null) {
                onUpdate(snapshot.documents.mapNotNull { doc ->
                    doc.toObject(Event::class.java)?.copy(id = doc.id)
                })
            }
        }
    }

    suspend fun addEvent(event: Event, createdByUid: String) {
        eventsRef.add(
            mapOf(
                "titre" to event.titre,
                "type" to event.type,
                "date" to event.date,
                "lieu" to event.lieu,
                "description" to event.description,
                "reponses" to emptyMap<String, String>(),
                "programme" to emptyList<String>(),
                "compteRendu" to "",
                "createdAt" to Timestamp.now(),
                "createdBy" to createdByUid,
                "cancelled" to false,
                "cancelledAt" to null
            )
        ).await()
    }

    suspend fun setReponse(eventId: String, uid: String, reponse: String) {
        eventsRef.document(eventId).update("reponses.$uid", reponse).await()
    }

    suspend fun setProgramme(eventId: String, songIds: List<String>) {
        eventsRef.document(eventId).update("programme", songIds).await()
    }

    suspend fun setCompteRendu(eventId: String, texte: String) {
        eventsRef.document(eventId).update("compteRendu", texte).await()
    }

    suspend fun updateEvent(
        eventId: String,
        titre: String,
        type: String,
        date: Timestamp?,
        lieu: String,
        description: String
    ) {
        eventsRef.document(eventId).update(
            mapOf(
                "titre" to titre,
                "type" to type,
                "date" to date,
                "lieu" to lieu,
                "description" to description
            )
        ).await()
    }

    suspend fun cancelEvent(eventId: String, cancelledByUid: String) {
        eventsRef.document(eventId).update(
            mapOf(
                "cancelled" to true,
                "cancelledAt" to Timestamp.now(),
                "cancelledBy" to cancelledByUid
            )
        ).await()
    }

    suspend fun deleteEvent(eventId: String) {
        eventsRef.document(eventId).delete().await()
    }

    /**
     * Supprime définitivement les événements antérieurs au début de la journée.
     * Les réponses de présence sont stockées dans le document de l'événement :
     * elles sont donc supprimées en même temps que lui.
     */
    suspend fun deleteExpiredEvents(cutoff: Timestamp) {
        while (true) {
            val snapshot = eventsRef
                .whereLessThan("date", cutoff)
                .limit(450)
                .get()
                .await()

            if (snapshot.isEmpty) break

            val batch = db.batch()
            snapshot.documents.forEach { batch.delete(it.reference) }
            batch.commit().await()

            if (snapshot.size() < 450) break
        }
    }
}
