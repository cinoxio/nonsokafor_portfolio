"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeSwitch({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    // Animate between themes
    useEffect(() => {
        if (!mounted) return
    }, [mounted])
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    if (!mounted) return null
  return (
    <Button
          aria-label="button"
          variant='outline'
      type="button"
      size="icon"
      className={cn(className,`size-[1.3rem] flex items-center justify-center hover:scale-105 transition-all`)}
      onClick={toggleTheme}
    >
      {theme === "light" ? <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/> :
      <MoonIcon className="size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>}
    </Button>
  );
}




// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       variant="ghost"
//       type="button"
//       size="icon"
//       className="px-2"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//     >
//       <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
//       <Moon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
//     </Button>
//   );
// }
