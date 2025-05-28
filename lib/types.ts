export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  featured: boolean;
  demo?: string;
  github?: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}