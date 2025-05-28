import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Loader } from '@/components/loader';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Interactive 3D Portfolio',
  description: 'A modern, interactive 3D portfolio showcasing projects and skills',
  keywords: ['portfolio', '3D', 'web development', 'interactive', 'developer'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'Interactive 3D Portfolio',
    description: 'A modern, interactive 3D portfolio showcasing projects and skills',
    siteName: 'Interactive 3D Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive 3D Portfolio',
    description: 'A modern, interactive 3D portfolio showcasing projects and skills',
    creator: '@yourusername',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Loader />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}