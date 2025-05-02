import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import AnimateOnScroll from "@/components/animate-on-scroll"

const faqs = [
  {
    question: "Is SIMEXTRACK free to use?",
    answer:
      "SIMEXTRACK offers both free and premium plans. The free plan includes basic expense tracking and reporting features, while the premium plan offers advanced features like budget planning, financial goals, and cloud sync across devices.",
  },
  {
    question: "Can I export my data from SIMEXTRACK?",
    answer:
      "Yes, SIMEXTRACK allows you to export your financial data in various formats including CSV and PDF. This makes it easy to use your data in spreadsheets or share reports with your accountant.",
  },
  {
    question: "Is my financial data secure with SIMEXTRACK?",
    answer:
      "Absolutely. We take security very seriously. Your data is encrypted both in transit and at rest. We use industry-standard security practices and do not share your financial information with third parties without your explicit consent.",
  },
  {
    question: "Does SIMEXTRACK work offline?",
    answer:
      "Yes, SIMEXTRACK is designed to work offline. You can record expenses and income without an internet connection, and the app will sync your data when you're back online.",
  },
  {
    question: "Can I track expenses in multiple currencies?",
    answer:
      "Yes, SIMEXTRACK supports multiple currencies and automatically converts them to your primary currency using the latest exchange rates. This is especially useful for travelers or those who manage finances across different countries.",
  },
  {
    question: "How do I get support if I have issues with the app?",
    answer:
      "We offer support through multiple channels. You can reach out via the in-app help center, email our support team, or check our comprehensive knowledge base for answers to common questions.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-10 lg:px-16">
        <AnimateOnScroll
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about SIMEXTRACK
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={200} className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
