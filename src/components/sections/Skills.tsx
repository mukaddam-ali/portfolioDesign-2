'use client';

import { useQuery } from '@tanstack/react-query';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';

async function fetchSkills(): Promise<Skill[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return skills;
}

export function Skills() {
  const { data: skillsData, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
    initialData: skills,
  });

  const skillsByCategory = skillsData?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>) || {};

  const categoryColors = {
    'Frontend': 'bg-blue-500',
    'Backend': 'bg-green-500',
    'Database': 'bg-purple-500',
    'DevOps': 'bg-orange-500',
    'Mobile': 'bg-pink-500',
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  if (error) {
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Skills</h2>
            <p className="text-muted-foreground">Error loading skills. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border animate-pulse">
                <div className="h-6 bg-muted rounded w-1/2 mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j}>
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-muted rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]} mr-3`}></div>
                  <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          <span className="text-xs text-muted-foreground">({skill.yearsOfExperience}y)</span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Skills Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{skillsData?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Total Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {Object.keys(skillsByCategory).length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {skillsData?.filter(s => s.level >= 90).length || 0}
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {Math.max(...(skillsData?.map(s => s.yearsOfExperience) || [0]))}y
                </div>
                <div className="text-sm text-muted-foreground">Max Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
