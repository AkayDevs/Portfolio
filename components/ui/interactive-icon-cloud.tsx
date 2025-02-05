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
      padding: "1rem",
      borderRadius: "1rem",
      background: "transparent",
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
    maxSpeed: 0.02,
    minSpeed: 0.01,
    decel: 0.98,
    radiusX: 0.7,
    radiusY: 0.7,
    radiusZ: 0.7,
    stretchX: 1,
    stretchY: 1,
    shuffleTags: true,
    frontSelect: true,
    textHeight: 24,
    dragControl: true,
    dragThreshold: 4,
    textColour: "hsl(var(--primary))",
    weight: true,
    weightMode: "size",
    weightFrom: null,
    weightSize: 1.5,
    weightGradient: {
      0: "hsl(var(--primary))",
      0.33: "hsl(var(--primary))",
      0.66: "hsl(var(--secondary))",
      1: "hsl(var(--secondary))"
    },
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
    size: 96,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
      style: {
        color: "hsl(var(--primary))",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: 0.8,
      },
      onMouseEnter: (e: any) => {
        e.currentTarget.style.color = "hsl(var(--secondary))"
        e.currentTarget.style.transform = "scale(1.2) rotate(8deg)"
        e.currentTarget.style.opacity = "1"
      },
      onMouseLeave: (e: any) => {
        e.currentTarget.style.color = "hsl(var(--primary))"
        e.currentTarget.style.transform = "scale(1) rotate(0deg)"
        e.currentTarget.style.opacity = "0.8"
      },
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[];
  children?: (renderedIcon: React.ReactNode, slug: string) => React.ReactNode;
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs, children }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) => {
      const renderedIcon = renderCustomIcon(icon, theme || "light");
      if (children) {
        return children(renderedIcon, icon.slug);
      }
      return renderedIcon;
    })
  }, [data, theme, children])

  return (
    <div className="relative group">
      {/* Container Background with Gradient Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Main Container */}
      <div className="relative rounded-xl border border-primary/10 bg-background/50 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/30 group-hover:bg-background/60">
        <Cloud {...cloudProps}>
          <>{renderedIcons}</>
        </Cloud>
      </div>
    </div>
  )
}

export default IconCloud;