import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { HospitalProvider } from '@/app/features/tabs/context/hospital-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://glytec-dashboard.com'),
  title: 'Glytec Dashboard - Diabetes Analytics',
  description: 'Advanced diabetes analytics dashboard providing insights on prevalence, length of stay, and readmission rates based on CMS data.',
  keywords: 'diabetes, analytics, healthcare, CMS data, hospital metrics, medical dashboard',
  authors: [{ name: 'Glytec' }],
  openGraph: {
    title: 'Glytec Dashboard - Diabetes Analytics',
    description: 'Advanced diabetes analytics dashboard providing insights on prevalence, length of stay, and readmission rates.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glytec_logo-1ij7f1RaF0caOxImK5SJh8z9sa7vK3.svg',
        width: 1200,
        height: 630,
        alt: 'Glytec Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glytec Dashboard - Diabetes Analytics',
    description: 'Advanced diabetes analytics dashboard providing insights on prevalence, length of stay, and readmission rates.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/glytec_logo-1ij7f1RaF0caOxImK5SJh8z9sa7vK3.svg']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HospitalProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </HospitalProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}