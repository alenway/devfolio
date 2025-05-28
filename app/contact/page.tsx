"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Github as GitHub, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
            <p className="text-xl text-muted-foreground mt-2">
              I'd love to hear from you. Get in touch!
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert">
            <p>
              Whether you have a project in mind, a question about my work, or just want to say hello,
              I'm always open to new opportunities and conversations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail size={20} />
                <span>hello@example.com</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <GitHub size={20} />
                <span>github.com/yourusername</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span>linkedin.com/in/yourusername</span>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span>twitter.com/yourusername</span>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span>instagram.com/yourusername</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-card shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message..." 
                        className="min-h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}