export const portfolioData = {
    personal: {
      name: 'Almonzer Fadl',
      title: 'Electrical & Electronics Engineering Student | Software Developer',
      location: 'Cairo, Egypt',
      email: 'almonzerfadl@gmail.com',
      availability: true,
      bio: 'I\'m an Electrical & Electronics Engineering student and a software developer building enterprise-level software solutions. Alongside my technical career, I pursue diverse interests that fuel creativity and balance: jazz music, cinema, literature, coffee culture, chess, fitness, and financial freedom.'
    },
    skills: [
      { name: 'React', category: 'Frontend', level: 'Advanced' },
      { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
      { name: 'TypeScript', category: 'Language', level: 'Advanced' },
      { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
      { name: 'PostgreSQL', category: 'Database', level: 'Intermediate' },
      { name: 'AI/LLM', category: 'AI', level: 'Beginner' }
    ],
    projects: [
      {
        id: 1,
        title: 'Enterprise Software Suite',
        description: 'Comprehensive business management system with real-time analytics and reporting.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        image: '/project1.jpg',
        github: 'https://github.com/username/project1',
        live: 'https://project1.com',
        featured: true,
        category: 'Web Application'
      },
      {
        id: 2,
        title: 'FADL Branding System',
        description: 'Professional logo design and brand identity created at age 16.',
        tech: ['Design', 'Branding', 'Identity'],
        image: '/project2.jpg',
        github: null,
        live: null,
        featured: true,
        category: 'Design'
      }
    ],
    experience: [
      {
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
  }