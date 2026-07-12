"use client"

import { motion, type Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ")

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  }

  // Separate layout/parent classes from gradient/color classes to prevent clipping bugs on animated elements
  const parentClasses = className
    .split(" ")
    .filter(
      (c) =>
        !c.startsWith("bg-gradient-") &&
        !c.startsWith("from-") &&
        !c.startsWith("via-") &&
        !c.startsWith("to-") &&
        c !== "bg-clip-text" &&
        c !== "text-transparent"
    )
    .join(" ")

  const childGradientClasses = className
    .split(" ")
    .filter(
      (c) =>
        c.startsWith("bg-gradient-") ||
        c.startsWith("from-") ||
        c.startsWith("via-") ||
        c.startsWith("to-") ||
        c === "bg-clip-text" ||
        c === "text-transparent"
    )
    .join(" ")

  return (
    <motion.div className={`${parentClasses} overflow-visible`} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`inline-block mr-[0.27em] last:mr-0 whitespace-nowrap ${childGradientClasses}`}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
