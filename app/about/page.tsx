"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Users,
  Award,
  Coffee,
  ExternalLink,
  BadgeCheck,
  Cpu,
  Gauge,
  Layers,
  ShieldAlert,
  Sparkles,
  Terminal,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";
import SkillCard from "@/components/skill-card";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "3+ Years", label: "Frontend Experience" },
  { value: "Lead / Architect", label: "Technical Leadership" },
  { value: "99+", label: "Lighthouse Performance" },
  { value: "20+", label: "Products Delivered" },
];

const skills = [
  {
    category: "Advanced Frontend Stack",
    icon: Palette,
    skills: [
      "Next.js 14 & 15 (App Router)",
      "React 18 & 19 (Server Components)",
      "TypeScript (Strict Type-Safety)",
      "Redux Toolkit & RTK Query",
      "Zustand State Architecture",
      "Tailwind CSS / SASS",
      "Framer Motion Animations",
      "WebSocket Real-time Client",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    category: "Architectural Concepts & Devops",
    icon: Code,
    skills: [
      "SOLID & Clean Code Principles",
      "Component-Driven UI Systems",
      "Web Performance Tuning",
      "Next.js SEO & Meta Optimization",
      "RESTful API Adaptors (Axios)",
      "Authentication (JWT / OAuth)",
      "Accessibility (a11y Compliance)",
      "Git Flow & Continuous Integration",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools & Ecosystem",
    icon: Zap,
    skills: [
      "Postman API Testing",
      "AWS S3 & Digital Ocean",
      "Razorpay Payment Gateway",
      "Prismic / Headless CMS",
      "AI-Assisted Dev Workflows",
      "ESLint & TypeScript Linters",
      "Webpack / Vite Bundlers",
      "Chrome DevTools Profiling",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const experience = [
  {
    title: "Leading Technical Architecture",
    company: "CareerGarantia",
    period: "Jan 2025 - Present",
    type: "Leadership",
    description: [
      "Direct technical strategy, software architecture, and product engineering roadmap for the career acceleration platform.",
      "Led development of core high-throughput web applications using Next.js App Router, React 19, and Node.js.",
      "Architected clean, scalable API contracts and database schemas supporting thousands of concurrent active learners.",
      "Built and mentored a team of developers, enforcing clean code standards, strict linting, and automated code review workflows.",
      "Reduced platform latency by 55% through optimized server-side rendering, asset preloading, and caching strategies.",
    ],
    link: "/careergrid", // Link to cases study
    linkText: "View Technical Case Study",
  },
  {
    title: "Senior Web Developer (Frontend Specialist)",
    company: "Notebrains Software and Services Pvt. Ltd",
    period: "Dec 2024 - Present",
    type: "Engineering",
    description: [
      "Lead frontend engineering of enterprise SaaS platforms, implementing modular, component-driven layouts.",
      "Built authentication flows with Google OAuth, JWT handlers, and secure route protection states.",
      "Developed high-traffic admin dashboards featuring role-based controls and dynamic analytic charts.",
      "Designed secure real-time notification streams and chat engines utilizing raw WebSockets.",
      "Integrated secure Razorpay gateway checkouts with automated webhook event handling.",
    ],
  },
  {
    title: "Web Developer (Frontend Engineer)",
    company: "Webapps Software Solutions",
    period: "Jan 2024 - Dec 2024",
    type: "Engineering",
    description: [
      "Engineered dynamic web apps utilizing React.js, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.",
      "Optimized web applications, pushing mobile performance scores to 95+ through code splitting and tree shaking.",
      "Integrated REST API endpoints using modular Axios adapters with global error-catch interceptors.",
      "Collaborated with product designers to ship responsive, cross-browser compliant design systems.",
    ],
  },
];

const philosophies = [
  {
    title: "Write Code for Humans, Optimized for Engines",
    desc: "Code is read far more than it is written. I enforce semantic HTML, strict TypeScript compiler rules, and clear inline documentation. This makes future development simple while ensuring excellent search indexing.",
  },
  {
    title: "Performance is a Feature, Not an Afterthought",
    desc: "A beautiful UI is useless if it loads slowly. I design systems with performance budgets, lazy loading resources, using edge caching, and targeting 0.8s Largest Contentful Paint (LCP) benchmarks.",
  },
  {
    title: "State Should Be Predictable & Immutable",
    desc: "Race conditions and state bugs ruin product confidence. I structure applications using one-way data flow, normalized state trees, and clear side-effects handlers to keep client state bulletproof.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative z-10 overflow-hidden bg-slate-950 text-slate-100">
      <ScrollToTop />

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none z-0" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"
        style={{ opacity: "var(--bg-grid-opacity, 0.05)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-800/30 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest font-mono">
              Elite Engineering & Architecture
            </span>
          </motion.div>

          <AnimatedText
            text="Uttam Patra"
            className="text-4xl lg:text-7xl font-black bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent mb-4 tracking-tight"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-300 font-mono">
            Frontend Architect & Developer 
          </h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-350 max-w-3xl mx-auto leading-relaxed pt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I architect highly-interactive SaaS architectures, custom web
            applications, and fast, scalable frontend layers. Operating at the
            intersection of business strategy and high-fidelity code, I build
            products that help startups launch with confidence.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="theme-lab-card p-6 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-3xl sm:text-4xl font-black theme-lab-text font-mono leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-450 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technical Philosophy */}
        <motion.div
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 tracking-tight flex items-center gap-3">
            <Terminal className="h-6 w-6 text-purple-400" />
            Core Development Principles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophies.map((ph, idx) => (
              <div
                key={ph.title}
                className="p-6 bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-colors rounded-2xl space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center font-bold text-sm font-mono">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {ph.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  {ph.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Skills Profile Grid */}
        <motion.div
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 tracking-tight flex items-center gap-3">
            <Cpu className="h-6 w-6 text-blue-400" />
            Technical Arsenal & Competency
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <SkillCard
                key={skillGroup.category}
                {...skillGroup}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-12 tracking-tight flex items-center gap-3">
            <Layers className="h-6 w-6 text-emerald-400" />
            Professional Milestones
          </h3>
          <div className="space-y-10 relative before:absolute before:inset-0 before:right-auto before:left-[15px] before:w-[2px] before:bg-slate-900">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div
                  className={`absolute left-[7px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-950 z-10 ${
                    exp.type === "Leadership"
                      ? "bg-purple-500 shadow-md shadow-purple-500/50"
                      : "bg-blue-500 shadow-md shadow-blue-500/50"
                  }`}
                />

                <div
                  className={`theme-lab-card p-6 lg:p-8 ${
                    exp.type === "Leadership"
                      ? "border-purple-500/25 bg-purple-950/[0.04]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {exp.title}
                      </h4>
                      <p className="text-sm font-bold theme-lab-text mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {exp.type === "Leadership" && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/25">
                          Leadership
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-900 border border-slate-850 rounded-full text-slate-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  {/* case study link for CareerGarantia */}
                  {exp.link && (
                    <div className="mt-6 pt-4 border-t border-slate-900/60">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 hover:border-purple-500 text-purple-400 hover:text-white bg-purple-500/5 hover:bg-purple-500/10 font-bold flex items-center gap-1.5 rounded-xl transition-all"
                        asChild
                      >
                        <Link href="/careergarantia">
                          <span>{exp.linkText}</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          className="p-8 lg:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need an Expert Frontend Architect?
            </h3>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-medium">
              Whether you need to scale a service-based platform, audit
              rendering speed, or integrate secure authorization matrices, I can
              help you deliver.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="theme-lab-btn text-white rounded-xl py-6 px-6 font-bold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Start Technical Audit
                  <ArrowRight className="h-4.5 w-4.5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-6 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-200 font-bold hover:bg-slate-800/80"
                asChild
              >
                <Link href="/services">Explore Cost Packages</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
