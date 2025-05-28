"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card 
        className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48">
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{project.description}</p>
        </CardContent>
        
        <CardFooter className="flex justify-between gap-2 pt-2">
          {project.demo && (
            <Button asChild size="sm\" variant="default\" className="flex-1">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}