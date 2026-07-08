package com.choraleapp.ui.messagerie

import android.Manifest
import android.app.NotificationManager
import android.content.pm.PackageManager
import android.media.MediaPlayer
import android.media.MediaRecorder
import android.net.Uri
import android.os.Build
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.gestures.detectHorizontalDragGestures
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.AttachFile
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Groups
import androidx.compose.material.icons.filled.Image
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.Pause
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Reply
import androidx.compose.material.icons.filled.Send
import androidx.compose.material.icons.filled.Stop
import androidx.compose.material.icons.filled.TagFaces
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
import androidx.compose.material3.Surface
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.TabRowDefaults
import androidx.compose.material3.TabRowDefaults.tabIndicatorOffset
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.core.content.ContextCompat
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.choraleapp.data.model.DirectMessage
import com.choraleapp.data.model.GroupMessage
import com.choraleapp.data.model.Member
import com.choraleapp.ui.components.LuminaHeader
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import com.google.firebase.Timestamp
import java.io.File
import java.text.SimpleDateFormat
import java.util.Locale
import kotlin.math.abs

private val PageBackground = Background
private val DividerColor = Color(0xFFE0DDD4)
private val SentBubble = Color(0xFFC8D5F7)
private val ReceivedBubble = Color.White
private val BubbleBorder = Color(0xFFD7E0F4)
private val LightBlue = Color(0xFFEEF3FF)
private val ReadGreen = Color(0xFF22A06B)
private val stickerSet = listOf("👏", "❤️", "😂", "🙏", "🎶", "🔥", "😍", "👍", "🙌", "✨", "🎤", "🎵")
private val reactionSet = listOf("❤️", "👍", "😂", "😮", "😢", "🙏")

@Composable
fun MessagerieScreen(viewModel: MessagerieViewModel = viewModel()) {
    var selectedTab by remember { mutableStateOf(0) }
    var selectedMember by remember { mutableStateOf<Member?>(null) }
    val context = LocalContext.current

    LaunchedEffect(Unit) {
        context.getSystemService(NotificationManager::class.java)?.cancelAll()
    }

    LaunchedEffect(selectedTab) {
        if (selectedTab == 0) viewModel.markGroupRead()
    }

    if (selectedTab == 1 && selectedMember != null) {
        DirectChatContent(
            viewModel = viewModel,
            member = selectedMember!!,
            onBack = {
                viewModel.closeConversation()
                selectedMember = null
            }
        )
        return
    }

    Scaffold(
        topBar = { LuminaHeader("Messages") },
        containerColor = PageBackground,
        contentWindowInsets = WindowInsets(0, 0, 0, 0)
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(PageBackground)
                .padding(padding)
        ) {
            TabRow(
                selectedTabIndex = selectedTab,
                containerColor = Color.White,
                contentColor = Purple40,
                divider = { HorizontalDivider(color = DividerColor, thickness = 1.dp) },
                indicator = { positions ->
                    TabRowDefaults.SecondaryIndicator(
                        modifier = Modifier.tabIndicatorOffset(positions[selectedTab]),
                        color = Gold,
                        height = 3.dp
                    )
                }
            ) {
                Tab(
                    selected = selectedTab == 0,
                    onClick = {
                        selectedTab = 0
                        selectedMember = null
                        viewModel.closeConversation()
                        viewModel.markGroupRead()
                    },
                    selectedContentColor = Purple40,
                    unselectedContentColor = Color.Gray,
                    text = { TabLabel("Groupe", viewModel.groupUnreadCount.value) },
                    icon = {
                        BadgedBox(badge = { if (viewModel.groupUnreadCount.value > 0) Badge() }) {
                            Icon(Icons.Filled.Groups, contentDescription = null)
                        }
                    }
                )
                Tab(
                    selected = selectedTab == 1,
                    onClick = { selectedTab = 1 },
                    selectedContentColor = Purple40,
                    unselectedContentColor = Color.Gray,
                    text = { TabLabel("Privé", viewModel.privateUnreadCount.value) },
                    icon = {
                        BadgedBox(badge = { if (viewModel.privateUnreadCount.value > 0) Badge() }) {
                            Icon(Icons.Filled.Person, contentDescription = null)
                        }
                    }
                )
            }

            if (selectedTab == 0) {
                GroupChatContent(viewModel)
            } else {
                MembersListContent(viewModel) { member ->
                    selectedMember = member
                    viewModel.openConversation(member.uid)
                }
            }
        }
    }
}

@Composable
private fun TabLabel(label: String, count: Int) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(label)
        if (count > 0) {
            Spacer(modifier = Modifier.width(6.dp))
            Surface(shape = CircleShape, color = Gold) {
                Text(
                    text = if (count > 99) "99+" else count.toString(),
                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                    style = MaterialTheme.typography.labelSmall,
                    color = Purple40
                )
            }
        }
    }
}

@Composable
private fun GroupChatContent(viewModel: MessagerieViewModel) {
    val uid = viewModel.currentUserId.orEmpty()
    val messages = viewModel.groupMessages.value.filter { uid !in it.hiddenFor }
    val texte = viewModel.groupDraft.value
    var showStickers by remember { mutableStateOf(false) }
    var editing by remember { mutableStateOf<GroupMessage?>(null) }
    var replyingTo by remember { mutableStateOf<GroupMessage?>(null) }
    var selectedIds by remember { mutableStateOf<Set<String>>(emptySet()) }
    val listState = rememberLazyListState()

    LaunchedEffect(messages.size) {
        if (messages.isNotEmpty()) {
            listState.animateScrollToItem(messages.size - 1)
            viewModel.markGroupRead()
        }
    }

    Column(modifier = Modifier.fillMaxSize().background(PageBackground)) {
        if (messages.isEmpty()) {
            Box(modifier = Modifier.weight(1f).fillMaxWidth(), contentAlignment = Alignment.Center) {
                Text("Le groupe n'a encore aucun message.", color = Color.Gray)
            }
        } else {
            LazyColumn(
                state = listState,
                modifier = Modifier.weight(1f),
                contentPadding = PaddingValues(horizontal = 12.dp, vertical = 10.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(messages, key = { it.id }) { msg ->
                    GroupMessageBubble(
                        msg = msg,
                        isMine = msg.authorUid == uid,
                        myUid = uid,
                        onReply = { replyingTo = msg },
                        onEdit = { editing = msg },
                        onDeleteForEveryone = { viewModel.deleteGroupMessageForEveryone(msg.id) },
                        onDeleteForMe = { viewModel.hideGroupMessageForMe(msg.id) },
                        onReact = { emoji -> viewModel.reactToGroupMessage(msg.id, emoji) },
                        selectionMode = selectedIds.isNotEmpty(),
                        selected = msg.id in selectedIds,
                        onToggleSelection = {
                            selectedIds = if (msg.id in selectedIds) selectedIds - msg.id else selectedIds + msg.id
                        }
                    )
                }
            }
        }

        if (selectedIds.isNotEmpty()) {
            SelectionActionBar(
                count = selectedIds.size,
                onDelete = {
                    viewModel.hideGroupMessagesForMe(selectedIds)
                    selectedIds = emptySet()
                },
                onClose = { selectedIds = emptySet() }
            )
        }

        TypingIndicator(
            when (viewModel.groupTypingNames.value.size) {
                0 -> ""
                1 -> "${viewModel.groupTypingNames.value.first()} écrit…"
                else -> "Plusieurs choristes écrivent…"
            }
        )

        if (showStickers) {
            StickerTray(onSelect = {
                viewModel.sendGroupSticker(it, replyingTo)
                replyingTo = null
                showStickers = false
            })
        }

        MessageComposer(
            texte = texte,
            onTextChange = { viewModel.updateGroupDraft(it) },
            onSend = {
                if (texte.isNotBlank()) {
                    viewModel.sendGroupMessage(texte, replyingTo)
                    viewModel.clearGroupDraft()
                    replyingTo = null
                }
            },
            onSticker = { showStickers = !showStickers },
            onVoiceReady = { uri, duration ->
                viewModel.sendGroupVoice(uri, duration, replyingTo)
                replyingTo = null
            },
            onImageReady = { uri ->
                viewModel.sendGroupImage(uri, replyingTo)
                replyingTo = null
            },
            replyAuthor = replyingTo?.authorName.orEmpty(),
            replyText = replyingTo?.let { replyPreview(it.type, it.texte) }.orEmpty(),
            onCancelReply = { replyingTo = null },
            isSendingMedia = viewModel.isSendingVoice.value || viewModel.isSendingImage.value
        )
    }

    editing?.let { msg ->
        EditMessageDialog(
            initial = msg.texte,
            onDismiss = { editing = null },
            onSave = {
                viewModel.editGroupMessage(msg.id, it)
                editing = null
            }
        )
    }
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
private fun GroupMessageBubble(
    msg: GroupMessage,
    isMine: Boolean,
    myUid: String,
    onReply: () -> Unit,
    onEdit: () -> Unit,
    onDeleteForEveryone: () -> Unit,
    onDeleteForMe: () -> Unit,
    onReact: (String?) -> Unit,
    selectionMode: Boolean,
    selected: Boolean,
    onToggleSelection: () -> Unit
) {
    var menuExpanded by remember { mutableStateOf(false) }
    val time = formatTime(msg.timestamp)

    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = if (isMine) Alignment.End else Alignment.Start
    ) {
        if (!isMine) {
            Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.padding(start = 2.dp, bottom = 6.dp)) {
                MemberAvatar(msg.authorName.ifBlank { "Choriste" }, 34.dp)
                Spacer(modifier = Modifier.width(8.dp))
                Text(msg.authorName.ifBlank { "Choriste" }, style = MaterialTheme.typography.labelLarge, color = Purple40, fontWeight = FontWeight.SemiBold)
            }
        }

        Box {
            Surface(
                modifier = swipeReplyModifier(msg.id, onReply).combinedClickable(
                    onClick = { if (selectionMode) onToggleSelection() },
                    onLongClick = {
                        if (!msg.deleted) {
                            if (selectionMode) onToggleSelection() else menuExpanded = true
                        }
                    }
                ),
                shape = RoundedCornerShape(24.dp, 24.dp, if (isMine) 24.dp else 10.dp, if (isMine) 10.dp else 24.dp),
                color = if (selected) Color(0xFFDDE7FF) else if (msg.type == "system_cancelled") Color(0xFFFFE4E6) else if (isMine) SentBubble else ReceivedBubble,
                border = androidx.compose.foundation.BorderStroke(1.dp, if (isMine) BubbleBorder else DividerColor),
                shadowElevation = 1.dp
            ) {
                MessageBody(
                    type = msg.type,
                    text = msg.texte,
                    mediaUrl = msg.mediaUrl,
                    durationMs = msg.durationMs,
                    deleted = msg.deleted,
                    edited = msg.editedAt != null,
                    time = time,
                    tickState = if (isMine) if (msg.readBy.size > 1) 3 else 1 else 0,
                    replyAuthor = msg.replyToAuthor,
                    replyText = msg.replyToText,
                    reactions = msg.reactions
                )
            }
            MessageMenu(
                expanded = menuExpanded && !selectionMode,
                onDismiss = { menuExpanded = false },
                isMine = isMine,
                canEdit = isMine && msg.type == "text",
                myReaction = msg.reactions[myUid],
                onReply = { menuExpanded = false; onReply() },
                onSelect = { menuExpanded = false; onToggleSelection() },
                onEdit = { menuExpanded = false; onEdit() },
                onDeleteForEveryone = { menuExpanded = false; onDeleteForEveryone() },
                onDeleteForMe = { menuExpanded = false; onDeleteForMe() },
                onReact = { emoji -> menuExpanded = false; onReact(emoji) }
            )
        }
    }
}

@Composable
private fun MembersListContent(viewModel: MessagerieViewModel, onSelect: (Member) -> Unit) {
    val members = viewModel.members.value
    val isLoading = viewModel.isLoadingMembers.value

    when {
        isLoading -> Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) { CircularProgressIndicator(color = Purple40) }
        members.isEmpty() -> Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) { Text("Aucun autre choriste avec un compte pour l'instant.") }
        else -> LazyColumn(
            modifier = Modifier.fillMaxSize().background(PageBackground),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(members) { member ->
                Surface(
                    modifier = Modifier.fillMaxWidth().clickable { onSelect(member) },
                    shape = RoundedCornerShape(22.dp),
                    color = Color.White,
                    shadowElevation = 2.dp
                ) {
                    Row(modifier = Modifier.fillMaxWidth().padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                        MemberAvatar("${member.prenom} ${member.nom}", 46.dp)
                        Spacer(modifier = Modifier.width(12.dp))
                        Column(modifier = Modifier.weight(1f)) {
                            Text("${member.prenom} ${member.nom}".trim(), style = MaterialTheme.typography.titleMedium, color = Color.Black, maxLines = 1, overflow = TextOverflow.Ellipsis)
                            Text(member.pupitre.ifBlank { "Choriste" }, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)
                        }
                        Text("Ouvrir", style = MaterialTheme.typography.labelLarge, color = Gold)
                    }
                }
            }
        }
    }
}

@Composable
private fun DirectChatContent(viewModel: MessagerieViewModel, member: Member, onBack: () -> Unit) {
    val uid = viewModel.currentUserId.orEmpty()
    val messages = viewModel.directMessages.value.filter { uid !in it.hiddenFor }
    val texte = viewModel.directDrafts[member.uid].orEmpty()
    var showStickers by remember { mutableStateOf(false) }
    var editing by remember { mutableStateOf<DirectMessage?>(null) }
    var replyingTo by remember { mutableStateOf<DirectMessage?>(null) }
    var selectedIds by remember { mutableStateOf<Set<String>>(emptySet()) }
    val listState = rememberLazyListState()
    val otherName = "${member.prenom} ${member.nom}".trim()

    LaunchedEffect(messages.size) {
        if (messages.isNotEmpty()) listState.animateScrollToItem(messages.size - 1)
    }

    Scaffold(
        topBar = { LuminaHeader("Messages") },
        containerColor = PageBackground,
        contentWindowInsets = WindowInsets(0, 0, 0, 0)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().background(PageBackground).padding(padding)) {
            Surface(modifier = Modifier.fillMaxWidth(), color = Color.White, shadowElevation = 1.dp) {
                Row(modifier = Modifier.fillMaxWidth().padding(horizontal = 10.dp, vertical = 12.dp), verticalAlignment = Alignment.CenterVertically) {
                    IconButton(onClick = onBack) { Icon(Icons.Filled.ArrowBack, contentDescription = "Retour", tint = Purple40) }
                    MemberAvatar(otherName, 44.dp)
                    Spacer(modifier = Modifier.width(10.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        Text(otherName, style = MaterialTheme.typography.titleMedium, color = Color.Black, maxLines = 1, overflow = TextOverflow.Ellipsis)
                        Text(
                            when {
                                viewModel.directTyping.value -> "écrit…"
                                viewModel.otherOnline.value -> "En ligne"
                                else -> lastSeenLabel(viewModel.otherLastSeen.value)
                            },
                            style = MaterialTheme.typography.bodySmall,
                            color = when {
                                viewModel.directTyping.value -> Gold
                                viewModel.otherOnline.value -> ReadGreen
                                else -> Color.Gray
                            }
                        )
                    }
                    if (viewModel.otherOnline.value) {
                        Box(modifier = Modifier.size(10.dp).clip(CircleShape).background(Color(0xFF2FB344)))
                    }
                    IconButton(onClick = {}) { Icon(Icons.Filled.MoreVert, contentDescription = null, tint = Purple40) }
                }
            }

            if (messages.isEmpty()) {
                Box(modifier = Modifier.weight(1f).fillMaxWidth(), contentAlignment = Alignment.Center) {
                    Text("Aucun message pour le moment.", color = Color.Gray)
                }
            } else {
                LazyColumn(
                    state = listState,
                    modifier = Modifier.weight(1f),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 10.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(messages, key = { it.id }) { msg ->
                        DirectMessageBubble(
                            msg = msg,
                            isMine = msg.authorUid == uid,
                            myUid = uid,
                            onReply = { replyingTo = msg },
                            onEdit = { editing = msg },
                            onDeleteForEveryone = { viewModel.deleteDirectMessageForEveryone(member.uid, msg.id) },
                            onDeleteForMe = { viewModel.hideDirectMessageForMe(member.uid, msg.id) },
                            onReact = { emoji -> viewModel.reactToDirectMessage(member.uid, msg.id, emoji) },
                            selectionMode = selectedIds.isNotEmpty(),
                            selected = msg.id in selectedIds,
                            onToggleSelection = {
                                selectedIds = if (msg.id in selectedIds) selectedIds - msg.id else selectedIds + msg.id
                            }
                        )
                    }
                }
            }

            if (selectedIds.isNotEmpty()) {
                SelectionActionBar(
                    count = selectedIds.size,
                    onDelete = {
                        viewModel.hideDirectMessagesForMe(member.uid, selectedIds)
                        selectedIds = emptySet()
                    },
                    onClose = { selectedIds = emptySet() }
                )
            }

            TypingIndicator(if (viewModel.directTyping.value) "${member.prenom} écrit…" else "")

            if (showStickers) {
                StickerTray(onSelect = {
                    viewModel.sendDirectSticker(member.uid, it, replyingTo, otherName)
                    replyingTo = null
                    showStickers = false
                })
            }

            MessageComposer(
                texte = texte,
                onTextChange = { viewModel.updateDirectDraft(member.uid, it) },
                onSend = {
                    if (texte.isNotBlank()) {
                        viewModel.sendDirectMessage(member.uid, texte, replyingTo, otherName)
                        viewModel.clearDirectDraft(member.uid)
                        replyingTo = null
                    }
                },
                onSticker = { showStickers = !showStickers },
                onVoiceReady = { uri, duration ->
                    viewModel.sendDirectVoice(member.uid, uri, duration, replyingTo, otherName)
                    replyingTo = null
                },
                onImageReady = { uri ->
                    viewModel.sendDirectImage(member.uid, uri, replyingTo, otherName)
                    replyingTo = null
                },
                replyAuthor = replyingTo?.let { if (it.authorUid == uid) "Vous" else otherName }.orEmpty(),
                replyText = replyingTo?.let { replyPreview(it.type, it.texte) }.orEmpty(),
                onCancelReply = { replyingTo = null },
                isSendingMedia = viewModel.isSendingVoice.value || viewModel.isSendingImage.value
            )
        }
    }

    editing?.let { msg ->
        EditMessageDialog(
            initial = msg.texte,
            onDismiss = { editing = null },
            onSave = {
                viewModel.editDirectMessage(member.uid, msg.id, it)
                editing = null
            }
        )
    }
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
private fun DirectMessageBubble(
    msg: DirectMessage,
    isMine: Boolean,
    myUid: String,
    onReply: () -> Unit,
    onEdit: () -> Unit,
    onDeleteForEveryone: () -> Unit,
    onDeleteForMe: () -> Unit,
    onReact: (String?) -> Unit,
    selectionMode: Boolean,
    selected: Boolean,
    onToggleSelection: () -> Unit
) {
    var menuExpanded by remember { mutableStateOf(false) }
    Box(modifier = Modifier.fillMaxWidth(), contentAlignment = if (isMine) Alignment.CenterEnd else Alignment.CenterStart) {
        Box {
            Surface(
                modifier = swipeReplyModifier(msg.id, onReply).combinedClickable(
                    onClick = { if (selectionMode) onToggleSelection() },
                    onLongClick = {
                        if (!msg.deleted) {
                            if (selectionMode) onToggleSelection() else menuExpanded = true
                        }
                    }
                ),
                shape = RoundedCornerShape(24.dp, 24.dp, if (isMine) 24.dp else 10.dp, if (isMine) 10.dp else 24.dp),
                color = if (selected) Color(0xFFDDE7FF) else if (isMine) SentBubble else ReceivedBubble,
                border = androidx.compose.foundation.BorderStroke(1.dp, if (isMine) BubbleBorder else DividerColor),
                shadowElevation = 1.dp
            ) {
                val tickState = when {
                    !isMine -> 0
                    msg.readBy.size > 1 -> 3
                    msg.deliveredBy.size > 1 -> 2
                    else -> 1
                }
                MessageBody(
                    type = msg.type,
                    text = msg.texte,
                    mediaUrl = msg.mediaUrl,
                    durationMs = msg.durationMs,
                    deleted = msg.deleted,
                    edited = msg.editedAt != null,
                    time = formatTime(msg.timestamp),
                    tickState = tickState,
                    replyAuthor = msg.replyToAuthor,
                    replyText = msg.replyToText,
                    reactions = msg.reactions
                )
            }
            MessageMenu(
                expanded = menuExpanded && !selectionMode,
                onDismiss = { menuExpanded = false },
                isMine = isMine,
                canEdit = isMine && msg.type == "text",
                myReaction = msg.reactions[myUid],
                onReply = { menuExpanded = false; onReply() },
                onSelect = { menuExpanded = false; onToggleSelection() },
                onEdit = { menuExpanded = false; onEdit() },
                onDeleteForEveryone = { menuExpanded = false; onDeleteForEveryone() },
                onDeleteForMe = { menuExpanded = false; onDeleteForMe() },
                onReact = { emoji -> menuExpanded = false; onReact(emoji) }
            )
        }
    }
}

@Composable
private fun SelectionActionBar(
    count: Int,
    onDelete: () -> Unit,
    onClose: () -> Unit
) {
    Surface(color = Color.White, shadowElevation = 2.dp) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(onClick = onClose) { Icon(Icons.Filled.Close, contentDescription = "Annuler") }
            Text("$count message(s) sélectionné(s)", modifier = Modifier.weight(1f), color = Purple40, fontWeight = FontWeight.SemiBold)
            IconButton(onClick = onDelete) { Icon(Icons.Filled.Delete, contentDescription = "Supprimer", tint = Color(0xFFB91C1C)) }
        }
    }
}

@Composable
private fun MessageMenu(
    expanded: Boolean,
    onDismiss: () -> Unit,
    isMine: Boolean,
    canEdit: Boolean,
    myReaction: String?,
    onReply: () -> Unit,
    onSelect: () -> Unit,
    onEdit: () -> Unit,
    onDeleteForEveryone: () -> Unit,
    onDeleteForMe: () -> Unit,
    onReact: (String?) -> Unit
) {
    DropdownMenu(expanded = expanded, onDismissRequest = onDismiss) {
        DropdownMenuItem(
            text = {
                Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    reactionSet.forEach { emoji ->
                        Text(
                            text = emoji,
                            style = MaterialTheme.typography.titleLarge,
                            modifier = Modifier.clickable { onReact(if (myReaction == emoji) null else emoji) }
                        )
                    }
                }
            },
            onClick = {}
        )
        DropdownMenuItem(
            text = { Text("Répondre") },
            leadingIcon = { Icon(Icons.Filled.Reply, contentDescription = null) },
            onClick = onReply
        )
        DropdownMenuItem(
            text = { Text("Sélectionner") },
            leadingIcon = { Icon(Icons.Filled.Check, contentDescription = null) },
            onClick = onSelect
        )
        if (canEdit) {
            DropdownMenuItem(
                text = { Text("Modifier") },
                leadingIcon = { Icon(Icons.Filled.Edit, contentDescription = null) },
                onClick = onEdit
            )
        }
        DropdownMenuItem(
            text = { Text("Supprimer pour moi") },
            leadingIcon = { Icon(Icons.Filled.Delete, contentDescription = null) },
            onClick = onDeleteForMe
        )
        if (isMine) {
            DropdownMenuItem(
                text = { Text("Supprimer pour tout le monde") },
                leadingIcon = { Icon(Icons.Filled.Delete, contentDescription = null) },
                onClick = onDeleteForEveryone
            )
        }
    }
}

@Composable
private fun MessageBody(
    type: String,
    text: String,
    mediaUrl: String,
    durationMs: Long,
    deleted: Boolean,
    edited: Boolean,
    time: String,
    tickState: Int,
    replyAuthor: String,
    replyText: String,
    reactions: Map<String, String>
) {
    Column(modifier = Modifier.padding(horizontal = 10.dp, vertical = 7.dp).widthInSafe()) {
        if (replyText.isNotBlank()) {
            Surface(shape = RoundedCornerShape(12.dp), color = Purple40.copy(alpha = 0.09f)) {
                Column(modifier = Modifier.padding(horizontal = 8.dp, vertical = 6.dp)) {
                    Text(replyAuthor.ifBlank { "Message" }, style = MaterialTheme.typography.labelMedium, color = Purple40, fontWeight = FontWeight.SemiBold)
                    Text(replyText, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray, maxLines = 2, overflow = TextOverflow.Ellipsis)
                }
            }
            Spacer(modifier = Modifier.height(5.dp))
        }

        when {
            deleted -> Text("Message supprimé", style = MaterialTheme.typography.bodyMedium, color = Color.Gray)
            type == "sticker" -> Text(text, style = MaterialTheme.typography.displayMedium)
            type == "voice" -> VoiceNotePlayer(mediaUrl, durationMs)
            type == "image" -> AsyncImage(
                model = mediaUrl,
                contentDescription = "Image envoyée",
                modifier = Modifier.fillMaxWidth().heightIn(min = 140.dp, max = 300.dp).clip(RoundedCornerShape(16.dp))
            )
            type == "system_cancelled" -> Surface(
                shape = RoundedCornerShape(14.dp),
                color = Color(0xFFFFE4E6)
            ) {
                Text(
                    text,
                    style = MaterialTheme.typography.bodyMedium,
                    color = Color(0xFFB91C1C),
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 8.dp)
                )
            }
            else -> Text(text, style = MaterialTheme.typography.bodyLarge, color = Color.Black)
        }

        Spacer(modifier = Modifier.height(6.dp))
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.End, modifier = Modifier.fillMaxWidth()) {
            if (edited && !deleted) {
                Text("modifié · ", style = MaterialTheme.typography.labelSmall, color = Color.Gray)
            }
            Text(time, style = MaterialTheme.typography.labelSmall, color = Color.DarkGray)
            if (tickState > 0) {
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = if (tickState == 1) "✓" else "✓✓",
                    style = MaterialTheme.typography.labelSmall,
                    color = if (tickState == 3) ReadGreen else Color.Gray
                )
            }
        }

        if (reactions.isNotEmpty()) {
            Spacer(modifier = Modifier.height(6.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                reactions.values.groupingBy { it }.eachCount().forEach { (emoji, count) ->
                    Surface(shape = RoundedCornerShape(14.dp), color = Color.White.copy(alpha = 0.82f), shadowElevation = 1.dp) {
                        Text(
                            text = if (count > 1) "$emoji $count" else emoji,
                            modifier = Modifier.padding(horizontal = 7.dp, vertical = 3.dp),
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                }
            }
        }
    }
}

private fun Modifier.widthInSafe(): Modifier = this.then(Modifier.widthIn(min = 54.dp, max = 275.dp))

private fun swipeReplyModifier(key: String, onReply: () -> Unit): Modifier = Modifier.pointerInput(key) {
    var totalDrag = 0f
    detectHorizontalDragGestures(
        onDragStart = { totalDrag = 0f },
        onHorizontalDrag = { change, amount ->
            totalDrag += amount
            change.consume()
        },
        onDragEnd = {
            if (abs(totalDrag) > 80f) onReply()
            totalDrag = 0f
        },
        onDragCancel = { totalDrag = 0f }
    )
}

@Composable
private fun VoiceNotePlayer(url: String, durationMs: Long) {
    var isPlaying by remember { mutableStateOf(false) }
    var isPrepared by remember { mutableStateOf(false) }
    var currentPosition by remember { mutableLongStateOf(0L) }
    var realDuration by remember { mutableLongStateOf(durationMs.coerceAtLeast(1L)) }
    val player = remember(url) { MediaPlayer() }

    LaunchedEffect(url) {
        try {
            player.reset()
            player.setDataSource(url)
            player.setOnPreparedListener {
                isPrepared = true
                realDuration = it.duration.toLong().coerceAtLeast(durationMs.coerceAtLeast(1L))
            }
            player.setOnCompletionListener {
                isPlaying = false
                currentPosition = 0L
                try { player.seekTo(0) } catch (_: Exception) {}
            }
            player.prepareAsync()
        } catch (_: Exception) {
            isPrepared = false
        }
    }

    LaunchedEffect(isPlaying) {
        while (isPlaying) {
            try { currentPosition = player.currentPosition.toLong() } catch (_: Exception) {}
            kotlinx.coroutines.delay(250)
        }
    }

    DisposableEffect(url) {
        onDispose { try { player.release() } catch (_: Exception) {} }
    }

    Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
        Surface(
            modifier = Modifier.size(40.dp).clickable(enabled = isPrepared) {
                try {
                    if (isPlaying) {
                        player.pause()
                        isPlaying = false
                    } else {
                        player.start()
                        isPlaying = true
                    }
                } catch (_: Exception) { isPlaying = false }
            },
            shape = CircleShape,
            color = Purple40
        ) {
            Box(contentAlignment = Alignment.Center) {
                Icon(if (isPlaying) Icons.Filled.Pause else Icons.Filled.PlayArrow, contentDescription = null, tint = Color.White)
            }
        }
        Spacer(modifier = Modifier.width(8.dp))
        Column(modifier = Modifier.weight(1f)) {
            Slider(
                value = currentPosition.toFloat().coerceIn(0f, realDuration.toFloat()),
                onValueChange = { value ->
                    currentPosition = value.toLong()
                    try { player.seekTo(value.toInt()) } catch (_: Exception) {}
                },
                valueRange = 0f..realDuration.toFloat().coerceAtLeast(1f),
                enabled = isPrepared,
                modifier = Modifier.fillMaxWidth().height(28.dp)
            )
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text(formatDuration(currentPosition), style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)
                Text(formatDuration(realDuration), style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)
            }
        }
    }
}

@Composable
private fun StickerTray(onSelect: (String) -> Unit) {
    Surface(color = Color.White, shadowElevation = 2.dp) {
        Row(
            modifier = Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()).padding(horizontal = 12.dp, vertical = 10.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            stickerSet.forEach { sticker ->
                Surface(
                    modifier = Modifier.size(52.dp).clickable { onSelect(sticker) },
                    shape = RoundedCornerShape(16.dp),
                    color = LightBlue
                ) {
                    Box(contentAlignment = Alignment.Center) { Text(sticker, style = MaterialTheme.typography.headlineSmall) }
                }
            }
        }
    }
}

@Composable
private fun TypingIndicator(text: String) {
    if (text.isNotBlank()) {
        Text(
            text = text,
            style = MaterialTheme.typography.bodySmall,
            color = Color.Gray,
            modifier = Modifier.padding(horizontal = 14.dp, vertical = 1.dp)
        )
    }
}

@Composable
private fun MessageComposer(
    texte: String,
    onTextChange: (String) -> Unit,
    onSend: () -> Unit,
    onSticker: () -> Unit,
    onVoiceReady: (Uri, Long) -> Unit,
    onImageReady: (Uri) -> Unit,
    replyAuthor: String,
    replyText: String,
    onCancelReply: () -> Unit,
    isSendingMedia: Boolean
) {
    val context = LocalContext.current
    var isRecording by remember { mutableStateOf(false) }
    var recordStart by remember { mutableLongStateOf(0L) }
    var pendingVoiceUri by remember { mutableStateOf<Uri?>(null) }
    var pendingVoiceDuration by remember { mutableLongStateOf(0L) }
    val recorderHolder = remember { arrayOfNulls<MediaRecorder>(1) }
    val fileHolder = remember { arrayOfNulls<File>(1) }

    fun startRecording() {
        try {
            val file = File(context.cacheDir, "voice_${System.currentTimeMillis()}.m4a")
            val recorder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) MediaRecorder(context) else {
                @Suppress("DEPRECATION")
                MediaRecorder()
            }
            recorder.apply {
                setAudioSource(MediaRecorder.AudioSource.MIC)
                setOutputFormat(MediaRecorder.OutputFormat.MPEG_4)
                setAudioEncoder(MediaRecorder.AudioEncoder.AAC)
                setOutputFile(file.absolutePath)
                prepare()
                start()
            }
            recorderHolder[0] = recorder
            fileHolder[0] = file
            recordStart = System.currentTimeMillis()
            isRecording = true
        } catch (_: Exception) {
            isRecording = false
        }
    }

    fun stopRecording() {
        val recorder = recorderHolder[0]
        val file = fileHolder[0]
        val duration = System.currentTimeMillis() - recordStart
        try { recorder?.stop() } catch (_: Exception) {}
        try { recorder?.release() } catch (_: Exception) {}
        recorderHolder[0] = null
        isRecording = false
        if (file != null && file.exists() && duration > 300) {
            pendingVoiceUri = Uri.fromFile(file)
            pendingVoiceDuration = duration
        }
    }

    val permissionLauncher = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { granted ->
        if (granted) startRecording()
    }

    val imagePicker = rememberLauncherForActivityResult(ActivityResultContracts.GetContent()) { uri ->
        if (uri != null) onImageReady(uri)
    }

    DisposableEffect(Unit) {
        onDispose {
            try { recorderHolder[0]?.stop() } catch (_: Exception) {}
            try { recorderHolder[0]?.release() } catch (_: Exception) {}
        }
    }

    Column(modifier = Modifier.fillMaxWidth().background(PageBackground)) {
        if (replyText.isNotBlank()) {
            Surface(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 4.dp),
                shape = RoundedCornerShape(16.dp),
                color = Color.White,
                shadowElevation = 1.dp
            ) {
                Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Filled.Reply, contentDescription = null, tint = Purple40)
                    Spacer(modifier = Modifier.width(8.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        Text(replyAuthor.ifBlank { "Réponse" }, style = MaterialTheme.typography.labelMedium, color = Purple40)
                        Text(replyText, style = MaterialTheme.typography.bodySmall, maxLines = 1, overflow = TextOverflow.Ellipsis)
                    }
                    IconButton(onClick = onCancelReply) { Icon(Icons.Filled.Close, contentDescription = "Annuler") }
                }
            }
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 6.dp, vertical = 2.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(onClick = onSticker) {
                Icon(Icons.Filled.TagFaces, contentDescription = "Stickers", tint = Gold)
            }
            IconButton(onClick = { imagePicker.launch("image/*") }, enabled = !isRecording && pendingVoiceUri == null) {
                Icon(Icons.Filled.Image, contentDescription = "Envoyer une image", tint = Purple40)
            }

            when {
                isRecording -> {
                    Surface(modifier = Modifier.weight(1f), shape = RoundedCornerShape(28.dp), color = Color(0xFFFFEEEE)) {
                        Row(modifier = Modifier.padding(horizontal = 16.dp, vertical = 12.dp), verticalAlignment = Alignment.CenterVertically) {
                            Box(modifier = Modifier.size(10.dp).clip(CircleShape).background(Color.Red))
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("Enregistrement…", color = Color.Red, modifier = Modifier.weight(1f))
                            IconButton(onClick = { stopRecording() }) { Icon(Icons.Filled.Stop, contentDescription = "Arrêter", tint = Color.Red) }
                        }
                    }
                }
                pendingVoiceUri != null -> {
                    VoicePreview(
                        uri = pendingVoiceUri!!,
                        durationMs = pendingVoiceDuration,
                        modifier = Modifier.weight(1f),
                        onDelete = {
                            pendingVoiceUri = null
                            pendingVoiceDuration = 0L
                        },
                        onSend = {
                            val uri = pendingVoiceUri
                            if (uri != null) {
                                onVoiceReady(uri, pendingVoiceDuration)
                                pendingVoiceUri = null
                                pendingVoiceDuration = 0L
                            }
                        }
                    )
                }
                else -> {
                    OutlinedTextField(
                        value = texte,
                        onValueChange = onTextChange,
                        modifier = Modifier.weight(1f),
                        placeholder = { Text("Écrire un message…", color = Color.Gray) },
                        shape = RoundedCornerShape(28.dp),
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedContainerColor = Color.White,
                            unfocusedContainerColor = Color.White,
                            focusedTextColor = Color.Black,
                            unfocusedTextColor = Color.Black,
                            focusedBorderColor = BubbleBorder,
                            unfocusedBorderColor = BubbleBorder,
                            cursorColor = Purple40
                        ),
                        keyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Sentences),
                        maxLines = 4
                    )
                }
            }

            Spacer(modifier = Modifier.width(6.dp))

            when {
                isSendingMedia -> CircularProgressIndicator(modifier = Modifier.size(44.dp), color = Purple40)
                texte.isNotBlank() && !isRecording && pendingVoiceUri == null -> CircleActionButton(Icons.Filled.Send, "Envoyer", onSend)
                !isRecording && pendingVoiceUri == null -> CircleActionButton(Icons.Filled.Mic, "Note vocale") {
                    val granted = ContextCompat.checkSelfPermission(context, Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED
                    if (granted) startRecording() else permissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
                }
            }
        }
    }
}

@Composable
private fun VoicePreview(
    uri: Uri,
    durationMs: Long,
    modifier: Modifier = Modifier,
    onDelete: () -> Unit,
    onSend: () -> Unit
) {
    val context = LocalContext.current
    var playing by remember(uri) { mutableStateOf(false) }
    val player = remember(uri) { MediaPlayer.create(context, uri) }

    DisposableEffect(uri) {
        player?.setOnCompletionListener { playing = false }
        onDispose { try { player?.release() } catch (_: Exception) {} }
    }

    Surface(modifier = modifier, shape = RoundedCornerShape(28.dp), color = Color.White, shadowElevation = 1.dp) {
        Row(modifier = Modifier.padding(horizontal = 8.dp, vertical = 6.dp), verticalAlignment = Alignment.CenterVertically) {
            IconButton(onClick = {
                if (playing) {
                    player?.pause(); playing = false
                } else {
                    player?.start(); playing = true
                }
            }) {
                Icon(if (playing) Icons.Filled.Pause else Icons.Filled.PlayArrow, contentDescription = "Écouter", tint = Purple40)
            }
            Column(modifier = Modifier.weight(1f)) {
                Text("Aperçu du vocal", style = MaterialTheme.typography.labelMedium, color = Purple40)
                Text(formatDuration(durationMs), style = MaterialTheme.typography.bodySmall, color = Color.Gray)
            }
            IconButton(onClick = onDelete) { Icon(Icons.Filled.Delete, contentDescription = "Supprimer", tint = Color.Gray) }
            IconButton(onClick = onSend) { Icon(Icons.Filled.Send, contentDescription = "Envoyer", tint = ReadGreen) }
        }
    }
}

@Composable
private fun CircleActionButton(icon: androidx.compose.ui.graphics.vector.ImageVector, description: String, onClick: () -> Unit) {
    IconButton(onClick = onClick) {
        Surface(modifier = Modifier.size(48.dp), shape = CircleShape, color = Purple40) {
            Box(contentAlignment = Alignment.Center) {
                Icon(icon, contentDescription = description, tint = Color.White)
            }
        }
    }
}

@Composable
private fun EditMessageDialog(initial: String, onDismiss: () -> Unit, onSave: (String) -> Unit) {
    var text by remember(initial) { mutableStateOf(initial) }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Modifier le message") },
        text = {
            OutlinedTextField(
                value = text,
                onValueChange = { text = it },
                modifier = Modifier.fillMaxWidth(),
                keyboardOptions = KeyboardOptions(capitalization = KeyboardCapitalization.Sentences)
            )
        },
        confirmButton = { TextButton(onClick = { onSave(text.trim()) }, enabled = text.isNotBlank()) { Text("Enregistrer") } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

@Composable
private fun MemberAvatar(label: String, size: androidx.compose.ui.unit.Dp) {
    Box(modifier = Modifier.size(size).clip(CircleShape).background(LightBlue), contentAlignment = Alignment.Center) {
        Text(initialsOf(label), style = MaterialTheme.typography.titleMedium, color = Purple40, fontWeight = FontWeight.SemiBold)
    }
}

private fun initialsOf(label: String): String {
    val parts = label.trim().split(" ").filter { it.isNotBlank() }
    return when {
        parts.isEmpty() -> "?"
        parts.size == 1 -> parts.first().take(1).uppercase(Locale.getDefault())
        else -> (parts.first().take(1) + parts.last().take(1)).uppercase(Locale.getDefault())
    }
}

private fun formatTime(timestamp: Timestamp?): String = timestamp?.toDate()?.let {
    SimpleDateFormat("HH:mm", Locale.FRANCE).format(it)
} ?: ""

private fun formatDuration(ms: Long): String {
    val total = (ms / 1000).coerceAtLeast(0)
    return "%d:%02d".format(total / 60, total % 60)
}

private fun lastSeenLabel(timestamp: Timestamp?): String {
    val date = timestamp?.toDate() ?: return "Hors ligne"
    return "Vu à ${SimpleDateFormat("HH:mm", Locale.FRANCE).format(date)}"
}

private fun replyPreview(type: String, text: String): String = when (type) {
    "voice" -> "🎤 Note vocale"
    "image" -> "📷 Image"
    "sticker" -> text
    else -> text.take(100)
}
