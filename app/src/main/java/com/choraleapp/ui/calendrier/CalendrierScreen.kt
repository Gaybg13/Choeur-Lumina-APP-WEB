package com.choraleapp.ui.calendrier

import android.app.TimePickerDialog
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
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.AssistChip
import androidx.compose.material3.AssistChipDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.FilterChip
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
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.choraleapp.data.model.Event
import com.choraleapp.data.model.Song
import com.choraleapp.ui.components.LuminaHeader
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import com.google.firebase.Timestamp
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

private val eventTypes = listOf(
    "repetition" to "Répétition",
    "messe" to "Messe",
    "reunion" to "Réunion",
    "concert" to "Concert",
    "anniversaire" to "Anniversaire",
    "autre" to "Autre"
)

@Composable
fun CalendrierScreen(viewModel: CalendrierViewModel = viewModel()) {
    val events = viewModel.events.value.sortedBy { it.date?.seconds ?: Long.MAX_VALUE }
    val songs = viewModel.songs.value
    val isLoading = viewModel.isLoading.value
    val errorMessage = viewModel.errorMessage.value
    var showAddDialog by remember { mutableStateOf(false) }
    var editingProgrammeEventId by remember { mutableStateOf<String?>(null) }
    var editingCompteRenduEventId by remember { mutableStateOf<String?>(null) }
    var editingEvent by remember { mutableStateOf<Event?>(null) }
    var deletingEvent by remember { mutableStateOf<Event?>(null) }
    var cancellingEvent by remember { mutableStateOf<Event?>(null) }

    LaunchedEffect(events.size) { viewModel.markAgendaSeen() }

    Scaffold(
        containerColor = Background,
        topBar = { LuminaHeader("Agenda") },
        floatingActionButton = {
            if (viewModel.canEdit.value) {
                FloatingActionButton(onClick = { showAddDialog = true }, containerColor = Gold, contentColor = Purple40) {
                    Icon(Icons.Filled.Add, contentDescription = "Ajouter un événement")
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
                    Text("Planning du chœur", style = MaterialTheme.typography.titleLarge, color = Purple40)
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        "Retrouve ici les prochains rendez-vous et indique rapidement ta présence.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.DarkGray
                    )
                }
            }
            Spacer(modifier = Modifier.height(14.dp))

            when {
                isLoading -> CircularProgressIndicator(color = Purple40)
                errorMessage != null -> Text(errorMessage, color = MaterialTheme.colorScheme.error)
                events.isEmpty() -> Surface(
                    modifier = Modifier.fillMaxWidth(),
                    color = Color.White,
                    shape = MaterialTheme.shapes.large,
                    shadowElevation = 1.dp
                ) {
                    Text("Aucun événement pour l'instant.", modifier = Modifier.padding(18.dp))
                }
                else -> {
                    val grouped = events.groupBy { monthLabelOf(it) }
                    LazyColumn(verticalArrangement = Arrangement.spacedBy(14.dp)) {
                        grouped.forEach { (monthLabel, monthEvents) ->
                            item {
                                Text(monthLabel, style = MaterialTheme.typography.titleMedium, color = Gold)
                            }
                            items(monthEvents) { event ->
                                TimelineEventCard(
                                    event = event,
                                    allSongs = songs,
                                    canEdit = viewModel.canEdit.value,
                                    currentUserId = viewModel.currentUserId,
                                    onRespond = { reponse -> viewModel.setReponse(event.id, reponse) },
                                    onEditProgramme = { editingProgrammeEventId = event.id },
                                    onEditCompteRendu = { editingCompteRenduEventId = event.id },
                                    onEdit = { editingEvent = event },
                                    onCancel = { cancellingEvent = event },
                                    onDelete = { deletingEvent = event }
                                )
                            }
                        }
                    }
                }
            }
        }
    }

    if (showAddDialog) {
        EventFormDialog(
            existingEvent = null,
            onDismiss = { showAddDialog = false },
            onSave = { titre, type, date, lieu, description ->
                viewModel.addEvent(titre, type, date, lieu, description) { showAddDialog = false }
            }
        )
    }

    editingEvent?.let { event ->
        EventFormDialog(
            existingEvent = event,
            onDismiss = { editingEvent = null },
            onSave = { titre, type, date, lieu, description ->
                viewModel.updateEvent(event.id, titre, type, date, lieu, description) { editingEvent = null }
            }
        )
    }


    cancellingEvent?.let { event ->
        AlertDialog(
            onDismissRequest = { cancellingEvent = null },
            title = { Text("Annuler cet événement ?") },
            text = { Text("L'événement restera visible comme annulé et un message rouge sera envoyé automatiquement dans le groupe.") },
            confirmButton = {
                TextButton(onClick = { viewModel.cancelEvent(event) { cancellingEvent = null } }) {
                    Text("Confirmer l'annulation", color = Color(0xFFB91C1C))
                }
            },
            dismissButton = { TextButton(onClick = { cancellingEvent = null }) { Text("Retour") } }
        )
    }

    deletingEvent?.let { event ->
        AlertDialog(
            onDismissRequest = { deletingEvent = null },
            title = { Text("Supprimer cet événement ?") },
            text = { Text("\"${event.titre}\" sera définitivement supprimé.") },
            confirmButton = { TextButton(onClick = { viewModel.deleteEvent(event.id) { deletingEvent = null } }) { Text("Supprimer", color = MaterialTheme.colorScheme.error) } },
            dismissButton = { TextButton(onClick = { deletingEvent = null }) { Text("Annuler") } }
        )
    }

    editingProgrammeEventId?.let { eventId ->
        val event = events.firstOrNull { it.id == eventId }
        if (event != null) {
            ProgrammeDialog(
                allSongs = songs,
                initialProgramme = event.programme,
                onDismiss = { editingProgrammeEventId = null },
                onSave = { newProgramme ->
                    viewModel.updateProgramme(eventId, newProgramme)
                    editingProgrammeEventId = null
                }
            )
        }
    }

    editingCompteRenduEventId?.let { eventId ->
        val event = events.firstOrNull { it.id == eventId }
        if (event != null) {
            CompteRenduDialog(
                initialTexte = event.compteRendu,
                onDismiss = { editingCompteRenduEventId = null },
                onSave = { texte ->
                    viewModel.updateCompteRendu(eventId, texte)
                    editingCompteRenduEventId = null
                }
            )
        }
    }
}

@Composable
private fun TimelineEventCard(
    event: Event,
    allSongs: List<Song>,
    canEdit: Boolean,
    currentUserId: String?,
    onRespond: (String) -> Unit,
    onEditProgramme: () -> Unit,
    onEditCompteRendu: () -> Unit,
    onEdit: () -> Unit,
    onCancel: () -> Unit,
    onDelete: () -> Unit
) {
    var expanded by remember { mutableStateOf(false) }
    val date = event.date?.toDate()
    val day = date?.let { SimpleDateFormat("dd", Locale.FRANCE).format(it) } ?: "--"
    val week = date?.let { SimpleDateFormat("EEE", Locale.FRANCE).format(it).uppercase(Locale.FRANCE) } ?: ""
    val typeLabel = eventTypes.firstOrNull { it.first == event.type }?.second
        ?: if (event.type == "anniversaire") "Anniversaire" else event.type
    val myResponse = currentUserId?.let { event.reponses[it] }
    val programmeSongs = event.programme.mapNotNull { id -> allSongs.firstOrNull { it.id == id } }

    Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.Top) {
        Surface(shape = RoundedCornerShape(16.dp), color = if (event.cancelled) Color(0xFF991B1B) else Purple40) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.width(48.dp).padding(vertical = 6.dp)
            ) {
                Text(day, style = MaterialTheme.typography.titleMedium, color = Color.White, fontWeight = FontWeight.Bold)
                Text(week, style = MaterialTheme.typography.labelSmall, color = Color.White.copy(alpha = 0.9f), maxLines = 1)
            }
        }
        Spacer(modifier = Modifier.width(10.dp))
        Surface(
            modifier = Modifier.weight(1f),
            shape = RoundedCornerShape(18.dp),
            color = Color.White,
            shadowElevation = 1.dp
        ) {
            Column(modifier = Modifier.padding(13.dp)) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Column(modifier = Modifier.weight(1f)) {
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                            Text(typeLabel, style = MaterialTheme.typography.labelMedium, color = if (event.cancelled) Color(0xFFB91C1C) else Gold)
                            if (event.cancelled) Text("ANNULÉ", style = MaterialTheme.typography.labelSmall, color = Color(0xFFB91C1C), fontWeight = FontWeight.Bold)
                        }
                        Text(event.titre, style = MaterialTheme.typography.titleMedium, color = Color.Black)
                        if (event.lieu.isNotBlank()) Text(event.lieu, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)
                        val timeLabel = date?.let { SimpleDateFormat("HH:mm", Locale.FRANCE).format(it) }.orEmpty()
                        if (timeLabel.isNotBlank() && timeLabel != "00:00") {
                            Text("Heure : $timeLabel", style = MaterialTheme.typography.bodySmall, color = Purple40, fontWeight = FontWeight.Medium)
                        }
                    }
                    if (canEdit && !event.synthetic) {
                        IconButton(onClick = { expanded = !expanded }, modifier = Modifier.size(34.dp)) {
                            Icon(if (expanded) Icons.Filled.KeyboardArrowUp else Icons.Filled.KeyboardArrowDown, contentDescription = "Détails")
                        }
                    } else {
                        TextButton(onClick = { expanded = !expanded }) { Text(if (expanded) "Moins" else "Détails") }
                    }
                }

                if (!event.synthetic && !event.cancelled) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(horizontalArrangement = Arrangement.spacedBy(6.dp), modifier = Modifier.fillMaxWidth()) {
                        ResponseChoice(
                            label = "Présent",
                            selected = myResponse == "present",
                            selectedColor = Color(0xFFDCEFE4),
                            selectedTextColor = Color(0xFF166534),
                            onClick = { onRespond("present") },
                            modifier = Modifier.weight(1f)
                        )
                        ResponseChoice(
                            label = "Absent",
                            selected = myResponse == "absent",
                            selectedColor = Color(0xFFFFE4E6),
                            selectedTextColor = Color(0xFF9F1239),
                            onClick = { onRespond("absent") },
                            modifier = Modifier.weight(1f)
                        )
                        ResponseChoice(
                            label = "Peut-être",
                            selected = myResponse == "peut-etre",
                            selectedColor = Color(0xFFFFF1CE),
                            selectedTextColor = Color(0xFF8A5A00),
                            onClick = { onRespond("peut-etre") },
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                if (expanded) {
                    Spacer(modifier = Modifier.height(10.dp))
                    HorizontalDivider(color = Color(0xFFE8E3D8))
                    Spacer(modifier = Modifier.height(10.dp))
                    if (event.description.isNotBlank()) Text(event.description, style = MaterialTheme.typography.bodySmall, color = Color.DarkGray)

                    if (event.type == "messe") {
                        Spacer(modifier = Modifier.height(8.dp))
                        Text("Programme", style = MaterialTheme.typography.labelLarge, color = Purple40)
                        if (programmeSongs.isEmpty()) Text("Aucun chant choisi.", style = MaterialTheme.typography.bodySmall)
                        else programmeSongs.forEachIndexed { index, song -> Text("${index + 1}. ${song.titre}", style = MaterialTheme.typography.bodySmall) }
                        if (canEdit) TextButton(onClick = onEditProgramme) { Text("Modifier le programme") }
                    }

                    if (event.type == "reunion") {
                        Spacer(modifier = Modifier.height(8.dp))
                        Text("Compte-rendu", style = MaterialTheme.typography.labelLarge, color = Purple40)
                        Text(if (event.compteRendu.isBlank()) "Pas encore de compte-rendu." else event.compteRendu, style = MaterialTheme.typography.bodySmall)
                        if (canEdit) TextButton(onClick = onEditCompteRendu) { Text("Modifier le compte-rendu") }
                    }

                    if (!event.synthetic) {
                        val yes = event.reponses.values.count { it == "present" }
                        val no = event.reponses.values.count { it == "absent" }
                        val maybe = event.reponses.values.count { it == "peut-etre" }
                        Spacer(modifier = Modifier.height(8.dp))
                        Text("Présences : $yes présent · $no absent · $maybe peut-être", style = MaterialTheme.typography.labelSmall, color = Color.DarkGray)
                    }

                    if (canEdit && !event.synthetic) {
                        Spacer(modifier = Modifier.height(6.dp))
                        Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                            TextButton(onClick = onEdit) { Text("Modifier") }
                            if (!event.cancelled) TextButton(onClick = onCancel) { Text("Annuler", color = Color(0xFFB91C1C)) }
                            TextButton(onClick = onDelete) { Text("Supprimer", color = MaterialTheme.colorScheme.error) }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ResponseChoice(
    label: String,
    selected: Boolean,
    selectedColor: Color,
    selectedTextColor: Color,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        modifier = modifier.clickable(onClick = onClick),
        shape = RoundedCornerShape(14.dp),
        color = if (selected) selectedColor else Color.White,
        border = androidx.compose.foundation.BorderStroke(1.dp, if (selected) selectedTextColor.copy(alpha = 0.45f) else Color(0xFFC8C8C8))
    ) {
        Box(
            modifier = Modifier.padding(horizontal = 6.dp, vertical = 9.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.labelMedium,
                color = if (selected) selectedTextColor else Purple40,
                fontWeight = if (selected) FontWeight.Bold else FontWeight.Medium,
                maxLines = 1
            )
        }
    }
}

private fun monthLabelOf(event: Event): String {
    val date = event.date?.toDate() ?: return "À venir"
    return SimpleDateFormat("MMMM yyyy", Locale.FRANCE).format(date).replaceFirstChar { it.uppercase() }
}

@Composable
private fun ProgrammeDialog(
    allSongs: List<Song>,
    initialProgramme: List<String>,
    onDismiss: () -> Unit,
    onSave: (List<String>) -> Unit
) {
    var programme by remember { mutableStateOf(initialProgramme) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Programme de la messe") },
        text = {
            Column(modifier = Modifier.heightIn(max = 400.dp).verticalScroll(rememberScrollState())) {
                Text("Chants sélectionnés (dans l'ordre) :", style = MaterialTheme.typography.labelMedium)
                Spacer(modifier = Modifier.height(4.dp))
                if (programme.isEmpty()) Text("Aucun chant sélectionné", style = MaterialTheme.typography.bodySmall)
                programme.forEachIndexed { index, songId ->
                    val song = allSongs.firstOrNull { it.id == songId }
                    Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
                        Text("${index + 1}. ${song?.titre ?: "?"}", modifier = Modifier.width(160.dp))
                        IconButton(onClick = {
                            programme = programme.toMutableList().apply {
                                val tmp = this[index - 1]; this[index - 1] = this[index]; this[index] = tmp
                            }
                        }, enabled = index > 0) { Icon(Icons.Filled.KeyboardArrowUp, contentDescription = "Monter") }
                        IconButton(onClick = {
                            programme = programme.toMutableList().apply {
                                val tmp = this[index + 1]; this[index + 1] = this[index]; this[index] = tmp
                            }
                        }, enabled = index < programme.size - 1) { Icon(Icons.Filled.KeyboardArrowDown, contentDescription = "Descendre") }
                        IconButton(onClick = { programme = programme.filterNot { it == songId } }) { Icon(Icons.Filled.Close, contentDescription = "Retirer") }
                    }
                }
                Spacer(modifier = Modifier.height(12.dp))
                Text("Ajouter un chant :", style = MaterialTheme.typography.labelMedium)
                Spacer(modifier = Modifier.height(4.dp))
                val availableSongs = allSongs.filter { it.id !in programme }
                if (availableSongs.isEmpty()) Text("Tous les chants sont déjà dans le programme", style = MaterialTheme.typography.bodySmall)
                availableSongs.forEach { song ->
                    TextButton(onClick = { programme = programme + song.id }) { Text("+ ${song.titre}") }
                }
            }
        },
        confirmButton = { TextButton(onClick = { onSave(programme) }) { Text("Enregistrer") } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

@Composable
private fun CompteRenduDialog(initialTexte: String, onDismiss: () -> Unit, onSave: (String) -> Unit) {
    var texte by remember { mutableStateOf(initialTexte) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Compte-rendu de réunion") },
        text = {
            OutlinedTextField(
                value = texte,
                onValueChange = { texte = it },
                label = { Text("Notes de la réunion") },
                modifier = Modifier.fillMaxWidth().heightIn(min = 150.dp)
            )
        },
        confirmButton = { TextButton(onClick = { onSave(texte) }) { Text("Enregistrer") } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun EventFormDialog(
    existingEvent: Event?,
    onDismiss: () -> Unit,
    onSave: (String, String, Timestamp?, String, String) -> Unit
) {
    val context = LocalContext.current
    val initialCalendar = remember(existingEvent?.id) {
        Calendar.getInstance().apply {
            existingEvent?.date?.toDate()?.let { time = it }
        }
    }

    var titre by remember { mutableStateOf(existingEvent?.titre ?: "") }
    var lieu by remember { mutableStateOf(existingEvent?.lieu ?: "") }
    var description by remember { mutableStateOf(existingEvent?.description ?: "") }
    var selectedType by remember { mutableStateOf(eventTypes.firstOrNull { it.first == existingEvent?.type } ?: eventTypes.first()) }
    var expanded by remember { mutableStateOf(false) }
    var selectedDate by remember { mutableStateOf(existingEvent?.date) }
    var selectedHour by remember { mutableStateOf(initialCalendar.get(Calendar.HOUR_OF_DAY)) }
    var selectedMinute by remember { mutableStateOf(initialCalendar.get(Calendar.MINUTE)) }
    var showDatePicker by remember { mutableStateOf(false) }
    val datePickerState = rememberDatePickerState(initialSelectedDateMillis = existingEvent?.date?.toDate()?.time)

    fun applyTime(hour: Int, minute: Int) {
        selectedHour = hour
        selectedMinute = minute
        val baseDate = selectedDate?.toDate() ?: return
        val calendar = Calendar.getInstance().apply {
            time = baseDate
            set(Calendar.HOUR_OF_DAY, hour)
            set(Calendar.MINUTE, minute)
            set(Calendar.SECOND, 0)
            set(Calendar.MILLISECOND, 0)
        }
        selectedDate = Timestamp(calendar.time)
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(if (existingEvent != null) "Modifier l'événement" else "Nouvel événement") },
        text = {
            Column {
                OutlinedTextField(value = titre, onValueChange = { titre = it }, label = { Text("Titre") }, modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(8.dp))
                ExposedDropdownMenuBox(expanded = expanded, onExpandedChange = { expanded = it }) {
                    OutlinedTextField(
                        value = selectedType.second,
                        onValueChange = {},
                        readOnly = true,
                        label = { Text("Type") },
                        trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expanded) },
                        modifier = Modifier.fillMaxWidth().menuAnchor()
                    )
                    DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
                        eventTypes.forEach { type ->
                            DropdownMenuItem(text = { Text(type.second) }, onClick = { selectedType = type; expanded = false })
                        }
                    }
                }
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedButton(onClick = { showDatePicker = true }, modifier = Modifier.fillMaxWidth()) {
                    Text(selectedDate?.toDate()?.let { SimpleDateFormat("dd/MM/yyyy", Locale.FRANCE).format(it) } ?: "Choisir une date")
                }
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedButton(
                    onClick = {
                        TimePickerDialog(
                            context,
                            { _, hour, minute -> applyTime(hour, minute) },
                            selectedHour,
                            selectedMinute,
                            true
                        ).show()
                    },
                    enabled = selectedDate != null,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text("Heure : %02d:%02d".format(selectedHour, selectedMinute))
                }
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(value = lieu, onValueChange = { lieu = it }, label = { Text("Lieu (optionnel)") }, modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(value = description, onValueChange = { description = it }, label = { Text("Description (optionnel)") }, modifier = Modifier.fillMaxWidth())
            }
        },
        confirmButton = {
            TextButton(onClick = { onSave(titre, selectedType.first, selectedDate, lieu, description) }, enabled = titre.isNotBlank() && selectedDate != null) {
                Text(if (existingEvent != null) "Enregistrer" else "Créer")
            }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("Annuler") } }
    )

    if (showDatePicker) {
        DatePickerDialog(
            onDismissRequest = { showDatePicker = false },
            confirmButton = {
                TextButton(onClick = {
                    datePickerState.selectedDateMillis?.let { millis ->
                        val calendar = Calendar.getInstance().apply {
                            timeInMillis = millis
                            set(Calendar.HOUR_OF_DAY, selectedHour)
                            set(Calendar.MINUTE, selectedMinute)
                            set(Calendar.SECOND, 0)
                            set(Calendar.MILLISECOND, 0)
                        }
                        selectedDate = Timestamp(calendar.time)
                    }
                    showDatePicker = false
                }) { Text("OK") }
            },
            dismissButton = { TextButton(onClick = { showDatePicker = false }) { Text("Annuler") } }
        ) { DatePicker(state = datePickerState) }
    }
}

