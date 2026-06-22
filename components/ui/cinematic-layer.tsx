'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function CinematicLayer() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.35 })
  const ringRotate = useTransform(progress, [0, 1], [0, 185])
  const ringY = useTransform(progress, [0, 1], ['-12vh', '72vh'])
  const lineScale = useTransform(progress, [0, 1], [0, 1])
  const folio = useTransform(progress, (value) => `${Math.min(99, Math.floor(value * 100)).toString().padStart(2, '0')}`)

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden overflow-hidden lg:block" aria-hidden="true">
      <motion.div style={{ y: ringY, rotate: ringRotate }} className="absolute -right-28 top-0 size-72 rounded-full border border-[#a1814f]/12">
        <div className="absolute inset-9 rounded-full border border-[#243f32]/8" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#7b2837]/8" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-[#7b2837]/8" />
      </motion.div>

      <div className="absolute bottom-8 right-7 flex flex-col items-center gap-3">
        <motion.span className="font-mono text-[8px] tabular-nums tracking-[0.16em] text-[#243f32]/40">{folio}</motion.span>
        <div className="relative h-24 w-px bg-[#243f32]/12">
          <motion.div style={{ scaleY: lineScale }} className="absolute inset-0 origin-top bg-[#7b2837]/55" />
        </div>
        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#243f32]/30">folio</span>
      </div>

      <div className="absolute left-7 top-1/2 flex -translate-y-1/2 -rotate-90 items-center gap-3 font-mono text-[7px] uppercase tracking-[0.22em] text-[#243f32]/25">
        <span>Systems</span><span className="h-px w-9 bg-[#a1814f]/45" /><span>Products</span><span className="h-px w-9 bg-[#a1814f]/45" /><span>Markets</span>
      </div>
    </div>
  )
}
