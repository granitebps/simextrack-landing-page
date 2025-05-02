"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PerformanceMetric {
  name: string
  value: number | null
  unit: string
  target: number
  status: "good" | "needs-improvement" | "poor" | "unknown"
}

interface PerformanceDashboardProps {
  enabled?: boolean
}

export default function PerformanceDashboard({ enabled = true }: PerformanceDashboardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    { name: "FCP", value: null, unit: "ms", target: 1800, status: "unknown" },
    { name: "LCP", value: null, unit: "ms", target: 2500, status: "unknown" },
    { name: "CLS", value: null, unit: "", target: 0.1, status: "unknown" },
    { name: "FID", value: null, unit: "ms", target: 100, status: "unknown" },
    { name: "TTFB", value: null, unit: "ms", target: 800, status: "unknown" },
  ])

  useEffect(() => {
    // Only run if enabled and when Performance API is available
    if (!enabled || !("performance" in window)) {
      return
    }

    // Function to update metric status
    const updateMetricStatus = (name: string, value: number) => {
      setMetrics((prevMetrics) => {
        return prevMetrics.map((metric) => {
          if (metric.name === name) {
            let status: "good" | "needs-improvement" | "poor" = "good"

            // Determine status based on value and target
            if (name === "CLS") {
              if (value > 0.25) status = "poor"
              else if (value > 0.1) status = "needs-improvement"
            } else {
              if (value > metric.target * 1.5) status = "poor"
              else if (value > metric.target) status = "needs-improvement"
            }

            return { ...metric, value, status }
          }
          return metric
        })
      })
    }

    // Calculate TTFB
    const calculateTTFB = () => {
      const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
      if (navigationEntries.length > 0) {
        const ttfb = navigationEntries[0].responseStart
        updateMetricStatus("TTFB", ttfb)
      }
    }

    // Create performance observer
    if ("PerformanceObserver" in window) {
      // Observe FCP
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const fcp = entries[0]?.startTime
          if (fcp) updateMetricStatus("FCP", fcp)
        }).observe({ type: "paint", buffered: true })
      } catch (e) {
        console.error("FCP observation error:", e)
      }

      // Observe LCP
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lcp = entries[entries.length - 1]?.startTime
          if (lcp) updateMetricStatus("LCP", lcp)
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

          updateMetricStatus("CLS", clsValue)
        }).observe({ type: "layout-shift", buffered: true })
      } catch (e) {
        console.error("CLS observation error:", e)
      }

      // Observe FID
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const fid = entries[0]?.processingStart - entries[0]?.startTime
          if (fid) updateMetricStatus("FID", fid)
        }).observe({ type: "first-input", buffered: true })
      } catch (e) {
        console.error("FID observation error:", e)
      }
    }

    // Calculate TTFB
    calculateTTFB()

    // Show dashboard after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [enabled])

  if (!enabled || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-background border rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm">Performance Metrics</h3>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsVisible(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="space-y-2">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex justify-between items-center text-sm">
            <span>{metric.name}:</span>
            <span
              className={
                metric.status === "good"
                  ? "text-green-500"
                  : metric.status === "needs-improvement"
                    ? "text-amber-500"
                    : metric.status === "poor"
                      ? "text-red-500"
                      : "text-muted-foreground"
              }
            >
              {metric.value !== null
                ? `${metric.name === "CLS" ? metric.value.toFixed(3) : Math.round(metric.value)}${metric.unit}`
                : "Measuring..."}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
        <p>FCP: First Contentful Paint</p>
        <p>LCP: Largest Contentful Paint</p>
        <p>CLS: Cumulative Layout Shift</p>
        <p>FID: First Input Delay</p>
        <p>TTFB: Time To First Byte</p>
      </div>
    </div>
  )
}
