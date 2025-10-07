'use client'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="font-normal text-sm text-black dark:text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
