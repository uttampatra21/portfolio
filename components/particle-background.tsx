"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 140
    }

    // Create particles with variable sizing
    const colors = ["rgba(59, 130, 246, 0.15)", "rgba(99, 102, 241, 0.12)", "rgba(147, 51, 234, 0.08)"]

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fetch dynamic theme color from document elements if applied
      const customAccentRgb = document.documentElement.style.getPropertyValue('--custom-accent-rgb') || "59, 130, 246"

      // Optimize: Avoid repeated connection checks by iterating forwards only (j = i + 1)
      // and bypass expensive Math.sqrt operations using squared threshold values.
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Update position
        p1.x += p1.vx
        p1.y += p1.vy

        // Bounce off edges
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
        ctx.fillStyle = p1.color
        ctx.fill()

        // Draw connection to mouse cursor using squared check
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x
          const dy = p1.y - mouse.y
          const distSq = dx * dx + dy * dy
          const mouseRadiusSq = mouse.radius * mouse.radius

          if (distSq < mouseRadiusSq) {
            const distance = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(${customAccentRgb}, ${0.12 * (1 - distance / mouse.radius)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        // Draw connections to other particles (only check unique pairs and check squared distance first)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distSq = dx * dx + dy * dy
          const thresholdSq = 14400 // 120 * 120

          if (distSq < thresholdSq) {
            const distance = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${customAccentRgb}, ${0.05 * (1 - distance / 120)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    />
  )
}
