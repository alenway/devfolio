"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, Star, GitFork, GitBranch } from "lucide-react";

export function GithubSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".github-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      
      // Content animation
      gsap.from(".github-content > *", {
        scrollTrigger: {
          trigger: ".github-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
      
      // Graph animation
      gsap.from(".github-graph", {
        scrollTrigger: {
          trigger: ".github-graph",
          start: "top 85%",
        },
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "power3.out",
      });
      
      // Repository cards animation
      gsap.from(".repo-card", {
        scrollTrigger: {
          trigger: ".repos-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Mock repository data
  const repositories = [
    {
      name: "3D-Portfolio",
      description: "Interactive 3D portfolio website built with React Three Fiber and GSAP",
      stars: 34,
      forks: 12,
      language: "TypeScript",
      languageColor: "#3178c6",
    },
    {
      name: "WebGL-Experiments",
      description: "Collection of creative WebGL and Three.js experiments",
      stars: 27,
      forks: 8,
      language: "JavaScript",
      languageColor: "#f7df1e",
    },
    {
      name: "react-animation-library",
      description: "Lightweight animation library for React components",
      stars: 52,
      forks: 18,
      language: "TypeScript",
      languageColor: "#3178c6",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="github"
      className="py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="github-heading text-3xl md:text-4xl font-bold mb-4">
            GitHub Contributions
          </h2>
          <p className="text-muted-foreground">
            Check out my open-source projects and contributions on GitHub.
          </p>
        </div>
        
        <div className="github-content space-y-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contribution Graph</h3>
              <p className="text-muted-foreground">A snapshot of my GitHub activity over the past year</p>
            </div>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Github size={16} />
              <span>@yourusername</span>
            </a>
          </div>
          
          <div className="github-graph bg-card rounded-lg border p-6 shadow-sm">
            <div className="text-center text-muted-foreground mb-6">
              1,256 contributions in the last year
            </div>
            
            <div className="grid grid-cols-53 gap-1 h-24">
              {Array.from({ length: 53 }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, dayIndex) => {
                    // Generate random activity level
                    const activityLevel = Math.floor(Math.random() * 5);
                    let bgColor;
                    
                    switch (activityLevel) {
                      case 0:
                        bgColor = "bg-muted";
                        break;
                      case 1:
                        bgColor = "bg-chart-1/20";
                        break;
                      case 2:
                        bgColor = "bg-chart-1/40";
                        break;
                      case 3:
                        bgColor = "bg-chart-1/60";
                        break;
                      case 4:
                        bgColor = "bg-chart-1/80";
                        break;
                      default:
                        bgColor = "bg-muted";
                    }
                    
                    return (
                      <div
                        key={dayIndex}
                        className={`w-2 h-2 rounded-sm ${bgColor}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Featured Repositories</h3>
            
            <div className="repos-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              {repositories.map((repo, index) => (
                <Card key={index} className="repo-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <GitBranch size={16} className="text-muted-foreground" />
                      <span className="font-medium text-base text-primary">{repo.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: repo.languageColor }}
                        />
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button
                asChild
                variant="outline"
                className="gap-2"
              >
                <a
                  href="https://github.com/yourusername?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  View All Repositories
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}