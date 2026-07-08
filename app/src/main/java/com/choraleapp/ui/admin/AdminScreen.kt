package com.choraleapp.ui.admin

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Card
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.choraleapp.data.model.Member
import com.choraleapp.data.model.Event
import java.text.SimpleDateFormat
import java.util.Locale

private val roleLabels = listOf(
    "membre" to "Membre",
    "contributeur" to "Contributeur",
    "admin" to "Admin"
)

@Composable
fun AdminScreen(onBack: () -> Unit, viewModel: AdminViewModel = viewModel()) {
    val members = viewModel.members.value
    val isLoading = viewModel.isLoading.value
    val errorMessage = viewModel.errorMessage.value
    val generatedCode = viewModel.lastGeneratedCode.value
    val events = viewModel.events.value

    var showAddDialog by remember { mutableStateOf(false) }
    var editingMember by remember { mutableStateOf<Member?>(null) }
    var deletingMember by remember { mutableStateOf<Member?>(null) }
    var regeneratedCode by remember { mutableStateOf<String?>(null) }
    var showPresenceDialog by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            CenterAlignedTopAppBar(
                title = { Text("Administration") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Filled.ArrowBack, contentDescription = "Retour")
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { showAddDialog = true }) {
                Icon(Icons.Filled.Add, contentDescription = "Ajouter un choriste")
            }
        }
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(24.dp)) {
            OutlinedButton(onClick = { showPresenceDialog = true }, modifier = Modifier.fillMaxWidth()) {
                Text("Voir les réponses aux présences")
            }
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                "${members.size} choriste(s) enregistré(s)",
                style = MaterialTheme.typography.bodySmall
            )
            Spacer(modifier = Modifier.height(16.dp))

            when {
                isLoading -> CircularProgressIndicator()
                errorMessage != null -> Text(errorMessage, color = MaterialTheme.colorScheme.error)
                members.isEmpty() -> Text("Aucun choriste pour l'instant.")
                else -> LazyColumn(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    items(members) { member ->
                        MemberCard(
                            member = member,
                            onEdit = { editingMember = member },
                            onDelete = { deletingMember = member }
                        )
                    }
                }
            }
        }
    }


    if (showPresenceDialog) {
        PresenceResponsesDialog(
            events = events,
            members = members,
            onDismiss = { showPresenceDialog = false }
        )
    }

    if (showAddDialog) {
        MemberFormDialog(
            existingMember = null,
            onDismiss = { showAddDialog = false },
            onSave = { prenom, nom, pupitre, role ->
                viewModel.addMember(prenom, nom, pupitre, role) { showAddDialog = false }
            }
        )
    }

    editingMember?.let { member ->
        MemberFormDialog(
            existingMember = member,
            onDismiss = { editingMember = null },
            onSave = { prenom, nom, pupitre, role ->
                viewModel.updateMember(member.id, prenom, nom, pupitre, role, member.uid) {
                    editingMember = null
                }
            },
            onRegenerateCode = {
                viewModel.regenerateCode(member.id) { newCode ->
                    regeneratedCode = newCode
                }
            }
        )
    }

    deletingMember?.let { member ->
        AlertDialog(
            onDismissRequest = { deletingMember = null },
            title = { Text("Supprimer ce choriste ?") },
            text = {
                Text(
                    "La fiche de \"${member.prenom} ${member.nom}\" sera supprimée. " +
                        "Si son compte était déjà actif, ça ne supprime pas son compte de connexion, " +
                        "juste ses informations dans l'app."
                )
            },
            confirmButton = {
                TextButton(onClick = {
                    viewModel.deleteMember(member) { deletingMember = null }
                }) {
                    Text("Supprimer", color = MaterialTheme.colorScheme.error)
                }
            },
            dismissButton = {
                TextButton(onClick = { deletingMember = null }) { Text("Annuler") }
            }
        )
    }

    if (generatedCode != null) {
        CodeRevealDialog(
            title = "Choriste ajouté !",
            code = generatedCode,
            onDismiss = { viewModel.clearGeneratedCode() }
        )
    }

    regeneratedCode?.let { code ->
        CodeRevealDialog(
            title = "Nouveau code généré",
            code = code,
            onDismiss = { regeneratedCode = null }
        )
    }
}

@Composable
private fun CodeRevealDialog(title: String, code: String, onDismiss: () -> Unit) {
    val context = LocalContext.current
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(title) },
        text = {
            Column {
                Text("Transmets ce code au choriste pour qu'il crée son compte :")
                Spacer(modifier = Modifier.height(8.dp))
                Text(code, style = MaterialTheme.typography.headlineSmall)
            }
        },
        confirmButton = {
            TextButton(onClick = {
                val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                clipboard.setPrimaryClip(ClipData.newPlainText("Code d'invitation", code))
            }) {
                Text("Copier")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) { Text("Fermer") }
        }
    )
}

@Composable
private fun MemberCard(member: Member, onEdit: () -> Unit, onDelete: () -> Unit) {
    val context = LocalContext.current
    val roleLabel = roleLabels.firstOrNull { it.first == member.role }?.second ?: member.role

    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text("${member.prenom} ${member.nom}", style = MaterialTheme.typography.titleMedium)
                    Text(
                        "${member.pupitre.ifBlank { "-" }} · $roleLabel",
                        style = MaterialTheme.typography.bodySmall
                    )
                }
                Row {
                    IconButton(onClick = onEdit, modifier = Modifier.size(32.dp)) {
                        Icon(Icons.Filled.Edit, contentDescription = "Modifier", modifier = Modifier.size(18.dp))
                    }
                    IconButton(onClick = onDelete, modifier = Modifier.size(32.dp)) {
                        Icon(Icons.Filled.Delete, contentDescription = "Supprimer", modifier = Modifier.size(18.dp))
                    }
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            if (member.claimed) {
                Text("✓ Compte actif", style = MaterialTheme.typography.labelSmall)
            } else {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        "En attente · Code : ${member.inviteCode}",
                        style = MaterialTheme.typography.labelSmall,
                        modifier = Modifier.weight(1f)
                    )
                    IconButton(
                        onClick = {
                            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                            clipboard.setPrimaryClip(ClipData.newPlainText("Code d'invitation", member.inviteCode))
                        },
                        modifier = Modifier.size(28.dp)
                    ) {
                        Icon(
                            Icons.Filled.ContentCopy,
                            contentDescription = "Copier le code",
                            modifier = Modifier.size(16.dp)
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun MemberFormDialog(
    existingMember: Member?,
    onDismiss: () -> Unit,
    onSave: (String, String, String, String) -> Unit,
    onRegenerateCode: (() -> Unit)? = null
) {
    var prenom by remember { mutableStateOf(existingMember?.prenom ?: "") }
    var nom by remember { mutableStateOf(existingMember?.nom ?: "") }
    var pupitre by remember { mutableStateOf(existingMember?.pupitre ?: "") }
    var selectedRole by remember {
        mutableStateOf(roleLabels.firstOrNull { it.first == existingMember?.role } ?: roleLabels.first())
    }
    var expanded by remember { mutableStateOf(false) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(if (existingMember != null) "Modifier le choriste" else "Nouveau choriste") },
        text = {
            Column {
                OutlinedTextField(
                    value = prenom,
                    onValueChange = { prenom = it },
                    label = { Text("Prénom") },
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = nom,
                    onValueChange = { nom = it },
                    label = { Text("Nom") },
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = pupitre,
                    onValueChange = { pupitre = it },
                    label = { Text("Pupitre (ex : Ténor)") },
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))

                ExposedDropdownMenuBox(expanded = expanded, onExpandedChange = { expanded = it }) {
                    OutlinedTextField(
                        value = selectedRole.second,
                        onValueChange = {},
                        readOnly = true,
                        label = { Text("Rôle") },
                        trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expanded) },
                        modifier = Modifier.fillMaxWidth().menuAnchor()
                    )
                    DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
                        roleLabels.forEach { role ->
                            DropdownMenuItem(
                                text = { Text(role.second) },
                                onClick = { selectedRole = role; expanded = false }
                            )
                        }
                    }
                }

                if (existingMember == null) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        "Un code d'invitation sera généré automatiquement.",
                        style = MaterialTheme.typography.labelSmall
                    )
                } else if (!existingMember.claimed && onRegenerateCode != null) {
                    Spacer(modifier = Modifier.height(8.dp))
                    TextButton(onClick = onRegenerateCode) {
                        Text("Régénérer le code d'invitation")
                    }
                }
            }
        },
        confirmButton = {
            TextButton(
                onClick = { onSave(prenom, nom, pupitre, selectedRole.first) },
                enabled = prenom.isNotBlank() && nom.isNotBlank()
            ) {
                Text(if (existingMember != null) "Enregistrer" else "Créer")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) { Text("Annuler") }
        }
    )
}


@Composable
private fun PresenceResponsesDialog(
    events: List<Event>,
    members: List<Member>,
    onDismiss: () -> Unit
) {
    val regularEvents = events.filter { !it.synthetic }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Réponses aux présences") },
        text = {
            LazyColumn(
                modifier = Modifier.heightIn(max = 520.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(regularEvents, key = { it.id }) { event ->
                    Card(modifier = Modifier.fillMaxWidth()) {
                        Column(modifier = Modifier.padding(12.dp)) {
                            Text(event.titre, style = MaterialTheme.typography.titleMedium)
                            Text(
                                event.date?.toDate()?.let { SimpleDateFormat("dd/MM/yyyy", Locale.FRANCE).format(it) } ?: "Date à préciser",
                                style = MaterialTheme.typography.bodySmall
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            members.filter { it.uid.isNotBlank() }.forEach { member ->
                                val response = event.reponses[member.uid]
                                val label = when (response) {
                                    "present" -> "Présent"
                                    "absent" -> "Absent"
                                    "peut-etre" -> "Peut-être"
                                    else -> "Pas de réponse"
                                }
                                Text("${member.prenom} ${member.nom} · $label", style = MaterialTheme.typography.bodySmall)
                            }
                        }
                    }
                }
            }
        },
        confirmButton = { TextButton(onClick = onDismiss) { Text("Fermer") } }
    )
}
