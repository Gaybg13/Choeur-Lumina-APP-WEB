// Force les fenêtres déjà ouvertes à charger la nouvelle version dès
// qu'un nouveau service worker devient actif.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const windows = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true
      });

      await Promise.all(
        windows.map(async (client) => {
          try {
            const clientUrl = new URL(client.url);
            if (clientUrl.origin === self.location.origin && "navigate" in client) {
              await client.navigate(client.url);
            }
          } catch (error) {
            console.warn("Rechargement automatique de la PWA impossible", error);
          }
        })
      );
    })()
  );
});
