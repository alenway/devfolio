"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";
import { timelineData } from "@/lib/data";

export default function AboutPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    timeline.fromTo(
      ".timeline-item",
      { opacity: 0.3, x: -50 },
      { opacity: 1, x: 0, stagger: 0.5 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Get to know my background, skills, and journey.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            I'm a passionate developer focused on creating beautiful, functional, and accessible web applications. 
            With expertise in modern frontend frameworks and a keen eye for design, I strive to build immersive digital 
            experiences that solve real problems.
          </p>
          <p>
            My journey in technology began with a curiosity about how things work, which led me to explore various 
            programming languages and frameworks. Over the years, I've honed my skills in JavaScript/TypeScript, 
            React, Next.js, and Three.js, allowing me to create dynamic web applications with interactive 3D elements.
          </p>
        </div>

        <Separator className="my-8" />

        <h2 className="text-3xl font-bold">My Journey</h2>
        
        <div className="timeline space-y-12 my-12 relative before:absolute before:inset-0 before:left-[15px] before:h-full before:w-[2px] before:bg-border sm:before:left-1/2 before:-translate-x-1/2 before:top-0">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item relative ${
                index % 2 === 0 
                  ? "sm:ml-auto sm:pl-8 pl-10" 
                  : "sm:mr-auto sm:pr-8 pl-10 sm:pl-0"
              } w-full sm:w-[calc(50%-20px)]`}
            >
              <div className="absolute w-4 h-4 rounded-full bg-primary left-[13px] top-1.5 sm:left-auto sm:right-[calc(100%+16px)] sm:even:left-[calc(100%+16px)] sm:even:right-auto"></div>
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <time className="text-sm font-medium text-muted-foreground">{item.date}</time>
                <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {[
            "JavaScript", "TypeScript", "React", "Next.js", "Three.js", 
            "GSAP", "Tailwind CSS", "Node.js", "Git", "Responsive Design", 
            "Accessibility", "Performance Optimization", "UI/UX Design", 
            "3D Modeling", "WebGL"
          ].map((skill) => (
            <div key={skill} className="rounded-lg border bg-card p-3 text-center shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}