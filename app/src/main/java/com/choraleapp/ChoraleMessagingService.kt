package com.choraleapp

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class ChoraleMessagingService : FirebaseMessagingService() {

    companion object {
        const val EXTRA_DESTINATION = "lumina_destination"
        private const val GROUP_NOTIFICATION_ID = 2101
        private const val DIRECT_NOTIFICATION_ID = 2201
        private const val EVENT_NOTIFICATION_ID = 2301
        private const val GENERAL_NOTIFICATION_ID = 2401
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
        val uid = FirebaseAuth.getInstance().currentUser?.uid ?: return
        FirebaseFirestore.getInstance().collection("members")
            .whereEqualTo("uid", uid)
            .get()
            .addOnSuccessListener { query ->
                query.documents.firstOrNull()?.reference?.update("fcmToken", token)
            }
    }

    override fun onMessageReceived(message: RemoteMessage) {
        super.onMessageReceived(message)

        val title = message.data["title"]
            ?: message.notification?.title
            ?: "Chœur Lumina"
        val body = message.data["body"]
            ?: message.notification?.body
            ?: "Nouvelle activité"
        val messageType = message.data["type"].orEmpty()

        // L'application met déjà son contenu à jour en temps réel via Firestore.
        // Éviter de créer une notification système quand l'utilisateur est déjà dedans.
        if (ChoraleApplication.isInForeground) return

        val isEvent = messageType.startsWith("event_")
        val channelId = if (isEvent) "chorale_events" else "chorale_notifications"
        val manager = getSystemService(NotificationManager::class.java) ?: return

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                channelId,
                if (isEvent) "Événements de la chorale" else "Messages et annonces",
                NotificationManager.IMPORTANCE_HIGH
            )
            manager.createNotificationChannel(channel)
        }

        val destination = when {
            isEvent -> "calendrier"
            messageType == "group_message" || messageType == "direct_message" -> "messagerie"
            else -> "home"
        }

        val notificationTag: String
        val notificationId: Int
        when (messageType) {
            "group_message" -> {
                notificationTag = "group_chat"
                notificationId = GROUP_NOTIFICATION_ID
            }
            "direct_message" -> {
                notificationTag = "direct_${message.data["conversationId"].orEmpty()}"
                notificationId = DIRECT_NOTIFICATION_ID
            }
            "event_created", "event_cancelled" -> {
                notificationTag = "event_${message.data["eventId"].orEmpty()}"
                notificationId = EVENT_NOTIFICATION_ID
            }
            else -> {
                notificationTag = "lumina_general"
                notificationId = GENERAL_NOTIFICATION_ID
            }
        }

        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
            putExtra(EXTRA_DESTINATION, destination)
        }
        val pendingIntent = PendingIntent.getActivity(
            this,
            notificationTag.hashCode(),
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(NotificationCompat.BigTextStyle().bigText(body))
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .build()

        // Un seul rappel actif pour le groupe, un par conversation privée
        // et un par événement. Les nouveaux push remplacent l'ancien rappel équivalent.
        manager.notify(notificationTag, notificationId, notification)
    }
}
