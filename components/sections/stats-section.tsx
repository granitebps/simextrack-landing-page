import type React from "react"
import { Users, Download, Star, Award } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

interface StatProps {
  icon: React.ReactNode
  value: string
  label: string
  delay: number
}

const Stat = ({ icon, value, label, delay }: StatProps) => (
  <AnimateOnScroll
    animation="fade-up"
    delay={delay}
    className="flex flex-col items-center text-center p-6 rounded-lg bg-card border shadow-sm"
  >
    <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-muted-foreground">{label}</p>
  </AnimateOnScroll>
)

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Helping people take control of their finances worldwide
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat icon={<Users className="h-6 w-6" />} value="100,000+" label="Active Users" delay={0} />
          <Stat icon={<Download className="h-6 w-6" />} value="250,000+" label="Downloads" delay={100} />
          <Stat icon={<Star className="h-6 w-6" />} value="4.8/5" label="Average Rating" delay={200} />
          <Stat icon={<Award className="h-6 w-6" />} value="15+" label="Industry Awards" delay={300} />
        </div>
      </div>
    </section>
  )
}
