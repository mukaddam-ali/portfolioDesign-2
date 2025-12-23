export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'AI/ML';
  status: 'Completed' | 'In Progress' | 'Planning';
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile';
  level: number;
  yearsOfExperience: number;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Freelance' | 'Volunteer';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  relevantCoursework: string[];
  achievements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
