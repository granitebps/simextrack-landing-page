import type React from "react"
import Image from "next/image"
import { Columns3Cog, Globe, Star, User, ChartNoAxesCombined, Target } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

interface FeatureProps {
  icon?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string
  animation: "slide-in-left" | "slide-in-right"
  delay: number
}

const Feature = ({ icon, imageSrc, imageAlt = "", title, description, animation, delay }: FeatureProps) => (
  <AnimateOnScroll
    animation={animation}
    delay={delay}
    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 group"
  >
    <div className="transition-all duration-300 transform group-hover:scale-110 min-w-[40px] flex items-center justify-center">
      {imageSrc ? (
        <div className="relative h-10 w-10 overflow-hidden rounded-md">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt || `${title} feature icon`}
            width={40}
            height={40}
            className="object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        icon
      )}
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </AnimateOnScroll>
)

export default function FeaturesSection() {
  const leftFeatures = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Track",
      description:
        "You can easily track your money by adding expenses, incomes, or transfers between safebox. You also can track your money based on category and safebox.",
      imageSrc: "",
      imageAlt: "",
    },
    {
      icon: <ChartNoAxesCombined className="h-10 w-10 text-primary" />,
      title: "History",
      description:
        "If you forget where your money is gone, or where your money coming from, you can check your money history by date, category, and safebox.",
      imageSrc: "",
      imageAlt: "",
    },
  ]

  const rightFeatures = [
    {
      icon: <Columns3Cog className="h-10 w-10 text-primary" />,
      title: "Customizable",
      description:
        "We provide you some default categories. But you can add your category and safebox. So you can track your money more specifically. You can reset your data if you want to start fresh.",
      imageSrc: "",
      imageAlt: "",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Online",
      description:
        "We save your data on our server. So if you uninstall the application, your data will not be lost. You can register/log in using an email (We only save your email for login purposes).",
      imageSrc: "",
      imageAlt: "",
    },
  ]

  return (
    <section id="features" className="content-visibility-auto w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Main Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to manage your personal finances in one simple app
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            {leftFeatures.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
                animation="slide-in-left"
                delay={index * 100}
              />
            ))}
          </div>
          <div className="grid gap-6">
            {rightFeatures.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
                animation="slide-in-right"
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
