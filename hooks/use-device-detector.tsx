"use client"

import { useState, useEffect } from "react"

type DeviceType = "android" | "ios" | "desktop" | "unknown"

export default function useDeviceDetector() {
  const [deviceType, setDeviceType] = useState<DeviceType>("unknown")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || ""

    // Check for iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDeviceType("ios")
      return
    }

    // Check for Android devices
    if (/android/i.test(userAgent)) {
      setDeviceType("android")
      return
    }

    // If not mobile, assume desktop
    setDeviceType("desktop")
  }, [])

  const getAppStoreLink = () => {
    // Replace with your actual App Store link
    return "https://simextrack.onelink.me/4ANi/ramfvicw"
  }

  const getPlayStoreLink = () => {
    // Replace with your actual Play Store link
    return "https://simextrack.onelink.me/4ANi/ramfvicw"
  }

  const getStoreLink = () => {
    switch (deviceType) {
      case "ios":
        return getAppStoreLink()
      case "android":
      case "desktop":
      default:
        return getPlayStoreLink()
    }
  }

  return {
    deviceType,
    isClient,
    isAndroid: deviceType === "android",
    isIOS: deviceType === "ios",
    isDesktop: deviceType === "desktop",
    getStoreLink,
    getAppStoreLink,
    getPlayStoreLink,
  }
}
