'use client'

export function Experience() {
  return (
    <div>
      <p className="font-bold font-instrument italic text-2xl sm:text-3xl md:text-4xl">Experiences</p>
      <div className="grid grid-cols-1 gap-2 py-3 sm:py-4 text-xs sm:text-sm leading-6 sm:leading-7 sm:grid-cols-[0.3fr_1fr] sm:gap-4">
        <p className="min-w-fit opacity-80">2022 - Present</p>
        <div>
          <p className="mb-3">
            <a target="_blank" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-fit px-0 py-0 font-bold after:bottom-[-0.1rem]" href="#">
              Family Business
            </a> | Software Developer
          </p>
          <ul className="list-['-__'] text-pretty">
            <li>Designed and developed enterprise-level applications for real-world business operations.</li>
            <li><b>Built scalable web applications</b> using React and Node.js</li>
            <li><b>Implemented secure authentication systems</b> for user management</li>
            <li><b>Optimized database performance</b> and queries for better efficiency</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 py-3 sm:py-4 text-xs sm:text-sm leading-6 sm:leading-7 sm:grid-cols-[0.3fr_1fr] sm:gap-4">
        <p className="min-w-fit opacity-80">2020 - 2024</p>
        <div>
          <p className="mb-3">
            <a target="_blank" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bg-primary after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 h-fit px-0 py-0 font-bold after:bottom-[-0.1rem]" href="#">
              University
            </a> | Electrical & Electronics Engineering
          </p>
          <ul className="list-['-__'] text-pretty">
            <li>Comprehensive study of electrical systems, electronics, and engineering principles.</li>
            <li><b>Solid academic foundation</b> with hands-on application</li>
            <li><b>Project-based learning</b> with real-world applications</li>
            <li><b>Graduating in 4 months</b> with strong technical background</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
