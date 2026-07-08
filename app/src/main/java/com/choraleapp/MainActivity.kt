package com.choraleapp

import android.Manifest
import android.app.NotificationManager
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import com.choraleapp.ui.navigation.ChoraleNavGraph
import com.choraleapp.ui.theme.ChoraleTheme
import com.google.firebase.Timestamp
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.SetOptions

class MainActivity : ComponentActivity() {

    private val requestNotificationPermission = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { /* L'utilisateur peut refuser, l'app fonctionne quand même sans notifications */ }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            requestNotificationPermission.launch(Manifest.permission.POST_NOTIFICATIONS)
        }

        val initialMainTab = intent.getStringExtra(ChoraleMessagingService.EXTRA_DESTINATION)

        setContent {
            ChoraleTheme {
                ChoraleNavGraph(initialMainTab = initialMainTab)
            }
        }
    }

    override fun onStart() {
        super.onStart()
        ChoraleApplication.isInForeground = true

        // Une fois l'application ouverte, les notifications déjà présentées
        // ne doivent plus rester dans la barre système.
        getSystemService(NotificationManager::class.java)?.cancelAll()
        updatePresence(true)
    }

    override fun onStop() {
        ChoraleApplication.isInForeground = false
        updatePresence(false)
        super.onStop()
    }

    private fun updatePresence(online: Boolean) {
        val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
        FirebaseFirestore.getInstance().collection("userStatus").document(uid).set(
            mapOf("online" to online, "lastSeen" to Timestamp.now()),
            SetOptions.merge()
        )
    }
}
