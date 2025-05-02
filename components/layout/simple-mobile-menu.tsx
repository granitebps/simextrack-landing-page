"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#developer", label: "Developer" },
  { href: "#feedback", label: "Feedback" },
  { href: "#changelog", label: "Changelog" },
]

export default function SimpleMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" ref={buttonRef}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Simple dropdown menu */}
      <div
        ref={menuRef}
        className={cn(
          "absolute right-0 top-12 w-48 bg-background border rounded-md shadow-lg py-2 z-40 transition-all duration-200",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none",
        )}
      >
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <div className="border-t my-2"></div>
        <div className="px-4 py-2 flex items-center justify-between">
          <span className="text-sm">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
