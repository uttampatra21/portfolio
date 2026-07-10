"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Terminal, Network, ShieldCheck, Database, Sliders, Zap } from "lucide-react"

interface SkillDetail {
  name: string
  level: number // 0-100
  useFrequency: string // e.g. "Daily", "Frequent"
  highlight: string
}

interface SkillCategory {
  id: string
  name: string
  icon: any
  description: string
  skills: SkillDetail[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "frameworks",
    name: "Frameworks & State",
    icon: Cpu,
    description: "Building component-driven scalable client architectures.",
    skills: [
      { name: "Next.js", level: 95, useFrequency: "Daily", highlight: "App router, SSR/ISR optimization, dynamic middleware" },
      { name: "React 19", level: 95, useFrequency: "Daily", highlight: "React Server Components, custom hook design, concurrent features" },
      { name: "Redux Toolkit", level: 90, useFrequency: "Daily", highlight: "Centralized slice management, RTK Query caching adapters" },
      { name: "Zustand", level: 85, useFrequency: "Frequent", highlight: "Ultra-light reactive state containers for SaaS widgets" },
    ],
  },
  {
    id: "languages",
    name: "Languages & Styling",
    icon: Terminal,
    description: "Core compiler stacks and pixel-perfect design rendering.",
    skills: [
      { name: "TypeScript", level: 92, useFrequency: "Daily", highlight: "Strict generic typings, schema validation, utility interfaces" },
      { name: "JavaScript (ES6+)", level: 95, useFrequency: "Daily", highlight: "Asynchronous programming models, DOM engines, closure systems" },
      { name: "Tailwind CSS", level: 95, useFrequency: "Daily", highlight: "Utility-first responsive layouts, custom utility layers, themes" },
      { name: "CSS3 / HTML5", level: 90, useFrequency: "Daily", highlight: "Semantic layout hierarchies, CSS grid systems, canvas, flexbox" },
    ],
  },
  {
    id: "feeds",
    name: "APIs & Web Feeds",
    icon: Network,
    description: "Seamless RESTful systems and real-time socket connections.",
    skills: [
      { name: "WebSockets", level: 88, useFrequency: "Frequent", highlight: "Real-time chat infrastructure, live sports statistics feeds" },
      { name: "RESTful APIs", level: 95, useFrequency: "Daily", highlight: "Axios interceptors, centralized error handling, data adapters" },
      { name: "Payment Gateways", level: 90, useFrequency: "Frequent", highlight: "Razorpay integrations, checkout callback webhooks" },
      { name: "OAuth & Auth0", level: 85, useFrequency: "Frequent", highlight: "Google OAuth, secure cookie session configurations" },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Tools",
    icon: Database,
    description: "Robust CI/CD configurations, deployments, and CMS platforms.",
    skills: [
      { name: "Git & GitHub", level: 90, useFrequency: "Daily", highlight: "Feature branch flows, pull requests, cherry-pick operations" },
      { name: "AWS S3", level: 80, useFrequency: "Frequent", highlight: "Cloud asset buckets, pre-signed upload URL integrations" },
      { name: "Digital Ocean", level: 80, useFrequency: "Frequent", highlight: "Droplet configurations, static sites build deployments" },
      { name: "Prismic CMS", level: 82, useFrequency: "Frequent", highlight: "Modular dynamic block generation, rich page layouts" },
    ],
  },
]

export default function SkillsMatrix() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(skillCategories[0].id)
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null)

  const activeCategory = skillCategories.find((cat) => cat.id === selectedCategoryId)!

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 dark:bg-blue-400/10 rounded-full border border-blue-200/50 dark:border-blue-800/30 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-mono">
              Technical Stack
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent tracking-tight">
            Interactive Skill Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-450 max-w-2xl mx-auto leading-relaxed">
            Click into different technical subsystems to analyze my engineering competence, average load, and real-world deployment cases.
          </p>
        </div>

        {/* Matrix Dashboard Console */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Subsystems Navigation (Left Side) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <span className="text-[10px] font-bold font-mono text-slate-550 dark:text-slate-450 uppercase tracking-widest pl-2">
              Select Subsystem
            </span>
            {skillCategories.map((category) => {
              const isSelected = category.id === selectedCategoryId
              const Icon = category.icon
              
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategoryId(category.id)
                    setHoveredSkill(null)
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group flex items-start gap-4 ${
                    isSelected
                      ? "bg-slate-950/80 border-blue-500/30 dark:bg-slate-900/60 dark:border-blue-500/40 text-slate-900 dark:text-white"
                      : "bg-slate-950/20 border-slate-900/50 dark:bg-slate-950/10 dark:border-slate-850/30 text-slate-500 hover:text-slate-350 hover:border-slate-800"
                  }`}
                >
                  {/* Neon Glow strip */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                  )}
                  
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isSelected 
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                      : "bg-slate-900/40 text-slate-500 group-hover:text-slate-350 border border-transparent"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold tracking-tight">{category.name}</h3>
                    <p className="text-xs text-slate-450 dark:text-slate-400 font-medium leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Subsystem Details & Terminal Console (Right Side) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-slate-950/80 dark:bg-slate-900/40 border border-slate-900 rounded-3xl p-6 lg:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Glow backing */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-900/60 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                    subsystem_console // {activeCategory.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-900">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" /> INTEGRITY SECURE
                </div>
              </div>

              {/* Grid of skills */}
              <div className="grid sm:grid-cols-2 gap-4">
                {activeCategory.skills.map((skill) => {
                  const isHovered = hoveredSkill?.name === skill.name
                  
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        isHovered
                          ? "bg-slate-950 border-blue-500/20 text-white"
                          : "bg-slate-950/50 border-slate-900/80 text-slate-400 hover:border-slate-800"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-sm font-extrabold tracking-tight text-white">{skill.name}</span>
                        <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10">
                          {skill.level}% CAP
                        </span>
                      </div>

                      {/* Animated Progress bar */}
                      <div className="space-y-1">
                        <div className="w-full bg-slate-900/60 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-650"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)" }}
                          />
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-slate-550 mt-1">
                          <span>Usage: <strong className="text-slate-400">{skill.useFrequency}</strong></span>
                          <span>Core Competence</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Console Output Box / Skill Highlight */}
            <div className="mt-8 border-t border-slate-900/60 pt-6 relative z-10">
              <div className="bg-slate-950/90 border border-slate-900 rounded-2xl p-5 font-mono text-xs leading-relaxed text-slate-400 min-h-[110px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {hoveredSkill ? (
                    <motion.div
                      key={hoveredSkill.name}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2 text-white font-bold">
                        <span className="text-blue-400">&gt;</span> INSPECTING: {hoveredSkill.name}
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {hoveredSkill.highlight}
                      </p>
                      <div className="text-[10px] text-slate-500 font-bold">
                        FREQUENCY OF USE: {hoveredSkill.useFrequency} // ENGINE STATUS: OPTIMAL
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-500 flex flex-col items-center justify-center text-center h-full gap-2 py-4"
                    >
                      <Sliders className="w-5 h-5 text-slate-650 animate-pulse" />
                      <p className="text-[11px] font-bold">Hover over a skill block above to read terminal telemetry details.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
