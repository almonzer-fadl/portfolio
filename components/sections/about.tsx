'use client'

export function About() {
  return (
    <div>
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl font-instrument italic">About me</p>
      <div className="flex flex-col gap-4 py-3 sm:py-4 tracking-wide text-muted-foreground">
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base">
          I&apos;m a passionate <span className="relative inline-block cursor-pointer font-bold text-foreground">software developer</span> and <span className="relative inline-block font-bold text-foreground">electrical engineering student</span> based in <span className="relative inline-block cursor-pointer font-bold text-foreground">Egypt</span>. With a deep love for creating digital experiences that matter, I specialize in building modern, interactive web applications using cutting-edge technologies.
        </p>
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base">
          My journey combines the analytical thinking from <span className="relative inline-block font-bold text-foreground">electrical engineering</span> with the creative problem-solving of <span className="relative inline-block font-bold text-foreground">software development</span>. I&apos;m particularly passionate about <span className="relative inline-block font-bold text-foreground">React.js</span>, <span className="relative inline-block font-bold text-foreground">Next.js</span>, <span className="relative inline-block font-bold text-foreground">TypeScript</span>, and <span className="relative inline-block font-bold text-foreground">TailwindCSS</span> - tools that allow me to craft beautiful, performant, and user-friendly applications.
        </p>
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base">
          When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or working on personal projects that solve real-world problems. I believe in continuous learning and staying up-to-date with the latest trends in web development to deliver the best possible solutions.
        </p>
      </div>
    </div>
  )
}
