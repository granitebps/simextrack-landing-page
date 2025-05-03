"use client"

import { useState, useEffect } from "react"
import { type ImageProps, default as ImageNext } from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  mobileSrc: string
  tabletSrc?: string
  desktopSrc: string
  placeholderSrc?: string
  alt: string
  className?: string
  containerClassName?: string
}

export default function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  placeholderSrc,
  alt,
  className,
  containerClassName,
  ...props
}: ResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || mobileSrc)
  const [loading, setLoading] = useState(true)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth)

    // Update viewport width on resize
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Determine which image to load based on viewport width
    let newSrc = mobileSrc

    if (viewportWidth >= 1024) {
      newSrc = desktopSrc
    } else if (viewportWidth >= 768 && tabletSrc) {
      newSrc = tabletSrc
    }

    // Only update if different from current
    if (newSrc !== currentSrc && newSrc !== placeholderSrc) {
      // Preload the image
      const img = new Image()
      img.src = newSrc

      img.onload = () => {
        setCurrentSrc(newSrc)
        setLoading(false)
      }
    }
  }, [viewportWidth, mobileSrc, tabletSrc, desktopSrc, placeholderSrc, currentSrc])

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <ImageNext
        {...props}
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        className={cn(className, loading && placeholderSrc && "blur-[2px] scale-105 transition-all duration-500")}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
