"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
     className={cn(`size-[1.6rem] flex items-center justify-center hover:scale-105 transition-all`)}
    >
      {theme === "dark" ? <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> : <Moon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
    </Button>
  )
}
