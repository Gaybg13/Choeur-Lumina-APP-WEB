importScripts("/firebase-config.js");
importScripts("https://www.gstatic.com/firebasejs/11.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.7.1/firebase-messaging-compat.js");

firebase.initializeApp(self.__FIREBASE_CONFIG__);
const messaging = firebase.messaging();

function notificationTag(payload) {
  const type = payload.data?.type || "general";
  if (type === "group_message") return "group_chat";
  if (type === "direct_message") return `direct_${payload.data?.conversationId || "private"}`;
  if (type.startsWith("event_")) return `event_${payload.data?.eventId || "agenda"}`;
  return "lumina_general";
}

messaging.onBackgroundMessage((payload) => {
  const title = payload.data?.title || payload.notification?.title || "Chœur Lumina";
  const body = payload.data?.body || payload.notification?.body || "Nouvelle activité";
  const link = payload.data?.link || payload.fcmOptions?.link || "/";

  self.registration.showNotification(title, {
    body,
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: notificationTag(payload),
    renotify: true,
    data: { link }
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const link = event.notification.data?.link || "/";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(async (windowClients) => {
      for (const client of windowClients) {
        if ("navigate" in client) await client.navigate(link);
        if ("focus" in client) return client.focus();
      }
      return clients.openWindow(link);
    })
  );
});
