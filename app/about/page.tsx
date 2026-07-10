"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users, Award, Coffee, ExternalLink, BadgeCheck } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SkillCard from "@/components/skill-card"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"

const skills = [
  {
    category: "Frontend",
    icon: Palette,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "WebSocket",
      "Axios",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Tools & Others",
    icon: Zap,
    skills: [
      "Postman",
      "Git & GitHub",
      "Prismic CMS",
      "Razorpay Integration",
      "AWS S3",
      "Digital Ocean",
      "Google OAuth",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Concepts",
    icon: Code,
    skills: [
      "State Management",
      "Real-time Communication",
      "API Integration",
      "Web Performance Optimization",
      "SEO in Next.js",
      "Clean Code Practices",
      "Component-driven Development",
      "Code Review",
    ],
    color: "from-purple-500 to-pink-500",
  },
]

const experience = [
  {
    title: "Web Developer (Frontend Developer)",
    company: "Notebrains Software and Services Pvt. Ltd",
    period: "Dec 2024 - Present",
    description: [
      "Led frontend architecture and development of a production-ready Platform using Next.js and React.js.",
      "Built secure authentication with Google OAuth, OTP verification, and JWT-based authorization.",
      "Developed Admin Panel featuring role-based permissions and dashboard analytics.",
      "Implemented real-time chat, notifications, and live updates using WebSocket.",
      "Integrated Razorpay payment gateway with secure checkout workflows.",
      "Collaborated closely with backend developers to design scalable REST API integrations.",
    ],
  },
  {
    title: "Web Developer (Frontend Developer)",
    company: "Webapps Software Solutions",
    period: "Jan 2024 - Dec 2024",
    description: [
      "Developed enterprise-grade SaaS applications using React.js, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.",
      "Designed scalable frontend architecture with reusable component libraries, improving development efficiency.",
      "Integrated REST APIs with centralized Axios interceptors, token-based authentication, and robust error handling.",
      "Implemented JWT authentication, protected routes, and role-based authorization.",
      "Built responsive, mobile-first interfaces compatible across major browsers.",
      "Optimized application performance through code splitting, lazy loading, and efficient rendering techniques.",
    ],
  },
]

const certificates = [
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    period: "Nov 2023",
    skills: "JavaScript",
    credentialUrl: "https://www.hackerrank.com/certificates/3ea57fa57cbd",
    logoType: "hackerrank",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    period: "Nov 2023",
    skills: "Problem Solving",
    credentialUrl: "https://www.hackerrank.com/certificates/df61c62a4a72",
    logoType: "hackerrank",
  },
  {
    title: "Certificate of Participation",
    issuer: "Webapps Software Solutions (WASS)",
    period: "Oct 2024",
    skills: "Frontend Technologies",
    description: "Bestowed for innovative approach to frontend technologies, transforming concepts into engaging web experiences.",
    credentialUrl: "#",
    logoType: "wass",
  },
]

const education = [
  {
    degree: "Full-Stack Web Development Training",
    institution: "Physics Wallah (PW Skills)",
    period: "Aug 2023 - Jan 2024",
    details: "Specialized in Frontend Web Development concepts, modern JavaScript (ES6+), React, Next.js, and web architectures.",
  },
  {
    degree: "Bachelor of Arts",
    institution: "Vidyasagar University",
    period: "Aug 2020 - Jan 2024",
    details: "Developed analytical thinking, structured communication, and problem-solving skills.",
  },
]


export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative z-10 overflow-hidden">
      <ScrollToTop />
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" style={{ opacity: 'var(--bg-grid-opacity, 0.05)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="About Me"
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent mb-6"
          />
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm a passionate frontend developer with a love for creating beautiful, functional, and user-centered
            digital experiences. When I'm not coding, you'll find me exploring new technologies or enjoying a good cup
            of coffee.
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">My Journey</h2>
            <div className="space-y-4 text-slate-350">
              <p>
                My journey into web development started during college when I built my first website. What began as
                curiosity quickly turned into passion as I discovered the power of code to bring ideas to life.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams and clients, building everything
                from simple landing pages to complex web applications. I believe in writing clean, maintainable code and
                creating user experiences that make a difference.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Coffee, text: "Coffee Enthusiast" },
                { icon: Code, text: "Open Source Contributor" },
                { icon: Users, text: "Team Player" },
                { icon: Award, text: "Problem Solver" },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="h-5 w-5 theme-lab-text" />
                  <span className="text-sm font-medium text-slate-300">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col h-[500px]">
              {/* Mock Browser Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="bg-slate-800 text-[10px] text-slate-400 px-3 py-1 rounded-md ml-4 w-40 truncate">https://uttampatra.dev</div>
              </div>
              
              {/* Mock Website Canvas */}
              <div className="flex-1 bg-slate-950 rounded-lg p-6 flex flex-col justify-between border border-slate-800/50 relative overflow-hidden text-left">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Hero Section Mock */}
                <div className="relative z-10 space-y-4">
                  <div className="h-4 bg-purple-500/20 rounded w-24 border border-purple-500/30" />
                  <div className="h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg w-3/4 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-800 rounded w-full" />
                    <div className="h-3 bg-slate-800 rounded w-5/6" />
                  </div>
                </div>

                {/* Cards Section Mock */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                      <span className="text-[10px] text-pink-400">⚡</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded w-16" />
                    <div className="h-2 bg-slate-850 rounded w-24" />
                  </div>
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <span className="text-[10px] text-cyan-400">🎨</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded w-16" />
                    <div className="h-2 bg-slate-850 rounded w-24" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <SkillCard key={skillGroup.category} {...skillGroup} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                className="relative pl-8 pb-8 border-l-2 border-slate-800/80 last:border-l-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 theme-lab-bg-gradient rounded-full" />
                <div className="theme-lab-card p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="theme-lab-text font-bold mb-2 font-mono text-sm">
                    {exp.company} • {exp.period}
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-slate-350">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="theme-lab-card p-6 flex flex-col justify-between shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-white leading-snug">{edu.degree}</h3>
                      <p className="text-sm theme-lab-text font-bold mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-900 text-slate-450 border border-slate-800 rounded-full shrink-0 ml-2">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-350 leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="theme-lab-card p-6 flex flex-col justify-between shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {cert.logoType === "hackerrank" ? (
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/25">
                        {/* HackerRank styled hex logo */}
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm3 13h-2v-2h-2v2H9V9h2v2h2V9h2v6z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/25 font-bold text-xs">
                        WASS
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg text-white leading-snug">{cert.title}</h3>
                      <p className="text-sm theme-lab-text font-bold">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-mono text-slate-500">{cert.period}</p>
                    {cert.description && (
                      <p className="text-sm text-slate-350 leading-relaxed mb-3">{cert.description}</p>
                    )}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md w-fit border border-slate-800">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Skills: {cert.skills}
                    </div>
                  </div>
                </div>

                {cert.credentialUrl !== "#" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 border-slate-855 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900"
                    asChild
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Show credential
                    </a>
                  </Button>
                ) : (
                  <div className="text-xs text-center text-slate-555 border border-dashed border-slate-850 py-2 rounded-lg mt-2 font-mono">
                    Internal Verification
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
