"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Calendar, Sparkles, Building2, Target } from "lucide-react"

interface TimelineItem {
  id: number
  type: "work" | "education"
  title: string
  subtitle: string
  period: string
  highlights: string[]
  tags: string[]
  summary: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    title: "Web Developer (Frontend Developer)",
    subtitle: "Notebrains Software and Services Pvt. Ltd",
    period: "Dec 2024 - Present",
    summary: "Leading frontend architecture and building scalable enterprise SaaS modules, live WebSockets channels, and custom payment pipelines.",
    highlights: [
      "Led frontend architecture and development of a production-ready Platform using Next.js and React.js.",
      "Built secure authentication with Google OAuth, OTP verification, and JWT-based authorization.",
      "Developed Admin Panel featuring role-based permissions and dashboard analytics.",
      "Implemented real-time chat, notifications, and live updates using WebSocket.",
      "Integrated Razorpay payment gateway with secure checkout workflows.",
      "Collaborated closely with backend developers to design scalable REST API integrations.",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "WebSockets", "Razorpay", "Google OAuth"],
  },
  {
    id: 2,
    type: "work",
    title: "Web Developer (Frontend Developer)",
    subtitle: "Webapps Software Solutions",
    period: "Jan 2024 - Dec 2024",
    summary: "Engineered scalable client platforms, optimized loading strategies, and centralized state structures.",
    highlights: [
      "Developed enterprise-grade SaaS applications using React.js, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.",
      "Designed scalable frontend architecture with reusable component libraries, improving development efficiency.",
      "Integrated REST APIs with centralized Axios interceptors, token-based authentication, and robust error handling.",
      "Implemented JWT authentication, protected routes, and role-based authorization.",
      "Built responsive, mobile-first interfaces compatible across major browsers.",
      "Optimized application performance through code splitting, lazy loading, and efficient rendering techniques.",
    ],
    tags: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Axios Interceptors", "Optimization"],
  },
  {
    id: 3,
    type: "education",
    title: "Full-Stack Web Development Training",
    subtitle: "Physics Wallah (PW Skills)",
    period: "Aug 2023 - Jan 2024",
    summary: "Intense specialization in modern JavaScript architectures, React engine rendering, and clean coding frameworks.",
    highlights: [
      "Deep dive into Frontend Web Development concepts, modern JavaScript (ES6+), React, Next.js, and web architectures.",
      "Built multiple projects focusing on responsive design, API consuming, and performance optimization.",
      "Practiced clean coding methods including SOLID and DRY patterns.",
    ],
    tags: ["JavaScript (ES6+)", "React.js", "Next.js", "Web Architectures", "Clean Code"],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Arts",
    subtitle: "Vidyasagar University",
    period: "Aug 2020 - Jan 2024",
    summary: "Developed strong conceptual bases in structured communication, system analysis, and logical reasoning.",
    highlights: [
      "Acquired critical thinking skills, structured communication, and conceptual problem-solving methods.",
      "Participated in peer tutoring and team-focused college coordination roles.",
    ],
    tags: ["Analytical Thinking", "Structured Communication", "Logic & Reason"],
  },
]

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedItem, setExpandedItem] = useState<number | null>(1) // default first expanded

  // Track scroll progress for the vertical glowing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Smooth out the scroll animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const handleToggleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <section ref={containerRef} className="py-24 lg:py-32 px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-600/[0.03] blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-600/[0.03] blur-3xl pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full border border-indigo-200/50 dark:border-indigo-800/30 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">
              Professional Journey
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 dark:from-white dark:via-indigo-100 dark:to-white bg-clip-text text-transparent tracking-tight">
            Milestones & Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-450 max-w-2xl mx-auto leading-relaxed">
            A chronological timeline of my career. Click each node to unpack core deliverables, engineering metrics, and libraries deployed.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative mt-12 pl-8 sm:pl-16">
          
          {/* Baseline vertical line (Muted background track) */}
          <div className="absolute left-[19px] sm:left-[39px] top-4 bottom-4 w-[2px] bg-slate-900/60 dark:bg-slate-800/50 rounded-full" />
          
          {/* Glowing active progress line (Framer motion controlled) */}
          <motion.div
            className="absolute left-[19px] sm:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            style={{ scaleY }}
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isExpanded = expandedItem === item.id
              const isWork = item.type === "work"
              
              return (
                <div key={item.id} className="relative group">
                  
                  {/* Timeline Indicator Node */}
                  <motion.div
                    className={`absolute -left-[30px] sm:-left-[50px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all z-20 cursor-pointer ${
                      isExpanded
                        ? "bg-slate-950 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                        : "bg-slate-950 border-slate-800 group-hover:border-slate-700"
                    }`}
                    onClick={() => handleToggleExpand(item.id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isWork ? (
                      <Briefcase className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isExpanded ? "text-blue-400" : "text-slate-500"}`} />
                    ) : (
                      <GraduationCap className={`w-3 h-3 sm:w-4 sm:h-4 ${isExpanded ? "text-purple-400" : "text-slate-500"}`} />
                    )}
                  </motion.div>

                  {/* Main Event Card */}
                  <motion.div
                    className={`p-6 sm:p-8 bg-slate-950/40 border rounded-3xl backdrop-blur-md transition-all duration-300 relative ${
                      isExpanded
                        ? "border-slate-800 shadow-xl"
                        : "border-slate-900/60 shadow-md hover:border-slate-800/80"
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Hover Glow backing */}
                    <div 
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none duration-500 bg-gradient-to-tr ${
                        isWork ? "from-blue-500 to-indigo-500" : "from-purple-500 to-pink-500"
                      }`}
                    />

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold font-mono tracking-widest uppercase text-slate-500 flex items-center gap-1.5">
                          {isWork ? (
                            <>
                              <Building2 className="w-3.5 h-3.5 text-blue-400" /> Commercial Work
                            </>
                          ) : (
                            <>
                              <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> Education & Training
                            </>
                          )}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-400 flex items-center gap-1.5">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      {/* Period Pill & Expand Button */}
                      <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                        <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-900">
                          {item.period}
                        </span>
                        
                        <button
                          onClick={() => handleToggleExpand(item.id)}
                          className="p-1.5 rounded-lg bg-slate-900 border border-slate-900 text-slate-500 hover:text-white transition-colors"
                          aria-label="Expand milestone detail"
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Short Summary */}
                    <p className="text-xs text-slate-450 mt-4 leading-relaxed font-medium">
                      {item.summary}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-450 border border-slate-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Detail Highlights */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-slate-900/60 space-y-4">
                            <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-slate-500 flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5" /> Key Deliverables & Achievements
                            </span>
                            
                            <ul className="space-y-3.5">
                              {item.highlights.map((bullet, bulletIdx) => (
                                <motion.li
                                  key={bulletIdx}
                                  className="flex items-start gap-3 text-xs leading-relaxed text-slate-400 font-medium"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: bulletIdx * 0.08 }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                  <span>{bullet}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
