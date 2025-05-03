"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  lowQualitySrc?: string
  loadingClassName?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  className,
  loadingClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(true)
    setImgSrc(lowQualitySrc || src)
    setError(false)
  }, [src, lowQualitySrc])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse",
            loadingClassName,
          )}
        />
      )}
      <Image
        {...props}
        src={error ? fallbackSrc : imgSrc}
        alt={alt}
        className={cn(className, isLoading && "blur-[2px] scale-105")}
        onLoad={(e) => {
          // If we're using a low quality placeholder, load the high quality image
          if (lowQualitySrc && imgSrc === lowQualitySrc) {
            const img = new Image()
            img.src = src as string
            img.onload = () => {
              setImgSrc(src)
              setIsLoading(false)
            }
            img.onerror = () => {
              setError(true)
              setIsLoading(false)
            }
          } else {
            setIsLoading(false)
          }
        }}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
      />
    </div>
  )
}
