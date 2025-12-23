
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
