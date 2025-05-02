"use client"

import type React from "react"

import { Suspense, useState, useEffect } from "react"
import LoadingFallback from "@/components/loading-fallback"

interface ClientDynamicSectionProps {
  componentPath: string
  fallbackHeight?: string
  props?: Record<string, any>
}

export default function ClientDynamicSection({
  componentPath,
  fallbackHeight = "400px",
  props = {},
}: ClientDynamicSectionProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadComponent = async () => {
      try {
        // Dynamic import using the path string
        const module = await import(/* @vite-ignore */ componentPath)
        if (isMounted) {
          setComponent(() => module.default)
        }
      } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error)
      }
    }

    loadComponent()

    return () => {
      isMounted = false
    }
  }, [componentPath])

  if (!Component) {
    return <LoadingFallback height={fallbackHeight} />
  }

  return (
    <Suspense fallback={<LoadingFallback height={fallbackHeight} />}>
      <Component {...props} />
    </Suspense>
  )
}
