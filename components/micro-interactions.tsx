"use client"

import { useEffect } from "react"

// This component adds subtle micro-interactions to the page
export default function MicroInteractions() {
  useEffect(() => {
    // Add hover effect to all buttons
    const addButtonEffects = () => {
      const buttons = document.querySelectorAll('button, a[href], [role="button"]')

      buttons.forEach((button) => {
        // Skip elements that already have event listeners
        if ((button as any).__hasHoverEffect) return

        button.addEventListener("mouseenter", (e) => {
          const target = e.currentTarget as HTMLElement

          // Create ripple effect
          const ripple = document.createElement("span")
          ripple.className = "absolute inset-0 bg-current opacity-10 rounded-inherit"
          ripple.style.transform = "scale(0)"
          ripple.style.transformOrigin = "center"
          ripple.style.animation = "ripple 0.6s ease-out forwards"

          // Only add if the button has position relative
          const position = window.getComputedStyle(target).position
          if (position === "relative" || position === "absolute") {
            target.appendChild(ripple)

            // Remove after animation
            setTimeout(() => {
              if (ripple.parentNode === target) {
                target.removeChild(ripple)
              }
            }, 700)
          }
        })

        // Mark as processed
        ;(button as any).__hasHoverEffect = true
      })
    }

    // Add subtle parallax to images
    const addImageParallax = () => {
      const images = document.querySelectorAll("img:not([data-no-parallax])")

      images.forEach((img) => {
        // Skip elements that already have event listeners
        if ((img as any).__hasParallax) return

        const parent = img.parentElement
        if (!parent) return

        // Only apply to images in containers with relative/absolute positioning
        const position = window.getComputedStyle(parent).position
        if (position !== "relative" && position !== "absolute") return

        parent.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = parent.getBoundingClientRect()
          const x = (e.clientX - left) / width - 0.5
          const y = (e.clientY - top) / height - 0.5

          // Subtle movement
          img.style.transform = `translate(${x * 5}px, ${y * 5}px) scale(1.03)`
          img.style.transition = "transform 0.2s ease-out"
        })

        parent.addEventListener("mouseleave", () => {
          img.style.transform = "translate(0, 0) scale(1)"
          img.style.transition = "transform 0.5s ease-out"
        })

        // Mark as processed
        ;(img as any).__hasParallax = true
      })
    }

    // Add styles for animations
    const addStyles = () => {
      if (document.getElementById("micro-interaction-styles")) return

      const style = document.createElement("style")
      style.id = "micro-interaction-styles"
      style.textContent = `
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .rounded-inherit {
          border-radius: inherit;
        }
      `
      document.head.appendChild(style)
    }

    // Initialize
    addStyles()
    addButtonEffects()
    addImageParallax()

    // Re-run on DOM changes to catch dynamically added elements
    const observer = new MutationObserver(() => {
      addButtonEffects()
      addImageParallax()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      const style = document.getElementById("micro-interaction-styles")
      if (style) style.remove()
    }
  }, [])

  return null
}
