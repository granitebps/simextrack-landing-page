"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? (
          <X className="h-6 w-6 transition-all duration-300 ease-in-out" />
        ) : (
          <Menu className="h-6 w-6 transition-all duration-300 ease-in-out" />
        )}
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={closeMenu}
      />

      {/* Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-lg transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] gap-8 text-center">
          {[
            { href: "#features", label: "Features" },
            { href: "#screenshots", label: "Screenshots" },
            { href: "#developer", label: "Developer" },
            { href: "#feedback", label: "Feedback" },
            { href: "#changelog", label: "Changelog" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xl font-medium hover:text-green-600 transition-all duration-300 ease-in-out",
                "transform transition-all duration-300 ease-in-out",
              )}
              style={{
                transitionDelay: `${index * 50 + 100}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="flex items-center gap-2 mt-4"
            style={{
              transitionDelay: "350ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <span>Theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
