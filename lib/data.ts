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
  Heart
} from 'lucide-react'

// Skills data
export const skills = [
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
export const values = [
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
export const experiences = [
  {
    type: 'work' as const,
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
    type: 'education' as const,
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
export const projects = [
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

// Technologies data
export const technologies = [
  { name: 'HTML 5', icon: 'html' },
  { name: 'CSS 3', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Git', icon: 'git' },
  { name: 'PHP', icon: 'php' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Vite', icon: 'vite' }
]

// Extended projects for projects page
export const allProjects = [
  ...projects,
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/username/ecommerce',
    live: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/taskapp',
    live: null,
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    tech: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    github: 'https://github.com/username/weather',
    live: 'https://weather-demo.com',
    featured: false
  }
]