'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                        <div className="space-y-6">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Email</p>
                                    <p>{contactInfo.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Phone</p>
                                    <p>{contactInfo.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center space-x-4 text-muted-foreground">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Location</p>
                                    <p>{contactInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-lg font-medium text-foreground mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                <a
                                    href={contactInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-secondary p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={contactInfo.social.linkedin}
                                    target={contactInfo.social.linkedin === '#' ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className={`bg-secondary p-3 rounded-full text-muted-foreground transition-all ${contactInfo.social.linkedin === '#' ? 'cursor-default opacity-50' : 'hover:bg-primary hover:text-primary-foreground'}`}
                                    aria-label="LinkedIn"
                                    onClick={(e) => {
                                        if (contactInfo.social.linkedin === '#') e.preventDefault();
                                    }}
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={contactInfo.social.twitter}
                                    target={contactInfo.social.twitter === '#' ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className={`bg-secondary p-3 rounded-full text-muted-foreground transition-all ${contactInfo.social.twitter === '#' ? 'cursor-default opacity-50' : 'hover:bg-primary hover:text-primary-foreground'}`}
                                    aria-label="Twitter"
                                    onClick={(e) => {
                                        if (contactInfo.social.twitter === '#') e.preventDefault();
                                    }}
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="What is this about?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
