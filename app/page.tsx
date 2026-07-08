"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Award, Users, Code2, Zap, Cpu, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ParticleBackground from "@/components/particle-background"
import ScrollToTop from "@/components/scroll-to-top"
import AchievementBadges from "@/components/achievement-badges"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const floatingVariants1: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const floatingVariants2: Variants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay: 1,
    },
  },
}

export default function HomePage() {
  const [activeHeroTab, setActiveHeroTab] = useState("developer.ts")

  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        <motion.div
          className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-8 lg:space-y-10 lg:col-span-7 text-left" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-full border border-slate-200/50 dark:border-slate-800/50 shadow-sm shadow-blue-500/5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider font-mono">
                Available for new opportunities
              </span>
            </motion.div>

            <div className="space-y-6">
              <span className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase font-mono block">
                // Hello, World!
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Uttam Patra</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 mt-2">
                Frontend Architect & Developer
              </h2>
            </div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I design and build high-performance, enterprise-grade SaaS applications. Specializing in frontend architecture, modular systems, and slick responsive interfaces, I help scale startups and optimize digital products using modern web standards.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 lg:gap-6" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-2xl text-base font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                asChild
              >
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2.5 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
              {[
                {
                  icon: Github,
                  href: "https://github.com/uttampatra",
                  label: "GitHub",
                  color: "hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/uttam-patra",
                  label: "LinkedIn",
                  color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30",
                },
                {
                  icon: Mail,
                  href: "mailto:dev.uttampatra@gmail.com",
                  label: "Email",
                  color: "hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-3.5 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 transition-all duration-300 ${color}`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile/Mockup Column */}
          <motion.div className="relative lg:col-span-5 h-[480px] flex items-center justify-center" variants={itemVariants}>
            <div className="relative w-full max-w-[420px] h-[360px]">
              {/* Decorative Glow Ring Behind Workspace */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-60 animate-pulse pointer-events-none" />

              {/* IDE Code Workspace Mockup */}
              <div className="absolute inset-0 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl bg-slate-950/95 flex flex-col text-left pointer-events-auto overflow-hidden">
                {/* IDE Tab Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex gap-1.5">
                    {["developer.ts", "metrics.json", "stack.config"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveHeroTab(tab)}
                        className={`px-3 py-1 rounded-md text-[10px] md:text-xs font-mono transition-all ${
                          activeHeroTab === tab
                            ? "bg-slate-800/80 text-blue-400 font-semibold border-b border-blue-500"
                            : "text-slate-500 hover:text-slate-350"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* IDE Content */}
                <div className="flex-1 p-5 overflow-y-auto leading-relaxed select-none">
                  {activeHeroTab === "developer.ts" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-2.5">
                      <p>
                        <span className="text-pink-500">import</span> &#123; <span className="text-blue-400">FrontendArchitect</span> &#125; <span className="text-pink-500">from</span> <span className="text-emerald-400">"dev"</span>;
                      </p>
                      <p>
                        <span className="text-pink-500">const</span> <span className="text-yellow-400">uttamPatra</span> = <span className="text-pink-500">new</span> <span className="text-blue-400">FrontendArchitect</span>(&#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>name: <span className="text-emerald-400">"Uttam Patra"</span>,</p>
                        <p>role: <span className="text-emerald-400">"Frontend Architect"</span>,</p>
                        <p>experience: <span className="text-emerald-400">"2.5+ Years"</span>,</p>
                        <p>skills: [</p>
                        <div className="pl-4 text-amber-400">
                          "React.js", "Next.js",<br/>
                          "TypeScript", "TailwindCSS"<br/>
                        </div>
                        <p>],</p>
                        <p>cleanCode: <span className="text-cyan-400">true</span>,</p>
                        <p>optimized: <span className="text-cyan-400">true</span></p>
                      </div>
                      <p>&#125;);</p>
                    </div>
                  )}

                  {activeHeroTab === "metrics.json" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-1">
                      <p>&#123;</p>
                      <div className="pl-4">
                        <p><span className="text-blue-400">"lighthouse"</span>: &#123;</p>
                        <div className="pl-4">
                          <p><span className="text-slate-400">"performance"</span>: <span className="text-amber-500">99</span>,</p>
                          <p><span className="text-slate-400">"accessibility"</span>: <span className="text-amber-500">100</span>,</p>
                          <p><span className="text-slate-400">"seo"</span>: <span className="text-amber-500">100</span></p>
                        </div>
                        <p>&#125;,</p>
                        <p><span className="text-blue-400">"coreWebVitals"</span>: &#123;</p>
                        <div className="pl-4">
                          <p><span className="text-slate-400">"LCP"</span>: <span className="text-emerald-400">"0.8s"</span>,</p>
                          <p><span className="text-slate-400">"FID"</span>: <span className="text-emerald-400">"12ms"</span>,</p>
                          <p><span className="text-slate-400">"CLS"</span>: <span className="text-amber-500">0.01</span></p>
                        </div>
                        <p>&#125;</p>
                      </div>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeHeroTab === "stack.config" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-2">
                      <p>
                        <span className="text-pink-500">const</span> <span className="text-yellow-400">techStack</span> = &#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>library: <span className="text-emerald-400">"React 19"</span>,</p>
                        <p>framework: <span className="text-emerald-400">"Next.js 15"</span>,</p>
                        <p>styling: <span className="text-emerald-400">"TailwindCSS"</span>,</p>
                        <p>stateManagement: <span className="text-emerald-400">"Zustand / Redux"</span>,</p>
                        <p>animations: <span className="text-emerald-400">"Framer Motion"</span></p>
                      </div>
                      <p>&#125;;</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Lighthouse Audit Report Card */}
              <motion.div
                className="absolute -bottom-12 -right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-900/10 dark:shadow-slate-950/50 p-4 space-y-3 w-[200px] z-20 pointer-events-auto"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                  <span className="text-[9px] font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                    Lighthouse Audit
                  </span>
                  <span className="text-[8px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">
                    Passed
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Performance", score: 99, color: "text-emerald-500" },
                    { label: "Accessibility", score: 100, color: "text-emerald-500" },
                    { label: "Best Practices", score: 100, color: "text-emerald-500" },
                    { label: "SEO", score: 100, color: "text-emerald-500" },
                  ].map((m) => (
                    <div key={m.label} className="flex flex-col items-center justify-center">
                      <div className="relative w-9 h-9 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2" className="text-slate-100 dark:text-slate-800" fill="transparent" />
                          <motion.circle
                            cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2.5"
                            className={m.color}
                            fill="transparent"
                            strokeDasharray="94.2"
                            initial={{ strokeDashoffset: 94.2 }}
                            animate={{ strokeDashoffset: 94.2 - (94.2 * m.score) / 100 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                          />
                        </svg>
                        <span className="absolute text-[9px] font-bold text-slate-800 dark:text-white font-mono">
                          {m.score}
                        </span>
                      </div>
                      <span className="text-[8px] text-center text-slate-500 dark:text-slate-400 font-semibold mt-0.5 leading-none">
                        {m.label.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Tech Badges around IDE Workspace */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl p-2.5 flex items-center gap-2 z-20 pointer-events-auto"
                variants={floatingVariants1}
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-800 dark:text-white leading-none">Clean Architecture</span>
                  <span className="text-[7px] font-mono text-slate-500 dark:text-slate-400">Typescript</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl p-2.5 flex items-center gap-2 z-20 pointer-events-auto"
                variants={floatingVariants2}
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Zap className="h-3.5 w-3.5 text-yellow-500 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-800 dark:text-white leading-none">Web Vitals</span>
                  <span className="text-[7px] font-mono text-slate-500 dark:text-slate-400">LCP 0.8s</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievement Badges */}
      <AchievementBadges />

      {/* Core Expertise Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent tracking-tight">
              Core Expertise
            </h2>
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Engineering scalable foundations, rich data platforms, and high-performance frontend systems.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Frontend Architecture",
                subtitle: "Scalable Foundations",
                description: "Designing modular, maintainable folder structures and clean component-driven systems.",
                icon: Cpu,
                skills: ["Next.js & React", "TypeScript", "Zustand / Redux"],
                iconBg: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
                borderGlow: "group-hover:border-blue-500/30",
              },
              {
                title: "SaaS Dashboards",
                subtitle: "Data & Interactivity",
                description: "Crafting real-time analytical portals with interactive data grids and live feeds.",
                icon: LayoutGrid,
                skills: ["Live WebSockets", "Recharts / Highcharts", "Payment Gateways"],
                iconBg: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400",
                borderGlow: "group-hover:border-purple-500/30",
              },
              {
                title: "Performance Tuned",
                subtitle: "Speed & Optimization",
                description: "Applying advanced loading strategies to hit optimal Core Web Vitals and SEO compliance.",
                icon: Zap,
                skills: ["Code Splitting", "Optimized SEO", "SSR / Static Generation"],
                iconBg: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
                borderGlow: "group-hover:border-amber-500/30",
              },
              {
                title: "Clean Code & SOLID",
                subtitle: "Sustainable Dev",
                description: "Structuring readable, self-documenting code with comprehensive documentation and reviews.",
                icon: Code2,
                skills: ["DRY & SOLID Principles", "Semantic HTML", "Modular Components"],
                iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
                borderGlow: "group-hover:border-emerald-500/30",
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="group relative flex flex-col justify-between p-6 lg:p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${expertise.iconBg} flex items-center justify-center mb-6`}>
                    <expertise.icon className="h-6 w-6" />
                  </div>
                  
                  <span className="text-[10px] font-bold tracking-wider uppercase opacity-60 font-mono block mb-1">
                    {expertise.subtitle}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {expertise.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-6">
                    {expertise.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/60 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {expertise.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-150 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative border highlight on hover */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-500 pointer-events-none ${expertise.borderGlow}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-blue-950/30 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's collaborate to transform your vision into a powerful digital solution that drives results and exceeds
            expectations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start a Conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
