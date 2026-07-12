"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/animated-text";
import ProjectCard from "@/components/project-card";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const projects = [
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
    id: 4,
    title: "CBTF SoccerStats",
    description:
      "A dynamic soccer prediction and live statistics platform offering real-time stats feeds, match trends, and predictive odds analysis widgets via integrated sports data APIs.",
    image: "/projects/CBTFSoccerStats.png",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    category: "Sports Analytics",
    liveUrl: "https://cbtfsoccerstats.netlify.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Global Sports Network",
    description:
      "Led end-to-end frontend development, delivering scalable architecture, reusable components, payment integration, and production-ready chat channels. Integrated WebSockets, Google OAuth, and secure payment processors.",
    image: "/projects/GlobalSportsNetwork.png",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "RESTful APIs",
      "WebSocket",
      "Razorpay",
      "OAuth",
    ],
    category: "Social Media Platform",
    liveUrl: "https://eagleglobalsportsnetwork.com/",
    githubUrl: "#",
    featured: false,
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
    category: "3D Cargo Planing",
    liveUrl: "https://loadify-freight-map.notebrains.com/",
    githubUrl: "#",
    featured: false,
  },

  {
    id: 8,
    title: "Enterprise SaaS CRM",
    description:
      "A premium customer relationship management SaaS platform featuring comprehensive analytics dashboards, contact pipeline tracking, sales funnel monitoring, and user collaboration modules.",
    image: "/projects/EnterpriseSaaSCRM.png",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Redux Toolkit",
      "Recharts",
    ],
    category: "SaaS Platform",
    liveUrl: "https://saas-crm-uttam.netlify.app",
    githubUrl: "#",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8 relative z-10 overflow-hidden">
      <ScrollToTop />

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
              Portfolio
            </span>
          </motion.div>

          <AnimatedText
            text="Selected Projects"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent mb-6 tracking-tight"
          />
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Here's a curated selection of production SaaS platforms, client
            portals, and dynamic web apps I've designed and engineered.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={project.featured}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20 p-8 sm:p-12 theme-lab-card shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
            I'm always excited to design new platforms, scale frontend
            architectures, and collaborate on engaging user interfaces.
          </p>
          <Button
            size="lg"
            className="theme-lab-btn text-white px-8 py-5 rounded-xl font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/5"
            asChild
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
