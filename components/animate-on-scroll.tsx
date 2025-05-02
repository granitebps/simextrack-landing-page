"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in"
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const animations = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-in": "opacity-0",
    "slide-in-right": "opacity-0 translate-x-10",
    "slide-in-left": "opacity-0 -translate-x-10",
    "zoom-in": "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", isVisible ? "" : animations[animation], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
