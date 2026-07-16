"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, 
  Cpu, 
  Layers, 
  Rocket, 
  Sparkles, 
  ShieldCheck, 
  IndianRupee, 
  Clock, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  MonitorSmartphone, 
  Gauge, 
  Search, 
  Lock,
  Activity,
  Globe,
  Database,
  Terminal,
  HelpCircle,
  Plus,
  Check
} from "lucide-react"
import Link from "next/link"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"

// Core Expertises data
const coreExpertise = [
  {
    category: "Frameworks & Core",
    items: [
      { name: "React.js & Next.js", desc: "Server-side rendering, App Router, React 19" },
      { name: "JavaScript (ES6+) & TypeScript", desc: "Type-safe development, asynchronous logic, ESNext" }
    ],
    icon: Code2,
    iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/25"
  },
  {
    category: "Architecture & State",
    items: [
      { name: "Frontend Architecture", desc: "SOLID principles, modular folders, atomic component design" },
      { name: "State Management", desc: "Redux Toolkit, RTK Query, Context API" }
    ],
    icon: Cpu,
    iconBg: "bg-purple-500/20 text-purple-400 border-purple-500/25"
  },
  {
    category: "Optimization & Delivery",
    items: [
      { name: "Performance Optimization", desc: "Code splitting, lazy loading, image optimizations, Core Web Vitals" },
      { name: "SEO & Accessibility (a11y)", desc: "Semantic HTML, meta tag setups, screen-reader support" }
    ],
    icon: Gauge,
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/25"
  },
  {
    category: "Integrations & CSS",
    items: [
      { name: "REST API Integration", desc: "Centralized Axios clients, JWT auth, token refreshing, OAuth flow" },
      { name: "Tailwind CSS & SASS", desc: "Modern, responsive layouts with custom design system utilities" }
    ],
    icon: Layers,
    iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/25"
  }
]

// Pre-defined Pricing Packages
const pricingPackages = [
  {
    name: "UI / Component Slice",
    tagline: "Ideal for Landing Pages & Design Slices",
    priceINR: 9999,
    priceUSD: 120,
    deliveryDays: 4,
    description: "Transforming Figma designs or wireframes into high-performance, pixel-perfect, responsive components.",
    features: [
      "Up to 3 responsive pages/screens",
      "Next.js or React.js build",
      "Tailwind CSS styling",
      "Basic animations (Framer Motion)",
      "95+ Lighthouse performance guarantee",
      "SEO-friendly semantic structure",
      "Git repository access & clean files"
    ],
    popular: false,
    cta: "Hire for UI Slice"
  },
  {
    name: "Startup MVP / Web App",
    tagline: "Ideal for SaaS MVPs & E-Commerce",
    priceINR: 24999,
    priceUSD: 300,
    deliveryDays: 10,
    description: "Complete frontend architecture for your product idea, complete with database links, routing, and dynamic data.",
    features: [
      "Up to 8 fully functional pages",
      "Advanced state management (Redux Toolkit / Context API)",
      "Centralized REST API integration",
      "JWT & Social Authentication (Google OAuth)",
      "Dynamic tables, filters & search logic",
      "SEO metadata & Accessibility (a11y)",
      "1 month post-launch support"
    ],
    popular: true,
    cta: "Build Startup MVP"
  },
  {
    name: "Custom Enterprise Portal",
    tagline: "Ideal for Complex SaaS & Dashboards",
    priceINR: 49999,
    priceUSD: 600,
    deliveryDays: 18,
    description: "A state-of-the-art web application with advanced features, real-time widgets, and intensive data processing.",
    features: [
      "Unlimited pages / Full portal scope",
      "Real-time WebSocket integrations",
      "Interactive data charts & grids (Recharts)",
      "Complex role-based admin panels",
      "Custom micro-animations & transitions",
      "Advanced caching & speed tuning",
      "3 months priority support & updates"
    ],
    popular: false,
    cta: "Architect Custom Portal"
  }
]

// FAQ data
const faqs = [
  {
    question: "How are you able to ship high-quality apps so quickly?",
    answer: "One of my biggest advantages is combining 3+ years of frontend expertise with modern AI development tools. I automate repetitive tasks (like boilerplate setup, basic styling, and basic tests) so I can spend 100% of my focus on high-level architecture, complex component design, state logic, and detail-oriented QA. This cuts development time in half while maintaining standard engineering rules."
  },
  {
    question: "Do you sign NDAs (Non-Disclosure Agreements)?",
    answer: "Yes, absolutely. I frequently collaborate with founders and early-stage startups who need their proprietary ideas protected. I am fully open to signing NDAs before reviewing project requirements."
  },
  {
    question: "Why are your rates so competitive?",
    answer: "By working independently from India and using automated AI-assisted workflows, I have very low operational overhead. I pass these savings directly to my clients, making top-tier Next.js/TypeScript engineering accessible at freelancer rates."
  },
  {
    question: "What happens if I need changes after delivery?",
    answer: "Every package comes with a built-in support period (ranging from 1 to 3 months) during which I resolve any bugs or performance issues for free. For additional feature additions, I offer flexible hourly rates or minimal per-screen pricing."
  }
]

export default function ServicesPage() {
  // Pricing tab state: packages vs calculator
  const [activePricingTab, setActivePricingTab] = useState<"packages" | "calculator">("packages")
  
  // Calculator States
  const [projectType, setProjectType] = useState<"ui" | "webapp">("webapp")
  const [pageCount, setPageCount] = useState<number>(5) // Slider value 1-15
  const [stateManagement, setStateManagement] = useState(false)
  const [apiIntegration, setApiIntegration] = useState(true)
  const [authentication, setAuthentication] = useState(false)
  const [realtimeSockets, setRealtimeSockets] = useState(false)
  const [chartsAnimations, setChartsAnimations] = useState(false)
  const [expressDelivery, setExpressDelivery] = useState(false)

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Calculate pricing logic dynamically
  const [calculatedCost, setCalculatedCost] = useState({ inr: 0, usd: 0, days: 0 })

  useEffect(() => {
    // Base cost calculations
    let baseCost = projectType === "ui" ? 4000 : 10000
    let costPerPage = projectType === "ui" ? 2000 : 2800
    let baseDays = projectType === "ui" ? 2 : 5
    let daysPerPage = projectType === "ui" ? 0.8 : 1.2

    let totalCost = baseCost + costPerPage * pageCount
    let totalDays = Math.ceil(baseDays + daysPerPage * pageCount)

    // Addons
    if (stateManagement) {
      totalCost += 3500
      totalDays += 1
    }
    if (apiIntegration) {
      totalCost += 5000
      totalDays += 2
    }
    if (authentication) {
      totalCost += 4000
      totalDays += 1.5
    }
    if (realtimeSockets) {
      totalCost += 6000
      totalDays += 2
    }
    if (chartsAnimations) {
      totalCost += 4000
      totalDays += 1
    }

    // Express delivery calculation: 30% increase in price, 40% reduction in delivery time
    if (expressDelivery) {
      totalCost = Math.round(totalCost * 1.25)
      totalDays = Math.ceil(totalDays * 0.6)
    }

    // Min/Max caps
    if (totalDays < 2) totalDays = 2

    // USD Conversions (approx ₹84 per USD)
    const usdEquivalent = Math.round(totalCost / 84)

    setCalculatedCost({
      inr: totalCost,
      usd: usdEquivalent,
      days: totalDays
    })
  }, [projectType, pageCount, stateManagement, apiIntegration, authentication, realtimeSockets, chartsAnimations, expressDelivery])

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative z-10 overflow-hidden bg-slate-950 text-slate-100">
      <ScrollToTop />
      
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" style={{ opacity: 'var(--bg-grid-opacity, 0.05)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-md rounded-full border border-slate-800/80 shadow-md shadow-blue-500/5"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="h-4.5 w-4.5 text-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">
              High Performance • Low Overhead • Startup Velocity
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight leading-tight max-w-4xl mx-auto">
            Build Fast, Scalable, and High-Performing Web Apps
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I help startups launch, grow, and scale with confidence. With 3+ years of experience in frontend development, I transform complex ideas into modern, responsive, and user-centric web experiences.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            {[
              { label: "Experience", value: "3+ Years", icon: Clock, color: "text-blue-400" },
              { label: "Lighthouse Performance", value: "99+", icon: Gauge, color: "text-emerald-400" },
              { label: "Turnaround Time", value: "2X Faster", icon: Zap, color: "text-yellow-400" },
              { label: "Pricing Advantage", value: "Highly Cost-Effective", icon: IndianRupee, color: "text-purple-400" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="bg-slate-900/40 border border-slate-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:border-slate-800 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <stat.icon className={`h-6 w-6 mb-2 ${stat.color}`} />
                <span className="text-xl font-extrabold text-white font-mono">{stat.value}</span>
                <span className="text-xs text-slate-450 mt-1 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Strengths Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-28 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-left">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              My Engineering Superpower: Accuracy Meets Speed
            </h2>
            <div className="space-y-4 text-slate-350 leading-relaxed text-base font-medium">
              <p>
                I have built digital products across <span className="text-white font-semibold">SaaS platforms, e-commerce, social media, event management, AI-powered applications,</span> and <span className="text-white font-semibold">admin dashboards</span>. My expertise lies in designing interfaces using React.js, Next.js, TypeScript, and JavaScript that don't just look stunning, but perform flawlessly.
              </p>
              <p>
                One of my biggest advantages is shipping high-quality products quickly. I effectively <span className="text-blue-400 font-semibold">leverage modern AI development tools</span> to automate boilerplates, speed up rendering cycles, write unit checks, and reduce delivery cycles. This enables me to build and iterate significantly faster while maintaining standard engineering rules.
              </p>
              <p>
                I maintain a strong grip on frontend architecture, component design, state management, SEO, responsive design, accessibility (a11y), and REST API integrations. The outcome is clean, modular, and maintainable code that allows future development to scale seamlessly.
              </p>
            </div>
            
            <div className="pt-2">
              <Button className="theme-lab-btn text-white rounded-xl py-6 px-6 font-bold shadow-lg" asChild>
                <Link href="/contact">
                  Let's Collaborate
                  <ArrowRight className="h-4.5 w-4.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* AI vs Standard Developer Visualization */}
          <div className="bg-slate-900/60 border border-slate-900 p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-blue-400" />
              Delivery Efficiency Metrics
            </h3>

            <div className="space-y-4 font-mono text-sm text-slate-300">
              {/* Row 1: Speed */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>DEV CYCLE / DELIVERY SPEED</span>
                  <span className="text-yellow-400 font-bold">2.5x Faster</span>
                </div>
                <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden flex">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-full w-[95%]" />
                </div>
                <span className="text-[10px] text-slate-500 block">My Speed (AI-Boosted) vs. standard developer timelines</span>
              </div>

              {/* Row 2: Accuracy */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>QA ACCURACY & STATIC ANALYSIS</span>
                  <span className="text-emerald-400 font-bold">99.8% Clean Pass</span>
                </div>
                <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden flex">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full w-[99%]" />
                </div>
                <span className="text-[10px] text-slate-500 block">TypeScript compilation & strict ESLint configs verified on build</span>
              </div>

              {/* Row 3: Performance */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>LIGHTHOUSE PERFORMANCE INDEX</span>
                  <span className="text-blue-400 font-bold">99 / 100</span>
                </div>
                <div className="h-2.5 bg-slate-950 rounded-full overflow-hidden flex">
                  <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-full w-[99%]" />
                </div>
                <span className="text-[10px] text-slate-500 block">Optimized core web vitals, image preloading, server-side caching</span>
              </div>
            </div>

            {/* Quote block */}
            <div className="border-t border-slate-800/80 pt-4 flex gap-4 items-start mt-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
                "Whether it's an MVP, a SaaS platform, or an enterprise dashboard, I enjoy turning ideas into production-ready products with clean architecture and exceptional user experiences."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Expertise Grid */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Detailed Skills & Tech Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-base font-medium">
              A comprehensive view of my tech stack, demonstrating technical depth across the client lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreExpertise.map((exp, idx) => (
              <motion.div
                key={exp.category}
                className="theme-lab-card p-6 lg:p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3 rounded-xl ${exp.iconBg} flex items-center justify-center`}>
                      <exp.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.category}</h3>
                  </div>

                  <div className="space-y-5">
                    {exp.items.map((item) => (
                      <div key={item.name} className="space-y-1.5 text-left border-l-2 border-slate-900 pl-4">
                        <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indian Pricing Section */}
        <section className="mb-28 scroll-mt-24" id="pricing-section">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Transparent, Cost-Effective Pricing
            </h2>
            <p className="text-slate-450 max-w-2xl mx-auto leading-relaxed text-base font-medium">
              I believe in charging a minimal cost for top-tier work. Compare structured tiers or run the interactive calculator to find your project's estimated budget.
            </p>

            {/* Navigation Tabs between Packages & Custom Calculator */}
            <div className="inline-flex p-1 bg-slate-900 border border-slate-900 rounded-xl mt-6 relative shadow-inner">
              <button
                onClick={() => setActivePricingTab("packages")}
                className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${
                  activePricingTab === "packages"
                    ? "bg-slate-800 text-white shadow-md border border-slate-700/50"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Fixed-Price Packages
              </button>
              <button
                onClick={() => setActivePricingTab("calculator")}
                className={`px-5 py-2 text-sm font-bold rounded-lg transition-all ${
                  activePricingTab === "calculator"
                    ? "bg-slate-800 text-white shadow-md border border-slate-700/50"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Interactive Estimator
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activePricingTab === "packages" ? (
              <motion.div
                key="packages-list"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
              >
                {pricingPackages.map((pack) => (
                  <div
                    key={pack.name}
                    className={`relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                      pack.popular
                        ? "bg-slate-900/90 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 scale-102 z-10"
                        : "bg-slate-900/40 border border-slate-900 hover:border-slate-850 hover:bg-slate-900/60"
                    }`}
                  >
                    {pack.popular && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-400 shadow-lg">
                        Most Popular
                      </span>
                    )}

                    <div className="space-y-6">
                      <div className="space-y-2 text-left">
                        <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                        <p className="text-xs text-slate-450 font-semibold">{pack.tagline}</p>
                      </div>

                      {/* Pricing Block */}
                      <div className="text-left border-y border-slate-800/80 py-4 space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-bold text-slate-450">Starts at</span>
                          <span className="text-3xl font-black text-white font-mono flex items-center">
                            <IndianRupee className="h-6 w-6 inline-block shrink-0 -mr-0.5" />
                            {pack.priceINR.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">
                          ~ ${pack.priceUSD} USD (International Clients)
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-semibold">
                          <Clock className="h-3.5 w-3.5 text-blue-400" />
                          <span>Delivery in {pack.deliveryDays} Days</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-350 leading-relaxed text-left font-medium">
                        {pack.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2.5 text-left">
                        {pack.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-350 font-medium">
                            <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <Button
                        className={`w-full py-5 rounded-xl text-xs font-bold ${
                          pack.popular 
                            ? "theme-lab-btn text-white" 
                            : "bg-slate-950 border border-slate-850 hover:bg-slate-900 text-slate-200"
                        }`}
                        asChild
                      >
                        <Link href={`/contact?package=${encodeURIComponent(pack.name)}&cost=${pack.priceINR}`}>
                          {pack.cta}
                          <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-start text-left"
              >
                {/* Inputs Form */}
                <div className="lg:col-span-7 bg-slate-900/40 border border-slate-900 p-6 lg:p-8 rounded-3xl shadow-xl space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sliders className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">Configure Your Requirements</h3>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Project Scope Type</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => setProjectType("ui")}
                        className={`p-4 rounded-xl border flex flex-col gap-1.5 items-start text-left transition-all ${
                          projectType === "ui"
                            ? "border-blue-500 bg-blue-500/5 text-white"
                            : "border-slate-850 bg-slate-950/40 text-slate-450 hover:border-slate-800"
                        }`}
                      >
                        <span className="text-sm font-extrabold flex items-center gap-1.5">
                          <MonitorSmartphone className="h-4 w-4" />
                          UI / Frontend Slice
                        </span>
                        <span className="text-[11px] text-slate-400 leading-snug">
                          Converting Figma layouts into pixel-perfect pages (Landing pages, static widgets).
                        </span>
                      </button>

                      <button
                        onClick={() => setProjectType("webapp")}
                        className={`p-4 rounded-xl border flex flex-col gap-1.5 items-start text-left transition-all ${
                          projectType === "webapp"
                            ? "border-blue-500 bg-blue-500/5 text-white"
                            : "border-slate-850 bg-slate-950/40 text-slate-450 hover:border-slate-800"
                        }`}
                      >
                        <span className="text-sm font-extrabold flex items-center gap-1.5">
                          <Code2 className="h-4 w-4" />
                          Web Application
                        </span>
                        <span className="text-[11px] text-slate-400 leading-snug">
                          Complex, state-driven client-side application (Auth, REST APIs, Dashboards).
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Page / Screen Count Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center text-xs font-mono text-slate-400 uppercase tracking-wider">
                      <span>Total Screens / Pages</span>
                      <span className="text-blue-400 font-bold text-sm bg-slate-950 px-2 py-0.5 border border-slate-900 rounded-md">
                        {pageCount} {pageCount === 1 ? "Page" : "Pages"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={pageCount}
                      onChange={(e) => setPageCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>1 Page</span>
                      <span>5 Pages</span>
                      <span>10 Pages</span>
                      <span>15+ Pages</span>
                    </div>
                  </div>

                  {/* Add-ons Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider block">Additional Specifications</span>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {[
                        {
                          id: "state",
                          label: "Redux / Context State",
                          desc: "Complex data flow, caching & global store",
                          state: stateManagement,
                          setter: setStateManagement,
                          disabled: projectType === "ui"
                        },
                        {
                          id: "api",
                          label: "REST API Integration",
                          desc: "Linking frontend components to backend endpoints",
                          state: apiIntegration,
                          setter: setApiIntegration,
                          disabled: projectType === "ui"
                        },
                        {
                          id: "auth",
                          label: "JWT / Social Auth",
                          desc: "Protected pages, login flows & token handling",
                          state: authentication,
                          setter: setAuthentication,
                          disabled: projectType === "ui"
                        },
                        {
                          id: "sockets",
                          label: "Real-time WebSockets",
                          desc: "Live chat feeds, real-time widgets & updates",
                          state: realtimeSockets,
                          setter: setRealtimeSockets,
                          disabled: projectType === "ui"
                        },
                        {
                          id: "charts",
                          label: "Interactive Charts & FX",
                          desc: "Complex data dashboards, Custom SVG animations",
                          state: chartsAnimations,
                          setter: setChartsAnimations
                        },
                        {
                          id: "express",
                          label: "Express Shipping (Fast)",
                          desc: "Delivery in 40% less time with 2x speed",
                          state: expressDelivery,
                          setter: setExpressDelivery
                        }
                      ].map((addon) => (
                        <button
                          key={addon.id}
                          disabled={addon.disabled}
                          onClick={() => addon.setter(!addon.state)}
                          className={`p-3 rounded-xl border flex items-start gap-3 text-left transition-all ${
                            addon.disabled
                              ? "opacity-40 cursor-not-allowed border-slate-950 bg-slate-950/20"
                              : addon.state
                              ? "border-blue-500 bg-blue-500/5 text-white"
                              : "border-slate-850 bg-slate-950/40 text-slate-400 hover:border-slate-800"
                          }`}
                        >
                          <div className={`mt-0.5 rounded border flex items-center justify-center h-4 w-4 shrink-0 transition-all ${
                            addon.state ? "bg-blue-500 border-blue-500 text-white" : "border-slate-700 bg-transparent text-transparent"
                          }`}>
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold leading-tight">{addon.label}</span>
                            <span className="text-[10px] text-slate-450 leading-snug mt-0.5">{addon.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Estimate Result Card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-6 lg:p-8 rounded-3xl shadow-xl flex flex-col justify-between lg:sticky lg:top-28">
                  <div className="space-y-6">
                    <div className="border-b border-slate-800/80 pb-4">
                      <span className="text-[10px] font-bold text-blue-400 font-mono uppercase tracking-widest">Interactive Estimate Output</span>
                      <h3 className="text-xl font-bold text-white mt-1">Estimated Proposal</h3>
                    </div>

                    <div className="space-y-6 text-left">
                      {/* Price Block */}
                      <div className="space-y-1">
                        <span className="text-xs text-slate-450 font-bold uppercase tracking-wider block font-mono">ESTIMATED BUDGET</span>
                        <div className="text-3xl lg:text-4xl font-black text-white font-mono flex items-center">
                          <IndianRupee className="h-8 w-8 inline-block shrink-0 -mr-0.5 text-blue-400" />
                          {calculatedCost.inr.toLocaleString("en-IN")}
                        </div>
                        <span className="text-[11px] text-slate-450 font-mono block">
                          Approx. <span className="text-slate-300 font-bold">${calculatedCost.usd} USD</span> for international billing
                        </span>
                      </div>

                      {/* Delivery Days Block */}
                      <div className="space-y-1.5">
                        <span className="text-xs text-slate-450 font-bold uppercase tracking-wider block font-mono">DELIVERY TIMEFRAME</span>
                        <div className="flex items-center gap-2 text-lg font-bold text-white">
                          <Clock className="h-5 w-5 text-blue-400" />
                          <span>~ {calculatedCost.days} Days {expressDelivery && <span className="text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded-full font-mono font-bold">Express Shift</span>}</span>
                        </div>
                        <span className="text-[10px] text-slate-450 leading-relaxed block font-medium">
                          Using AI-assisted speed, this project will ship in days, compared to the standard 3-4 week agency turnaround.
                        </span>
                      </div>

                      {/* Included standards */}
                      <div className="border-t border-slate-800/80 pt-4 space-y-2">
                        <span className="text-xs text-slate-400 font-bold font-mono uppercase block mb-1">Standard inclusions</span>
                        {[
                          "99+ Lighthouse Mobile & Desktop Performance",
                          "Responsive & Cross-Browser checked layouts",
                          "Completely typed TypeScript components",
                          "100% SEO metadata configured",
                          "2 weeks of complimentary post-delivery QA support"
                        ].map((inc) => (
                          <div key={inc} className="flex gap-2 items-start text-[11px] text-slate-400 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button className="w-full theme-lab-btn text-white py-6 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2" asChild>
                      <Link href={`/contact?type=${projectType}&pages=${pageCount}&cost=${calculatedCost.inr}&express=${expressDelivery}`}>
                        Submit Project Request
                        <ArrowRight className="h-4.5 w-4.5" />
                      </Link>
                    </Button>
                    <span className="text-[10px] text-slate-500 text-center block mt-2 font-mono">
                      No commitments required. We'll refine details via email.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-left"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-450 leading-relaxed text-sm font-medium">
              Common inquiries regarding workflow, NDA setups, speed metrics, and cost policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-900/60 transition-colors"
                  >
                    <span className="font-bold text-white text-sm sm:text-base leading-snug">{faq.question}</span>
                    <div className={`p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-blue-400 border-blue-500/20" : ""
                    }`}>
                      <Plus className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-slate-900/50 text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Collaboration Banner CTA */}
        <motion.div
          className="p-8 lg:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-900 backdrop-blur-sm shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none transition-colors"
          />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Let's Create Your Next Big Product</h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-medium">
              📩 Open to collaborating with startups, founders, and teams building the next great product. Reach out now to discuss your idea and get a tailored delivery schedule.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="theme-lab-btn text-white rounded-xl py-6 px-6 font-bold shadow-lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="h-4.5 w-4.5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="px-6 py-6 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-200 font-bold hover:bg-slate-800/80" asChild>
                <Link href="/projects">
                  View Selected Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
