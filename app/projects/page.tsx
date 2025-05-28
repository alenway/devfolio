"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(
    new Set(projects.flatMap((project) => project.categories))
  );

  const filteredProjects = filter
    ? projects.filter((project) => project.categories.includes(filter))
    : projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container py-12 space-y-8 max-w-7xl mx-auto px-4 md:px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-3xl">
          Browse through my portfolio of projects. Each project showcases different skills and technologies.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pb-6">
        <Badge
          className={`cursor-pointer text-sm px-4 py-2 ${
            filter === null ? "bg-primary" : "bg-secondary"
          }`}
          onClick={() => setFilter(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            className={`cursor-pointer text-sm px-4 py-2 ${
              filter === category ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}