"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".skills-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
      
      // Skills animation
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
      
      // Progress animation
      ScrollTrigger.create({
        trigger: ".skills-grid",
        start: "top 80%",
        onEnter: () => {
          document.querySelectorAll(".skill-progress").forEach((element) => {
            const el = element as HTMLElement;
            const value = el.dataset.value;
            gsap.to(el, {
              width: value,
              duration: 1.5,
              ease: "power3.out",
            });
          });
        },
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript/TypeScript", value: "95%" },
        { name: "React/Next.js", value: "90%" },
        { name: "Three.js/WebGL", value: "85%" },
        { name: "CSS/Tailwind", value: "90%" },
      ],
    },
    {
      title: "Animation & 3D",
      skills: [
        { name: "GSAP", value: "90%" },
        { name: "Framer Motion", value: "85%" },
        { name: "React Three Fiber", value: "80%" },
        { name: "Blender", value: "70%" },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", value: "85%" },
        { name: "Figma", value: "80%" },
        { name: "Design Systems", value: "85%" },
        { name: "Typography", value: "75%" },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Git/GitHub", value: "90%" },
        { name: "Responsive Design", value: "95%" },
        { name: "Performance Optimization", value: "85%" },
        { name: "Accessibility", value: "80%" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24"
    >
      <div className="container px-4 md:px-6">
        <h2 className="skills-heading text-3xl md:text-4xl font-bold text-center mb-6">
          My Skills
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I've worked with a variety of technologies and tools to create immersive web experiences.
          My expertise spans frontend development, 3D graphics, animation, and UI/UX design.
        </p>
        
        <div className="skills-grid grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <Card key={groupIndex} className="skill-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <div className="space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.value}</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="skill-progress h-full bg-primary rounded-full"
                          data-value={skill.value}
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}