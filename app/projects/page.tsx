'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { allProjects } from '@/lib/data'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { useTranslation } from 'react-i18next'

export default function ProjectsPage() {
  const { i18n } = useTranslation()

  return (
    <main className="min-h-screen bg-[#f1ecdf] text-[#172019]">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-black/15 bg-white/45 font-mono text-xs font-semibold">AF</span>
          <span className="hidden text-sm font-medium sm:block">Almonzer Fadl</span>
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/35 p-1 backdrop-blur-xl">
          <Link href="/" className="hidden rounded-full px-4 py-2 text-xs font-medium transition-colors hover:bg-white/60 sm:block">Home</Link>
          <LanguageSwitcher />
        </div>
      </header>

      <section className="px-5 pb-20 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-[1380px]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#243f32]/55"><span className="h-px w-7 bg-[#a1814f]" />Project archive · 2024—2026</div>
            <h1 className="max-w-5xl text-[clamp(3.1rem,10vw,10rem)] font-medium leading-[0.86] tracking-[-0.06em]">Things I&apos;ve<br /><span className="text-[#31513e]">made real.</span></h1>
            <div className="mt-12 flex flex-col justify-between gap-6 border-t border-black/12 pt-6 text-sm leading-7 text-black/55 md:flex-row">
              <p className="max-w-md">Products, internal systems and experiments. Some are polished, some are lessons, all of them shipped.</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">{allProjects.length.toString().padStart(2, '0')} entries</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto grid max-w-[1380px] gap-x-6 gap-y-16 md:grid-cols-2">
          {allProjects.map((project, index) => {
            const translated = i18n.language === 'ar' ? project.translations.ar : i18n.language === 'tr' ? project.translations.tr : null
            const title = translated?.title || project.title
            const description = translated?.description || project.description
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.75, delay: (index % 2) * 0.08 }}
                className={`${index % 3 === 0 ? 'md:col-span-2' : ''} group`}
              >
                <div className="relative overflow-hidden border border-[#243f32]/14 bg-[#e6dfd0] p-2 md:p-3">
                  <div className="absolute left-4 top-4 z-10 border border-[#a1814f]/30 bg-[#f5efdf] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-wider text-[#6f5730]">0{index + 1}</div>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={title}
                      width={1920}
                      height={960}
                      className={`${index % 3 === 0 ? 'aspect-[1.85]' : 'aspect-[1.35]'} w-full object-cover object-left transition duration-700 group-hover:scale-[1.025] group-hover:saturate-[1.08]`}
                    />
                  ) : <div className="aspect-[1.5] bg-[#d8d8d4]" />}
                </div>
                <div className="grid gap-5 pt-6 md:grid-cols-[1fr_1.2fr]">
                  <div><h2 className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">{title}</h2><div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[8px] uppercase tracking-[0.12em] text-black/40">{project.tech.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
                  <div><p className="text-sm leading-6 text-black/55">{description}</p><div className="mt-5 flex gap-4">{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium">Live product <ArrowUpRight className="size-3.5" /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}><Github className="size-4" /></a>}</div></div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <footer className="border-t border-[#243f32]/10 bg-[#f1ecdf] px-5 py-16 text-[#172019] md:px-10">
        <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/55">End of the shelf</p><p className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-5xl">The next one is in progress.</p></div>
          <Link href="/" className="flex w-fit items-center gap-2 rounded-full bg-[#243f32] px-5 py-3 text-sm font-medium text-[#f5efdf]"><ArrowLeft className="size-4" /> Back home</Link>
        </div>
      </footer>
    </main>
  )
}
