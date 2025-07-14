"use client";

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [rotateLight, setRotateLight] = useState(false)
  const [rotateDark, setRotateDark] = useState(false)

  const handleLightClick = () => {
    setTheme('light')
    setRotateLight(true)
  }
  const handleDarkClick = () => {
    setTheme('dark')
    setRotateDark(true)
  }

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={handleLightClick}
              aria-label="Set light theme"
              className={`transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-full p-1
                ${!isDark ? 'text-yellow-500 scale-110' : 'text-muted-foreground opacity-70 hover:scale-105 hover:text-yellow-400'}
              `}
            >
              <Sun
                className={`size-6 transition-transform duration-300 ${rotateLight ? 'animate-spin-360' : ''}`}
                onAnimationEnd={() => setRotateLight(false)}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>Light Mode</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={handleDarkClick}
              aria-label="Set dark theme"
              className={`transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-full p-1
                ${isDark ? 'text-blue-400 scale-110' : 'text-muted-foreground opacity-70 hover:scale-105 hover:text-blue-400'}
              `}
            >
              <Moon
                className={`size-6 transition-transform duration-300 ${rotateDark ? 'animate-spin-360' : ''}`}
                onAnimationEnd={() => setRotateDark(false)}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>Dark Mode</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export default ThemeSwitcher