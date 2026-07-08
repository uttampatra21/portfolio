"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  featured: boolean
}

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(project.image || "/placeholder.jpg")
  // Check if there is a valid URL to visit, otherwise fallback to hash
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#"

  return (
    <motion.div
      className={`bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-2xl hover:shadow-blue-500/[0.05] transition-all duration-500 overflow-hidden group flex flex-col h-full ${
        featured ? "lg:col-span-1" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video w-full flex-shrink-0">
        <motion.img
          src={imgSrc}
          alt={project.title}
          onError={() => setImgSrc("/placeholder.jpg")}
          className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Links Overlay */}
        {hasLiveUrl && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-slate-750 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4.5 w-4.5" />
            </motion.a>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-200/30 dark:border-blue-800/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-350 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5 max-h-[56px] overflow-hidden">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-slate-100/80 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-[10px] font-medium font-mono rounded border border-slate-200/30 dark:border-slate-700/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 bg-slate-100/50 dark:bg-slate-800/30 text-slate-500 text-[10px] font-mono rounded">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Action Button */}
          <div className="flex">
            {hasLiveUrl ? (
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl shadow-md shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-300"
                asChild
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Project
                </motion.a>
              </Button>
            ) : (
              <div className="w-full text-center text-xs font-semibold py-2.5 text-slate-400 dark:text-slate-500 bg-slate-100/80 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                Internal / Proprietary Project
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
