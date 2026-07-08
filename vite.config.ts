import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globIgnores: [
          "**/firebase-config.js",
          "**/firebase-messaging-sw.js"
        ]
      },
      manifest: {
        name: "Chœur Lumina",
        short_name: "Lumina",
        description: "Espace du Chœur Lumina",
        start_url: "/",
        display: "standalone",
        background_color: "#F8F6F0",
        theme_color: "#132C59",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  server: {
    host: true
  }
});
