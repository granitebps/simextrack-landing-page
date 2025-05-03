// Performance optimized service worker registration
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered with scope:", registration.scope)
      })
      .catch((error) => {
        console.error("SW registration failed:", error)
      })
  })
}

// Add performance metrics tracking
if ("performance" in window && "PerformanceObserver" in window) {
  // Create the performance observer
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      // Log FCP (First Contentful Paint)
      if (entry.name === "first-contentful-paint") {
        console.log(`FCP: ${entry.startTime}ms`)
      }
      // Log LCP (Largest Contentful Paint)
      if (entry.entryType === "largest-contentful-paint") {
        console.log(`LCP: ${entry.startTime}ms`)
      }
      // Log CLS (Cumulative Layout Shift)
      if (entry.entryType === "layout-shift" && !entry.hadRecentInput) {
        console.log(`CLS: ${entry.value}`)
      }
    })
  })

  // Observe different performance metrics
  observer.observe({ type: "paint", buffered: true })
  observer.observe({ type: "largest-contentful-paint", buffered: true })
  observer.observe({ type: "layout-shift", buffered: true })
  observer.observe({ type: "first-input", buffered: true })
}

// Preload critical resources
function preloadResources() {
  const resources = [
    { url: "/fonts/inter-var.woff2", as: "font", type: "font/woff2" },
    { url: "/icon-192x192.png", as: "image" },
    { url: "/manifest.json", as: "fetch" },
  ]

  resources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource.url
    link.as = resource.as
    if (resource.type) {
      link.type = resource.type
    }
    if (resource.as === "font") {
      link.crossOrigin = "anonymous"
    }
    document.head.appendChild(link)
  })
}

// Execute preload after critical content is loaded
if (document.readyState === "interactive" || document.readyState === "complete") {
  preloadResources()
} else {
  document.addEventListener("DOMContentLoaded", preloadResources)
}
