'use client';

import { useQuery } from '@tanstack/react-query';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experiences } from '@/lib/data';
import type { Experience } from '@/types';

async function fetchExperiences(): Promise<Experience[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return experiences;
}

export function Experience() {
  const { data: experiencesData, isLoading, error } = useQuery({
    queryKey: ['experiences'],
    queryFn: fetchExperiences,
    initialData: experiences,
  });

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Freelance':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Volunteer':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (error) {
    return (
      <section id="experience" className="py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-muted-foreground">Error loading experience. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and impact I&apos;ve made in various roles
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border animate-pulse">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="h-6 bg-muted rounded w-20 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                  <div className="h-3 bg-muted rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiencesData?.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2"></div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <div className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                      {/* Header */}
                      <div className={`mb-4 ${
                        index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">
                            {experience.title}
                          </h3>
                        </div>
                        
                        <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <span className="font-medium text-foreground">
                            {experience.company}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(experience.type)}`}>
                            {experience.type}
                          </span>
                        </div>

                        <div className={`flex items-center gap-4 text-sm text-muted-foreground ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
