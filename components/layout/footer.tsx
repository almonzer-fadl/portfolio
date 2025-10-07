'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-normal mb-6 text-black dark:text-white">FADL</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Electrical & Electronics Engineering Student | Software Developer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-normal text-black dark:text-white mb-6">Quick Links</h4>
            <div className="space-y-4">
              <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-normal text-black dark:text-white mb-6">Connect</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/almonzerfadl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group shadow-lg"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/almonzerfadl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com/almonzerfadl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group shadow-lg"
              >
                <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:almonzerfadl@gmail.com"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group shadow-lg"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Almonzer Fadl. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
