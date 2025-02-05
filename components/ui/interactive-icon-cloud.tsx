"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: true,
    shuffleTags: true,
    frontSelect: true,
    textHeight: 14,
    dragThreshold: 3,
    fadeIn: 800,
    decel: 0.95,
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shadow: "#000000",
    shadowBlur: 0,
    shadowOffset: [0, 0],
    textAlign: "centre",
    textColour: "hsl(var(--primary))",
    weight: true,
    weightFrom: null,
    weightGradient: {
      0: "hsl(var(--primary))",
      0.33: "hsl(var(--primary))",
      0.66: "hsl(var(--secondary))",
      1: "hsl(var(--secondary))"
    },
    weightMode: "size",
    weightSize: 1,
    weightSizeMax: null,
    weightSizeMin: null,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 84,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
      style: {
        color: "hsl(var(--primary))",
        transition: "all 0.3s ease",
      },
      onMouseEnter: (e: any) => {
        e.currentTarget.style.color = "hsl(var(--secondary))"
        e.currentTarget.style.transform = "scale(1.1)"
      },
      onMouseLeave: (e: any) => {
        e.currentTarget.style.color = "hsl(var(--primary))"
        e.currentTarget.style.transform = "scale(1)"
      },
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    )
  }, [data, theme])

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon cloud */}
      <div className="relative">
        <Cloud {...cloudProps}>
          <>{renderedIcons}</>
        </Cloud>
      </div>
    </div>
  )
}

export default IconCloud;