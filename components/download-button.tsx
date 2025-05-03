"use client"

import { Download } from "lucide-react"
import Link from "next/link"
import useDeviceDetector from "@/hooks/use-device-detector"

interface DownloadButtonProps {
  className?: string
  showIcon?: boolean
  text?: string
}

export default function DownloadButton({ className, showIcon = true, text }: DownloadButtonProps) {
  const { deviceType, isClient, getStoreLink } = useDeviceDetector()

  if (!isClient) {
    // Return a placeholder during SSR
    return (
      <div className={className}>
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 sm:px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          {showIcon && <Download className="mr-2 h-4 w-4" />}
          <span className="whitespace-nowrap">Loading...</span>
        </div>
      </div>
    )
  }

  const buttonText = text || (deviceType === "ios" ? "Download on App Store" : "Download on Play Store")

  return (
    <Link
      href={getStoreLink()}
      className={`inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 sm:px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {showIcon && <Download className="mr-2 h-4 w-4" />}
      <span className="whitespace-nowrap">{buttonText}</span>
    </Link>
  )
}
