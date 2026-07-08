"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  category: string
  icon: LucideIcon
  skills: string[]
  color: string
  index: number
}

export default function SkillCard({ category, icon: Icon, skills, color, index }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
      </div>

      <div className="space-y-2">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`w-2 h-2 bg-gradient-to-r ${color} rounded-full`} />
            <span className="text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
