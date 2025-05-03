import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SIMEXTRACK - Simple Expense Tracker",
    short_name: "SIMEXTRACK",
    description:
      "SIMEXTRACK is a simple yet powerful expense tracker and budgeting app. Easily manage your money, track income and spending, and set financial goals with customizable tools that adapt to your lifestyle.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#197BBD",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    scope: "/",
    orientation: "portrait",
    lang: "en",
  }
}
