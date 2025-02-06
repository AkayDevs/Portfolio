"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

interface MousePosition {
    x: number
    y: number
}

function MousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return mousePosition
}

interface ParticlesProps {
    className?: string
    quantity?: number
    staticity?: number
    ease?: number
    refresh?: boolean
    color?: string
    secondaryColor?: string
    particleSize?: {
        min: number
        max: number
    }
    connectParticles?: boolean
    connectDistance?: number
    velocityRange?: {
        x: { min: number; max: number }
        y: { min: number; max: number }
    }
}

function hexToRgb(hex: string): number[] {
    hex = hex.replace("#", "")
    if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("")
    }
    const hexInt = parseInt(hex, 16)
    const red = (hexInt >> 16) & 255
    const green = (hexInt >> 8) & 255
    const blue = hexInt & 255
    return [red, green, blue]
}

const Particles: React.FC<ParticlesProps> = ({
    className = "",
    quantity = 50,
    staticity = 50,
    ease = 50,
    refresh = false,
    color = "#00FFFF",  // Electric Blue
    secondaryColor = "#A020F0",  // Bright Purple
    particleSize = { min: 1, max: 3 },
    connectParticles = true,
    connectDistance = 100,
    velocityRange = {
        x: { min: -0.2, max: 0.2 },
        y: { min: -0.2, max: 0.2 },
    },
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvasContainerRef = useRef<HTMLDivElement>(null)
    const context = useRef<CanvasRenderingContext2D | null>(null)
    const circles = useRef<Circle[]>([])
    const mousePosition = MousePosition()
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d")
        }
        initCanvas()
        animate()
        window.addEventListener("resize", initCanvas)

        return () => {
            window.removeEventListener("resize", initCanvas)
        }
    }, [color, secondaryColor, quantity, staticity, ease, particleSize, connectParticles, connectDistance, velocityRange])

    useEffect(() => {
        onMouseMove()
    }, [mousePosition.x, mousePosition.y])

    useEffect(() => {
        initCanvas()
    }, [refresh])

    const initCanvas = () => {
        resizeCanvas()
        drawParticles()
    }

    const onMouseMove = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect()
            const { w, h } = canvasSize.current
            const x = mousePosition.x - rect.left - w / 2
            const y = mousePosition.y - rect.top - h / 2
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
            if (inside) {
                mouse.current.x = x
                mouse.current.y = y
            }
        }
    }

    type Circle = {
        x: number
        y: number
        translateX: number
        translateY: number
        size: number
        alpha: number
        targetAlpha: number
        dx: number
        dy: number
        magnetism: number
        color: string
    }

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0
            canvasSize.current.w = canvasContainerRef.current.offsetWidth
            canvasSize.current.h = canvasContainerRef.current.offsetHeight
            canvasRef.current.width = canvasSize.current.w * dpr
            canvasRef.current.height = canvasSize.current.h * dpr
            canvasRef.current.style.width = `${canvasSize.current.w}px`
            canvasRef.current.style.height = `${canvasSize.current.h}px`
            context.current.scale(dpr, dpr)
        }
    }

    const circleParams = (): Circle => {
        const x = Math.floor(Math.random() * canvasSize.current.w)
        const y = Math.floor(Math.random() * canvasSize.current.h)
        const translateX = 0
        const translateY = 0
        const size = Math.random() * (particleSize.max - particleSize.min) + particleSize.min
        const alpha = 0
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
        const dx = (Math.random() * (velocityRange.x.max - velocityRange.x.min)) + velocityRange.x.min
        const dy = (Math.random() * (velocityRange.y.max - velocityRange.y.min)) + velocityRange.y.min
        const magnetism = 0.1 + Math.random() * 4
        const particleColor = Math.random() > 0.5 ? color : secondaryColor
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
            color: particleColor,
        }
    }

    const drawCircle = (circle: Circle, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha, color } = circle
            const rgb = hexToRgb(color)

            context.current.translate(translateX, translateY)
            context.current.beginPath()
            context.current.arc(x, y, size, 0, 2 * Math.PI)
            context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`
            context.current.fill()

            // Add a glow effect
            const gradient = context.current.createRadialGradient(x, y, 0, x, y, size * 2)
            gradient.addColorStop(0, `rgba(${rgb.join(", ")}, ${alpha * 0.3})`)
            gradient.addColorStop(1, `rgba(${rgb.join(", ")}, 0)`)
            context.current.fillStyle = gradient
            context.current.fill()

            context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

            // Draw connections between particles
            if (connectParticles) {
                circles.current.forEach((otherCircle) => {
                    const dx = otherCircle.x - x
                    const dy = otherCircle.y - y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectDistance) {
                        const opacity = (1 - distance / connectDistance) * 0.5 * alpha
                        context.current!.beginPath()
                        context.current!.moveTo(x + translateX, y + translateY)
                        context.current!.lineTo(
                            otherCircle.x + otherCircle.translateX,
                            otherCircle.y + otherCircle.translateY
                        )
                        context.current!.strokeStyle = `rgba(${rgb.join(", ")}, ${opacity})`
                        context.current!.lineWidth = (1 - distance / connectDistance) * 2
                        context.current!.stroke()
                    }
                })
            }

            if (!update) {
                circles.current.push(circle)
            }
        }
    }

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h,
            )
        }
    }

    const drawParticles = () => {
        clearContext()
        const particleCount = quantity
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams()
            drawCircle(circle)
        }
    }

    const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number,
    ): number => {
        const remapped =
            ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
        return remapped > 0 ? remapped : 0
    }

    const animate = () => {
        clearContext()
        circles.current.forEach((circle: Circle, i: number) => {
            // Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size,
                canvasSize.current.w - circle.x - circle.translateX - circle.size,
                circle.y + circle.translateY - circle.size,
                canvasSize.current.h - circle.y - circle.translateY - circle.size,
            ]
            const closestEdge = edge.reduce((a, b) => Math.min(a, b))
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
            )
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge
            }
            circle.x += circle.dx
            circle.y += circle.dy
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                ease
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                ease

            // Bounce off edges
            if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size) {
                circle.dx = -circle.dx
            }
            if (circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {
                circle.dy = -circle.dy
            }

            drawCircle(circle, true)
        })
        window.requestAnimationFrame(animate)
    }

    return (
        <div
            className={cn("pointer-events-none fixed inset-0 -z-10", className)}
            ref={canvasContainerRef}
            aria-hidden="true"
        >
            <canvas ref={canvasRef} className="h-full w-full" />
        </div>
    )
}

export { Particles }