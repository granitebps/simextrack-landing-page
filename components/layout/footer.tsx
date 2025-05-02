import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30 py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">SIMEXTRACK</h3>
            <p className="text-sm text-muted-foreground">
              Track your money in the simplest way you can imagine with our highly customizable app.
            </p>
            {/* <div className="flex space-x-3">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div> */}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="text-muted-foreground hover:text-foreground transition-colors">
                  Screenshots
                </Link>
              </li>
              {/* <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li> */}
              <li>
                <Link href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-muted-foreground hover:text-foreground transition-colors">
                  GDPR Compliance
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-sm text-muted-foreground">Stay updated with the latest features and releases.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px] h-9"
                aria-label="Email for newsletter"
              />
              <Button className="h-9">Subscribe</Button>
            </div>
          </div> */}
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} SIMEXTRACK. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Designed with ❤️ for a better financial future
          </p>
        </div>
      </div>
    </footer>
  )
}
