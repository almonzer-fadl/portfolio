'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  ChevronRight,
  ClipboardList,
  FileSpreadsheet,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  ReceiptText,
  Send,
} from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const archiveProjects = [
  { title: 'Takkah', type: 'Messaging platform', image: '/images/takkahapp.png', href: 'https://takkah.app/' },
  { title: 'Takaful', type: 'Charity operations portal', image: '/images/tkafulorg.png', href: 'https://tkaful.testingapplications.xyz/' },
  { title: 'Minimind', type: 'Personal productivity', image: '/images/minimind.png', href: 'https://minimind-ba00.onrender.com/' },
]

const principles = [
  ['01', 'Observe before designing', 'The useful details usually live inside the work, not the brief.'],
  ['02', 'Validate before building', 'A technically good product can still solve the wrong market problem.'],
  ['03', 'Own the whole outcome', 'Interfaces, workflows, adoption and distribution are one connected system.'],
  ['04', 'Ship, watch, improve', 'Reality gives better feedback than another week of speculation.'],
]

function Eyebrow({ children }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#243f32]/58">
      <span className="h-px w-7 bg-[#a1814f]" />
      {children}
    </div>
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function OperationalDesk() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-3xl md:h-[640px]">
      <motion.div initial={{ opacity: 0, x: 70, rotate: 8 }} whileInView={{ opacity: 1, x: 0, rotate: 5 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute right-[2%] top-[4%] z-10 w-[66%] border border-[#243f32]/18 bg-[#f9f5ea] p-3 shadow-[0_35px_80px_rgba(31,43,35,0.13)]">
        <div className="mb-4 flex items-center justify-between border-b border-[#243f32]/12 pb-3"><div className="flex items-center gap-2 text-[#294936]"><FileSpreadsheet className="size-4" /><span className="font-mono text-[9px] uppercase tracking-wider">inventory_final_v8.xlsx</span></div><span className="size-2 rounded-full bg-[#7b2837]" /></div>
        <div className="grid grid-cols-4 gap-px bg-[#243f32]/10 font-mono text-[7px] md:text-[9px]">
          {['Item','Qty','Cost','Status','Oil filter','08','45.00','LOW','Brake pads','24','120.00','OK','Spark plugs','03','38.00','ORDER','Coolant','12','29.00','OK'].map((cell, i) => <motion.span key={`${cell}-${i}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.025 }} className={`${i < 4 ? 'bg-[#243f32] text-[#f7f1e5]' : 'bg-[#fbf8f0] text-[#243f32]/65'} px-2 py-2`}>{cell}</motion.span>)}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -70, rotate: -10 }} whileInView={{ opacity: 1, x: 0, rotate: -5 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.12 }} className="absolute left-[1%] top-[25%] z-20 w-[48%] rounded-[1.6rem] border-[7px] border-[#1e2e27] bg-[#f9f6ed] p-4 shadow-[0_30px_70px_rgba(31,43,35,0.2)] md:w-[40%]">
        <div className="flex items-center justify-between border-b border-black/10 pb-3"><span className="text-xs font-semibold text-[#243f32]">Workshop chat</span><PhoneCall className="size-3.5 text-[#7b2837]" /></div>
        <div className="space-y-3 py-4">
          {['Is the car ready?', 'Checking with the technician…', 'Please send the invoice', 'One moment.'].map((message, i) => <motion.div key={message} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 + i * 0.14 }} className={`${i % 2 ? 'ml-auto bg-[#294936] text-white' : 'mr-auto bg-[#e5dfd2] text-[#263129]'} w-fit max-w-[88%] rounded-xl px-3 py-2 text-[9px] leading-4 md:text-[10px]`}>{message}</motion.div>)}
        </div>
        <div className="h-8 rounded-full border border-black/10 bg-white" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 70, rotate: 9 }} whileInView={{ opacity: 1, y: 0, rotate: 3 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.24 }} className="absolute bottom-[4%] right-[8%] z-30 w-[55%] border border-[#243f32]/18 bg-[#f7f1e4] p-5 shadow-[0_30px_70px_rgba(31,43,35,0.15)] md:w-[48%]">
        <div className="flex items-start justify-between"><div><p className="font-serif text-2xl text-[#243f32]">Invoice</p><p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-[#243f32]/45">No. 001842</p></div><ReceiptText className="size-5 text-[#a1814f]" /></div>
        <div className="my-6 space-y-2 border-y border-[#243f32]/12 py-4 font-mono text-[8px] text-[#243f32]/60"><div className="flex justify-between"><span>Inspection</span><span>120.00</span></div><div className="flex justify-between"><span>Parts + labor</span><span>840.00</span></div></div>
        <div className="flex items-center justify-between"><span className="font-mono text-[8px] uppercase tracking-wider">Total due</span><span className="font-serif text-xl">960.00</span></div>
      </motion.div>

      <motion.div animate={{ rotate: [0, 4, 0], y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[8%] left-[19%] z-40 grid size-20 place-items-center rounded-full border border-[#a1814f]/35 bg-[#ede4d2]/90 text-[#7b2837] shadow-lg"><ClipboardList className="size-6" /><span className="absolute -bottom-6 whitespace-nowrap font-mono text-[8px] uppercase tracking-wider text-[#243f32]/45">manual handoff</span></motion.div>
    </div>
  )
}

function TeraMotorsStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })
  const rotate = useTransform(smooth, [0.05, 0.45, 0.95], [-4, 0, 2])
  const y = useTransform(smooth, [0, 1], [80, -55])
  const scale = useTransform(smooth, [0, 0.48, 1], [0.92, 1, 0.96])

  return (
    <section ref={sectionRef} id="work" className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1380px] items-start gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>Selected system · 01</Eyebrow>
          <h2 className="max-w-xl text-[clamp(2.6rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.05em]">The workshop stopped living in people&apos;s heads.</h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-[#243f32]/62">
            TeraMotors began inside a real auto-repair operation. Customers, vehicles, jobs, parts and payments needed one dependable place to move through the business.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-2 border-y border-[#243f32]/14">
            {[
              ['Used in', 'Daily operations'],
              ['Context', 'Saudi Arabia'],
              ['Languages', 'Arabic + English'],
              ['Role', 'Product + engineering'],
            ].map(([label, value], index) => (
              <div key={label} className={`py-5 ${index % 2 ? 'border-l pl-5' : 'pr-5'} border-[#243f32]/14`}>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#7b2837]/65">{label}</p>
                <p className="mt-1.5 text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>

          <a href="https://www.teramotor.cc/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-medium">
            Visit product <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <motion.div style={{ rotate, y, scale }} className="relative mt-8 lg:mt-36">
          <div className="absolute -left-4 -top-7 z-20 -rotate-3 border border-[#a1814f]/35 bg-[#eee4cd] px-4 py-2 font-mono text-[10px] text-[#5d4726] shadow-sm md:-left-8">first real product →</div>
          <div className="overflow-hidden rounded-[1.4rem] border border-[#243f32]/25 bg-[#1b2e24] p-2 shadow-[0_45px_100px_rgba(31,48,38,0.22)] md:rounded-[2rem] md:p-3">
            <div className="mb-2 flex items-center gap-1.5 px-2 py-1 md:mb-3">
              <span className="size-2 rounded-full bg-white/30" /><span className="size-2 rounded-full bg-white/30" /><span className="size-2 rounded-full bg-white/30" />
              <span className="ml-3 font-mono text-[8px] text-white/35">operations / overview</span>
            </div>
            <Image src="/images/teramotors.png" alt="TeraMotors workshop management dashboard" width={1902} height={956} className="h-auto w-full rounded-xl" />
          </div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [-3, -1, -3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-3 bottom-[8%] hidden w-[31%] overflow-hidden border border-[#243f32]/20 bg-[#f7f1e4] p-1.5 shadow-2xl md:block">
            <div className="aspect-[1.35] bg-[url('/images/teramotors.png')] bg-[length:330%] bg-[position:4%_40%]" />
            <p className="px-2 py-1.5 font-mono text-[8px] uppercase tracking-wider text-[#243f32]/55">Customer context</p>
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0], rotate: [4, 2, 4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-5 top-[30%] hidden w-[28%] overflow-hidden border border-[#a1814f]/30 bg-[#eee4cd] p-1.5 shadow-2xl md:block">
            <div className="aspect-[1.2] bg-[url('/images/teramotors.png')] bg-[length:360%] bg-[position:63%_42%]" />
            <p className="px-2 py-1.5 font-mono text-[8px] uppercase tracking-wider text-[#6e2935]/70">Live workflow</p>
          </motion.div>
          <motion.div animate={{ x: [0, 8, 0], rotate: [-2, 0, -2] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[16%] top-0 hidden w-[25%] overflow-hidden border border-[#263d54]/25 bg-[#e0e4e7] p-1.5 shadow-2xl md:block">
            <div className="aspect-[1.45] bg-[url('/images/teramotors.png')] bg-[length:390%] bg-[position:92%_40%]" />
            <p className="px-2 py-1.5 font-mono text-[8px] uppercase tracking-wider text-[#263d54]/65">One source of truth</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute -bottom-10 right-2 z-20 max-w-56 rotate-2 border border-[#243f32]/14 bg-[#f9f5e9] p-4 shadow-xl md:-right-8">
            <div className="mb-2 flex items-center gap-2 text-[#7b2837]"><PackageCheck className="size-4" /><span className="font-mono text-[9px] uppercase tracking-wider">the useful part</span></div>
            <p className="text-xs leading-5">Built around the workshop&apos;s actual sequence—not a generic dashboard template.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function VantLaunchStory() {
  const messages = [
    ['Email', 'Logistics'], ['WhatsApp', 'Workshops'], ['DM', 'Property'],
    ['Landing page', 'Recruitment'], ['Call', 'Hospitality'], ['Ad', 'Security'],
  ]

  return (
    <section className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
      <div className="builder-noise absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1380px]">
        <Reveal>
          <Eyebrow>VantLaunch · the market chapter</Eyebrow>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <h2 className="max-w-5xl text-[clamp(2.65rem,7.6vw,8.2rem)] font-medium leading-[0.9] tracking-[-0.055em]">Then I learned that building was the easy part.</h2>
            <p className="max-w-md text-sm leading-7 text-black/55 md:text-base">
              VantLaunch began as a way to replace operational chaos with custom software. It became a practical education in positioning, outreach, validation and distribution.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:hidden">
          <div className="relative col-span-2 mb-4 flex min-h-48 flex-col items-center justify-center overflow-hidden rounded-full border border-[#a1814f]/35 bg-[#213c2e] px-10 text-center text-[#f5efdf]">
            <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#c5a86c]">The hypothesis</span>
            <span className="mt-3 max-w-48 text-xl font-medium leading-tight">Good software creates demand.</span>
            <motion.span animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.8, repeat: Infinity }} className="absolute inset-4 rounded-full border border-[#c5a86c]/25" />
          </div>
          {messages.map(([channel, niche], index) => (
            <motion.div key={`mobile-${channel}-${niche}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`${index % 3 === 0 ? 'bg-[#e8dfcd]' : index % 3 === 1 ? 'bg-[#e1e5df]' : 'bg-[#e8dadd]'} min-w-0 border border-[#243f32]/14 p-3`}>
              <div className="mb-5 flex items-center justify-between"><Send className="size-3.5 text-[#7b2837]/70" /><span className="font-mono text-[7px] text-[#243f32]/35">0{index + 1}</span></div>
              <p className="truncate text-sm font-medium">{niche}</p><p className="mt-1 truncate font-mono text-[8px] text-[#243f32]/45">via {channel}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-24 hidden min-h-[650px] md:mt-32 md:block">
          <div className="absolute left-1/2 top-1/2 z-20 flex size-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#a1814f]/35 bg-[#213c2e] text-center text-[#f5efdf] shadow-[0_0_100px_rgba(36,63,50,0.15)] md:size-60">
            <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-[#c5a86c]">The hypothesis</span>
            <span className="mt-3 max-w-32 text-lg font-medium leading-tight md:max-w-44 md:text-2xl">Good software creates demand.</span>
            <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.8, repeat: Infinity }} className="absolute inset-0 -z-10 rounded-full border border-black/20" />
          </div>

          {messages.map(([channel, niche], index) => {
            const positions = [
              'left-[2%] top-[8%] md:left-[8%]', 'right-[2%] top-[5%] md:right-[12%]',
              'left-[1%] top-[47%] md:left-[5%]', 'right-[0%] top-[45%] md:right-[4%]',
              'bottom-[3%] left-[10%] md:left-[18%]', 'bottom-[1%] right-[7%] md:right-[18%]',
            ]
            return (
              <motion.div
                key={`${channel}-${niche}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, index % 2 ? 8 : -8, 0], rotate: [index % 2 ? -2 : 2, 0, index % 2 ? -2 : 2] }}
                transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                className={`absolute ${positions[index]} w-36 border border-[#243f32]/14 ${index % 3 === 0 ? 'bg-[#e8dfcd]' : index % 3 === 1 ? 'bg-[#e1e5df]' : 'bg-[#e8dadd]'} p-3 backdrop-blur md:w-52 md:p-4`}
              >
                <div className="mb-6 flex items-center justify-between"><Send className="size-3.5 text-[#7b2837]/70" /><span className="font-mono text-[8px] text-[#243f32]/35">0{index + 1}</span></div>
                <p className="text-sm font-medium">{niche}</p><p className="mt-1 font-mono text-[9px] text-black/40">via {channel}</p>
              </motion.div>
            )
          })}
          <svg className="pointer-events-none absolute inset-0 size-full opacity-25" viewBox="0 0 1200 650" preserveAspectRatio="none" aria-hidden="true">
            {['M120 90 Q420 210 600 325','M1080 80 Q800 200 600 325','M80 340 Q360 340 600 325','M1120 330 Q850 350 600 325','M230 610 Q430 450 600 325','M1000 620 Q770 460 600 325'].map((path) => (
              <motion.path key={path} d={path} fill="none" stroke="#7b2837" strokeWidth="1" strokeDasharray="5 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
            ))}
          </svg>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-2xl leading-tight tracking-[-0.035em] text-black/80 md:text-4xl">Hundreds of messages. Rewritten offers. Tested niches. Plenty of silence.</p>
          <p className="mt-7 text-sm leading-7 text-black/50 md:text-base">The result was not a neat success story. It was better judgment: attention, trust and demand are product problems too.</p>
        </Reveal>
      </div>
    </section>
  )
}

function SpeakBillStory() {
  const bars = [20, 42, 66, 34, 78, 52, 88, 40, 70, 30, 58, 24, 76, 44, 62, 28]
  return (
    <section className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <Eyebrow>Current direction · products</Eyebrow>
          <h2 className="max-w-2xl text-[clamp(2.65rem,6.5vw,7rem)] font-medium leading-[0.92] tracking-[-0.05em]">Products can create their own signals.</h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-black/58">
            SpeakBill converts spoken work into structured invoices. More importantly, it showed a different kind of traction: people could discover, enter and explore the product without a direct conversation first.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Voice → structure', 'Real user signals', 'Built for leverage'].map((item) => <span key={item} className="rounded-full border border-black/15 px-3 py-2 font-mono text-[9px] uppercase tracking-wider">{item}</span>)}
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="absolute -right-4 -top-8 rotate-6 font-mono text-xs text-black/45 md:-right-8">say it. send it. →</div>
          <div className="rounded-[2rem] border border-black/15 bg-white/70 p-4 shadow-[0_40px_90px_rgba(42,43,37,0.12)] md:p-7">
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <div><p className="font-medium">New invoice</p><p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-black/40">SpeakBill / listening</p></div>
              <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="grid size-11 place-items-center rounded-full bg-[#7b2837] text-white"><MessageCircle className="size-4" /></motion.div>
            </div>
            <div className="my-12 flex h-28 items-center justify-center gap-1.5 md:my-16">
              {bars.map((height, index) => (
                <motion.span key={index} className="w-1.5 rounded-full bg-[#263d54]/70" animate={{ height: [`${Math.max(12, height / 2)}%`, `${height}%`, `${Math.max(12, height / 2)}%`] }} transition={{ duration: 0.85 + (index % 4) * 0.12, repeat: Infinity, ease: 'easeInOut' }} />
              ))}
            </div>
            <div className="space-y-3 border-t border-black/10 pt-5">
              {[['Customer', 'Northstar Studio'], ['Service', 'Product strategy workshop'], ['Total', 'RM 2,400.00']].map(([label, value], index) => (
                <motion.div key={label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 + index * 0.13 }} className="flex items-center justify-between text-sm"><span className="text-black/45">{label}</span><span className="font-medium">{value}</span></motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function GeographyStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const mapRotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.04, 1.12])
  const mapY = useTransform(scrollYProgress, [0, 1], [80, -70])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
      <motion.div style={{ rotate: mapRotate, scale: mapScale, y: mapY }} className="absolute -right-[18%] top-[7%] w-[78vw] max-w-[1050px] opacity-[0.17] mix-blend-multiply md:-right-[9%] md:top-[-12%] md:w-[58vw]">
        <Image src="/archive/globe-map-1900.jpg" alt="" aria-hidden="true" width={1530} height={1429} className="size-full rounded-full object-cover grayscale sepia-[0.35]" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f1ecdf_0%,rgba(241,236,223,0.92)_35%,rgba(241,236,223,0.28)_72%,#f1ecdf_100%)]" />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal><Eyebrow>Built across places</Eyebrow><h2 className="text-[clamp(2.6rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.05em]">Different places.<br />Same curiosity.</h2></Reveal>
          <Reveal className="lg:pt-20"><p className="max-w-2xl text-xl leading-9 tracking-[-0.02em] text-[#243f32]/68 md:text-2xl md:leading-10">Born in Sudan and raised across Saudi Arabia, Sudan, Türkiye and Malaysia. I study Information Systems at Universiti Malaya and learn fastest by building things that have to work outside a classroom.</p></Reveal>
        </div>

        <Reveal className="relative mt-20 md:mt-28">
          <svg className="absolute left-0 top-2 h-14 w-full overflow-visible" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M40 55 C190 0 300 75 440 32 S720 64 950 20" fill="none" stroke="#7b2837" strokeWidth="2" strokeDasharray="4 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} /></svg>
          <div className="relative grid grid-cols-2 gap-y-14 pt-14 md:grid-cols-4">
            {[['Sudan','Origin'],['Saudi Arabia','Operations'],['Türkiye','Growing up'],['Kuala Lumpur','Building now']].map(([place, note], index) => <div key={place} className={index ? 'md:pl-8' : ''}><span className="mb-4 block size-2.5 rounded-full border-2 border-[#7b2837]/70 bg-[#f1ecdf]" /><p className="font-medium">{place}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#243f32]/50">{note}</p></div>)}
          </div>
        </Reveal>
        <p className="mt-14 font-mono text-[7px] uppercase tracking-[0.14em] text-[#243f32]/28">Archival map: Library of Congress, Geography and Map Division · 1900</p>
      </div>
    </section>
  )
}

export function PortfolioStory() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[78%] bg-[url('/archive/plywood-cc0.jpg')] bg-cover opacity-[0.075] mix-blend-multiply [mask-image:linear-gradient(to_right,transparent,black_32%,transparent)]" />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <Eyebrow>The pattern I kept seeing</Eyebrow>
            <h2 className="max-w-xl text-[clamp(2.65rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">Information everywhere. A system nowhere.</h2>
            <p className="mt-8 max-w-md text-base leading-8 text-[#243f32]/62">Inventory, hospitality, property and workshop work showed me the same pattern: people spending their day manually joining information that already existed.</p>
          </Reveal>
          <OperationalDesk />
        </div>
        <div className="relative mx-auto mt-16 flex max-w-[1380px] rotate-[-1deg] overflow-hidden border-y border-[#243f32]/15 py-4 font-mono text-[10px] uppercase tracking-[0.17em] text-[#243f32]/55">
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="flex min-w-max gap-10 pr-10">
            {[...Array(2)].flatMap(() => ['Inventory', 'Hospitality', 'Property', 'Workshops', 'Customer service', 'Software', 'Products', 'Distribution']).map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-10">{item}<span className="text-[#a1814f]">✦</span></span>)}
          </motion.div>
        </div>
      </section>

      <TeraMotorsStory />
      <VantLaunchStory />
      <SpeakBillStory />

      <section id="projects" className="border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
        <div className="mx-auto max-w-[1380px]">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><Eyebrow>Other things shipped</Eyebrow><h2 className="text-[clamp(2.65rem,6vw,6rem)] font-medium leading-none tracking-[-0.05em]">The workbench.</h2></div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium">View the full archive <ChevronRight className="size-4" /></Link>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {archiveProjects.map((project, index) => (
              <motion.a key={project.title} href={project.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 35, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.09 }} className="group border border-black/12 bg-white/45 p-3">
                <div className="overflow-hidden bg-[#deded9]"><Image src={project.image} alt={project.title} width={1920} height={960} className="aspect-[1.25] object-cover object-left transition-transform duration-700 group-hover:scale-[1.035]" /></div>
                <div className="flex items-end justify-between p-3 pt-5"><div><p className="text-lg font-medium">{project.title}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-black/42">{project.type}</p></div><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <GeographyStory />

      <section className="border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
        <div className="mx-auto max-w-[1380px]">
          <Reveal><Eyebrow>How I work</Eyebrow><h2 className="max-w-4xl text-[clamp(2.65rem,6vw,6rem)] font-medium leading-[0.96] tracking-[-0.05em]">A few rules earned through doing.</h2></Reveal>
          <div className="mt-16 border-t border-black/12">
            {principles.map(([number, title, description]) => (
              <motion.div key={number} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="group grid gap-5 border-b border-black/12 py-7 md:grid-cols-[0.15fr_0.75fr_1.1fr] md:items-center md:py-9">
                <span className="font-mono text-[10px] text-black/45">{number}</span><h3 className="text-xl font-medium tracking-[-0.025em] transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">{title}</h3><p className="max-w-lg text-sm leading-6 text-black/48">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-28 text-[#172019] md:px-10 md:py-40">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} className="absolute -right-32 -top-32 size-[34rem] rounded-full border border-black/10"><div className="absolute inset-16 rounded-full border border-black/10"><div className="absolute inset-16 rounded-full border border-black/10" /></div></motion.div>
        <div className="relative mx-auto max-w-[1380px]">
          <Reveal><Eyebrow>Start a conversation</Eyebrow><h2 className="max-w-6xl break-words text-[clamp(2.75rem,8vw,9rem)] font-medium leading-[0.9] tracking-[-0.055em]">Building something operationally difficult?</h2></Reveal>
          <Reveal className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-black/55">I&apos;m always interested in thoughtful products, difficult workflows and people who care about making useful things.</p>
            <a href="mailto:almonzer@almonzerfadl.com" className="group flex w-fit items-center gap-4 rounded-full bg-[#202020] px-6 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.03]">Email me <span className="grid size-7 place-items-center rounded-full bg-white text-black"><ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></a>
          </Reveal>
          <div className="mt-24 flex flex-col gap-5 border-t border-black/15 pt-6 font-mono text-[9px] uppercase tracking-[0.15em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
            <span>Almonzer Fadl · Kuala Lumpur</span><div className="flex gap-6"><a href="https://github.com/almonzer-fadl" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/almonzer-fadl-55648238b/" target="_blank" rel="noreferrer">LinkedIn</a><span>© 2026</span></div>
          </div>
        </div>
      </section>
    </>
  )
}
