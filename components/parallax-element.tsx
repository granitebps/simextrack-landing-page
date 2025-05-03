"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxElementProps {
  children?: React.ReactNode
  className?: string
  speed?: number // Positive values move slower, negative values move faster than scroll
  direction?: "vertical" | "horizontal" | "both"
}

export function ParallaxElement({ children, className, speed = 0.5, direction = "vertical" }: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementY = rect.top + scrollY
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth

      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = elementY - scrollY - viewportHeight / 2

      // Apply parallax effect
      if (direction === "vertical" || direction === "both") {
        setOffset((prev) => ({ ...prev, y: distanceFromCenter * speed * -0.1 }))
      }

      if (direction === "horizontal" || direction === "both") {
        // For horizontal, we'll use mouse position when available
        const mouseX = (window as any).mouseX || viewportWidth / 2
        const distanceX = (mouseX - viewportWidth / 2) * 0.05
        setOffset((prev) => ({ ...prev, x: distanceX * speed }))
      }
    }

    // Track mouse position for horizontal parallax
    const handleMouseMove = (e: MouseEvent) => {
      ;(window as any).mouseX = e.clientX
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isInView, speed, direction])

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {children}
    </div>
  )
}
