'use client'

export function About() {
  return (
    <div>
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl font-instrument italic">About me</p>
      <div className="flex flex-col gap-2 py-3 sm:py-4 tracking-wide text-muted-foreground">
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base">
          Software developer based in <span className="relative inline-block cursor-pointer font-bold text-foreground">Egypt</span>, specializing in interactive web apps with <span className="relative inline-block font-bold text-foreground">React.js</span>, <span className="relative inline-block font-bold text-foreground">Next.js</span>, <span className="relative inline-block font-bold text-foreground">TypeScript</span>, and <span className="relative inline-block font-bold text-foreground">TailwindCSS</span>.
        </p>
      </div>
    </div>
  )
}
