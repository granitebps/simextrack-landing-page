/// <reference lib="webworker" />

// This service worker can be customized
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "simextrack-cache-v1"
const OFFLINE_URL = "/offline.html"

// Install event - cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        OFFLINE_URL,
        "/manifest.json",
        "/icon-192x192.png",
        "/icon-512x512.png",
        // Add other static assets here
      ])
    }),
  )

  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME
          })
          .map((cacheName) => {
            return caches.delete(cacheName)
          }),
      )
    }),
  )

  // Tell the active service worker to take control of the page immediately
  self.clients.claim()
})

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(OFFLINE_URL)
        })
      }),
    )
    return
  }

  // Stale-while-revalidate for other requests
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update the cache
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone())
            }
            return networkResponse
          })
          .catch(() => {
            // Offline fallback
            return cachedResponse
          })

        // Return cached response immediately, then update cache in background
        return cachedResponse || fetchPromise
      })
    }),
  )
})

// Push event - handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {}

  const options = {
    body: data.body || "New notification from SIMEXTRACK",
    icon: "/icon-192x192.png",
    badge: "/badge-icon.png",
    vibrate: [100, 50, 100],
    data: {
      url: data.url || "/",
    },
  }

  event.waitUntil(self.registration.showNotification(data.title || "SIMEXTRACK Notification", options))
})

// Notification click event - open the app when notification is clicked
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  const url = event.notification.data?.url || "/"

  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clientList) => {
      // If a window client is already open, focus it
      for (const client of clientList) {
        if (client.url === url && "focus" in client) {
          return client.focus()
        }
      }

      // Otherwise, open a new window
      return self.clients.openWindow(url)
    }),
  )
})

export {}
