import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GithubSection } from "@/components/sections/github-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <GithubSection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}