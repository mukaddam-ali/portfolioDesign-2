'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroContent } from '@/lib/data';
import Image from 'next/image';

export function Hero() {
  const isVisible = true;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-2 ring-primary/20">
                <Image
                  src="/Logo.jpeg"
                  alt="Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover dark:invert"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {heroContent.title}
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              {heroContent.subtitle}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                {heroContent.ctaButtons.primary.text}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
              >
                {heroContent.ctaButtons.secondary.text}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href={heroContent.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={heroContent.socialLinks.linkedin}
                target={heroContent.socialLinks.linkedin === '#' ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-colors p-2 rounded-full ${heroContent.socialLinks.linkedin === '#' ? 'cursor-default opacity-50' : 'hover:text-primary hover:bg-primary/10'}`}
                aria-label="LinkedIn"
                onClick={(e) => {
                  if (heroContent.socialLinks.linkedin === '#') e.preventDefault();
                }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={heroContent.socialLinks.email}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div>
              <svg
                className="w-6 h-6 mx-auto text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
