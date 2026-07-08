package com.choraleapp.ui.main

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.Forum
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LibraryMusic
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Photo
import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import androidx.lifecycle.viewmodel.compose.viewModel
import com.choraleapp.ui.admin.AdminScreen
import com.choraleapp.ui.calendrier.CalendrierScreen
import com.choraleapp.ui.calendrier.CalendrierViewModel
import com.choraleapp.ui.chants.ChantsScreen
import com.choraleapp.ui.home.HomeScreen
import com.choraleapp.ui.messagerie.MessagerieScreen
import com.choraleapp.ui.messagerie.MessagerieViewModel
import com.choraleapp.ui.profil.ProfilScreen
import com.choraleapp.ui.theme.Background
import com.choraleapp.ui.theme.Gold
import com.choraleapp.ui.theme.Purple40
import com.choraleapp.ui.trombinoscope.TrombinoscopeScreen

private data class BottomItem(val route: String, val label: String, val icon: ImageVector)

private val bottomItems = listOf(
    BottomItem("home", "Accueil", Icons.Filled.Home),
    BottomItem("chants", "Chants", Icons.Filled.LibraryMusic),
    BottomItem("calendrier", "Agenda", Icons.Filled.CalendarMonth),
    BottomItem("messagerie", "Msgs", Icons.Filled.Forum),
    BottomItem("trombinoscope", "Trombi", Icons.Filled.Photo),
    BottomItem("profil", "Profil", Icons.Filled.Person),
)

@Composable
fun MainScreen(onLogout: () -> Unit, initialRoute: String? = null) {
    val navController = rememberNavController()
    val resolvedStartRoute = initialRoute?.takeIf { route -> bottomItems.any { it.route == route } } ?: "home"
    val messagingViewModel: MessagerieViewModel = viewModel()
    val totalUnread = messagingViewModel.groupUnreadCount.value + messagingViewModel.privateUnreadCount.value
    val calendarViewModel: CalendrierViewModel = viewModel()
    val hasUnreadAgenda = calendarViewModel.hasUnreadEvents.value

    Scaffold(
        bottomBar = {
            NavigationBar(
                containerColor = Purple40,
                tonalElevation = 0.dp
            ) {
                val navBackStackEntry by navController.currentBackStackEntryAsState()
                val currentDestination = navBackStackEntry?.destination

                bottomItems.forEach { item ->
                    val selected = currentDestination?.hierarchy?.any { it.route == item.route } == true
                    NavigationBarItem(
                        icon = {
                            when {
                                item.route == "messagerie" && totalUnread > 0 -> {
                                    BadgedBox(
                                        badge = { Badge { Text(if (totalUnread > 99) "99+" else totalUnread.toString()) } }
                                    ) { Icon(item.icon, contentDescription = item.label) }
                                }
                                item.route == "calendrier" && hasUnreadAgenda -> {
                                    BadgedBox(badge = { Badge() }) {
                                        Icon(item.icon, contentDescription = item.label)
                                    }
                                }
                                else -> Icon(item.icon, contentDescription = item.label)
                            }
                        },
                        label = {
                            Text(
                                item.label,
                                maxLines = 1,
                                overflow = TextOverflow.Clip
                            )
                        },
                        alwaysShowLabel = false,
                        selected = selected,
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = Color.White,
                            selectedTextColor = Color.White,
                            indicatorColor = Gold.copy(alpha = 0.65f),
                            unselectedIconColor = Color.White.copy(alpha = 0.82f),
                            unselectedTextColor = Color.White.copy(alpha = 0.82f)
                        ),
                        onClick = {
                            navController.navigate(item.route) {
                                popUpTo(navController.graph.findStartDestination().id) {
                                    saveState = true
                                }
                                launchSingleTop = true
                                restoreState = true
                            }
                        }
                    )
                }
            }
        },
        containerColor = Background
    ) { padding ->
        NavHost(
            navController = navController,
            startDestination = resolvedStartRoute,
            modifier = Modifier.padding(padding)
        ) {
            composable("home") { HomeScreen(onNavigateToChants = { navController.navigate("chants") }, onNavigateToAgenda = { navController.navigate("calendrier") }, onNavigateToMessages = { navController.navigate("messagerie") }) }
            composable("chants") { ChantsScreen() }
            composable("calendrier") { CalendrierScreen(viewModel = calendarViewModel) }
            composable("messagerie") { MessagerieScreen(viewModel = messagingViewModel) }
            composable("trombinoscope") { TrombinoscopeScreen() }
            composable("profil") {
                ProfilScreen(
                    onLogout = onLogout,
                    onNavigateToAdmin = { navController.navigate("admin") }
                )
            }
            composable("admin") {
                AdminScreen(onBack = { navController.popBackStack() })
            }
        }
    }
}
