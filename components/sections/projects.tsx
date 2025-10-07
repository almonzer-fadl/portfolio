'use client'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <div>
      <div className="flex h-full flex-col py-8 sm:py-12">
        <p className="font-bold font-instrument italic text-2xl sm:text-3xl md:text-4xl">Projects</p>
        <div className="flex flex-col gap-6 sm:gap-8 py-6 sm:py-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex h-[250px] sm:h-[300px] md:h-[400px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden bg-accent-foreground/10 p-1.5 sm:p-2 outline outline-accent/90 dark:bg-transparent" style={{borderRadius: '18px'}}>
              <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]"></div>
              <div className="relative size-full overflow-hidden rounded-xl border border-border">
                <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]"></div>
                <div className="absolute inset-0 z-0 opacity-100 transition-all duration-500 group-hover:brightness-[0.8]" style={{background: `radial-gradient(circle at 50% 0%, ${index === 0 ? '#51fbfb' : index === 1 ? '#14f195' : '#64e'}, rgb(13, 1, 60))`}}></div>
                <div className="relative flex flex-col gap-2 sm:gap-4 px-4 sm:px-6 pb-2 pt-4 sm:pt-6 md:gap-2 md:px-8 md:pb-4 md:pt-8">
                  <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
                    <p className="font-instrument font-bold italic text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[rgba(255,255,255,0.2)_0px_-2px_10px]">{project.title}</p>
                    <div className="flex *:shadow-2xl">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <div key={i} className="-ml-1 sm:-ml-2 size-6 sm:size-8 rotate-3 transition-all group-hover:mx-1 sm:group-hover:mx-2 group-hover:ml-0 group-hover:rotate-0 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{tech.charAt(0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-xs sm:text-sm font-medium text-white md:text-justify">{project.description}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-24 sm:h-32 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">Project Preview</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-10 py-2 left-1/2 mx-auto -translate-x-1/2 px-0 text-base font-bold text-foreground" href="/projects">
          See more
        </a>
      </div>
    </div>
  )
}
