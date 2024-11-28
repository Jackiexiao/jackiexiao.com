import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Jackie Xiao",
    "Full Stack Developer",
    "AI Engineer",
    "01MVP",
    "HackathonWeekly",
    "Voice Algorithm Engineer",
  ],
  authors: [
    {
      name: "Jackie Xiao",
      url: "https://jackiexiao.com",
    },
  ],
  creator: "Jackie Xiao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jackiexiao.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/avatar.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@realjackiexiao",
    images: ["/avatar.jpg"],
  },
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LanguageProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </LanguageProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
