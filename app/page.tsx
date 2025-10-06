'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { 
  Code, 
  Database, 
  Shield, 
  Cloud, 
  Cpu, 
  Zap,
  GitBranch,
  Server,
  Type,
  Layers,
  FileText,
  Target,
  Heart,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Github,
  Star,
  Mail,
  Download,
  Linkedin,
  Twitter,
  Send
} from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// Skills data
const skills = [
  { name: 'React', icon: GitBranch, category: 'Frontend' },
  { name: 'Next.js', icon: Layers, category: 'Frontend' },
  { name: 'TypeScript', icon: Type, category: 'Language' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Python', icon: FileText, category: 'Language' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Security', icon: Shield, category: 'Cybersecurity' },
  { name: 'Cloud', icon: Cloud, category: 'DevOps' },
  { name: 'AI/LLM', icon: Cpu, category: 'AI' },
  { name: 'Git', icon: GitBranch, category: 'DevOps' },
  { name: 'Performance', icon: Zap, category: 'Frontend' },
  { name: 'Web Dev', icon: Code, category: 'Frontend' }
]

// Values data
const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Always exploring new technologies and approaches'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Delivering high-quality, maintainable code'
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'Working together to achieve great results'
  }
]

// Experience data
const experiences = [
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Family Business',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Designed and developed enterprise-level applications for real-world business operations.',
    achievements: [
      'Built scalable web applications using React and Node.js',
      'Implemented secure authentication systems',
      'Optimized database performance and queries'
    ]
  },
  {
    type: 'education',
    title: 'Electrical & Electronics Engineering',
    company: 'University',
    location: 'Cairo, Egypt',
    period: '2020 - 2024',
    description: 'Comprehensive study of electrical systems, electronics, and engineering principles.',
    achievements: [
      'Solid academic foundation with hands-on application',
      'Project-based learning with real-world applications',
      'Graduating in 4 months with strong technical background'
    ]
  }
]

// Projects data
const projects = [
  {
    title: 'Enterprise Software Suite',
    description: 'Comprehensive business management system with real-time analytics and reporting.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/username/project1',
    live: 'https://project1.com',
    featured: true
  },
  {
    title: 'FADL Branding System',
    description: 'Professional logo design and brand identity created at age 16.',
    tech: ['Design', 'Branding', 'Identity', 'Adobe Creative Suite'],
    github: null,
    live: null,
    featured: true
  },
  {
    title: 'Jazz 2.0 AI Assistant',
    description: 'Personal AI assistant with memory, speech recognition, and internet capabilities.',
    tech: ['AI/ML', 'Python', 'Speech Recognition', 'LLM'],
    github: 'https://github.com/username/jazz-ai',
    live: null,
    featured: false
  }
]

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-black"></div>
        
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Image
              src={theme === 'light' ? '/logos/logoBlackTextNoBg.png' : '/logos/logoWhiteTextNoBg.png'}
              alt="FADL Logo"
              width={180}
              height={180}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-normal mb-6 text-black dark:text-white"
          >
            Almonzer Fadl
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Electrical & Electronics Engineering Student | Software Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-black dark:bg-white rounded-full">
              <div className="w-3 h-3 bg-white dark:bg-black rounded-full"></div>
              <span className="text-sm font-medium text-white dark:text-black">Available for work</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-black dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I&apos;m an Electrical & Electronics Engineering student and a software developer building enterprise-level software solutions. With a passion for technology and innovation, I create digital experiences that make a difference.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white dark:text-black" />
                </div>
                <h4 className="text-lg font-normal text-black dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-white dark:text-black" />
                </div>
                <h3 className="font-normal text-sm text-black dark:text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
          >
            Experience & Education
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-6 h-6 text-white dark:text-black" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-white dark:text-black" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="mb-4">
                        <h3 className="text-xl font-normal text-black dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-normal text-black dark:text-white mb-2 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                              <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-video bg-black dark:bg-white flex items-center justify-center relative overflow-hidden">
                    <span className="text-white dark:text-black text-sm font-normal relative z-10">Project Image</span>
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-20">
                        <div className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-black text-black dark:text-white rounded-full text-xs font-normal border border-gray-200 dark:border-gray-800">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-normal text-black dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-xs font-normal"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs font-normal"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-normal"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-normal text-black dark:text-white mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-base font-normal text-black dark:text-white">almonzerfadl@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-base font-normal text-black dark:text-white">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 p-4 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-normal"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
                
                <a
                  href="mailto:almonzerfadl@gmail.com"
                  className="flex items-center justify-center gap-2 p-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-normal"
                >
                  <Send className="w-4 h-4" />
                  Email
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-normal text-black dark:text-white mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/almonzerfadl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/almonzerfadl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a
                    href="https://twitter.com/almonzerfadl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}