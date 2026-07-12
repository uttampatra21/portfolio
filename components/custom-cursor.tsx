"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring configuration for the outer trailing circle (smooth lag effect)
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if the device is mobile/touch-enabled
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth < 768 || 
        navigator.maxTouchPoints > 0 || 
        "ontouchstart" in window
      )
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      // Determine if hovering over a clickable element
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer"

      setHovered(!!isClickable)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("resize", checkDevice)
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [cursorX, cursorY, visible])

  if (isMobile) return null

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          backgroundColor: hovered ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0)",
          borderColor: hovered ? "rgb(96, 165, 250)" : "rgba(59, 130, 246, 0.5)",
          boxShadow: hovered ? "0 0 15px rgba(59, 130, 246, 0.3)" : "none",
          transition: "scale 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out",
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.15 } }}
      />
    </>
  )
}
