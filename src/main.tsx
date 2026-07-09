import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const APP_SW_URL = "/sw.js";
const APP_SW_SCOPE = "/";
const UPDATE_INTERVAL_MS = 60_000;

function isFirebaseMessagingRegistration(registration: ServiceWorkerRegistration) {
  return registration.scope.includes("firebase-cloud-messaging-push-scope");
}

async function checkForPwaUpdate() {
  if (!("serviceWorker" in navigator)) return;

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    const appRegistrations = registrations.filter(
      (registration) => !isFirebaseMessagingRegistration(registration)
    );

    if (appRegistrations.length === 0) {
      const registration = await navigator.serviceWorker.register(APP_SW_URL, {
        scope: APP_SW_SCOPE,
        updateViaCache: "none"
      });
      await registration.update();
      return;
    }

    await Promise.all(
      appRegistrations.map(async (registration) => {
        // Force sw.js à être vérifié sur le réseau au lieu d'utiliser une copie HTTP en cache.
        await registration.update();
      })
    );
  } catch (error) {
    console.warn("Vérification de mise à jour PWA impossible :", error);
  }
}

if ("serviceWorker" in navigator) {
  let reloadingForNewVersion = false;

  // Dès que le nouveau SW (skipWaiting + clientsClaim) prend le contrôle,
  // recharge une seule fois pour charger le nouveau bundle JS/CSS.
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForNewVersion) return;
    reloadingForNewVersion = true;
    window.location.reload();
  });

  window.addEventListener("load", () => {
    void checkForPwaUpdate();

    // Une PWA laissée ouverte récupère aussi les nouveaux déploiements.
    window.setInterval(() => {
      void checkForPwaUpdate();
    }, UPDATE_INTERVAL_MS);
  });

  // Un utilisateur qui revient dans l'app après quelques minutes déclenche
  // immédiatement une vérification, sans passer par reset-cache.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void checkForPwaUpdate();
    }
  });

  window.addEventListener("focus", () => {
    void checkForPwaUpdate();
  });

  window.addEventListener("online", () => {
    void checkForPwaUpdate();
  });
}
