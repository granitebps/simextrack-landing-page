"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
            <Link
              href="#features"
              className="text-xl font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="text-xl font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Screenshots
            </Link>
            <Link
              href="#developer"
              className="text-xl font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Developer
            </Link>
            <Link
              href="#feedback"
              className="text-xl font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>
            <Link
              href="#changelog"
              className="text-xl font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Changelog
            </Link>
            <div className="flex items-center gap-2">
              <span>Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
