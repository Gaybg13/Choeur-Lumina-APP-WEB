package com.choraleapp.ui.profil

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.choraleapp.ui.components.LuminaHeader
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import com.google.firebase.auth.FirebaseAuth

@Composable
fun ProfilScreen(
    onLogout: () -> Unit,
    onNavigateToAdmin: () -> Unit,
    viewModel: ProfilViewModel = viewModel()
) {
    val member = viewModel.member.value
    val isUploading = viewModel.isUploadingPhoto.value
    val errorMessage = viewModel.errorMessage.value
    var showBirthdayDialog by remember { mutableStateOf(false) }

    val photoPickerLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.PickVisualMedia()
    ) { uri ->
        if (uri != null) viewModel.uploadPhoto(uri)
    }

    Scaffold(
        topBar = { LuminaHeader("Profil") },
        containerColor = Background
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .background(Background)
                .verticalScroll(rememberScrollState())
                .padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Surface(
                modifier = Modifier.fillMaxWidth(),
                color = Purple40,
                shape = MaterialTheme.shapes.large,
                shadowElevation = 3.dp
            ) {
                Column(
                    modifier = Modifier.padding(22.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Surface(
                        modifier = Modifier
                            .size(104.dp)
                            .clickable {
                                photoPickerLauncher.launch(
                                    PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly)
                                )
                            },
                        shape = CircleShape,
                        color = Color.White.copy(alpha = 0.14f)
                    ) {
                        when {
                            isUploading -> Column(
                                modifier = Modifier.fillMaxSize(),
                                horizontalAlignment = Alignment.CenterHorizontally,
                                verticalArrangement = Arrangement.Center
                            ) {
                                CircularProgressIndicator(color = Color.White)
                            }

                            !member?.photoUrl.isNullOrBlank() -> AsyncImage(
                                model = member?.photoUrl,
                                contentDescription = "Photo de profil",
                                modifier = Modifier.fillMaxSize().clip(CircleShape)
                            )

                            else -> Column(
                                modifier = Modifier.fillMaxSize(),
                                horizontalAlignment = Alignment.CenterHorizontally,
                                verticalArrangement = Arrangement.Center
                            ) {
                                Text(
                                    member?.prenom?.take(1)?.uppercase() ?: "?",
                                    color = Color.White,
                                    style = MaterialTheme.typography.headlineMedium
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))
                    Text(
                        text = "${member?.prenom ?: ""} ${member?.nom ?: ""}".trim(),
                        style = MaterialTheme.typography.headlineSmall,
                        color = Color.White
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = member?.pupitre?.ifBlank { "Choriste" } ?: "Choriste",
                        style = MaterialTheme.typography.titleMedium,
                        color = Gold
                    )
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = "Touchez la photo pour la modifier",
                        style = MaterialTheme.typography.bodySmall,
                        color = Color.White.copy(alpha = 0.82f)
                    )
                }
            }

            if (errorMessage != null) {
                Spacer(modifier = Modifier.height(10.dp))
                Text(errorMessage, color = MaterialTheme.colorScheme.error)
            }

            Spacer(modifier = Modifier.height(18.dp))

            ProfileInfoCard(
                lines = listOf(
                    "Nom" to "${member?.prenom ?: ""} ${member?.nom ?: ""}".trim(),
                    "Email" to (member?.email ?: "-"),
                    "Pupitre" to (member?.pupitre?.ifBlank { "-" } ?: "-"),
                    "Anniversaire" to birthdayLabel(member?.birthdayDay ?: 0, member?.birthdayMonth ?: 0),
                    "Rôle" to (member?.role ?: "membre")
                )
            )

            Spacer(modifier = Modifier.height(20.dp))

            OutlinedButton(onClick = { showBirthdayDialog = true }, modifier = Modifier.fillMaxWidth()) {
                Text(if ((member?.birthdayDay ?: 0) > 0) "Modifier ma date d'anniversaire" else "Ajouter ma date d'anniversaire")
            }
            Spacer(modifier = Modifier.height(12.dp))

            if (member?.role == "admin") {
                OutlinedButton(onClick = onNavigateToAdmin, modifier = Modifier.fillMaxWidth()) {
                    Text("Administration")
                }
                Spacer(modifier = Modifier.height(12.dp))
            }

            Button(
                onClick = {
                    FirebaseAuth.getInstance().signOut()
                    onLogout()
                },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Se déconnecter")
            }
        }
    }

    if (showBirthdayDialog) {
        BirthdayDialog(
            initialDay = member?.birthdayDay ?: 0,
            initialMonth = member?.birthdayMonth ?: 0,
            onDismiss = { showBirthdayDialog = false },
            onSave = { day, month ->
                viewModel.updateBirthday(day, month) { showBirthdayDialog = false }
            }
        )
    }
}

@Composable
private fun BirthdayDialog(
    initialDay: Int,
    initialMonth: Int,
    onDismiss: () -> Unit,
    onSave: (Int, Int) -> Unit
) {
    var dayText by remember { mutableStateOf(if (initialDay > 0) initialDay.toString() else "") }
    var monthText by remember { mutableStateOf(if (initialMonth > 0) initialMonth.toString() else "") }
    val day = dayText.toIntOrNull() ?: 0
    val month = monthText.toIntOrNull() ?: 0
    val valid = day in 1..31 && month in 1..12

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Mon anniversaire") },
        text = {
            Column {
                Text("Renseigne uniquement le jour et le mois. L'année n'est pas nécessaire.")
                Spacer(modifier = Modifier.height(12.dp))
                OutlinedTextField(
                    value = dayText,
                    onValueChange = { dayText = it.filter(Char::isDigit).take(2) },
                    label = { Text("Jour") },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = monthText,
                    onValueChange = { monthText = it.filter(Char::isDigit).take(2) },
                    label = { Text("Mois") },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                    modifier = Modifier.fillMaxWidth()
                )
            }
        },
        confirmButton = {
            TextButton(onClick = { onSave(day, month) }, enabled = valid) { Text("Enregistrer") }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

private fun birthdayLabel(day: Int, month: Int): String {
    if (day !in 1..31 || month !in 1..12) return "Non renseigné"
    val months = listOf("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre")
    return "$day ${months[month - 1]}"
}

@Composable
private fun ProfileInfoCard(lines: List<Pair<String, String>>) {
    Surface(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.large,
        color = Color.White,
        tonalElevation = 1.dp,
        shadowElevation = 2.dp
    ) {
        Column(modifier = Modifier.padding(18.dp)) {
            Text("Informations", style = MaterialTheme.typography.titleLarge, color = Purple40)
            Spacer(modifier = Modifier.height(14.dp))
            lines.forEachIndexed { index, (label, value) ->
                Column(modifier = Modifier.fillMaxWidth()) {
                    Text(
                        text = label,
                        style = MaterialTheme.typography.labelMedium,
                        color = Gold
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = value.ifBlank { "-" },
                        style = MaterialTheme.typography.bodyLarge,
                        color = Color.Black
                    )
                }
                if (index < lines.lastIndex) Spacer(modifier = Modifier.height(12.dp))
            }
        }
    }
}
