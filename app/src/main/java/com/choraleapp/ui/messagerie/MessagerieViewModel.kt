package com.choraleapp.ui.messagerie

import android.net.Uri
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.choraleapp.data.model.DirectMessage
import com.choraleapp.data.model.GroupMessage
import com.choraleapp.data.model.Member
import com.choraleapp.data.repository.AuthRepository
import com.choraleapp.data.repository.MembersRepository
import com.choraleapp.data.repository.MessagingRepository
import com.google.firebase.Timestamp
import com.google.firebase.firestore.ListenerRegistration
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class MessagerieViewModel : ViewModel() {
    private val repository = MessagingRepository()
    private val authRepository = AuthRepository()
    private val membersRepository = MembersRepository()

    val currentUserId: String? get() = authRepository.currentUserId()

    val groupMessages = mutableStateOf<List<GroupMessage>>(emptyList())
    val members = mutableStateOf<List<Member>>(emptyList())
    val directMessages = mutableStateOf<List<DirectMessage>>(emptyList())
    val isLoadingMembers = mutableStateOf(true)
    val myName = mutableStateOf("")
    val groupUnreadCount = mutableStateOf(0)
    val privateUnreadCount = mutableStateOf(0)
    val directTyping = mutableStateOf(false)
    val groupTypingNames = mutableStateOf<List<String>>(emptyList())
    val otherOnline = mutableStateOf(false)
    val otherLastSeen = mutableStateOf<Timestamp?>(null)
    val isSendingVoice = mutableStateOf(false)
    val isSendingImage = mutableStateOf(false)

    // Brouillons conservés même lorsque l'utilisateur change d'onglet ou d'écran
    val groupDraft = mutableStateOf("")
    val directDrafts = mutableStateMapOf<String, String>()

    fun updateGroupDraft(text: String) {
        groupDraft.value = text
        onGroupTextChanged(text)
    }

    fun clearGroupDraft() {
        groupDraft.value = ""
    }

    fun updateDirectDraft(otherUid: String, text: String) {
        directDrafts[otherUid] = text
        onDirectTextChanged(otherUid, text)
    }

    fun clearDirectDraft(otherUid: String) {
        directDrafts.remove(otherUid)
    }

    private var groupListener: ListenerRegistration? = null
    private var directListener: ListenerRegistration? = null
    private var privateUnreadListener: ListenerRegistration? = null
    private var directTypingListener: ListenerRegistration? = null
    private var groupTypingListener: ListenerRegistration? = null
    private var onlineListener: ListenerRegistration? = null
    private var directTypingJob: Job? = null
    private var groupTypingJob: Job? = null
    private var activeOtherUid: String? = null

    init {
        val uid = currentUserId
        groupListener = repository.listenGroupMessages { messages ->
            groupMessages.value = messages
            if (uid != null) {
                groupUnreadCount.value = messages.count { it.authorUid != uid && uid !in it.readBy && uid !in it.hiddenFor }
            }
        }
        if (uid != null) {
            privateUnreadListener = repository.listenPrivateUnreadCount(uid) { privateUnreadCount.value = it }
            groupTypingListener = repository.listenGroupTyping(uid) { groupTypingNames.value = it }
            viewModelScope.launch { try { repository.setOnline(uid, true) } catch (_: Exception) { } }
        }
        loadMembers()
        loadMyName()
    }

    private fun loadMyName() {
        viewModelScope.launch {
            try {
                myName.value = authRepository.getCurrentMember()?.prenom ?: "Choriste"
            } catch (_: Exception) {
                myName.value = "Choriste"
            }
        }
    }

    private fun loadMembers() {
        viewModelScope.launch {
            isLoadingMembers.value = true
            try {
                val uid = currentUserId
                members.value = membersRepository.getAllMembers().filter { it.uid.isNotBlank() && it.uid != uid }
            } catch (_: Exception) {
                members.value = emptyList()
            } finally {
                isLoadingMembers.value = false
            }
        }
    }

    fun markGroupRead() {
        val uid = currentUserId ?: return
        val unreadIds = groupMessages.value.filter { it.authorUid != uid && uid !in it.readBy && uid !in it.hiddenFor }.map { it.id }
        if (unreadIds.isEmpty()) return
        viewModelScope.launch { repository.markGroupRead(uid, unreadIds) }
    }

    fun sendGroupMessage(texte: String, replyTo: GroupMessage? = null) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            repository.sendGroupMessage(
                uid,
                myName.value.ifBlank { "Choriste" },
                texte = texte,
                replyToId = replyTo?.id.orEmpty(),
                replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                replyToAuthor = replyTo?.authorName.orEmpty()
            )
            repository.setGroupTyping(uid, myName.value, false)
        }
    }

    fun sendGroupSticker(sticker: String, replyTo: GroupMessage? = null) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            repository.sendGroupMessage(
                uid,
                myName.value.ifBlank { "Choriste" },
                texte = sticker,
                type = "sticker",
                replyToId = replyTo?.id.orEmpty(),
                replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                replyToAuthor = replyTo?.authorName.orEmpty()
            )
        }
    }

    fun sendGroupVoice(uri: Uri, durationMs: Long, replyTo: GroupMessage? = null) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            isSendingVoice.value = true
            try {
                val url = repository.uploadVoiceNote(uid, uri)
                repository.sendGroupMessage(
                    uid,
                    myName.value.ifBlank { "Choriste" },
                    type = "voice",
                    mediaUrl = url,
                    durationMs = durationMs,
                    replyToId = replyTo?.id.orEmpty(),
                    replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                    replyToAuthor = replyTo?.authorName.orEmpty()
                )
            } finally {
                isSendingVoice.value = false
            }
        }
    }

    fun sendGroupImage(uri: Uri, replyTo: GroupMessage? = null) {
        val uid = currentUserId ?: return
        viewModelScope.launch {
            isSendingImage.value = true
            try {
                val url = repository.uploadChatImage(uid, uri)
                repository.sendGroupMessage(
                    uid,
                    myName.value.ifBlank { "Choriste" },
                    type = "image",
                    mediaUrl = url,
                    replyToId = replyTo?.id.orEmpty(),
                    replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                    replyToAuthor = replyTo?.authorName.orEmpty()
                )
            } finally {
                isSendingImage.value = false
            }
        }
    }

    fun editGroupMessage(messageId: String, text: String) {
        viewModelScope.launch { repository.editGroupMessage(messageId, text) }
    }

    fun deleteGroupMessageForEveryone(messageId: String) {
        viewModelScope.launch { repository.deleteGroupMessageForEveryone(messageId) }
    }

    fun hideGroupMessageForMe(messageId: String) {
        val uid = currentUserId ?: return
        viewModelScope.launch { repository.hideGroupMessageForUser(messageId, uid) }
    }

    fun hideGroupMessagesForMe(messageIds: Collection<String>) {
        val uid = currentUserId ?: return
        viewModelScope.launch { repository.hideGroupMessagesForUser(messageIds, uid) }
    }

    fun reactToGroupMessage(messageId: String, emoji: String?) {
        val uid = currentUserId ?: return
        viewModelScope.launch { repository.reactToGroupMessage(messageId, uid, emoji) }
    }

    fun onGroupTextChanged(text: String) {
        val uid = currentUserId ?: return
        groupTypingJob?.cancel()
        viewModelScope.launch { repository.setGroupTyping(uid, myName.value, text.isNotBlank()) }
        if (text.isNotBlank()) {
            groupTypingJob = viewModelScope.launch {
                delay(1800)
                repository.setGroupTyping(uid, myName.value, false)
            }
        }
    }

    fun openConversation(otherUid: String) {
        closeConversation()
        val myUid = currentUserId ?: return
        activeOtherUid = otherUid
        directListener = repository.listenDirectMessages(myUid, otherUid) { messages ->
            directMessages.value = messages
            val incoming = messages.filter { it.authorUid != myUid && myUid !in it.hiddenFor }
            val undelivered = incoming.filter { myUid !in it.deliveredBy }.map { it.id }
            if (undelivered.isNotEmpty()) {
                viewModelScope.launch { repository.markDirectDelivered(myUid, otherUid, undelivered) }
            }
            val unread = incoming.filter { myUid !in it.readBy }.map { it.id }
            if (unread.isNotEmpty()) {
                viewModelScope.launch { repository.markDirectRead(myUid, otherUid, unread) }
            }
        }
        directTypingListener = repository.listenDirectTyping(myUid, otherUid) { directTyping.value = it }
        onlineListener = repository.listenOnline(otherUid) { online, lastSeen ->
            otherOnline.value = online
            otherLastSeen.value = lastSeen
        }
    }

    fun closeConversation() {
        val myUid = currentUserId
        val otherUid = activeOtherUid
        if (myUid != null && otherUid != null) {
            viewModelScope.launch { repository.setDirectTyping(myUid, otherUid, false) }
        }
        directListener?.remove(); directListener = null
        directTypingListener?.remove(); directTypingListener = null
        onlineListener?.remove(); onlineListener = null
        activeOtherUid = null
        directMessages.value = emptyList()
        directTyping.value = false
        otherOnline.value = false
        otherLastSeen.value = null
    }

    fun sendDirectMessage(otherUid: String, texte: String, replyTo: DirectMessage? = null, otherName: String = "") {
        val myUid = currentUserId ?: return
        viewModelScope.launch {
            repository.sendDirectMessage(
                myUid,
                otherUid,
                texte = texte,
                replyToId = replyTo?.id.orEmpty(),
                replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                replyToAuthor = if (replyTo == null) "" else if (replyTo.authorUid == myUid) "Vous" else otherName
            )
            repository.setDirectTyping(myUid, otherUid, false)
        }
    }

    fun sendDirectSticker(otherUid: String, sticker: String, replyTo: DirectMessage? = null, otherName: String = "") {
        val myUid = currentUserId ?: return
        viewModelScope.launch {
            repository.sendDirectMessage(
                myUid,
                otherUid,
                texte = sticker,
                type = "sticker",
                replyToId = replyTo?.id.orEmpty(),
                replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                replyToAuthor = if (replyTo == null) "" else if (replyTo.authorUid == myUid) "Vous" else otherName
            )
        }
    }

    fun sendDirectVoice(otherUid: String, uri: Uri, durationMs: Long, replyTo: DirectMessage? = null, otherName: String = "") {
        val myUid = currentUserId ?: return
        viewModelScope.launch {
            isSendingVoice.value = true
            try {
                val url = repository.uploadVoiceNote(myUid, uri)
                repository.sendDirectMessage(
                    myUid,
                    otherUid,
                    type = "voice",
                    mediaUrl = url,
                    durationMs = durationMs,
                    replyToId = replyTo?.id.orEmpty(),
                    replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                    replyToAuthor = if (replyTo == null) "" else if (replyTo.authorUid == myUid) "Vous" else otherName
                )
            } finally {
                isSendingVoice.value = false
            }
        }
    }

    fun sendDirectImage(otherUid: String, uri: Uri, replyTo: DirectMessage? = null, otherName: String = "") {
        val myUid = currentUserId ?: return
        viewModelScope.launch {
            isSendingImage.value = true
            try {
                val url = repository.uploadChatImage(myUid, uri)
                repository.sendDirectMessage(
                    myUid,
                    otherUid,
                    type = "image",
                    mediaUrl = url,
                    replyToId = replyTo?.id.orEmpty(),
                    replyToText = replyPreview(replyTo?.type, replyTo?.texte),
                    replyToAuthor = if (replyTo == null) "" else if (replyTo.authorUid == myUid) "Vous" else otherName
                )
            } finally {
                isSendingImage.value = false
            }
        }
    }

    fun editDirectMessage(otherUid: String, messageId: String, text: String) {
        val myUid = currentUserId ?: return
        viewModelScope.launch { repository.editDirectMessage(myUid, otherUid, messageId, text) }
    }

    fun deleteDirectMessageForEveryone(otherUid: String, messageId: String) {
        val myUid = currentUserId ?: return
        viewModelScope.launch { repository.deleteDirectMessageForEveryone(myUid, otherUid, messageId) }
    }

    fun hideDirectMessageForMe(otherUid: String, messageId: String) {
        val myUid = currentUserId ?: return
        viewModelScope.launch { repository.hideDirectMessageForUser(myUid, otherUid, messageId) }
    }

    fun hideDirectMessagesForMe(otherUid: String, messageIds: Collection<String>) {
        val myUid = currentUserId ?: return
        viewModelScope.launch { repository.hideDirectMessagesForUser(myUid, otherUid, messageIds) }
    }

    fun reactToDirectMessage(otherUid: String, messageId: String, emoji: String?) {
        val myUid = currentUserId ?: return
        viewModelScope.launch { repository.reactToDirectMessage(myUid, otherUid, messageId, emoji) }
    }

    fun onDirectTextChanged(otherUid: String, text: String) {
        val myUid = currentUserId ?: return
        directTypingJob?.cancel()
        viewModelScope.launch { repository.setDirectTyping(myUid, otherUid, text.isNotBlank()) }
        if (text.isNotBlank()) {
            directTypingJob = viewModelScope.launch {
                delay(1800)
                repository.setDirectTyping(myUid, otherUid, false)
            }
        }
    }

    override fun onCleared() {
        val uid = currentUserId
        if (uid != null) viewModelScope.launch { repository.setOnline(uid, false) }
        groupListener?.remove()
        directListener?.remove()
        privateUnreadListener?.remove()
        directTypingListener?.remove()
        groupTypingListener?.remove()
        onlineListener?.remove()
        super.onCleared()
    }

    private fun replyPreview(type: String?, text: String?): String = when (type) {
        "voice" -> "🎤 Note vocale"
        "sticker" -> text.orEmpty()
        "image" -> "📷 Image"
        null -> ""
        else -> text.orEmpty().take(100)
    }
}
