import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: "https://simextrack.my.id/sitemap.xml",
    host: "https://simextrack.my.id",
  }
}
