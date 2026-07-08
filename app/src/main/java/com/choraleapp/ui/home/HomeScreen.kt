package com.choraleapp.ui.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.Forum
import androidx.compose.material.icons.filled.LibraryMusic
import androidx.compose.material3.AssistChip
import androidx.compose.material3.AssistChipDefaults
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.choraleapp.R
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import java.text.SimpleDateFormat
import java.util.Locale

private val eventTypeLabels = mapOf(
    "repetition" to "Répétition",
    "messe" to "Messe",
    "reunion" to "Réunion",
    "concert" to "Concert",
    "autre" to "Autre"
)

@Composable
fun HomeScreen(
    onNavigateToChants: () -> Unit,
    onNavigateToAgenda: () -> Unit,
    onNavigateToMessages: () -> Unit,
    viewModel: HomeViewModel = viewModel()
) {
    val member = viewModel.member.value
    val isLoading = viewModel.isLoading.value
    val nextEvent = viewModel.nextEvent.value
    val recentSongs = viewModel.recentSongs.value

    Scaffold(containerColor = Background) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(20.dp)
        ) {
            if (isLoading) {
                CircularProgressIndicator(color = Purple40)
            } else {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Image(
                            painter = painterResource(id = R.drawable.ic_launcher_foreground),
                            contentDescription = "Logo Chœur Lumina",
                            modifier = Modifier
                                .size(52.dp)
                                .clip(RoundedCornerShape(14.dp))
                        )
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text(
                                text = "Chœur Lumina",
                                style = MaterialTheme.typography.labelLarge,
                                color = Color.DarkGray
                            )
                            Text(
                                text = "Bonjour ${member?.prenom ?: ""}",
                                style = MaterialTheme.typography.headlineMedium,
                                color = Purple40
                            )
                        }
                    }
                    Surface(
                        shape = CircleShape,
                        color = Color.White,
                        shadowElevation = 1.dp
                    ) {
                        Text(
                            text = "👋",
                            style = MaterialTheme.typography.headlineLarge,
                            modifier = Modifier.padding(8.dp)
                        )
                    }
                }
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = "Bienvenue dans l'espace du chœur. Retrouve rapidement tes chants, l'agenda et les échanges.",
                    style = MaterialTheme.typography.bodyMedium,
                    color = Color.DarkGray
                )
                Spacer(modifier = Modifier.height(10.dp))
                AssistChip(
                    onClick = {},
                    enabled = false,
                    label = { Text("Pupitre : ${member?.pupitre?.ifBlank { "-" } ?: "-"}") },
                    colors = AssistChipDefaults.assistChipColors(
                        disabledContainerColor = Color(0xFFFFF1CE),
                        disabledLabelColor = Color(0xFF8A5A00)
                    )
                )

                Spacer(modifier = Modifier.height(16.dp))
                HorizontalDivider(color = Color(0xFFD9D4C7))
                Spacer(modifier = Modifier.height(16.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    HomeShortcutCard("Répertoire", Icons.Filled.LibraryMusic, onNavigateToChants, Modifier.weight(1f))
                    HomeShortcutCard("Agenda", Icons.Filled.CalendarMonth, onNavigateToAgenda, Modifier.weight(1f))
                    HomeShortcutCard("Messages", Icons.Filled.Forum, onNavigateToMessages, Modifier.weight(1f))
                }

                Spacer(modifier = Modifier.height(18.dp))

                Surface(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large,
                    color = Color.White,
                    tonalElevation = 1.dp,
                    shadowElevation = 2.dp
                ) {
                    Column(modifier = Modifier.padding(18.dp)) {
                        Text("Prochain événement", style = MaterialTheme.typography.titleLarge, color = Purple40)
                        Spacer(modifier = Modifier.height(10.dp))
                        if (nextEvent == null) {
                            Text("Aucun événement à venir pour l'instant.", style = MaterialTheme.typography.bodyMedium)
                        } else {
                            val typeLabel = eventTypeLabels[nextEvent.type] ?: nextEvent.type
                            val dateStr = nextEvent.date?.toDate()?.let {
                                SimpleDateFormat("EEEE d MMMM", Locale.FRANCE).format(it)
                            } ?: "Date à préciser"

                            AssistChip(
                                onClick = {},
                                enabled = false,
                                label = { Text(typeLabel) },
                                colors = AssistChipDefaults.assistChipColors(
                                    disabledContainerColor = Color(0xFFEFF3FF),
                                    disabledLabelColor = Purple40
                                )
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(nextEvent.titre, style = MaterialTheme.typography.titleMedium, color = Color.Black)
                            Text(dateStr.replaceFirstChar { it.uppercase() }, style = MaterialTheme.typography.bodyMedium)
                            if (nextEvent.lieu.isNotBlank()) Text(nextEvent.lieu, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)

                            Spacer(modifier = Modifier.height(14.dp))
                            val myReponse = viewModel.currentUserId?.let { nextEvent.reponses[it] }
                            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                                OutlinedButton(onClick = { viewModel.respondToNextEvent("present") }, enabled = myReponse != "present") { Text(if (myReponse == "present") "✓ Présent" else "Présent") }
                                OutlinedButton(onClick = { viewModel.respondToNextEvent("absent") }, enabled = myReponse != "absent") { Text(if (myReponse == "absent") "✓ Absent" else "Absent") }
                            }
                            Spacer(modifier = Modifier.height(8.dp))
                            Button(onClick = { viewModel.respondToNextEvent("peut-etre") }, enabled = myReponse != "peut-etre") {
                                Text(if (myReponse == "peut-etre") "✓ Peut-être" else "Peut-être")
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                Surface(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large,
                    color = Color.White,
                    tonalElevation = 1.dp,
                    shadowElevation = 2.dp
                ) {
                    Column(modifier = Modifier.padding(18.dp)) {
                        Text("Derniers chants ajoutés", style = MaterialTheme.typography.titleLarge, color = Purple40)
                        Spacer(modifier = Modifier.height(10.dp))
                        if (recentSongs.isEmpty()) {
                            Text("Aucun chant pour l'instant.", style = MaterialTheme.typography.bodyMedium)
                        } else {
                            recentSongs.forEach { song ->
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.SpaceBetween
                                ) {
                                    Column(modifier = Modifier.weight(1f)) {
                                        Text("• ${song.titre}", style = MaterialTheme.typography.bodyLarge, color = Color.Black)
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
                                Spacer(modifier = Modifier.height(8.dp))
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun HomeShortcutCard(label: String, icon: ImageVector, onClick: () -> Unit, modifier: Modifier = Modifier) {
    Surface(
        modifier = modifier.clickable(onClick = onClick),
        color = Color.White,
        shape = MaterialTheme.shapes.large,
        shadowElevation = 2.dp
    ) {
        Column(
            modifier = Modifier.padding(vertical = 14.dp, horizontal = 10.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Surface(shape = CircleShape, color = Color(0xFFEFF3FF)) {
                Icon(icon, contentDescription = label, tint = Purple40, modifier = Modifier.padding(10.dp).size(20.dp))
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(label, style = MaterialTheme.typography.labelLarge, color = Purple40)
        }
    }
}
