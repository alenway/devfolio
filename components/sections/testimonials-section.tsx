"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
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

  const testimonials = [
    {
      text: "An exceptional developer who brings creativity and technical excellence to every project. The 3D elements they implemented were stunning!",
      author: "Sarah Johnson",
      role: "Creative Director",
    },
    {
      text: "Working with them was a game-changer for our website. Their attention to detail and innovative approach set them apart.",
      author: "Michael Chen",
      role: "Tech Lead",
    },
    {
      text: "The interactive elements and animations they created brought our vision to life. Highly recommended for any creative project!",
      author: "Emma Davis",
      role: "Product Manager",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground">
            What others say about working with me
          </p>
        </div>
        
        <div className="testimonials-grid grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary opacity-50" />
                <p className="text-lg">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}