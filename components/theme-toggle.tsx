"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="h-9 w-9 rounded-full overflow-hidden relative"
      >
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500",
            theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0",
          )}
        >
          <Sun className="h-4 w-4" />
        </span>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500",
            theme === "dark" ? "-rotate-90 opacity-0" : "rotate-0 opacity-100",
          )}
        >
          <Moon className="h-4 w-4" />
        </span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
