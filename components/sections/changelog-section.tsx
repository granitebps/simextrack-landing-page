import Link from "next/link"
import { ChevronRight } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import ChangelogList from "@/components/changelog-section"

export default function ChangelogSection() {
  return (
    <section id="changelog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Changelog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with the latest improvements and features
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in" delay={200} className="mx-auto max-w-3xl py-12">
          <ChangelogList />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={300} className="flex justify-center">
          <Link
            href="/changelog"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Full Changelog
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
