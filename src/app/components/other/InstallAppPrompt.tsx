"use client"

import { useEffect, useState } from "react"

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function InstallAppPrompt() {
  const [installEvent, setInstallEvent] = useState<InstallPromptEvent | null>(null)

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) return

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as InstallPromptEvent)
    }

    const handleAppInstalled = () => setInstallEvent(null)
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined)
    }
  }, [])

  if (!installEvent) return null

  const install = async () => {
    await installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }

  return (
    <button
      type="button"
      onClick={install}
      className="fixed bottom-4 right-4 z-50 rounded-md bg-green-600 px-4 py-3 font-semibold text-white shadow-lg"
    >
      Install Next Movie
    </button>
  )
}
