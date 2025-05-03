import Link from "next/link"

export default async function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-10 px-6 md:px-10 lg:px-16 text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">Oops! The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}
