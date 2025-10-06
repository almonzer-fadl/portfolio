'use client'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import Link from 'next/link'

// Projects data
const projects = [
  {
    title: 'Enterprise Software Suite',
    description: 'Comprehensive business management system with real-time analytics and reporting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/username/project1',
    live: 'https://project1.com',
    featured: true
  },
  {
    title: 'FADL Branding System',
    description: 'Professional logo design and brand identity created at age 16.',
    tech: ['Design', 'Branding', 'Identity', 'Adobe Creative Suite'],
    github: null,
    live: null,
    featured: true
  },
  {
    title: 'Jazz 2.0 AI Assistant',
    description: 'Personal AI assistant with memory, speech recognition, and internet capabilities.',
    tech: ['AI/ML', 'Python', 'Speech Recognition', 'LLM'],
    github: 'https://github.com/username/jazz-ai',
    live: null,
    featured: false
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/username/ecommerce',
    live: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/taskapp',
    live: null,
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    tech: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    github: 'https://github.com/username/weather',
    live: 'https://weather-demo.com',
    featured: false
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        {/* Projects Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-normal text-center mb-12 text-black dark:text-white"
            >
              All Projects
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                    <div className="aspect-video bg-black dark:bg-white flex items-center justify-center relative overflow-hidden">
                      <span className="text-white dark:text-black text-lg font-normal relative z-10">Project Image</span>
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-black text-black dark:text-white rounded-full text-sm font-normal border border-gray-200 dark:border-gray-800">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-normal text-black dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-normal"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-normal"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-normal text-lg"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </main>
  )
}