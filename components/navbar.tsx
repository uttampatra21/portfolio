"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, ArrowRight, Terminal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "CareerGarantia", href: "/careergarantia" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Sleek, glowing full-width progress bar at the very top of the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] origin-left z-[100]"
        style={{
          scaleX,
          background: "linear-gradient(to right, hsl(var(--custom-accent)), rgba(var(--custom-accent-rgb), 0.8))",
          boxShadow: "0 0 12px rgba(var(--custom-accent-rgb), 0.5), 0 0 4px rgba(var(--custom-accent-rgb), 0.3)",
        }}
      />
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none">
        <motion.nav
        className={`mx-auto w-full max-w-7xl transition-all duration-500 pointer-events-auto rounded-2xl border backdrop-blur-md ${
          scrolled
            ? "border-slate-800 bg-slate-950/85 shadow-2xl shadow-black/60 px-6 py-2"
            : "border-slate-900/60 bg-slate-950/50 shadow-lg px-6 py-3.5"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex justify-between items-center h-14 relative">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Link href="/" className="flex items-center gap-3 group outline-none focus:outline-none">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl theme-lab-bg-gradient text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-all duration-350">
                <Terminal className="h-5 w-5 group-hover:rotate-6 transition-transform duration-350" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-none group-hover:text-white transition-all duration-300">
                  Uttam Patra
                </span>
                <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest font-mono">
                  Frontend Architect
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-950/45 p-1 rounded-2xl border border-slate-900/60 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} className="relative outline-none focus:outline-none">
                <div
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-350 z-10 cursor-pointer relative outline-none focus:outline-none select-none ${
                    pathname === item.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-slate-900/60 border border-slate-800/40 rounded-xl -z-10 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={
                      pathname === item.href
                        ? "theme-lab-text inline-block"
                        : ""
                    }
                  >
                    {item.name}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-[2px] theme-lab-bg-gradient rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Hire Me CTA Button */}
            <Button
              size="sm"
              className="hidden md:inline-flex theme-lab-btn text-white font-bold rounded-xl px-5 py-2 h-10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group border border-white/5 shadow-lg outline-none focus:outline-none"
              asChild
            >
              <Link href="/contact">
                Hire Me
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all text-slate-350"
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </div>
        </div>

      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-slate-900 rounded-2xl shadow-2xl p-6 md:hidden z-50 pointer-events-auto"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? "text-blue-400 bg-slate-900 border border-slate-850"
                        : "text-slate-300 hover:text-blue-400 hover:bg-slate-900/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="pt-2"
              >
                <Button
                  className="w-full theme-lab-btn text-white font-bold rounded-xl py-3.5 justify-center shadow-lg border border-white/5"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  )
}
