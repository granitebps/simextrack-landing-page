"use client"

import type React from "react"

import { useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { PieChart } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import SimpleMobileMenu from "@/components/layout/simple-mobile-menu"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

interface HeaderProps {
  logoSrc?: string
  logoAlt?: string
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="text-sm font-medium hover:text-primary transition-colors relative group">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </Link>
)

export default function Header({ logoSrc, logoAlt = "SIMEXTRACK Logo" }: HeaderProps) {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6 md:px-10 lg:px-16 flex h-16 items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-bold text-xl hover:opacity-90 transition-opacity cursor-pointer"
          aria-label="Go to top of page"
        >
          {logoSrc ? (
            <div className="relative h-8 w-8 overflow-hidden">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt={logoAlt}
                fill
                className="object-contain"
                sizes="32px"
                priority
              />
            </div>
          ) : (
            <PieChart className="h-6 w-6 text-primary" aria-hidden="true" />
          )}
          <span>SIMEXTRACK</span>
        </button>
        <div className="flex items-center">
          <nav className="hidden md:flex gap-6 items-center" aria-label="Main navigation">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#screenshots">Screenshots</NavLink>
            <NavLink href="#developer">Developer</NavLink>
            <NavLink href="#feedback">Feedback</NavLink>
            <NavLink href="#changelog">Changelog</NavLink>
            <ThemeToggle />
          </nav>
          <SimpleMobileMenu />
        </div>
      </div>
    </header>
  )
}
