package com.choraleapp.ui.chants

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.media.MediaRecorder
import android.os.Build
import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.AudioFile
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.CreateNewFolder
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Headphones
import androidx.compose.material.icons.filled.Image
import androidx.compose.material.icons.filled.Link
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.Stop
import androidx.compose.material.icons.filled.PictureAsPdf
import androidx.compose.material.icons.filled.PlayCircle
import androidx.compose.material.icons.filled.VideoLibrary
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.AssistChip
import androidx.compose.material3.AssistChipDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.core.content.ContextCompat
import androidx.lifecycle.viewmodel.compose.viewModel
import com.choraleapp.data.model.Folder
import com.choraleapp.data.model.Song
import com.choraleapp.ui.components.LuminaHeader
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import kotlinx.coroutines.launch
import java.io.File
import java.util.UUID

private val pupitres = listOf(
    "soprano" to "Soprano",
    "alto" to "Alto",
    "tenor" to "Ténor",
    "basse" to "Basse"
)

@Composable
fun ChantsScreen(viewModel: ChantsViewModel = viewModel()) {
    val songs = viewModel.songs.value
    val folders = viewModel.folders.value
    val selectedFolderId = viewModel.selectedFolderId.value
    val isLoading = viewModel.isLoading.value
    val errorMessage = viewModel.errorMessage.value

    var showAddSongDialog by remember { mutableStateOf(false) }
    var showAddFolderDialog by remember { mutableStateOf(false) }
    var editingSong by remember { mutableStateOf<Song?>(null) }
    var deletingSong by remember { mutableStateOf<Song?>(null) }
    val context = LocalContext.current

    val visibleSongs = if (selectedFolderId == null) songs else songs.filter { it.folderId == selectedFolderId }

    Scaffold(
        containerColor = Background,
        topBar = { LuminaHeader("Bibliothèque") },
        floatingActionButton = {
            if (viewModel.canEdit.value) {
                FloatingActionButton(
                    onClick = { showAddSongDialog = true },
                    containerColor = Gold,
                    contentColor = Purple40
                ) {
                    Icon(Icons.Filled.Add, contentDescription = "Ajouter un chant")
                }
            }
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Background)
                .padding(padding)
                .padding(horizontal = 18.dp, vertical = 16.dp)
        ) {
            Surface(
                modifier = Modifier.fillMaxWidth(),
                shape = MaterialTheme.shapes.large,
                color = Color.White,
                shadowElevation = 1.dp
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "Bibliothèque musicale",
                        style = MaterialTheme.typography.titleLarge,
                        color = Purple40
                    )
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = "Chaque chant peut contenir une partition, une vidéo et jusqu'à 4 audios par pupitre.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.DarkGray
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                item {
                    FilterChip(
                        selected = selectedFolderId == null,
                        onClick = { viewModel.selectFolder(null) },
                        label = { Text("Tous") }
                    )
                }
                items(folders) { folder ->
                    FilterChip(
                        selected = selectedFolderId == folder.id,
                        onClick = { viewModel.selectFolder(folder.id) },
                        label = { Text(folder.nom) }
                    )
                }
                if (viewModel.canEdit.value) {
                    item {
                        FilterChip(
                            selected = false,
                            onClick = { showAddFolderDialog = true },
                            label = { Text("Dossier") },
                            leadingIcon = {
                                Icon(Icons.Filled.CreateNewFolder, contentDescription = null, modifier = Modifier.size(18.dp))
                            }
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            when {
                isLoading -> CircularProgressIndicator(color = Purple40)
                errorMessage != null -> Text(errorMessage, color = MaterialTheme.colorScheme.error)
                visibleSongs.isEmpty() -> {
                    Surface(
                        modifier = Modifier.fillMaxWidth(),
                        color = Color.White,
                        shape = MaterialTheme.shapes.large,
                        shadowElevation = 1.dp
                    ) {
                        Text(
                            text = "Aucun chant ici pour l'instant. Appuie sur + pour en ajouter un.",
                            modifier = Modifier.padding(18.dp),
                            style = MaterialTheme.typography.bodyMedium
                        )
                    }
                }
                else -> LazyColumn(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    items(visibleSongs) { song ->
                        SongCard(
                            song = song,
                            canEdit = viewModel.canEdit.value,
                            viewModel = viewModel,
                            onOpenExternalUrl = { url -> context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url))) },
                            onEdit = { editingSong = song },
                            onDelete = { deletingSong = song }
                        )
                    }
                }
            }
        }
    }

    if (showAddFolderDialog) {
        AddFolderDialog(
            onDismiss = { showAddFolderDialog = false },
            onSave = { nom -> viewModel.addFolder(nom) { showAddFolderDialog = false } }
        )
    }

    if (showAddSongDialog) {
        SongFormDialog(
            folders = folders,
            preselectedFolderId = selectedFolderId,
            existingSong = null,
            viewModel = viewModel,
            onDismiss = { showAddSongDialog = false },
            onSave = { titre, compositeur, partitionUrl, partitionType, youtubeUrl, folderId, appris, audioUrls, audioFiles ->
                viewModel.addSong(
                    titre, compositeur, partitionUrl, partitionType,
                    youtubeUrl, folderId, appris, audioUrls, audioFiles
                ) { showAddSongDialog = false }
            }
        )
    }

    editingSong?.let { song ->
        SongFormDialog(
            folders = folders,
            preselectedFolderId = song.folderId,
            existingSong = song,
            viewModel = viewModel,
            onDismiss = { editingSong = null },
            onSave = { titre, compositeur, partitionUrl, partitionType, youtubeUrl, folderId, appris, audioUrls, audioFiles ->
                viewModel.updateSong(
                    song.id, titre, compositeur, partitionUrl, partitionType,
                    youtubeUrl, folderId, appris, audioUrls, audioFiles
                ) { editingSong = null }
            }
        )
    }

    deletingSong?.let { song ->
        AlertDialog(
            onDismissRequest = { deletingSong = null },
            title = { Text("Supprimer ce chant ?") },
            text = { Text("\"${song.titre}\" et ses fichiers associés seront définitivement supprimés.") },
            confirmButton = {
                TextButton(onClick = { viewModel.deleteSong(song) { deletingSong = null } }) {
                    Text("Supprimer", color = MaterialTheme.colorScheme.error)
                }
            },
            dismissButton = { TextButton(onClick = { deletingSong = null }) { Text("Annuler") } }
        )
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun SongCard(
    song: Song,
    canEdit: Boolean,
    viewModel: ChantsViewModel,
    onOpenExternalUrl: (String) -> Unit,
    onEdit: () -> Unit,
    onDelete: () -> Unit
) {
    var showPdfViewer by remember { mutableStateOf(false) }
    var showImageViewer by remember { mutableStateOf(false) }
    var playingAudioUrl by remember { mutableStateOf<String?>(null) }
    var expanded by remember { mutableStateOf(false) }

    val audios = remember(song) {
        buildList {
            pupitres.forEach { (key, label) ->
                val url = song.audioUrlsByPupitre[key].orEmpty()
                if (url.isNotBlank()) add(Triple(key, label, url))
            }
            if (song.audioUrl.isNotBlank() && song.audioUrlsByPupitre.isEmpty()) {
                add(Triple("general", "Audio général", song.audioUrl))
            }
        }
    }

    ElevatedCard(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(horizontal = 14.dp, vertical = 12.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(song.titre, style = MaterialTheme.typography.titleMedium, color = Purple40)
                    if (song.compositeur.isNotBlank()) {
                        Text(song.compositeur, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)
                    }
                }

                AssistChip(
                    onClick = {},
                    enabled = false,
                    label = { Text(if (song.appris) "Appris" else "À travailler") },
                    colors = AssistChipDefaults.assistChipColors(
                        disabledContainerColor = if (song.appris) Color(0xFFDCEFE4) else Color(0xFFFFF1CE),
                        disabledLabelColor = if (song.appris) Color(0xFF166534) else Color(0xFF8A5A00)
                    )
                )
            }

            Spacer(modifier = Modifier.height(6.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                val partitionLabel = if (song.partitionUrl.isNotBlank()) "Partition ✓" else "Sans partition"
                Text(
                    "$partitionLabel · ${audios.size} audio${if (audios.size > 1) "s" else ""}",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color.DarkGray,
                    modifier = Modifier.weight(1f)
                )
                TextButton(onClick = { expanded = !expanded }) {
                    Text(if (expanded) "Réduire" else "Ouvrir")
                }
            }

            if (expanded) {
                Spacer(modifier = Modifier.height(8.dp))
                HorizontalDivider(color = Color(0xFFE8E3D8))
                Spacer(modifier = Modifier.height(10.dp))

                if (song.partitionUrl.isNotBlank() || song.youtubeUrl.isNotBlank()) {
                    Text("Supports", style = MaterialTheme.typography.labelLarge, color = Color.Black)
                    Spacer(modifier = Modifier.height(7.dp))
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        if (song.partitionUrl.isNotBlank()) {
                            ActionPill(
                                label = "Partition",
                                icon = Icons.Filled.PictureAsPdf,
                                onClick = {
                                    when (song.partitionType) {
                                        "pdf" -> showPdfViewer = true
                                        "image" -> showImageViewer = true
                                        else -> onOpenExternalUrl(song.partitionUrl)
                                    }
                                }
                            )
                        }
                        if (song.youtubeUrl.isNotBlank()) {
                            ActionPill(
                                label = "Vidéo",
                                icon = Icons.Filled.VideoLibrary,
                                onClick = { onOpenExternalUrl(song.youtubeUrl) }
                            )
                        }
                    }
                    Spacer(modifier = Modifier.height(10.dp))
                }

                Text("Audios par pupitre", style = MaterialTheme.typography.labelLarge, color = Color.Black)
                Spacer(modifier = Modifier.height(7.dp))
                if (audios.isEmpty()) {
                    Text("Aucun audio ajouté.", style = MaterialTheme.typography.bodySmall, color = Color.Gray)
                } else {
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        audios.forEach { (key, label, url) ->
                            ActionPill(
                                label = label,
                                icon = Icons.Filled.PlayCircle,
                                onClick = {
                                    val isFile = if (key == "general") song.audioIsFile else song.audioFilesByPupitre[key] == true
                                    if (isFile) playingAudioUrl = url else onOpenExternalUrl(url)
                                }
                            )
                        }
                    }
                }

                if (canEdit) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                        TextButton(onClick = onEdit) {
                            Icon(Icons.Filled.Edit, contentDescription = null, modifier = Modifier.size(17.dp))
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("Modifier")
                        }
                        TextButton(onClick = onDelete) {
                            Icon(Icons.Filled.Delete, contentDescription = null, modifier = Modifier.size(17.dp), tint = MaterialTheme.colorScheme.error)
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("Supprimer", color = MaterialTheme.colorScheme.error)
                        }
                    }
                }
            }
        }
    }

    if (showPdfViewer) {
        PdfViewerDialog(viewModel = viewModel, url = song.partitionUrl, onDismiss = { showPdfViewer = false })
    }
    if (showImageViewer) {
        ImageViewerDialog(url = song.partitionUrl, onDismiss = { showImageViewer = false })
    }
    playingAudioUrl?.let { url ->
        AudioPlayerDialog(url = url, onDismiss = { playingAudioUrl = null })
    }
}

@Composable
private fun ActionPill(label: String, icon: ImageVector, onClick: () -> Unit) {
    Surface(
        shape = RoundedCornerShape(24.dp),
        color = Color(0xFFEFF3FF),
        modifier = Modifier.clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(icon, contentDescription = label, tint = Purple40, modifier = Modifier.size(18.dp))
            Spacer(modifier = Modifier.width(6.dp))
            Text(label, color = Purple40, style = MaterialTheme.typography.labelLarge)
        }
    }
}

@Composable
private fun AddFolderDialog(onDismiss: () -> Unit, onSave: (String) -> Unit) {
    var nom by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Nouveau dossier") },
        text = {
            OutlinedTextField(
                value = nom,
                onValueChange = { nom = it },
                label = { Text("Nom du dossier") },
                modifier = Modifier.fillMaxWidth()
            )
        },
        confirmButton = {
            TextButton(onClick = { onSave(nom) }, enabled = nom.isNotBlank()) { Text("Créer") }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun SongFormDialog(
    folders: List<Folder>,
    preselectedFolderId: String?,
    existingSong: Song?,
    viewModel: ChantsViewModel,
    onDismiss: () -> Unit,
    onSave: (String, String, String, String, String, String, Boolean, Map<String, String>, Map<String, Boolean>) -> Unit
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val storagePathId = remember { UUID.randomUUID().toString() }

    var titre by remember { mutableStateOf(existingSong?.titre ?: "") }
    var compositeur by remember { mutableStateOf(existingSong?.compositeur ?: "") }
    var partitionUrl by remember { mutableStateOf(existingSong?.partitionUrl ?: "") }
    var partitionType by remember { mutableStateOf(existingSong?.partitionType ?: "link") }
    var youtubeUrl by remember { mutableStateOf(existingSong?.youtubeUrl ?: "") }
    var appris by remember { mutableStateOf(existingSong?.appris ?: false) }
    var selectedFolder by remember {
        mutableStateOf(folders.firstOrNull { it.id == (existingSong?.folderId ?: preselectedFolderId) })
    }
    var expanded by remember { mutableStateOf(false) }
    var fileError by remember { mutableStateOf<String?>(null) }
    var uploadingPartition by remember { mutableStateOf(false) }
    var activeAudioUploadKey by remember { mutableStateOf<String?>(null) }
    var recordingPupitreKey by remember { mutableStateOf<String?>(null) }
    val uploadingAudios = remember { mutableStateMapOf<String, Boolean>() }
    val recorderHolder = remember { arrayOfNulls<MediaRecorder>(1) }
    val recordingFileHolder = remember { arrayOfNulls<File>(1) }

    val audioUrls = remember {
        mutableStateMapOf<String, String>().apply {
            putAll(existingSong?.audioUrlsByPupitre ?: emptyMap())
            if (isEmpty() && existingSong?.audioUrl?.isNotBlank() == true) {
                put("general", existingSong.audioUrl)
            }
        }
    }
    val audioFiles = remember {
        mutableStateMapOf<String, Boolean>().apply {
            putAll(existingSong?.audioFilesByPupitre ?: emptyMap())
            if (existingSong?.audioUrl?.isNotBlank() == true && existingSong.audioUrlsByPupitre.isEmpty()) {
                put("general", existingSong.audioIsFile)
            }
        }
    }

    fun startRecordingFor(key: String) {
        try {
            val outputFile = File(context.cacheDir, "recording_${key}_${System.currentTimeMillis()}.m4a")
            val recorder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                MediaRecorder(context)
            } else {
                @Suppress("DEPRECATION")
                MediaRecorder()
            }
            recorder.apply {
                setAudioSource(MediaRecorder.AudioSource.MIC)
                setOutputFormat(MediaRecorder.OutputFormat.MPEG_4)
                setAudioEncoder(MediaRecorder.AudioEncoder.AAC)
                setOutputFile(outputFile.absolutePath)
                prepare()
                start()
            }
            recorderHolder[0] = recorder
            recordingFileHolder[0] = outputFile
            recordingPupitreKey = key
            fileError = null
        } catch (e: Exception) {
            fileError = "Impossible de démarrer l'enregistrement"
        }
    }

    fun stopRecordingAndUpload() {
        val key = recordingPupitreKey ?: return
        val recorder = recorderHolder[0] ?: return
        try {
            recorder.stop()
            recorder.release()
        } catch (e: Exception) {
            fileError = "L'enregistrement est trop court ou invalide"
            try { recorder.release() } catch (_: Exception) {}
            recorderHolder[0] = null
            recordingPupitreKey = null
            return
        }
        recorderHolder[0] = null
        recordingPupitreKey = null

        val file = recordingFileHolder[0] ?: return
        uploadingAudios[key] = true
        scope.launch {
            try {
                val url = viewModel.uploadSongFile(
                    storagePathId,
                    "audio_${key}_${System.currentTimeMillis()}.m4a",
                    Uri.fromFile(file)
                )
                audioUrls[key] = url
                audioFiles[key] = true
            } catch (e: Exception) {
                fileError = "Impossible d'envoyer l'enregistrement"
            } finally {
                uploadingAudios[key] = false
                file.delete()
                recordingFileHolder[0] = null
            }
        }
    }

    val recordPermissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        val key = activeAudioUploadKey
        if (granted && key != null) {
            startRecordingFor(key)
            activeAudioUploadKey = null
        } else if (!granted) {
            fileError = "Permission micro refusée"
            activeAudioUploadKey = null
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            recorderHolder[0]?.let { recorder ->
                try { recorder.stop() } catch (_: Exception) {}
                try { recorder.release() } catch (_: Exception) {}
            }
            recorderHolder[0] = null
        }
    }

    val pdfPickerLauncher = rememberLauncherForActivityResult(ActivityResultContracts.GetContent()) { uri ->
        if (uri != null) {
            uploadingPartition = true
            scope.launch {
                try {
                    partitionUrl = viewModel.uploadSongFile(storagePathId, "partition.pdf", uri)
                    partitionType = "pdf"
                } catch (e: Exception) {
                    fileError = "Impossible d'envoyer le PDF"
                } finally {
                    uploadingPartition = false
                }
            }
        }
    }

    val imagePickerLauncher = rememberLauncherForActivityResult(ActivityResultContracts.PickVisualMedia()) { uri ->
        if (uri != null) {
            uploadingPartition = true
            scope.launch {
                try {
                    partitionUrl = viewModel.uploadSongFile(storagePathId, "partition_image", uri)
                    partitionType = "image"
                } catch (e: Exception) {
                    fileError = "Impossible d'envoyer l'image"
                } finally {
                    uploadingPartition = false
                }
            }
        }
    }

    val audioFilePickerLauncher = rememberLauncherForActivityResult(ActivityResultContracts.GetContent()) { uri ->
        val key = activeAudioUploadKey
        if (uri != null && key != null) {
            uploadingAudios[key] = true
            scope.launch {
                try {
                    val fileName = "audio_$key"
                    audioUrls[key] = viewModel.uploadSongFile(storagePathId, fileName, uri)
                    audioFiles[key] = true
                } catch (e: Exception) {
                    fileError = "Impossible d'envoyer l'audio"
                } finally {
                    uploadingAudios[key] = false
                    activeAudioUploadKey = null
                }
            }
        }
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(if (existingSong != null) "Modifier le chant" else "Ajouter un chant") },
        text = {
            Column(
                modifier = Modifier
                    .heightIn(max = 580.dp)
                    .verticalScroll(rememberScrollState())
            ) {
                OutlinedTextField(value = titre, onValueChange = { titre = it }, label = { Text("Titre") }, modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(value = compositeur, onValueChange = { compositeur = it }, label = { Text("Compositeur") }, modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(8.dp))

                ExposedDropdownMenuBox(expanded = expanded, onExpandedChange = { expanded = it }) {
                    OutlinedTextField(
                        value = selectedFolder?.nom ?: "Aucun dossier",
                        onValueChange = {},
                        readOnly = true,
                        label = { Text("Dossier") },
                        trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expanded) },
                        modifier = Modifier.fillMaxWidth().menuAnchor()
                    )
                    androidx.compose.material3.DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
                        androidx.compose.material3.DropdownMenuItem(text = { Text("Aucun dossier") }, onClick = { selectedFolder = null; expanded = false })
                        folders.forEach { folder ->
                            androidx.compose.material3.DropdownMenuItem(text = { Text(folder.nom) }, onClick = { selectedFolder = folder; expanded = false })
                        }
                    }
                }

                Spacer(modifier = Modifier.height(14.dp))
                Text("Partition", style = MaterialTheme.typography.labelLarge)
                Spacer(modifier = Modifier.height(8.dp))
                Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    ContentTile(
                        label = "PDF",
                        icon = Icons.Filled.PictureAsPdf,
                        isDone = partitionType == "pdf" && partitionUrl.isNotBlank(),
                        isLoading = uploadingPartition,
                        onClick = { pdfPickerLauncher.launch("application/pdf") }
                    )
                    ContentTile(
                        label = "Photo",
                        icon = Icons.Filled.Image,
                        isDone = partitionType == "image" && partitionUrl.isNotBlank(),
                        isLoading = uploadingPartition,
                        onClick = { imagePickerLauncher.launch(PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly)) }
                    )
                }
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = if (partitionType == "link") partitionUrl else "",
                    onValueChange = { partitionUrl = it; partitionType = "link" },
                    label = { Text("Lien vers la partition (optionnel)") },
                    modifier = Modifier.fillMaxWidth()
                )
                if (partitionUrl.isNotBlank()) {
                    TextButton(onClick = {
                        if (partitionType != "link") scope.launch { viewModel.deleteStorageFile(partitionUrl) }
                        partitionUrl = ""
                        partitionType = "link"
                    }) { Text("Retirer la partition") }
                }

                Spacer(modifier = Modifier.height(14.dp))
                Text("Audios par pupitre", style = MaterialTheme.typography.labelLarge)
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    "Ajoute jusqu'à 4 audios : un pour Soprano, Alto, Ténor et Basse.",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color.DarkGray
                )
                Spacer(modifier = Modifier.height(10.dp))

                pupitres.forEach { (key, label) ->
                    AudioSlotEditor(
                        label = label,
                        currentUrl = audioUrls[key].orEmpty(),
                        isFile = audioFiles[key] == true,
                        isUploading = uploadingAudios[key] == true,
                        onPickFile = {
                            activeAudioUploadKey = key
                            audioFilePickerLauncher.launch("audio/*")
                        },
                        isRecording = recordingPupitreKey == key,
                        onRecord = {
                            if (recordingPupitreKey == key) {
                                stopRecordingAndUpload()
                            } else if (recordingPupitreKey == null) {
                                val granted = ContextCompat.checkSelfPermission(
                                    context,
                                    Manifest.permission.RECORD_AUDIO
                                ) == PackageManager.PERMISSION_GRANTED
                                if (granted) {
                                    startRecordingFor(key)
                                } else {
                                    activeAudioUploadKey = key
                                    recordPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
                                }
                            }
                        },
                        onLinkChange = {
                            audioUrls[key] = it
                            audioFiles[key] = false
                        },
                        onClear = {
                            val oldUrl = audioUrls[key].orEmpty()
                            if (audioFiles[key] == true && oldUrl.isNotBlank()) {
                                scope.launch { viewModel.deleteStorageFile(oldUrl) }
                            }
                            audioUrls.remove(key)
                            audioFiles.remove(key)
                        }
                    )
                    Spacer(modifier = Modifier.height(10.dp))
                }

                fileError?.let {
                    Text(it, color = MaterialTheme.colorScheme.error, style = MaterialTheme.typography.bodySmall)
                    Spacer(modifier = Modifier.height(8.dp))
                }

                OutlinedTextField(
                    value = youtubeUrl,
                    onValueChange = { youtubeUrl = it },
                    label = { Text("Vidéo YouTube (optionnel)") },
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    androidx.compose.material3.Checkbox(checked = appris, onCheckedChange = { appris = it })
                    Text("Déjà appris par la chorale")
                }
            }
        },
        confirmButton = {
            TextButton(
                onClick = {
                    onSave(
                        titre,
                        compositeur,
                        partitionUrl,
                        partitionType,
                        youtubeUrl,
                        selectedFolder?.id ?: "",
                        appris,
                        audioUrls.filterValues { it.isNotBlank() },
                        audioFiles.toMap()
                    )
                },
                enabled = titre.isNotBlank() && recordingPupitreKey == null
            ) { Text(if (existingSong != null) "Enregistrer" else "Ajouter") }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

@Composable
private fun AudioSlotEditor(
    label: String,
    currentUrl: String,
    isFile: Boolean,
    isUploading: Boolean,
    onPickFile: () -> Unit,
    isRecording: Boolean,
    onRecord: () -> Unit,
    onLinkChange: (String) -> Unit,
    onClear: () -> Unit
) {
    Surface(shape = RoundedCornerShape(18.dp), color = Color.White, shadowElevation = 1.dp) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.SpaceBetween, modifier = Modifier.fillMaxWidth()) {
                Text(label, style = MaterialTheme.typography.titleSmall, color = Purple40)
                if (currentUrl.isNotBlank()) {
                    AssistChip(
                        onClick = {},
                        enabled = false,
                        label = { Text(if (isFile) "Fichier ajouté" else "Lien prêt") },
                        colors = AssistChipDefaults.assistChipColors(
                            disabledContainerColor = Color(0xFFEFF3FF),
                            disabledLabelColor = Purple40
                        )
                    )
                }
            }
            Spacer(modifier = Modifier.height(8.dp))
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                ContentTile(
                    label = "Fichier",
                    icon = Icons.Filled.AudioFile,
                    isDone = currentUrl.isNotBlank() && isFile,
                    isLoading = isUploading,
                    onClick = onPickFile,
                    small = true
                )
                ContentTile(
                    label = if (isRecording) "Arrêter" else "Enregistrer",
                    icon = if (isRecording) Icons.Filled.Stop else Icons.Filled.Mic,
                    isDone = false,
                    isLoading = false,
                    onClick = onRecord,
                    small = true
                )
            }
            Spacer(modifier = Modifier.height(8.dp))
            OutlinedTextField(
                value = if (isFile) "" else currentUrl,
                onValueChange = onLinkChange,
                label = { Text("Ou coller un lien audio") },
                modifier = Modifier.fillMaxWidth(),
                enabled = !isRecording
            )
            if (isRecording) {
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    "Enregistrement en cours… appuie sur Arrêter pour sauvegarder.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.error
                )
            }
            if (currentUrl.isNotBlank()) {
                TextButton(onClick = onClear) { Text("Retirer") }
            }
        }
    }
}

@Composable
private fun ContentTile(
    label: String,
    icon: ImageVector,
    isDone: Boolean,
    isLoading: Boolean,
    onClick: () -> Unit,
    small: Boolean = false
) {
    val tileSize = if (small) 84.dp else 88.dp
    Box(
        modifier = Modifier
            .size(tileSize)
            .clip(RoundedCornerShape(16.dp))
            .background(Purple40)
            .clickable(enabled = !isLoading, onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            if (isLoading) {
                CircularProgressIndicator(color = Color.White, modifier = Modifier.size(20.dp))
            } else {
                Icon(icon, contentDescription = label, tint = Color.White, modifier = Modifier.size(24.dp))
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(label, color = Color.White, style = MaterialTheme.typography.labelSmall)
        }
        if (isDone && !isLoading) {
            Box(
                modifier = Modifier
                    .align(Alignment.TopEnd)
                    .padding(4.dp)
                    .size(18.dp)
                    .clip(CircleShape)
                    .background(Color.White),
                contentAlignment = Alignment.Center
            ) {
                Icon(Icons.Filled.Check, contentDescription = null, tint = Purple40, modifier = Modifier.size(12.dp))
            }
        }
    }
}
