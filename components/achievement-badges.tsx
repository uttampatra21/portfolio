"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Zap, Target, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "SaaS Builder",
    description: "Built enterprise-grade SaaS apps",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Award,
    title: "Cloud Integration",
    description: "AWS S3 & Digital Ocean deploy",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Star,
    title: "5-Star Rating",
    description: "Consistent high-quality delivery",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "Optimized lazy loading & render",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Target,
    title: "Payment Systems",
    description: "Secure Razorpay integrations",
    color: "from-red-400 to-rose-600",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborated on REST & Websockets",
    color: "from-cyan-400 to-blue-600",
  },
]

export default function AchievementBadges() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 relative z-10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Achievements & Certifications
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recognition and certifications that validate my expertise and commitment to excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative p-6 lg:p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div
                className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <achievement.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="font-bold text-sm lg:text-base text-slate-900 dark:text-white mb-2 text-center">
                {achievement.title}
              </h3>
              <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
