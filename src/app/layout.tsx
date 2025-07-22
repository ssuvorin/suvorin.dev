import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CursorFollower } from '@/components/CursorFollower';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | suvorin.dev',
    default: 'suvorin.dev',
  },
  description: 'Cutting-edge AI automation solutions. From chatbots to integrations, we build the future of business automation.',
  keywords: ['AI', 'automation', 'chatbots', 'integrations', 'consulting', 'portfolio'],
  authors: [{ name: 'suvorin.dev' }],
  creator: 'suvorin.dev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suvorin.dev',
    title: 'suvorin.dev',
    description: 'Cutting-edge AI automation solutions. From chatbots to integrations, we build the future of business automation.',
    siteName: 'suvorin.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'suvorin.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'suvorin.dev',
    description: 'Cutting-edge AI automation solutions. From chatbots to integrations, we build the future of business automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://suvorin.dev'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Switzer font from Bunny Fonts CDN */}
        <link href="https://fonts.bunny.net/css?family=switzer:400,500,600,700,800" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-54ED215LQ7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.dataLayer = window.dataLayer || [];' +
              'function gtag(){dataLayer.push(arguments);}' +
              "gtag('js', new Date());" +
              "gtag('config', 'G-54ED215LQ7');"
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-inter bg-charcoal text-steel antialiased overflow-x-hidden`}
      >
        <ThemeProvider defaultTheme="dark">
          <MotionConfig
            transition={{
              type: 'spring',
              mass: 1,
              stiffness: 110,
              damping: 18,
            }}
          >
            <div className="relative min-h-screen">
              <div className="noise-texture" />
              <CursorFollower />
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
          </MotionConfig>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
