"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".projects-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      
      // Cards animation
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Only show 3 featured projects on the home page
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4 mb-6 md:mb-0">
            <h2 className="projects-heading text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my recent work. Each project presents unique challenges and solutions.
            </p>
          </div>
          
          <Button asChild variant="outline" className="gap-2 w-full md:w-auto">
            <Link href="/projects">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}