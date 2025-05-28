"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      
      // Content animation with stagger
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      });
      
      // Image animation
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      
      // Stats animation
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <h2 className="about-heading text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-image relative aspect-square rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
              alt="Developer working"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="about-content space-y-6">
            <h3 className="text-2xl font-bold">
              Creative Developer with a passion for 3D and interactive experiences
            </h3>
            
            <p className="text-muted-foreground">
              I'm a front-end developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, human-centered products while exploring 
              the possibilities of 3D on the web.
            </p>
            
            <p className="text-muted-foreground">
              With expertise in React, Three.js, and GSAP, I create immersive web experiences 
              that combine stunning visuals with smooth interactions. I'm passionate about the 
              intersection of design and technology.
            </p>
            
            <div className="pt-4">
              <Button asChild className="gap-2">
                <Link href="/about">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="stats-section mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}