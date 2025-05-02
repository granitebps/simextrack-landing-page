import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { promises as fs } from "fs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default async function ChangelogPage() {
  const file = await fs.readFile(process.cwd() + "/public/changelog.json", "utf8")
  const data = JSON.parse(file)

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "major":
        return "bg-success text-white hover:bg-success/90"
      case "minor":
        return "bg-primary text-white hover:bg-primary/90"
      case "patch":
        return "bg-warning hover:bg-warning/90"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container max-w-4xl py-10 px-6 md:px-10 lg:px-16">
      <div className="flex items-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Changelog</h1>
          <p className="mt-2 text-muted-foreground">A complete history of updates and improvements to SIMEXTRACK</p>
        </div>

        <Separator />

        <div className="space-y-12">
          {data.map((release: any, index: any) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">Version {release.version}</h2>
                <Badge className={getBadgeColor(release.type)}>
                  {release.type === "major"
                    ? "Major Release"
                    : release.type === "minor"
                    ? "Minor Release"
                    : "Bug Fixes"}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">Released on {release.date}</p>

              <div className="pl-4 border-l-2 border-muted">
                <h3 className="font-medium mb-2">Changes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {release.changes.map((change: any, changeIndex: any) => (
                    <li key={changeIndex}>{change}</li>
                  ))}
                </ul>
              </div>

              {index < data.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
