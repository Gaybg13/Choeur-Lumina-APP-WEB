package com.choraleapp.data.repository

import android.net.Uri
import com.choraleapp.data.model.DirectMessage
import com.choraleapp.data.model.GroupMessage
import com.google.firebase.Timestamp
import com.google.firebase.firestore.FieldValue
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ListenerRegistration
import com.google.firebase.firestore.Query
import com.google.firebase.firestore.SetOptions
import com.google.firebase.storage.FirebaseStorage
import kotlinx.coroutines.tasks.await

class MessagingRepository {
    private val db = FirebaseFirestore.getInstance()
    private val storage = FirebaseStorage.getInstance()
    private val groupMessagesRef = db.collection("groupChat")
    private val conversationsRef = db.collection("conversations")
    private val statusRef = db.collection("userStatus")
    private val groupTypingRef = db.collection("groupTyping")

    fun listenGroupMessages(onUpdate: (List<GroupMessage>) -> Unit): ListenerRegistration {
        return groupMessagesRef.orderBy("timestamp", Query.Direction.ASCENDING)
            .addSnapshotListener { snapshot, _ ->
                if (snapshot != null) {
                    onUpdate(snapshot.documents.mapNotNull { doc ->
                        doc.toObject(GroupMessage::class.java)?.copy(id = doc.id)
                    })
                }
            }
    }

    suspend fun sendGroupMessage(
        authorUid: String,
        authorName: String,
        texte: String = "",
        type: String = "text",
        mediaUrl: String = "",
        durationMs: Long = 0L,
        replyToId: String = "",
        replyToText: String = "",
        replyToAuthor: String = ""
    ) {
        groupMessagesRef.add(
            mapOf(
                "authorUid" to authorUid,
                "authorName" to authorName,
                "texte" to texte,
                "type" to type,
                "mediaUrl" to mediaUrl,
                "durationMs" to durationMs,
                "timestamp" to Timestamp.now(),
                "editedAt" to null,
                "deleted" to false,
                "readBy" to listOf(authorUid),
                "hiddenFor" to emptyList<String>(),
                "reactions" to emptyMap<String, String>(),
                "replyToId" to replyToId,
                "replyToText" to replyToText,
                "replyToAuthor" to replyToAuthor
            )
        ).await()
    }


    suspend fun sendEventCancellationSystemMessage(
        authorUid: String,
        eventTitle: String,
        eventDateLabel: String
    ) {
        groupMessagesRef.add(
            mapOf(
                "authorUid" to authorUid,
                "authorName" to "Chœur Lumina",
                "texte" to "ÉVÉNEMENT ANNULÉ : $eventTitle${if (eventDateLabel.isNotBlank()) " · $eventDateLabel" else ""}",
                "type" to "system_cancelled",
                "mediaUrl" to "",
                "durationMs" to 0L,
                "timestamp" to Timestamp.now(),
                "editedAt" to null,
                "deleted" to false,
                "readBy" to listOf(authorUid),
                "hiddenFor" to emptyList<String>(),
                "reactions" to emptyMap<String, String>(),
                "replyToId" to "",
                "replyToText" to "",
                "replyToAuthor" to ""
            )
        ).await()
    }

    suspend fun editGroupMessage(messageId: String, newText: String) {
        groupMessagesRef.document(messageId).update(
            mapOf("texte" to newText, "editedAt" to Timestamp.now())
        ).await()
    }

    suspend fun deleteGroupMessageForEveryone(messageId: String) {
        groupMessagesRef.document(messageId).update(
            mapOf(
                "texte" to "",
                "mediaUrl" to "",
                "deleted" to true,
                "editedAt" to Timestamp.now()
            )
        ).await()
    }

    suspend fun hideGroupMessageForUser(messageId: String, uid: String) {
        groupMessagesRef.document(messageId).update("hiddenFor", FieldValue.arrayUnion(uid)).await()
    }

    suspend fun hideGroupMessagesForUser(messageIds: Collection<String>, uid: String) {
        if (messageIds.isEmpty()) return
        val batch = db.batch()
        messageIds.forEach { id ->
            batch.update(groupMessagesRef.document(id), "hiddenFor", FieldValue.arrayUnion(uid))
        }
        batch.commit().await()
    }

    suspend fun reactToGroupMessage(messageId: String, uid: String, emoji: String?) {
        val field = "reactions.$uid"
        if (emoji == null) {
            groupMessagesRef.document(messageId).update(field, FieldValue.delete()).await()
        } else {
            groupMessagesRef.document(messageId).update(field, emoji).await()
        }
    }

    suspend fun markGroupRead(uid: String, messageIds: List<String>) {
        if (messageIds.isEmpty()) return
        val batch = db.batch()
        messageIds.forEach { id ->
            batch.update(groupMessagesRef.document(id), "readBy", FieldValue.arrayUnion(uid))
        }
        batch.commit().await()
    }

    private fun conversationId(uid1: String, uid2: String): String =
        listOf(uid1, uid2).sorted().joinToString("_")

    fun listenDirectMessages(
        myUid: String,
        otherUid: String,
        onUpdate: (List<DirectMessage>) -> Unit
    ): ListenerRegistration {
        val convId = conversationId(myUid, otherUid)
        return conversationsRef.document(convId).collection("messages")
            .orderBy("timestamp", Query.Direction.ASCENDING)
            .addSnapshotListener { snapshot, _ ->
                if (snapshot != null) {
                    onUpdate(snapshot.documents.mapNotNull { doc ->
                        doc.toObject(DirectMessage::class.java)?.copy(id = doc.id)
                    })
                }
            }
    }

    suspend fun sendDirectMessage(
        myUid: String,
        otherUid: String,
        texte: String = "",
        type: String = "text",
        mediaUrl: String = "",
        durationMs: Long = 0L,
        replyToId: String = "",
        replyToText: String = "",
        replyToAuthor: String = ""
    ) {
        val convId = conversationId(myUid, otherUid)
        val convRef = conversationsRef.document(convId)
        val preview = when (type) {
            "voice" -> "🎤 Note vocale"
            "sticker" -> "✨ Sticker"
            "image" -> "📷 Image"
            else -> texte
        }
        val otherOnline = statusRef.document(otherUid).get().await().getBoolean("online") == true
        val deliveredBy = if (otherOnline) listOf(myUid, otherUid) else listOf(myUid)

        convRef.set(
            mapOf(
                "participants" to listOf(myUid, otherUid),
                "lastMessage" to preview,
                "lastTimestamp" to Timestamp.now()
            ),
            SetOptions.merge()
        ).await()
        convRef.update(
            "unreadCounts.$otherUid", FieldValue.increment(1),
            "unreadCounts.$myUid", 0
        ).await()
        convRef.collection("messages").add(
            mapOf(
                "authorUid" to myUid,
                "texte" to texte,
                "type" to type,
                "mediaUrl" to mediaUrl,
                "durationMs" to durationMs,
                "timestamp" to Timestamp.now(),
                "editedAt" to null,
                "deleted" to false,
                "readBy" to listOf(myUid),
                "deliveredBy" to deliveredBy,
                "hiddenFor" to emptyList<String>(),
                "reactions" to emptyMap<String, String>(),
                "replyToId" to replyToId,
                "replyToText" to replyToText,
                "replyToAuthor" to replyToAuthor
            )
        ).await()
    }

    suspend fun markDirectDelivered(myUid: String, otherUid: String, messageIds: List<String>) {
        if (messageIds.isEmpty()) return
        val convId = conversationId(myUid, otherUid)
        val messagesRef = conversationsRef.document(convId).collection("messages")
        val batch = db.batch()
        messageIds.forEach { id ->
            batch.update(messagesRef.document(id), "deliveredBy", FieldValue.arrayUnion(myUid))
        }
        batch.commit().await()
    }

    suspend fun editDirectMessage(myUid: String, otherUid: String, messageId: String, newText: String) {
        val convId = conversationId(myUid, otherUid)
        conversationsRef.document(convId).collection("messages").document(messageId)
            .update(mapOf("texte" to newText, "editedAt" to Timestamp.now())).await()
    }

    suspend fun deleteDirectMessageForEveryone(myUid: String, otherUid: String, messageId: String) {
        val convId = conversationId(myUid, otherUid)
        conversationsRef.document(convId).collection("messages").document(messageId)
            .update(mapOf("texte" to "", "mediaUrl" to "", "deleted" to true, "editedAt" to Timestamp.now())).await()
    }

    suspend fun hideDirectMessageForUser(myUid: String, otherUid: String, messageId: String) {
        val convId = conversationId(myUid, otherUid)
        conversationsRef.document(convId).collection("messages").document(messageId)
            .update("hiddenFor", FieldValue.arrayUnion(myUid)).await()
    }

    suspend fun hideDirectMessagesForUser(myUid: String, otherUid: String, messageIds: Collection<String>) {
        if (messageIds.isEmpty()) return
        val convId = conversationId(myUid, otherUid)
        val messagesRef = conversationsRef.document(convId).collection("messages")
        val batch = db.batch()
        messageIds.forEach { id ->
            batch.update(messagesRef.document(id), "hiddenFor", FieldValue.arrayUnion(myUid))
        }
        batch.commit().await()
    }

    suspend fun reactToDirectMessage(myUid: String, otherUid: String, messageId: String, emoji: String?) {
        val convId = conversationId(myUid, otherUid)
        val field = "reactions.$myUid"
        val ref = conversationsRef.document(convId).collection("messages").document(messageId)
        if (emoji == null) ref.update(field, FieldValue.delete()).await() else ref.update(field, emoji).await()
    }

    suspend fun markDirectRead(myUid: String, otherUid: String, messageIds: List<String>) {
        val convId = conversationId(myUid, otherUid)
        val convRef = conversationsRef.document(convId)
        if (messageIds.isNotEmpty()) {
            val batch = db.batch()
            messageIds.forEach { id ->
                batch.update(convRef.collection("messages").document(id), "readBy", FieldValue.arrayUnion(myUid))
                batch.update(convRef.collection("messages").document(id), "deliveredBy", FieldValue.arrayUnion(myUid))
            }
            batch.commit().await()
        }
        convRef.update("unreadCounts.$myUid", 0).await()
    }

    fun listenPrivateUnreadCount(uid: String, onUpdate: (Int) -> Unit): ListenerRegistration {
        return conversationsRef.whereArrayContains("participants", uid)
            .addSnapshotListener { snapshot, _ ->
                val total = snapshot?.documents?.sumOf { doc ->
                    val map = doc.get("unreadCounts") as? Map<*, *>
                    (map?.get(uid) as? Number)?.toInt() ?: 0
                } ?: 0
                onUpdate(total)
            }
    }

    suspend fun setDirectTyping(myUid: String, otherUid: String, isTyping: Boolean) {
        val convId = conversationId(myUid, otherUid)
        conversationsRef.document(convId).collection("typing").document(myUid)
            .set(mapOf("isTyping" to isTyping, "updatedAt" to Timestamp.now()), SetOptions.merge()).await()
    }

    fun listenDirectTyping(myUid: String, otherUid: String, onUpdate: (Boolean) -> Unit): ListenerRegistration {
        val convId = conversationId(myUid, otherUid)
        return conversationsRef.document(convId).collection("typing").document(otherUid)
            .addSnapshotListener { doc, _ ->
                val isTyping = doc?.getBoolean("isTyping") == true
                val updated = doc?.getTimestamp("updatedAt")?.toDate()?.time ?: 0L
                onUpdate(isTyping && System.currentTimeMillis() - updated < 5_000)
            }
    }

    suspend fun setGroupTyping(uid: String, name: String, isTyping: Boolean) {
        groupTypingRef.document(uid).set(
            mapOf("name" to name, "isTyping" to isTyping, "updatedAt" to Timestamp.now()),
            SetOptions.merge()
        ).await()
    }

    fun listenGroupTyping(currentUid: String, onUpdate: (List<String>) -> Unit): ListenerRegistration {
        return groupTypingRef.addSnapshotListener { snapshot, _ ->
            val now = System.currentTimeMillis()
            val names = snapshot?.documents?.mapNotNull { doc ->
                if (doc.id == currentUid) return@mapNotNull null
                val typing = doc.getBoolean("isTyping") == true
                val updated = doc.getTimestamp("updatedAt")?.toDate()?.time ?: 0L
                val name = doc.getString("name").orEmpty()
                name.takeIf { typing && name.isNotBlank() && now - updated < 5_000 }
            }.orEmpty()
            onUpdate(names)
        }
    }

    suspend fun setOnline(uid: String, online: Boolean) {
        statusRef.document(uid).set(
            mapOf("online" to online, "lastSeen" to Timestamp.now()),
            SetOptions.merge()
        ).await()
    }

    fun listenOnline(uid: String, onUpdate: (Boolean, Timestamp?) -> Unit): ListenerRegistration {
        return statusRef.document(uid).addSnapshotListener { doc, _ ->
            onUpdate(doc?.getBoolean("online") == true, doc?.getTimestamp("lastSeen"))
        }
    }

    suspend fun uploadVoiceNote(ownerUid: String, fileUri: Uri): String {
        val ref = storage.reference.child("voice_notes/$ownerUid/${System.currentTimeMillis()}.m4a")
        ref.putFile(fileUri).await()
        return ref.downloadUrl.await().toString()
    }

    suspend fun uploadChatImage(ownerUid: String, fileUri: Uri): String {
        val ref = storage.reference.child("chat_images/$ownerUid/${System.currentTimeMillis()}.jpg")
        ref.putFile(fileUri).await()
        return ref.downloadUrl.await().toString()
    }
}
