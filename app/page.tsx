"use client";

import { HeroStory } from '@/components/sections/hero-story'
import { PortfolioStory } from '@/components/sections/portfolio-story'
import { CinematicLayer } from '@/components/ui/cinematic-layer'


export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#f1ecdf] text-[#172019] relative">
      <CinematicLayer />
      <HeroStory />
      <PortfolioStory />
    </main>
  )
}
