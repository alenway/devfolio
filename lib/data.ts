import { Project, TimelineItem } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "3D Interactive Portfolio",
    description: "A modern portfolio website with interactive 3D elements and animations using Three.js and GSAP.",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TypeScript", "Three.js", "GSAP", "Tailwind CSS"],
    categories: ["Web Development", "3D", "Animation"],
    featured: true,
    demo: "https://example.com",
    github: "https://github.com/yourusername/3d-portfolio"
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales reports.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Chart.js"],
    categories: ["Web Development", "Dashboard", "Full Stack"],
    featured: true,
    demo: "https://example.com",
    github: "https://github.com/yourusername/ecommerce-dashboard"
  },
  {
    id: "3",
    title: "Immersive 3D Product Viewer",
    description: "An interactive 3D product viewer that allows users to examine products from all angles with realistic lighting and materials.",
    image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Three.js", "React", "WebGL", "GLSL", "Framer Motion"],
    categories: ["3D", "Web Development", "E-commerce"],
    featured: true,
    demo: "https://example.com",
    github: "https://github.com/yourusername/3d-product-viewer"
  },
  {
    id: "4",
    title: "AR Furniture Visualizer",
    description: "An augmented reality application that allows users to visualize furniture in their space before purchasing.",
    image: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "AR.js", "Three.js", "JavaScript", "Redux"],
    categories: ["Mobile Development", "AR/VR", "3D"],
    featured: false,
    demo: "https://example.com",
    github: "https://github.com/yourusername/ar-furniture-visualizer"
  },
  {
    id: "5",
    title: "Interactive Data Visualization",
    description: "A data visualization platform that transforms complex datasets into interactive and engaging visualizations.",
    image: "https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["D3.js", "React", "TypeScript", "Node.js", "Express"],
    categories: ["Data Visualization", "Web Development", "Full Stack"],
    featured: false,
    demo: "https://example.com",
    github: "https://github.com/yourusername/interactive-data-viz"
  },
  {
    id: "6",
    title: "Generative Art Platform",
    description: "A platform for creating and sharing generative art pieces using algorithms and creative coding techniques.",
    image: "https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["P5.js", "JavaScript", "Canvas API", "WebGL", "React"],
    categories: ["Creative Coding", "Web Development", "Art"],
    featured: false,
    demo: "https://example.com",
    github: "https://github.com/yourusername/generative-art-platform"
  }
];

export const timelineData: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Senior Frontend Developer",
    description: "Leading the development of interactive web applications with 3D elements and complex animations at a creative agency.",
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer",
    description: "Developed responsive web applications and interactive user interfaces for various clients using React, Three.js, and GSAP.",
  },
  {
    date: "2019 - 2021",
    title: "Web Developer",
    description: "Built and maintained websites and web applications for clients across different industries using modern web technologies.",
  },
  {
    date: "2018 - 2019",
    title: "UI/UX Designer",
    description: "Created user interfaces and experiences for web and mobile applications, focusing on usability and visual appeal.",
  },
  {
    date: "2015 - 2018",
    title: "Computer Science Degree",
    description: "Studied Computer Science with a focus on web technologies and interactive media.",
  }
];