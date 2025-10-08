'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Experience() {
  return (
    <div>
      <p className="font-bold font-instrument italic text-2xl sm:text-3xl md:text-4xl mb-6">Experience</p>
      
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="work" className="mt-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-0">
              <ul className="ml-10 border-l">
                <li className="relative ml-10 py-4">
                  <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white dark:bg-black border">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                      <div className="aspect-square h-full w-full bg-background object-contain flex items-center justify-center text-xs font-bold">
                        FB
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-muted-foreground">
                      <span>2022</span><span> - </span><span>Present</span>
                    </time>
                    <h2 className="font-semibold leading-none">Family Business</h2>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                    <ul className="ml-4 list-outside list-disc">
                      <li className="prose pr-8 text-sm dark:prose-invert">Designed and developed enterprise-level applications for real-world business operations</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Built scalable web applications using React and Node.js</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Implemented secure authentication systems for user management</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Optimized database performance and queries for better efficiency</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="mt-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-0">
              <ul className="ml-10 border-l">
                <li className="relative ml-10 py-4">
                  <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white dark:bg-black border">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                      <div className="aspect-square h-full w-full bg-background object-contain flex items-center justify-center text-xs font-bold">
                        UNI
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-muted-foreground">
                      <span>2020</span><span> - </span><span>2024</span>
                    </time>
                    <h2 className="font-semibold leading-none">University</h2>
                    <p className="text-sm text-muted-foreground">Electrical & Electronics Engineering</p>
                    <ul className="ml-4 list-outside list-disc">
                      <li className="prose pr-8 text-sm dark:prose-invert">Comprehensive study of electrical systems, electronics, and engineering principles</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Solid academic foundation with hands-on application</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Project-based learning with real-world applications</li>
                      <li className="prose pr-8 text-sm dark:prose-invert">Graduating in 4 months with strong technical background</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}