"use client"

import { useState, useRef, useEffect, memo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ResponsiveImage from "@/components/responsive-image"

interface ScreenshotGalleryProps {
  screenshots: {
    src: string
    mobileSrc?: string
    tabletSrc?: string
    desktopSrc?: string
    alt: string
  }[]
}

function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Number of screenshots to show at once (for desktop)
  const screenshotsPerView = 5

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-scroll for mobile view
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollBy({ left: 220, behavior: "smooth" })
      } else {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(autoScroll)
  }, [])

  // Calculate indices for visible screenshots
  const getVisibleScreenshots = () => {
    const indices = []
    for (let i = 0; i < screenshotsPerView; i++) {
      indices.push((currentIndex + i) % screenshots.length)
    }
    return indices
  }

  // Process screenshots to ensure they have all required properties
  const processedScreenshots = screenshots.map((screenshot) => ({
    mobileSrc: screenshot.mobileSrc || screenshot.src,
    tabletSrc: screenshot.tabletSrc || screenshot.src,
    desktopSrc: screenshot.desktopSrc || screenshot.src,
    src: screenshot.src,
    alt: screenshot.alt,
  }))

  return (
    <div className="w-full">
      {/* Mobile View - Scrollable */}
      <div
        ref={scrollContainerRef}
        className="md:hidden overflow-x-auto pb-4 flex gap-4 snap-x snap-mandatory hide-scrollbar"
      >
        {processedScreenshots.map((screenshot, index) => (
          <div
            key={index}
            className="min-w-[200px] max-w-[200px] snap-center overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
          >
            <ResponsiveImage
              mobileSrc={screenshot.mobileSrc}
              desktopSrc={screenshot.desktopSrc}
              alt={screenshot.alt}
              width={300}
              height={600}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Desktop View - Arrow Navigation */}
      <div className="hidden md:block relative">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 -translate-x-1/2"
            disabled={isAnimating}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="w-full overflow-hidden px-10">
            <div
              className={cn(
                "flex gap-6 transition-all duration-500 ease-in-out",
                isAnimating && direction === "right" ? "animate-slide-left" : "",
                isAnimating && direction === "left" ? "animate-slide-right" : ""
              )}
            >
              {getVisibleScreenshots().map((index) => (
                <div
                  key={index}
                  className="flex-1 overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="aspect-[9/16] relative">
                    <ResponsiveImage
                      mobileSrc={processedScreenshots[index].mobileSrc}
                      tabletSrc={processedScreenshots[index].tabletSrc}
                      desktopSrc={processedScreenshots[index].desktopSrc}
                      alt={processedScreenshots[index].alt}
                      width={300}
                      height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 translate-x-1/2"
            disabled={isAnimating}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ScreenshotGallery)
