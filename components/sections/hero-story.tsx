'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  ArrowDownRight,
  ClipboardList,
  FileSpreadsheet,
  Mail,
  MessageSquareText,
  Package,
  Phone,
  ReceiptText,
  UserRound,
  Wrench,
} from 'lucide-react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

const fragments = [
  { label: '47 unread messages', icon: MessageSquareText, className: 'left-[4%] top-[19%] md:left-[10%]' },
  { label: 'Inventory final v8.xlsx', icon: FileSpreadsheet, className: 'right-[3%] top-[23%] md:right-[9%]' },
  { label: 'Customer called again', icon: Phone, className: 'left-[2%] top-[61%] md:left-[15%]' },
  { label: 'Job card #1842', icon: ClipboardList, className: 'right-[1%] top-[65%] md:right-[14%]' },
  { label: 'Invoice pending', icon: ReceiptText, className: 'left-[25%] top-[79%] md:left-[31%]' },
]

const productFrames = [
  { src: '/images/teramotors.png', label: 'Workshop operations', className: '-left-[18%] top-[12%] w-[70vw] max-w-[620px] -rotate-[7deg] md:-left-[6%] md:w-[46vw]' },
  { src: '/images/takkahapp.png', label: 'Communication systems', className: '-right-[24%] top-[21%] w-[66vw] max-w-[560px] rotate-[8deg] md:-right-[7%] md:top-[18%] md:w-[42vw]' },
  { src: '/images/minimind.png', label: 'Product experiments', className: 'bottom-[6%] left-1/2 w-[74vw] max-w-[590px] -translate-x-1/2 rotate-[2deg] md:bottom-[3%] md:w-[44vw]' },
]

const systemNodes = [
  { label: 'Customer', icon: UserRound, color: 'bg-[#dfe5df] text-[#294936]' },
  { label: 'Job', icon: Wrench, color: 'bg-[#eadadd] text-[#7b2837]' },
  { label: 'Inventory', icon: Package, color: 'bg-[#e8e2d2] text-[#735d35]' },
  { label: 'Invoice', icon: ReceiptText, color: 'bg-[#dde2e7] text-[#263d54]' },
]

export function HeroStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  })

  const introOpacity = useTransform(progress, [0, 0.24, 0.43], [1, 1, 0])
  const introY = useTransform(progress, [0, 0.43], [0, -70])
  const fragmentOpacity = useTransform(progress, [0, 0.12, 0.38, 0.52], [0, 1, 1, 0])
  const fragmentScale = useTransform(progress, [0, 0.24, 0.5], [0.9, 1, 0.65])
  const fragmentBlur = useTransform(progress, [0.34, 0.54], ['blur(0px)', 'blur(10px)'])
  const systemOpacity = useTransform(progress, [0.36, 0.55, 1], [0, 1, 1])
  const systemY = useTransform(progress, [0.36, 0.62], [90, 0])
  const systemScale = useTransform(progress, [0.36, 0.68], [0.86, 1])
  const lineProgress = useTransform(progress, [0.5, 0.77], [0, 1])
  const finaleOpacity = useTransform(progress, [0.64, 0.82], [0, 1])
  const finaleY = useTransform(progress, [0.64, 0.87], [28, 0])
  const scrollCueOpacity = useTransform(progress, [0, 0.12], [1, 0])

  return (
    <section ref={sectionRef} className="hero-story relative h-[250vh] bg-[#f1ecdf] text-[#172019]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,253,247,0.98),rgba(241,236,223,0.74)_38%,rgba(241,236,223,0)_72%)]" />
        <div className="builder-noise absolute inset-0 opacity-25" />

        <header className="absolute inset-x-0 top-0 z-40 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <a href="#home" className="flex items-center gap-3" aria-label="Almonzer Fadl, home">
            <span className="grid size-9 place-items-center rounded-full border border-[#243f32]/20 bg-[#f9f5eb]/70 font-mono text-xs font-semibold text-[#243f32] backdrop-blur-md">AF</span>
            <span className="hidden text-sm font-medium tracking-[-0.01em] sm:block">Almonzer Fadl</span>
          </a>

          <div className="flex items-center gap-1 rounded-full border border-[#243f32]/15 bg-[#f9f5eb]/60 p-1 backdrop-blur-xl">
            <a href="#projects" className="hidden rounded-full px-4 py-2 text-xs font-medium transition-colors hover:bg-white/70 sm:block">Selected work</a>
            <a href="mailto:almonzer@almonzerfadl.com" className="hidden rounded-full px-4 py-2 text-xs font-medium transition-colors hover:bg-white/70 sm:block">Contact</a>
            <a href="mailto:almonzer@almonzerfadl.com" className="grid size-9 place-items-center rounded-full sm:hidden" aria-label="Email Almonzer">
              <Mail className="size-4" />
            </a>
          </div>
        </header>

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 z-10 flex items-center justify-center px-5"
        >
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#243f32]/20 bg-[#f9f5eb]/65 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#243f32]/70">
              <span className="size-1.5 rounded-full bg-[#6e2935]" />
              Product engineer · Kuala Lumpur
            </div>
            <h1 className="text-balance text-[clamp(2.75rem,8.3vw,8.4rem)] font-medium leading-[0.91] tracking-[-0.06em]">
              I build products from
              <span className="block text-[#31513e]">real operational problems.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-sm leading-6 text-black/58 md:text-base md:leading-7">
              I turn fragmented workflows into software systems, test ideas in the market, and build products people genuinely use.
            </p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: fragmentOpacity, scale: fragmentScale, filter: fragmentBlur }} className="absolute inset-0 z-20">
          <motion.figure animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[8%] left-[8%] w-[84%] overflow-hidden rounded-md border border-[#243f32]/15 bg-[#f8f3e8] p-1 shadow-[0_30px_70px_rgba(31,41,34,0.17)] md:hidden">
            <Image src="/images/teramotors.png" alt="TeraMotors workshop operations" width={1902} height={956} className="aspect-[1.7] w-full object-cover object-left" />
            <figcaption className="flex items-center justify-between px-2 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-[#243f32]/55"><span>Workshop operations</span><span>01</span></figcaption>
          </motion.figure>
          {productFrames.map((frame, index) => (
            <motion.figure
              key={frame.src}
              className={`absolute hidden overflow-hidden rounded-md border border-[#243f32]/15 bg-[#f8f3e8] p-1 shadow-[0_35px_90px_rgba(31,41,34,0.18)] md:block md:p-1.5 ${frame.className}`}
              animate={{ y: [0, index % 2 ? 11 : -11, 0] }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image src={frame.src} alt={frame.label} width={1900} height={960} className="aspect-[1.95] w-full object-cover object-left" />
              <figcaption className="flex items-center justify-between px-2 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-[#243f32]/55"><span>{frame.label}</span><span>0{index + 1}</span></figcaption>
            </motion.figure>
          ))}
          {fragments.map(({ label, icon: Icon, className }, index) => (
            <motion.div
              key={label}
              className={`absolute ${className} flex items-center gap-2 rounded-xl border border-[#243f32]/12 bg-[#f9f5eb]/82 px-3 py-2.5 shadow-[0_15px_45px_rgba(31,41,34,0.09)] backdrop-blur-xl`}
              animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0], rotate: [index % 2 ? -1.5 : 1.5, 0, index % 2 ? -1.5 : 1.5] }}
              transition={{ duration: 4.5 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon className="size-3.5 text-[#6e2935]/75" />
              <span className="whitespace-nowrap font-mono text-[9px] text-black/60 md:text-[10px]">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: systemOpacity, y: systemY, scale: systemScale }}
          className="absolute inset-0 z-30 flex items-center justify-center px-5"
        >
          <div className="w-full max-w-6xl pt-10">
            <motion.div style={{ opacity: finaleOpacity, y: finaleY }} className="mb-7 text-center md:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6e2935]/70">A system replaces the chasing</span>
              <h2 className="mx-auto mt-4 max-w-4xl text-balance text-[clamp(2rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.045em]">
                One connected flow.<br />Built around the business.
              </h2>
            </motion.div>

            <div className="relative mx-auto grid min-w-0 max-w-5xl grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-5">
              <svg className="pointer-events-none absolute inset-0 hidden size-full overflow-visible md:block" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
                {[245, 500, 755].map((x) => (
                  <motion.path
                    key={x}
                    d={`M ${x - 38} 75 L ${x + 38} 75`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    className="text-black/35"
                    style={{ pathLength: lineProgress }}
                  />
                ))}
              </svg>

              {systemNodes.map(({ label, icon: Icon, color }, index) => (
                <motion.div
                  key={label}
                  initial={false}
                  className="relative z-10 flex min-h-28 min-w-0 flex-col justify-between rounded-2xl border border-[#243f32]/15 bg-[#faf6ec]/80 p-3 backdrop-blur-xl md:min-h-40 md:p-5"
                >
                  <div className="flex items-start justify-between">
                    <span className={`grid size-9 place-items-center rounded-full ${color}`}>
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-[9px] text-black/35">0{index + 1}</span>
                  </div>
                  <div>
                    <div className="mb-2 h-px w-full bg-black/8">
                      <motion.div style={{ scaleX: lineProgress }} className="h-full origin-left bg-[#6e2935]/70" />
                    </div>
                    <span className="text-sm font-medium md:text-base">{label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              style={{ opacity: finaleOpacity, y: finaleY }}
              href="#projects"
              className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs font-medium text-black/55 transition-colors hover:text-black"
            >
              Explore the systems <ArrowDownRight className="size-3.5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div style={{ opacity: scrollCueOpacity }} className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/40">Scroll to connect</span>
          <div className="mx-auto mt-3 h-10 w-px overflow-hidden bg-black/10">
            <motion.div className="h-4 w-px bg-[#6e2935]/75" animate={{ y: [-16, 40] }} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
