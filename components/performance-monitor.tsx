"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  })

  useEffect(() => {
    // Only run in production and when Performance API is available
    if (process.env.NODE_ENV !== "production" || !("performance" in window)) {
      return
    }

    // Calculate TTFB
    const calculateTTFB = () => {
      const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
      if (navigationEntries.length > 0) {
        const ttfb = navigationEntries[0].responseStart
        setMetrics((prev) => ({ ...prev, ttfb }))

        // Send to analytics
        sendToAnalytics("ttfb", ttfb)
      }
    }

    // Create performance observer
    if ("PerformanceObserver" in window) {
      // Observe FCP
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const fcp = entries[0]?.startTime
          setMetrics((prev) => ({ ...prev, fcp }))

          // Send to analytics
          sendToAnalytics("fcp", fcp)
        }).observe({ type: "paint", buffered: true })
      } catch (e) {
        console.error("FCP observation error:", e)
      }

      // Observe LCP
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lcp = entries[entries.length - 1]?.startTime
          setMetrics((prev) => ({ ...prev, lcp }))

          // Send to analytics
          sendToAnalytics("lcp", lcp)
        }).observe({ type: "largest-contentful-paint", buffered: true })
      } catch (e) {
        console.error("LCP observation error:", e)
      }

      // Observe CLS
      try {
        let clsValue = 0
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()

          entries.forEach((entry) => {
            // Only count layout shifts without recent user input
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })

          setMetrics((prev) => ({ ...prev, cls: clsValue }))

          // Send to analytics
          sendToAnalytics("cls", clsValue)
        }).observe({ type: "layout-shift", buffered: true })
      } catch (e) {
        console.error("CLS observation error:", e)
      }

      // Observe FID
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const fid = entries[0]?.processingStart - entries[0]?.startTime
          setMetrics((prev) => ({ ...prev, fid }))

          // Send to analytics
          sendToAnalytics("fid", fid)
        }).observe({ type: "first-input", buffered: true })
      } catch (e) {
        console.error("FID observation error:", e)
      }
    }

    // Calculate TTFB
    calculateTTFB()

    // Function to send metrics to analytics
    function sendToAnalytics(metricName: string, value: number) {
      // Replace with your actual analytics implementation
      if (window.gtag) {
        window.gtag("event", "web_vitals", {
          event_category: "Web Vitals",
          event_label: metricName,
          value: Math.round(value),
          non_interaction: true,
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(`[Performance] ${metricName.toUpperCase()}: ${value}ms`)
      }
    }
  }, [])

  // This component doesn't render anything visible
  return null
}

// Add TypeScript interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void
  }
}
