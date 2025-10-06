'use client'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Projects } from '@/components/sections/projects'
import { motion } from 'framer-motion'

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
        <Projects />
      </motion.div>
      <Footer />
    </main>
  )
}
