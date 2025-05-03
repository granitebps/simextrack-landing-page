import AnimateOnScroll from "@/components/animate-on-scroll"
import ScreenshotGallery from "@/components/screenshot-gallery"

// Sample screenshots data
const screenshots = [
  { src: "/screenshot-1.webp", alt: "Dashboard Screenshot" },
  { src: "/screenshot-2.webp", alt: "Expense Entry Screenshot" },
  { src: "/screenshot-3.webp", alt: "Reports Screenshot" },
  { src: "/screenshot-4.webp", alt: "Budget Planning Screenshot" },
  { src: "/screenshot-5.webp", alt: "Settings Screenshot" },
  { src: "/screenshot-6.webp", alt: "Categories Screenshot" },
  { src: "/screenshot-7.webp", alt: "Goals Screenshot" },
  { src: "/screenshot-8.webp", alt: "Statistics Screenshot" },
  { src: "/screenshot-9.webp", alt: "Statistics Screenshot" },
  { src: "/screenshot-10.webp", alt: "Statistics Screenshot" },
]

export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="content-visibility-auto w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">App Screenshots</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See SIMEXTRACK in action
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in" delay={200} className="mx-auto max-w-6xl py-12">
          <ScreenshotGallery screenshots={screenshots} />
        </AnimateOnScroll>
      </div>
    </section>
  )
}
