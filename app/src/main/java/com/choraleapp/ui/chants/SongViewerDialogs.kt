package com.choraleapp.ui.chants

import android.graphics.Bitmap
import android.graphics.pdf.PdfRenderer
import android.media.MediaPlayer
import android.os.ParcelFileDescriptor
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronLeft
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Slider
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import coil.compose.AsyncImage
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.io.File

@Composable
fun PdfViewerDialog(viewModel: ChantsViewModel, url: String, onDismiss: () -> Unit) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()

    var pageBitmap by remember { mutableStateOf<Bitmap?>(null) }
    var pageIndex by remember { mutableStateOf(0) }
    var pageCount by remember { mutableStateOf(0) }
    var errorMsg by remember { mutableStateOf<String?>(null) }
    var isLoading by remember { mutableStateOf(true) }

    val rendererHolder = remember { arrayOfNulls<PdfRenderer>(1) }
    val pfdHolder = remember { arrayOfNulls<ParcelFileDescriptor>(1) }
    val fileHolder = remember { arrayOfNulls<File>(1) }

    suspend fun renderPage(index: Int) {
        val renderer = rendererHolder[0] ?: return
        if (index < 0 || index >= renderer.pageCount) return
        val page = renderer.openPage(index)
        val bitmap = Bitmap.createBitmap(page.width, page.height, Bitmap.Config.ARGB_8888)
        page.render(bitmap, null, null, PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY)
        page.close()
        pageBitmap = bitmap
        pageIndex = index
    }

    LaunchedEffect(url) {
        try {
            val tempFile = File(context.cacheDir, "partition_${System.currentTimeMillis()}.pdf")
            viewModel.downloadSongFile(url, tempFile)
            val pfd = ParcelFileDescriptor.open(tempFile, ParcelFileDescriptor.MODE_READ_ONLY)
            val renderer = PdfRenderer(pfd)
            rendererHolder[0] = renderer
            pfdHolder[0] = pfd
            fileHolder[0] = tempFile
            pageCount = renderer.pageCount
            renderPage(0)
            isLoading = false
        } catch (e: Exception) {
            errorMsg = "Impossible d'afficher la partition"
            isLoading = false
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            rendererHolder[0]?.close()
            pfdHolder[0]?.close()
            fileHolder[0]?.delete()
        }
    }

    Dialog(onDismissRequest = onDismiss, properties = DialogProperties(usePlatformDefaultWidth = false)) {
        Surface(modifier = Modifier.fillMaxSize()) {
            Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Partition", style = MaterialTheme.typography.titleMedium)
                    IconButton(onClick = onDismiss) {
                        Icon(Icons.Filled.Close, contentDescription = "Fermer")
                    }
                }
                Box(modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp), contentAlignment = Alignment.Center) {
                    when {
                        isLoading -> CircularProgressIndicator()
                        errorMsg != null -> Text(errorMsg ?: "", color = MaterialTheme.colorScheme.error)
                        pageBitmap != null -> Image(
                            bitmap = pageBitmap!!.asImageBitmap(),
                            contentDescription = "Page ${pageIndex + 1}",
                            modifier = Modifier.fillMaxWidth(),
                            contentScale = ContentScale.FillWidth
                        )
                    }
                }
                if (pageCount > 1) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Center,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        IconButton(onClick = { scope.launch { renderPage(pageIndex - 1) } }, enabled = pageIndex > 0) {
                            Icon(Icons.Filled.ChevronLeft, contentDescription = "Page précédente")
                        }
                        Text("${pageIndex + 1} / $pageCount")
                        IconButton(
                            onClick = { scope.launch { renderPage(pageIndex + 1) } },
                            enabled = pageIndex < pageCount - 1
                        ) {
                            Icon(Icons.Filled.ChevronRight, contentDescription = "Page suivante")
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun ImageViewerDialog(url: String, onDismiss: () -> Unit) {
    Dialog(onDismissRequest = onDismiss, properties = DialogProperties(usePlatformDefaultWidth = false)) {
        Surface(modifier = Modifier.fillMaxSize()) {
            Box(modifier = Modifier.fillMaxSize()) {
                AsyncImage(
                    model = url,
                    contentDescription = "Partition",
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Fit
                )
                IconButton(
                    onClick = onDismiss,
                    modifier = Modifier.align(Alignment.TopEnd).padding(8.dp)
                ) {
                    Icon(Icons.Filled.Close, contentDescription = "Fermer")
                }
            }
        }
    }
}

@Composable
fun AudioPlayerDialog(url: String, onDismiss: () -> Unit) {
    var isPlaying by remember { mutableStateOf(false) }
    var isPrepared by remember { mutableStateOf(false) }
    var currentPos by remember { mutableStateOf(0) }
    var duration by remember { mutableStateOf(0) }
    var errorMsg by remember { mutableStateOf<String?>(null) }

    val playerHolder = remember { arrayOfNulls<MediaPlayer>(1) }

    LaunchedEffect(url) {
        try {
            val player = MediaPlayer()
            player.setDataSource(url)
            player.setOnPreparedListener {
                isPrepared = true
                duration = it.duration
            }
            player.setOnCompletionListener {
                isPlaying = false
            }
            player.prepareAsync()
            playerHolder[0] = player
        } catch (e: Exception) {
            errorMsg = "Impossible de lire l'audio"
        }
    }

    LaunchedEffect(isPlaying) {
        while (isPlaying) {
            playerHolder[0]?.let { currentPos = it.currentPosition }
            delay(500)
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            playerHolder[0]?.release()
        }
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Écouter") },
        text = {
            Column {
                when {
                    errorMsg != null -> Text(errorMsg ?: "", color = MaterialTheme.colorScheme.error)
                    !isPrepared -> CircularProgressIndicator()
                    else -> {
                        Slider(
                            value = currentPos.toFloat(),
                            onValueChange = { newVal ->
                                playerHolder[0]?.seekTo(newVal.toInt())
                                currentPos = newVal.toInt()
                            },
                            valueRange = 0f..(duration.toFloat().coerceAtLeast(1f))
                        )
                        Text("${formatMillis(currentPos)} / ${formatMillis(duration)}")
                    }
                }
            }
        },
        confirmButton = {
            TextButton(
                onClick = {
                    val player = playerHolder[0] ?: return@TextButton
                    if (isPlaying) {
                        player.pause()
                        isPlaying = false
                    } else {
                        player.start()
                        isPlaying = true
                    }
                },
                enabled = isPrepared
            ) {
                Text(if (isPlaying) "Pause" else "Lecture")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) { Text("Fermer") }
        }
    )
}

private fun formatMillis(ms: Int): String {
    val totalSeconds = ms / 1000
    val minutes = totalSeconds / 60
    val seconds = totalSeconds % 60
    return String.format("%d:%02d", minutes, seconds)
}
