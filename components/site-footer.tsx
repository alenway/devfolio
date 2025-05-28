"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-sm">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <p className="text-muted-foreground">
            A modern, interactive 3D portfolio showcasing my projects and skills as a web developer and designer.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-medium">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Social</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@example.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-medium">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to receive updates about new projects and blog posts.
            </p>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-4"
              )}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Three.js, and GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}