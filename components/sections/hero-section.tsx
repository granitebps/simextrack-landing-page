import Link from "next/link"
import Image from "next/image"
import AnimateOnScroll from "@/components/animate-on-scroll"
import DownloadButton from "@/components/download-button"
import { ParallaxElement } from "@/components/parallax-element"

export default function HeroSection() {
  return (
    <section className="hero-section w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-info/10 to-white dark:from-primary/20 dark:to-background relative overflow-hidden">
      {/* Decorative background elements with parallax effect */}
      <ParallaxElement className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" speed={0.2} />
      <ParallaxElement className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-info/5 blur-3xl" speed={-0.1} />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <AnimateOnScroll animation="fade-up" className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                SIMEXTRACK: Simple Expense Tracker
              </h1>
              <p className="text-xl text-muted-foreground">
                Track your money in the simplest way you can imagine with our highly customizable app.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <DownloadButton />
              <Link
                href="https://web.simextrack.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 sm:px-8 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Learn more about SIMEXTRACK features"
              >
                <span className="whitespace-nowrap">Web Version -{">"}</span>
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={300} className="flex items-center justify-center">
            <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <Image
                src="/iphone_hand.webp"
                alt="SIMEXTRACK App Dashboard Screenshot showing expense tracking interface"
                width={400}
                height={800}
                className="object-cover"
                priority
                sizes="(max-width: 768px) 250px, 250px"
                quality={90}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
