package com.choraleapp.ui.trombinoscope

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Groups
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.choraleapp.data.model.Member
import com.choraleapp.ui.components.EmptyState
import com.choraleapp.ui.components.LoadingState
import com.choraleapp.ui.components.LuminaHeader
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40

@Composable
fun TrombinoscopeScreen(viewModel: TrombinoscopeViewModel = viewModel()) {
    val membersByPupitre = viewModel.membersByPupitre.value
    val isLoading = viewModel.isLoading.value
    val errorMessage = viewModel.errorMessage.value

    Scaffold(
        topBar = { LuminaHeader("Trombinoscope") },
        containerColor = Background
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Background)
                .padding(padding)
                .padding(18.dp)
        ) {
            when {
                isLoading -> LoadingState()
                errorMessage != null -> Text(errorMessage, color = MaterialTheme.colorScheme.error)
                membersByPupitre.isEmpty() -> EmptyState(
                    icon = Icons.Filled.Groups,
                    title = "Aucun choriste pour l'instant."
                )
                else -> {
                    LazyColumn(verticalArrangement = Arrangement.spacedBy(18.dp)) {
                        membersByPupitre.forEach { (pupitre, members) ->
                            item {
                                Surface(
                                    modifier = Modifier.fillMaxWidth(),
                                    color = Purple40,
                                    shape = MaterialTheme.shapes.large,
                                    shadowElevation = 2.dp
                                ) {
                                    Column(modifier = Modifier.padding(16.dp)) {
                                        Text(
                                            text = pupitre,
                                            style = MaterialTheme.typography.titleLarge,
                                            color = Gold
                                        )
                                        Spacer(modifier = Modifier.height(4.dp))
                                        Text(
                                            text = "${members.size} choriste${if (members.size > 1) "s" else ""}",
                                            style = MaterialTheme.typography.bodySmall,
                                            color = Color.White.copy(alpha = 0.84f)
                                        )
                                    }
                                }
                            }
                            item {
                                LazyVerticalGrid(
                                    columns = GridCells.Fixed(3),
                                    verticalArrangement = Arrangement.spacedBy(12.dp),
                                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                                    userScrollEnabled = false,
                                    modifier = Modifier.fillMaxWidth().height(gridHeightFor(members.size)),
                                    contentPadding = PaddingValues(2.dp)
                                ) {
                                    items(members) { member ->
                                        MemberCard(member)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun MemberCard(member: Member) {
    Surface(
        shape = MaterialTheme.shapes.medium,
        color = Color.White,
        tonalElevation = 1.dp,
        shadowElevation = 2.dp
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 14.dp, horizontal = 8.dp)
        ) {
            if (member.photoUrl.isNotBlank()) {
                AsyncImage(
                    model = member.photoUrl,
                    contentDescription = "${member.prenom} ${member.nom}",
                    modifier = Modifier
                        .size(68.dp)
                        .clip(CircleShape)
                )
            } else {
                Box(
                    modifier = Modifier
                        .size(68.dp)
                        .clip(CircleShape)
                        .background(Purple40),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = member.prenom.take(1).uppercase(),
                        color = Color.White,
                        style = MaterialTheme.typography.titleLarge
                    )
                }
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = member.prenom.ifBlank { "Choriste" },
                style = MaterialTheme.typography.bodyMedium,
                textAlign = TextAlign.Center,
                maxLines = 1,
                color = Color.Black
            )
            Text(
                text = member.nom,
                style = MaterialTheme.typography.bodySmall,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                maxLines = 1
            )
        }
    }
}

private fun gridHeightFor(count: Int) = ((count + 2) / 3 * 132).dp
