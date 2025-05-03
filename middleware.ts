import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define asset extensions that should be cached
const STATIC_ASSETS = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "svg",
  "ico",
  "webp",
  "avif",
  "css",
  "js",
  "woff",
  "woff2",
  "ttf",
  "otf",
  "json",
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for a static asset
  const isStaticAsset = STATIC_ASSETS.some((ext) => pathname.endsWith(`.${ext}`))

  // Apply caching headers for static assets
  if (isStaticAsset) {
    const response = NextResponse.next()

    // Set caching headers
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")

    // Set content security policy for images
    if (["jpg", "jpeg", "png", "gif", "svg", "webp", "avif"].some((ext) => pathname.endsWith(`.${ext}`))) {
      response.headers.set("Content-Security-Policy", "default-src 'self'; img-src 'self' data: blob:")
    }

    return response
  }

  // For HTML pages, use a different caching strategy
  if (pathname === "/" || pathname.endsWith(".html")) {
    const response = NextResponse.next()

    // Set caching headers for HTML - shorter cache time
    response.headers.set("Cache-Control", "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400")

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except API routes, Next.js internals, and _next
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
