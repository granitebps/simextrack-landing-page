import { promises as fs } from "fs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default async function ChangelogSection() {
  const file = await fs.readFile(process.cwd() + "/public/changelog.json", "utf8")
  const data = JSON.parse(file).slice(0, 3)

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
    <Accordion type="single" collapsible className="w-full">
      {data.map((release: any, index: any) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <span className="font-bold">v{release.version}</span>
              <Badge className={getBadgeColor(release.type)}>
                {release.type === "major" ? "Major Release" : release.type === "minor" ? "Minor Release" : "Bug Fixes"}
              </Badge>
              <span className="text-sm text-muted-foreground">{release.date}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2 py-2">
              {release.changes.map((change: any, changeIndex: any) => (
                <li key={changeIndex}>{change}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
