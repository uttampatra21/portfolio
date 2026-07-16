"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Zap,
  Cpu,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import ScrollToTop from "@/components/scroll-to-top";
import ProjectCard from "@/components/project-card";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("@/components/particle-background"), { ssr: false });
const AchievementBadges = dynamic(() => import("@/components/achievement-badges"), { ssr: false });
const ThemeLab = dynamic(() => import("@/components/theme-lab"), { ssr: false });
const SkillsMatrix = dynamic(() => import("@/components/skills-matrix"), { ssr: false });
const JourneyTimeline = dynamic(() => import("@/components/journey-timeline"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

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
};

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
};

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
};

const featuredProjects = [
  {
    id: 6,
    title: "Rally-up Platform",
    description:
      "Developed the modular frontend architecture, authentication flows, and API adapters. Implemented secure OTP validation, route protection, Redux actions, lazy loading, and rendering optimization.",
    image: "/projects/rally-up.png",
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    category: "Event Booking",
    liveUrl: "https://rally-up.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "CBTF CricStats AI",
    description:
      "A dynamic sports prediction and live cricket statistics platform offering real-time stats feeds, predictive match odds analysis widgets, and visual game trend lines via integrated sports data APIs.",
    image: "/projects/CBTFCricStatsAI.webp",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Dynamic APIs",
      "WebSockets",
      "Highcharts",
      "Axios",
    ],
    category: "Sports Analytics",
    liveUrl: "https://www.cbtfcricstats.ai/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Loadify Freight Map",
    description:
      "Architected the coordinate-mapping dashboard, auth logic, and responsive screens. Utilized Three.js WebGL rendering for 3D cargo packing visualizations and interactive logistic maps.",
    image: "/projects/LoadifyFreightMap.png",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Three.js",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    category: "3D Cargo Planning",
    liveUrl: "https://loadify-freight-map.notebrains.com/",
    githubUrl: "#",
    featured: true,
  },
];

export default function HomePage() {
  const [activeHeroTab, setActiveHeroTab] = useState("developer.ts");

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <ParticleBackground />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* CSS for horizontal tech marquee */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Ambient background glows */}
        <div
          className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-colors duration-500 opacity-20"
          style={{
            backgroundColor: "rgb(var(--custom-accent-rgb, 59, 130, 246))",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[-15%] w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none transition-colors duration-500 opacity-15"
          style={{
            backgroundColor: "rgb(var(--custom-accent-rgb, 99, 102, 241))",
          }}
        />
        <div className="absolute top-[30%] left-[45%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none bg-purple-500/5" />

        {/* Subtle grid pattern controlled by Theme Lab opacity */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0 transition-opacity duration-300"
          style={{ opacity: "var(--bg-grid-opacity, 0.05)" }}
        />

        <motion.div
          className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 pt-28 pb-12 lg:pt-36 lg:pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div
            className="space-y-8 lg:space-y-10 lg:col-span-7 text-left"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-900/40 backdrop-blur-md rounded-full border border-slate-800/50 shadow-sm shadow-blue-500/5"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-350 uppercase tracking-wider font-mono">
                Available for Freelance & Consultations
              </span>
            </motion.div>

            <div className="space-y-6">
              <span className="text-sm md:text-base font-bold tracking-widest uppercase font-mono block theme-lab-text">
                // Hello, World!
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-black">
                  Uttam Patra
                </span>
              </h1>
              <div className="inline-block">
                <span className="text-sm md:text-base font-bold text-slate-300 font-mono bg-slate-900/90 border border-slate-850 px-3.5 py-1.5 rounded-xl">
                  &lt; Frontend Architect & Developer /&gt;
                </span>
              </div>
            </div>

            <motion.p
              className="text-lg text-slate-300 max-w-2xl leading-relaxed font-medium"
              variants={itemVariants}
            >
              I design and engineer elite, high-performance SaaS platforms and web ecosystems. 
              As a senior frontend architect, I construct secure, type-safe React layouts, 
              establish high-fidelity design systems, and lead product engineering with startup velocity.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 lg:gap-6"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="theme-lab-btn text-white px-8 py-6 rounded-2xl text-base font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                asChild
              >
                <Link href="/projects">
                  View Selected Work
                  <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/80 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-slate-200"
                asChild
              >
                <Link href="/services">
                  Pricing & Estimator
                </Link>
              </Button>
            </motion.div>

            {/* Performance Stats Panel */}
            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-slate-900/60 max-w-xl text-left"
              variants={itemVariants}
            >
              {[
                { label: "Core Web Vitals", value: "0.8s LCP", desc: "Edge Caching" },
                { label: "Engineering Standard", value: "Type-Safe", desc: "SOLID / DRY" },
                { label: "AI Integration Speed", value: "2.5x Velocity", desc: "Fast Shipping" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs font-mono font-bold theme-lab-text block">{stat.value}</span>
                  <span className="text-[10px] text-slate-250 font-bold block">{stat.label}</span>
                  <span className="text-[9px] text-slate-500 block">{stat.desc}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Channels */}
            <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
              {[
                {
                  icon: Github,
                  href: "https://github.com/uttampatra21",
                  label: "GitHub",
                  color: "hover:text-white hover:bg-slate-800",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/uttampatra01",
                  label: "LinkedIn",
                  color: "hover:text-blue-400 hover:bg-blue-950/30",
                },
                {
                  icon: Mail,
                  href: "mailto:dev.uttampatra@gmail.com",
                  label: "Email",
                  color: "hover:text-indigo-400 hover:bg-indigo-950/30",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-3.5 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 text-slate-400 transition-all duration-300 ${color}`}
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
          <motion.div
            className="relative lg:col-span-5 h-[500px] flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-[420px] h-[420px]">
              {/* Decorative Glow Ring Behind Workspace */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-pulse pointer-events-none transition-colors duration-500"
                style={{
                  backgroundColor:
                    "rgb(var(--custom-accent-rgb, 59, 130, 246))",
                }}
              />

              {/* IDE Code Workspace Mockup */}
              <div className="absolute inset-0 rounded-2xl border border-slate-850/80 shadow-2xl bg-slate-950/80 backdrop-blur-md flex flex-col text-left pointer-events-auto overflow-hidden">
                {/* IDE Tab Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900 bg-slate-900/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex gap-1.5">
                    {["developer.ts", "metrics.json", "stack.config"].map(
                      (tab) => (
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
                      ),
                    )}
                  </div>
                </div>

                {/* IDE Content */}
                <div className="flex-1 p-5 overflow-y-auto leading-relaxed select-none">
                  {activeHeroTab === "developer.ts" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-2.5">
                      <p>
                        <span className="text-pink-500">import</span> &#123;{" "}
                        <span className="text-blue-400">FrontendArchitect</span>{" "}
                        &#125; <span className="text-pink-500">from</span>{" "}
                        <span className="text-emerald-400">"dev"</span>;
                      </p>
                      <p>
                        <span className="text-pink-500">const</span>{" "}
                        <span className="text-yellow-400">uttamPatra</span> ={" "}
                        <span className="text-pink-500">new</span>{" "}
                        <span className="text-blue-400">FrontendArchitect</span>
                        (&#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>
                          name:{" "}
                          <span className="text-emerald-400">
                            "Uttam Patra"
                          </span>
                          ,
                        </p>
                        <p>
                          role:{" "}
                          <span className="text-emerald-400">
                            "Lead Frontend Architect & Technical Lead"
                          </span>
                          ,
                        </p>
                        <p>
                          experience:{" "}
                          <span className="text-emerald-400">"3+ Years"</span>
                          ,
                        </p>
                        <p>
                          freelanceContractor:{" "}
                          <span className="text-cyan-400">true</span>,
                        </p>
                        <p>skills: [</p>
                        <div className="pl-4 text-amber-400">
                          "React.js", "Next.js",
                          <br />
                          "TypeScript", "TailwindCSS"
                          <br />
                        </div>
                        <p>],</p>
                        <p>
                          performanceScore:{" "}
                          <span className="text-emerald-400">99</span>
                        </p>
                      </div>
                      <p>&#125;);</p>
                    </div>
                  )}

                  {activeHeroTab === "metrics.json" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-1">
                      <p>&#123;</p>
                      <div className="pl-4">
                        <p>
                          <span className="text-blue-400">"lighthouse"</span>:
                          &#123;
                        </p>
                        <div className="pl-4">
                          <p>
                            <span className="text-slate-400">
                              "performance"
                            </span>
                            : <span className="text-emerald-400">99</span>,
                          </p>
                          <p>
                            <span className="text-slate-400">
                              "accessibility"
                            </span>
                            : <span className="text-emerald-400">100</span>,
                          </p>
                          <p>
                            <span className="text-slate-400">"seo"</span>:{" "}
                            <span className="text-emerald-400">100</span>
                          </p>
                        </div>
                        <p>&#125;,</p>
                        <p>
                          <span className="text-blue-400">"coreWebVitals"</span>
                          : &#123;
                        </p>
                        <div className="pl-4">
                          <p>
                            <span className="text-slate-400">"LCP"</span>:{" "}
                            <span className="text-emerald-400">"0.8s"</span>,
                          </p>
                          <p>
                            <span className="text-slate-400">"FID"</span>:{" "}
                            <span className="text-emerald-400">"12ms"</span>,
                          </p>
                          <p>
                            <span className="text-slate-400">"CLS"</span>:{" "}
                            <span className="text-emerald-400">0.01</span>
                          </p>
                        </div>
                        <p>&#125;</p>
                      </div>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeHeroTab === "stack.config" && (
                    <div className="font-mono text-[11px] md:text-[13px] text-slate-300 space-y-2">
                      <p>
                        <span className="text-pink-500">const</span>{" "}
                        <span className="text-yellow-400">techStack</span> =
                        &#123;
                      </p>
                      <div className="pl-4 space-y-1">
                        <p>
                          library:{" "}
                          <span className="text-emerald-400">"React 19"</span>,
                        </p>
                        <p>
                          framework:{" "}
                          <span className="text-emerald-400">"Next.js 15"</span>
                          ,
                        </p>
                        <p>
                          styling:{" "}
                          <span className="text-emerald-400">
                            "TailwindCSS"
                          </span>
                          ,
                        </p>
                        <p>
                          stateManagement:{" "}
                          <span className="text-emerald-400">
                            "Redux / Context"
                          </span>
                          ,
                        </p>
                        <p>
                          animations:{" "}
                          <span className="text-emerald-400">
                            "Framer Motion"
                          </span>
                        </p>
                      </div>
                      <p>&#125;;</p>
                    </div>
                  )}
                </div>

                {/* IDE Terminal Status bar */}
                <div className="px-4 py-2 border-t border-slate-900/60 bg-slate-950/60 flex items-center justify-between font-mono text-[9px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    server: ready (next-dev)
                  </span>
                  <span>port: 3000</span>
                </div>
              </div>

              {/* Floating Lighthouse Audit Report Card */}
              <motion.div
                className="absolute -bottom-12 -right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-xl shadow-slate-955/50 p-4 space-y-3 w-[200px] z-20 pointer-events-auto"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider font-mono">
                    Lighthouse Audit
                  </span>
                  <span className="text-[8px] bg-emerald-500/25 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">
                    Passed
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    {
                      label: "Performance",
                      score: 99,
                      color: "text-emerald-500",
                    },
                    {
                      label: "Accessibility",
                      score: 100,
                      color: "text-emerald-500",
                    },
                    {
                      label: "Best Practices",
                      score: 100,
                      color: "text-emerald-500",
                    },
                    { label: "SEO", score: 100, color: "text-emerald-500" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="relative w-9 h-9 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-slate-850"
                            fill="transparent"
                          />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="15"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className={m.color}
                            fill="transparent"
                            strokeDasharray="94.2"
                            initial={{ strokeDashoffset: 94.2 }}
                            animate={{
                              strokeDashoffset: 94.2 - (94.2 * m.score) / 100,
                            }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                          />
                        </svg>
                        <span className="absolute text-[9px] font-bold text-white font-mono">
                          {m.score}
                        </span>
                      </div>
                      <span className="text-[8px] text-center text-slate-400 font-semibold mt-0.5 leading-none">
                        {m.label.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Tech Badges around IDE Workspace */}
              <motion.div
                className="absolute -top-6 -left-6 bg-slate-905/90 backdrop-blur-md rounded-xl border border-slate-800/80 shadow-xl p-2.5 flex items-center gap-2 z-20 pointer-events-auto"
                variants={floatingVariants1}
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/25">
                  <Code2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white leading-none">
                    Clean Architecture
                  </span>
                  <span className="text-[7px] font-mono text-slate-400">
                    TypeScript
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 bg-slate-905/90 backdrop-blur-md rounded-xl border border-slate-800/80 shadow-xl p-2.5 flex items-center gap-2 z-20 pointer-events-auto"
                variants={floatingVariants2}
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/25">
                  <Zap className="h-3.5 w-3.5 text-yellow-500 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white leading-none">
                    Web Vitals
                  </span>
                  <span className="text-[7px] font-mono text-slate-400 font-medium">
                    LCP 0.8s
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Infinite Technology Marquee Loop */}
        <div className="w-full py-8 border-y border-slate-900/60 overflow-hidden relative bg-slate-950/20 backdrop-blur-sm z-10 mt-12">
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-slate-500 font-mono text-xs uppercase tracking-widest font-bold">
            {[
              "React.js", "Next.js", "TypeScript", "Redux Toolkit", "Context API", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL", "WebSockets", "RESTful APIs", "Axios Adapters",
              "React.js", "Next.js", "TypeScript", "Redux Toolkit", "Context API", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL", "WebSockets", "RESTful APIs", "Axios Adapters"
            ].map((tech, i) => (
              <span key={i} className="flex items-center gap-2 hover:text-white transition-colors duration-250 cursor-default">
                <span className="h-2 w-2 rounded-full bg-blue-500/60" />
                {tech}
              </span>
            ))}
          </div>
        </div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
              Core Expertise
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Engineering scalable foundations, rich data platforms, and
              high-performance frontend systems.
            </p>
          </div>

          {/* Cards Grid using our new Theme Lab classes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Frontend Architecture",
                subtitle: "Scalable Foundations",
                description:
                  "Designing modular, maintainable folder structures and clean component-driven systems.",
                icon: Cpu,
                skills: ["Next.js & React", "TypeScript", "Redux & Context"],
                iconBg:
                  "bg-blue-500/20 text-blue-400 border border-blue-500/25",
              },
              {
                title: "SaaS Dashboards",
                subtitle: "Data & Interactivity",
                description:
                  "Crafting real-time analytical portals with interactive data grids and live feeds.",
                icon: LayoutGrid,
                skills: [
                  "Live WebSockets",
                  "Recharts / Highcharts",
                  "Payment Gateways",
                ],
                iconBg:
                  "bg-purple-500/20 text-purple-400 border border-purple-500/25",
              },
              {
                title: "Performance Tuned",
                subtitle: "Speed & Optimization",
                description:
                  "Applying advanced loading strategies to hit optimal Core Web Vitals and SEO compliance.",
                icon: Zap,
                skills: [
                  "Code Splitting",
                  "Optimized SEO",
                  "SSR / Static Generation",
                ],
                iconBg:
                  "bg-amber-500/20 text-amber-400 border border-amber-500/25",
              },
              {
                title: "Clean Code & SOLID",
                subtitle: "Sustainable Dev",
                description:
                  "Structuring readable, self-documenting code with comprehensive documentation and reviews.",
                icon: Code2,
                skills: [
                  "DRY & SOLID Principles",
                  "Semantic HTML",
                  "Modular Components",
                ],
                iconBg:
                  "bg-emerald-500/20 text-emerald-400 border border-emerald-500/25",
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="group relative flex flex-col justify-between p-6 lg:p-8 theme-lab-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${expertise.iconBg} flex items-center justify-center mb-6`}
                  >
                    <expertise.icon className="h-6 w-6" />
                  </div>

                  <span className="text-[10px] font-bold tracking-wider uppercase opacity-60 font-mono block mb-1">
                    {expertise.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {expertise.title}
                  </h3>

                  <p className="text-sm text-slate-350 leading-relaxed mb-6">
                    {expertise.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-900/60 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {expertise.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-300 border border-slate-800/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full border border-emerald-200/50 dark:border-emerald-800/30 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                Featured Work
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
              Selected Creations
            </h2>
            <p className="text-base sm:text-lg text-slate-450 max-w-2xl mx-auto leading-relaxed">
              Explore key production-grade dashboards, interactive charts, and
              logistics maps built using modern stacks.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={project.featured}
              />
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-5 rounded-2xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-200 transition-all font-bold group"
              asChild
            >
              <Link href="/projects">
                Explore All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Skills Subsystem Matrix */}
      <SkillsMatrix />

      {/* Dynamic Theme Lab Configurator */}
      <ThemeLab />

      {/* Experience Milestones Timeline */}
      <JourneyTimeline />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-850 backdrop-blur-sm shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Ambient Glow inside CTA */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
            style={{
              backgroundColor: "rgb(var(--custom-accent-rgb, 59, 130, 246))",
            }}
          />

          <motion.h2
            className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's collaborate to transform your vision into a powerful digital
            solution that drives results and exceeds expectations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Button
              size="lg"
              className="theme-lab-btn text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300"
              asChild
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
