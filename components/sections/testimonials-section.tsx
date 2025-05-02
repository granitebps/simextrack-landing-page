import Image from "next/image"
import { Star } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatarSrc: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "SIMEXTRACK has completely transformed how I manage my business expenses. The interface is intuitive and the reports give me insights I never had before.",
    rating: 5,
    avatarSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    content:
      "As a freelancer, keeping track of expenses was always a hassle until I found SIMEXTRACK. Now I can easily categorize client expenses and generate reports for tax season.",
    rating: 5,
    avatarSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "College Student",
    content:
      "The budget planning feature has helped me stay on track with my limited student budget. I love how simple it is to use while still being powerful.",
    rating: 4,
    avatarSrc: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it - hear from people who use SIMEXTRACK every day
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={testimonial.id}
              animation="fade-up"
              delay={index * 100}
              className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatarSrc || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-warning fill-warning" : "text-muted"}`}
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-muted-foreground">"{testimonial.content}"</blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
