"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import DownloadButton from "@/components/download-button"

export default function CTAButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling past the hero section (approximately 800px)
      if (window.scrollY > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      )}
    >
      <DownloadButton className="h-12 rounded-full px-6 shadow-lg" text="Download SIMEXTRACK Now" />
    </div>
  )
}
