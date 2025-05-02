import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SIMEXTRACK - Simple Expense Tracker",
    short_name: "SIMEXTRACK",
    description:
      "SIMEXTRACK is an app that can track your money in the simplest way you can imagine and very customizable.",
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
  }
}
