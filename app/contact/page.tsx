"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedText from "@/components/animated-text"
import ScrollToTop from "@/components/scroll-to-top"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dev.uttampatra@gmail.com",
    href: "mailto:dev.uttampatra@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6294718722",
    href: "tel:+916294718722",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal",
    href: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} as const

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 relative z-10 overflow-hidden">
      <ScrollToTop />

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 dark:bg-blue-400/10 rounded-full border border-blue-200/50 dark:border-blue-800/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-mono">
              Get in Touch
            </span>
          </motion.div>
          
          <AnimatedText
            text="Let's build something together"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-6 tracking-tight"
          />
          <motion.p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have an idea for a SaaS platform, need help scaling your frontend architecture, or want to collaborate? I'm always open to new opportunities.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-900/5 dark:shadow-slate-950/20"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2.5">
              <span>Send Message</span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-normal">// Response within 24h</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold font-mono uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold font-mono uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold font-mono uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Project Proposal / Consultation"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold font-mono uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-850 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
                  placeholder="Hi Uttam, I would love to collaborate with you on..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Details */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={itemVariants}
          >
            {/* Contact details card */}
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-900/5 dark:shadow-slate-950/20 space-y-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white/30 dark:bg-slate-950/30 border border-slate-200/40 dark:border-slate-800/30 hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-450 dark:text-slate-500">{label}</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200 break-all">{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 p-6 rounded-3xl border border-emerald-500/20 dark:border-emerald-500/10 shadow-lg shadow-emerald-500/[0.02]"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-sm text-emerald-800 dark:text-emerald-300">Available for Freelance & Remote Work</span>
              </div>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 leading-relaxed font-medium">
                I'm currently accepting new projects, architecture design reviews, and engineering consulting engagements. Let's start the conversation!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
