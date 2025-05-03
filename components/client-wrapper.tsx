"use client"

import type React from "react"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
