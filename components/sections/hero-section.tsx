"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { HeroModel } from "@/components/three/hero-model";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Animate text elements
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
      
      tl.from(".reveal-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
      })
      .from(".reveal-button", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
      }, "-=0.5");
      
      // Scroll animation
      if (sectionRef.current && textRef.current) {
        gsap.to(textRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 150,
          opacity: 0.5,
        });
      }
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 w-full h-full z-10",
          "pointer-events-none select-none"
        )}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="touch-none"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <HeroModel />
        </Canvas>
      </div>

      <div
        ref={textRef}
        className="container relative z-20 flex flex-col items-center text-center px-4 py-24"
      >
        <h1 className="reveal-text text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Creative Developer & <br className="hidden md:block" />
          <span className="text-primary">3D Enthusiast</span>
        </h1>
        
        <p className="reveal-text text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
          Building immersive digital experiences with modern web technologies.
          Focused on interactive 3D websites and applications.
        </p>
        
        <div className="reveal-button flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/projects">
              View Projects
              <ArrowRight size={16} />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              Download Resume
              <Download size={16} />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mouse-pointer-2"
          >
            <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
          </svg>
        </div>
      </div>
    </section>
  );
}