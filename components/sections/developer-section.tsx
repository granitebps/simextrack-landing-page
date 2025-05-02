import Link from "next/link"
import Image from "next/image"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function DeveloperSection() {
  return (
    <section id="developer" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-6 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll animation="fade-in" className="flex justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-8 border-muted transition-all duration-500 hover:shadow-xl hover:scale-105">
              <Image src="/dev-1.jpg" alt="Developer Profile" width={300} height={300} className="object-cover" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-in-right" className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Developer</h2>
              {/* <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SIMEXTRACK is developed by a passionate individual dedicated to creating simple yet powerful tools to
                help people manage their finances.
              </p> */}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">About Me</h3>
              <p className="text-muted-foreground">
                I'm a enthusiastic software engineer with a deep passion for programming and a fervent commitment to
                continuous learning. Procient in back-end technologies such as Laravel, Golang, and Node.js, with
                expertise in React and Vue for front-end. Experienced in mobile development with React Native and
                skilled in leveraging Docker for both containerization and deployment purposes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="https://granitebps.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </Link>

              <div className="flex gap-3 ml-2">
                <Link
                  href="https://github.com/granitebps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background border border-input shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/granitebps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background border border-input shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/granitbps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background border border-input shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
