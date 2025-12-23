import {
  Project,
  Skill,
  Experience,
  Education,
  BlogPost,
} from '@/types';

export const skills: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    level: 95,
    yearsOfExperience: 3,
    icon: '⚛️',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 90,
    yearsOfExperience: 2,
    icon: '▲',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 90,
    yearsOfExperience: 2,
    icon: '📘',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 95,
    yearsOfExperience: 2,
    icon: '🎨',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 85,
    yearsOfExperience: 2,
    icon: '🟢',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 85,
    yearsOfExperience: 2,
    icon: '⚡',
  },
  {
    name: 'Python',
    category: 'Backend',
    level: 80,
    yearsOfExperience: 3,
    icon: '🐍',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 80,
    yearsOfExperience: 2,
    icon: '🐘',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 85,
    yearsOfExperience: 2,
    icon: '🍃',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    level: 75,
    yearsOfExperience: 1,
    icon: '🐳',
  },
  {
    name: 'Git',
    category: 'DevOps',
    level: 90,
    yearsOfExperience: 3,
    icon: '📦',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and Node.js, featuring product catalog, shopping cart, user authentication, order management, and Stripe payment integration.',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product catalog with search and filtering',
      'Shopping cart and checkout flow',
      'User authentication and profiles',
      'Order management and history',
      'Payment processing with Stripe',
      'Admin dashboard',
    ],
    githubUrl: 'https://github.com/mukaddam-ali',
    liveUrl: '#',
    imageUrl: '/images/ecommerce.jpg',
    category: 'Full Stack',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    longDescription:
      'A real-time task management application with team collaboration features, built with React, Firebase, and modern web technologies.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Create, edit, and delete tasks',
      'Real-time collaboration',
      'Team workspaces',
      'Task scheduling and reminders',
      'Progress tracking',
    ],
    githubUrl: 'https://github.com/mukaddam-ali',
    liveUrl: '#',
    imageUrl: '/images/taskapp.jpg',
    category: 'Frontend',
    status: 'Completed',
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'AI-powered content generation using OpenAI API',
    longDescription:
      'An intelligent content generation tool that uses OpenAI API to generate marketing copy, blog posts, and social media content with custom templates.',
    technologies: ['Next.js', 'OpenAI API', 'React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Multiple content templates',
      'AI-powered generation',
      'Content editing and refinement',
      'Export to multiple formats',
      'Usage analytics',
    ],
    githubUrl: 'https://github.com/mukaddam-ali',
    liveUrl: '#',
    imageUrl: '/images/ai-content.jpg',
    category: 'Full Stack',
    status: 'In Progress',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Junior Full Stack Developer',
    company: 'Tech Startup Inc.',
    location: 'Houston, TX',
    period: 'Jun 2023 - Present',
    type: 'Full-time',
    description:
      'Developing and maintaining full-stack web applications using Next.js and Node.js.',
    achievements: [
      'Built 5+ production-ready features using Next.js and React',
      'Improved app performance by 40% through code optimization',
      'Implemented automated testing suite with 85% coverage',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Frontend Development Intern',
    company: 'Digital Agency Co.',
    location: 'Houston, TX',
    period: 'Jan 2023 - May 2023',
    type: 'Internship',
    description:
      'Assisted in building responsive web interfaces for various client projects.',
    achievements: [
      'Developed 10+ landing pages using React and Tailwind CSS',
      'Reduced CSS bundle size by 35%',
      'Improved mobile responsiveness scores to 95+',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Sam Houston State University',
    location: 'Huntsville, TX',
    period: '2020 - 2024',
    gpa: '3.8',
    relevantCoursework: [
      'Data Structures',
      'Algorithms',
      'Database Systems',
      'Web Development',
      'Software Engineering',
    ],
    achievements: [
      'Dean\'s List all semesters',
      'President of Computer Science Club',
      'Hackathon winner - 2 times',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started-nextjs-15',
    excerpt:
      'Learn the latest features and improvements in Next.js 15 App Router',
    content: `# Getting Started with Next.js 15

Next.js 15 introduces powerful new features for building modern web applications...`,
    publishedAt: '2024-01-15',
    readingTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    featured: true,
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Essential TypeScript patterns and practices for production code',
    content: `# TypeScript Best Practices

Writing maintainable TypeScript code requires understanding key patterns...`,
    publishedAt: '2024-01-10',
    readingTime: '8 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    featured: true,
  },
];

export const contactInfo = {
  email: 'alialmoukaddam@gmail.com',
  phone: '+1 (214) 830-4727',
  location: 'Huntsville, TX',
  social: {
    github: 'https://github.com/mukaddam-ali',
    linkedin: '#',
    twitter: '#',
  },
};

export const heroContent = {
  title: 'Full Stack Developer',
  subtitle: 'SHSU Computer Science Student',
  description:
    'I build modern web applications with React, Next.js, and Node.js. Specializing in creating responsive, performant, and accessible digital experiences.',
  ctaButtons: {
    primary: { text: 'View My Work', href: '#projects' },
    secondary: { text: 'Get In Touch', href: '#contact' },
  },
  profileImage: '/images/profile.jpg',
  socialLinks: {
    github: 'https://github.com/mukaddam-ali',
    linkedin: '#',
    email: 'mailto:alialmoukaddam@gmail.com',
  },
};
