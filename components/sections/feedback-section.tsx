import AnimateOnScroll from "@/components/animate-on-scroll"
import FeedbackForm from "@/components/feedback-form"

export default function FeedbackSection() {
  return (
    <section id="feedback" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Feedback Matters</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Help improve SIMEXTRACK by sharing your thoughts and suggestions
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in" delay={200} className="mx-auto max-w-lg py-12">
          <FeedbackForm />
        </AnimateOnScroll>
      </div>
    </section>
  )
}
