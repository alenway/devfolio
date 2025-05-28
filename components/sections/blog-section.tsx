"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".blog-card", {
        scrollTrigger: {
          trigger: ".blog-grid",
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

  const posts = [
    {
      title: "Creating Immersive 3D Web Experiences",
      excerpt: "Explore the latest techniques in Three.js and WebGL for building engaging 3D websites.",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
      date: "March 15, 2024",
    },
    {
      title: "The Future of Web Animation",
      excerpt: "Discover how GSAP and Framer Motion are revolutionizing web animations.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      date: "March 10, 2024",
    },
    {
      title: "Optimizing 3D Performance",
      excerpt: "Learn best practices for optimizing 3D graphics performance in web applications.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      date: "March 5, 2024",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Insights and tutorials about 3D web development, animations, and creative coding.
            </p>
          </div>
          
          <Button variant="outline" className="gap-2 mt-4 md:mt-0">
            View All Posts
            <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="blog-grid grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="blog-card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="space-y-2">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-bold">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="px-0">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}