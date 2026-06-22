'use client'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f1ecdf] text-[#172019]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="grid size-12 place-items-center rounded-full border border-black/15 border-t-black/70 font-mono text-[10px]"
      >AF</motion.div>
    </div>
  )
}
