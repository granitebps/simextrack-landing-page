"use client"

import { useEffect, useState } from "react"

interface ScriptLoaderProps {
  src: string
  id?: string
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload"
  onLoad?: () => void
  defer?: boolean
  async?: boolean
}

export default function ScriptLoader({
  src,
  id,
  strategy = "afterInteractive",
  onLoad,
  defer = true,
  async = true,
}: ScriptLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Skip if the script is already loaded
    if (document.getElementById(id || src)) {
      setLoaded(true)
      onLoad?.()
      return
    }

    // Function to load the script
    const loadScript = () => {
      const script = document.createElement("script")
      script.src = src
      script.id = id || src
      script.defer = defer
      script.async = async

      script.onload = () => {
        setLoaded(true)
        onLoad?.()
      }

      document.body.appendChild(script)
    }

    // Load based on strategy
    if (strategy === "beforeInteractive") {
      loadScript()
    } else if (strategy === "afterInteractive") {
      loadScript()
    } else if (strategy === "lazyOnload") {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadScript()
          observer.disconnect()
        }
      })

      observer.observe(document.documentElement)

      return () => {
        observer.disconnect()
      }
    }
  }, [src, id, strategy, onLoad, defer, async])

  return null
}
