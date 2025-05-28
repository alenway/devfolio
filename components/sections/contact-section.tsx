"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".contact-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      
      // Content animation
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });
      
      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="contact-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="contact-content space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels, 
                and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                  hello@example.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  github.com/yourusername
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/yourusername
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Twitter className="h-5 w-5 text-primary" />
                <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  twitter.com/yourusername
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <Link href="/contact" passHref>
                <Button className="w-full gap-2">
                  Visit Contact Page
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="contact-form space-y-6 p-6 rounded-lg border bg-card shadow-sm">
            <h3 className="text-2xl font-bold">Send a Message</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="min-h-32" />
              </div>
              
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}