"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Rocket,
  ShieldCheck,
  Database,
  Network,
  Users,
  Award,
  LineChart,
  Clock,
  Brain,
  Terminal,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";

const architectureStack = [
  {
    layer: "Frontend Interface Layer",
    tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion",
    details:
      "Built a fully responsive, lightweight client with optimized Server Components. Implemented code splitting and lazy loading of interactive components.",
  },
  {
    layer: "State & Cache Orchestration",
    tech: "Redux, RTK Query, LocalStorage middleware",
    details:
      "Configured normalized client caching to minimize API roundtrips. Ensured instant state transitions for interactive scheduling forms.",
  },
  {
    layer: "Backend & Real-Time Sync",
    tech: "Node.js (TypeScript), Express, WebSockets",
    details:
      "Developed RESTful APIs and WebSocket channels for instant coach-student chat notifications and live booking updates.",
  },
  {
    layer: "Security & Database Infrastructure",
    tech: "PostgreSQL, JWT Auth, Google OAuth, AWS S3",
    details:
      "Implemented robust access controls and role-based routes. Mentors, students, and admins access isolated sections with high security.",
  },
];

const engineeringMilestones = [
  {
    title: "Platform Scaling (0 to 10k+ Users)",
    desc: "Designed and implemented robust data normalization and connection pooling inside PostgreSQL. Scaled server instances on cloud nodes, maintaining 99.9% uptime for peak mock session events.",
    metric: "99.9% Uptime",
    icon: Network,
  },
  {
    title: "55% Page Load Latency Reduction",
    desc: "Refactored the core dashboard bundle. Introduced server-side preloading, advanced edge caching, and optimized SVGs, cutting mobile PageSpeed load time from 4.2s to 1.8s.",
    metric: "1.8s Loading Speed",
    icon: Clock,
  },
  {
    title: "Automated Student-Mentor Matcher",
    desc: "Architected an intelligent scheduling logic matching students' study backgrounds and target companies with mentors. Automated notification chains across SMS and email webhooks.",
    metric: "100% Match Rate",
    icon: Brain,
  },
  {
    title: "CI/CD & Strict Quality Pipelines",
    desc: "Enforced strict TypeScript rules, ESLint configurations, and Jest automated testing hooks. Set up Git workflow channels, reducing regression bugs by 80% and speeding up deployment cycles.",
    metric: "80% Fewer Bugs",
    icon: ShieldCheck,
  },
];

const companyServices = [
  {
    title: "Interactive Mentorship Portal",
    description:
      "A centralized dashboard for students to book mock interviews, schedule resume reviews, and chat in real-time with top industry professionals.",
  },
  {
    title: "Resume & Portfolio Analyzer",
    description:
      "An automated utility analyzing resume fields and matching skills against target career descriptions, giving instant optimization guidelines.",
  },
  {
    title: "Corporate Hiring Integrations",
    description:
      "An admin workspace helping corporate recruiters filter candidates based on mentor evaluations, mock interview scores, and verified projects.",
  },
];

export default function CareerGarantiaPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative z-10 overflow-hidden bg-slate-950 text-slate-100">
      <ScrollToTop />

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none z-0" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"
        style={{ opacity: "var(--bg-grid-opacity, 0.05)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link to About */}
        <div className="text-left mb-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to About Profile
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          className="text-left mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-3 items-center">
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/25 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Case Study: CareerGarantia
            </span>
            <span className="bg-slate-900 text-slate-450 border border-slate-850 text-[10px] font-mono font-bold px-3 py-1 rounded-full">
              Role: Leading Technical Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight leading-tight">
            Leading Technical Architecture for CareerGarantia
          </h1>

          <p className="text-lg sm:text-xl text-slate-350 max-w-4xl leading-relaxed font-medium">
            CareerGarantia is a high-growth, service-based career consulting and
            accelerator platform. As the Leading Technical Architecture, I
            direct the complete engineering architecture, software systems, and
            developer recruitment workflows, scaling the product from early
            concepts to a robust system.
          </p>

          <div className="pt-2">
            <Button
              className="theme-lab-btn text-white rounded-xl py-6 px-6 font-bold shadow-lg"
              asChild
            >
              <Link href="/contact?subject=CareerGarantia Collaboration">
                Discuss Technical Solutions
                <ChevronRight className="h-4.5 w-4.5 ml-1.5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* High-Level Architecture Impact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Technical Strategy",
              desc: "Formulating software blueprints, choosing stack layouts, budgeting server infrastructure, and ensuring product-market security frameworks.",
              icon: Rocket,
              color: "text-purple-400",
            },
            {
              title: "Product Execution",
              desc: "Leading active sprint cycles, enforcing clean SOLID coding standards, setting CI/CD triggers, and mentoring junior engineers.",
              icon: Users,
              color: "text-blue-400",
            },
            {
              title: "Infrastructure Scaling",
              desc: "Designing databases, API models, WebSockets protocols, and optimizing client-side performance index scores to exceed 99+.",
              icon: LineChart,
              color: "text-emerald-400",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="theme-lab-card p-6 lg:p-8 text-left flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div>
                <item.icon className={`h-8 w-8 mb-5 ${item.color}`} />
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Core Services & Products Section */}
        <motion.div
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-purple-500 pl-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Products Engineered Under My Leadership
            </h2>
            <p className="text-slate-400 mt-1 text-sm font-medium">
              A view of the service applications I architected for
              CareerGarantia to handle corporate mentoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyServices.map((service, idx) => (
              <div
                key={service.title}
                className="p-6 bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-colors rounded-2xl space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-sm font-mono">
                  <LayoutGrid className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Architecture Details */}
        <motion.div
          className="grid lg:grid-cols-12 gap-12 mb-20 items-stretch"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text block */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-center">
            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                System Architecture Showcase
              </h2>
              <p className="text-slate-400 mt-1 text-sm font-medium">
                High-fidelity tech choices engineered for high throughput and
                security.
              </p>
            </div>

            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-medium">
              To achieve zero bottlenecks, I selected a Next.js App Router setup
              with incremental static regeneration. Dynamic content maps
              directly to REST models via an asynchronous client controller.
            </p>

            <div className="space-y-3 border-t border-slate-900/80 pt-6">
              {[
                "Compliant with WCAG accessibility guidelines",
                "Token-rotator interceptors on all client routes",
                "Continuous Integration testing on all branch commits",
                "Isolated PostgreSQL database setups",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-400 font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Stack list */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {architectureStack.map((stack) => (
              <div
                key={stack.layer}
                className="p-5 bg-slate-900/60 border border-slate-900 rounded-2xl text-left"
              >
                <span className="text-[10px] font-bold text-blue-400 font-mono uppercase tracking-wider block">
                  {stack.layer}
                </span>
                <h4 className="text-sm font-bold text-white mt-1 font-mono">
                  {stack.tech}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed font-medium">
                  {stack.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Achievements Timeline */}
        <motion.div
          className="text-left mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-emerald-500 pl-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Engineering Achievements under my Technical Leadership
            </h2>
            <p className="text-slate-400 mt-1 text-sm font-medium">
              Concrete metrics and outcomes delivered through high-end
              engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engineeringMilestones.map((ms, idx) => (
              <motion.div
                key={ms.title}
                className="theme-lab-card p-6 lg:p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ms.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold bg-slate-950 border border-slate-900 px-3 py-1 rounded-full text-emerald-400">
                      {ms.metric}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                      {ms.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy Section */}
        <motion.div
          className="p-8 lg:p-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Guiding CareerGarantia into the Future
            </h3>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-medium">
              We continue to iterate on state-of-the-art software systems that
              scale training, improve feedback loops, and connect students
              directly to global job markets. If you are looking to hire a
              lead architect to consult on your system structure, let's
              talk.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="theme-lab-btn text-white rounded-xl py-6 px-6 font-bold shadow-lg"
                asChild
              >
                <Link href="/contact?subject=Architecture Consultation">
                  Consult with Lead Architect
                  <ChevronRight className="h-4.5 w-4.5 ml-1.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-6 py-6 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-200 font-bold hover:bg-slate-800/80"
                asChild
              >
                <Link href="/about">View Developer Bio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
