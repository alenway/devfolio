"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="py-24 bg-primary"
    >
      <div className="container px-4 md:px-6">
        <div className="newsletter-content max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80">
              Subscribe to my newsletter for the latest articles, tutorials, and updates about creative web development.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
            <Button variant="secondary" className="gap-2">
              <Mail size={16} />
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-primary-foreground/60">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}