"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { AnimatedSection } from '@/components/animated-section'

export default function IndexPage() {
  const { t } = useLanguage()

  return (
    <div className="container pb-8 pt-6 md:py-10">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 pb-4 md:pb-8 pt-4 md:pt-6">
          <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">{t('name')}</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">{t('chineseName')}</h2>
            <p className="text-lg md:text-xl font-medium">{t('motto')}</p>
            <p className="text-base md:text-lg text-muted-foreground">{t('role')}</p>
            <div className="flex flex-wrap gap-3 md:gap-4 items-center mt-4 justify-center md:justify-start">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                GitHub
              </Link>
              <Link
                href={siteConfig.links.blog}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'outline' })}
              >
                Blog
              </Link>
              <div className="flex gap-3 md:gap-4 items-center mt-3 md:mt-0 md:ml-4">
                <Image
                  src="/tech/python.svg"
                  alt="Python"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity md:w-6 md:h-6"
                />
                <Image
                  src="/tech/pytorch.svg"
                  alt="PyTorch"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity md:w-6 md:h-6"
                />
                <Image
                  src="/tech/nextjs.svg"
                  alt="Next.js"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity md:w-6 md:h-6"
                />
                <Image
                  src="/tech/react.svg"
                  alt="React"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity md:w-6 md:h-6"
                />
              </div>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-64 md:h-64 mb-4 md:mb-0">
            <Image
              src="/avatar.jpg"
              alt="Jackie Xiao"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={100}>
        <section id="projects" className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('projects.title')}</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('projects.aiProjects')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="https://hackweek.cn" className="block hover:underline">
                  HackWeek - Modern Website
                </Link>
                <Link href="https://terminal-style.hackweek.pages.dev" className="block hover:underline">
                  HackWeek - Terminal Style
                </Link>
                <Link href="https://startup-simulator-delta.vercel.app" className="block hover:underline">
                  Startup Simulator Game
                </Link>
                <Link href="https://startup-monopoly.vercel.app" className="block hover:underline">
                  Startup Monopoly Game
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('projects.tools')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="https://github.com/Jackiexiao/macvimswitch" className="block hover:underline">
                  MacVimSwitch - Vim Input Method Switcher
                </Link>
                <Link href="https://github.com/Jackiexiao/wechat-bot-wechat4u" className="block hover:underline">
                  WeChat Emotional Support Bot
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Community Section */}
      <AnimatedSection delay={150}>
        <section id="community" className="py-8">
          <h2 className="text-3xl font-bold mb-6">Community</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Link
                  href="https://hackweek.cn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <CardTitle>HackathonWeekly</CardTitle>
                </Link>
                <CardDescription>{t('community.hackweek.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hackweek-logo.jpg"
                  alt="HackathonWeekly Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={200}>
        <section id="about" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
          <Card>
            <CardHeader>
              <CardTitle>{t('about.description')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }, (_, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {t(`about.traits.${i}`)}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Image
                  src="/life.png"
                  alt="Life Photo"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={250}>
        <section id="skills" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('skills.title')}</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Image
              src="/tech/python.svg"
              alt="Python"
              width={48}
              height={48}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/tech/pytorch.svg"
              alt="PyTorch"
              width={48}
              height={48}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/tech/nextjs.svg"
              alt="Next.js"
              width={48}
              height={48}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/tech/react.svg"
              alt="React"
              width={48}
              height={48}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      {/* <AnimatedSection delay={300}>
        <section id="testimonials" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('testimonials.title')}</h2>
          <Testimonials />
        </section>
      </AnimatedSection> */}

      {/* Contact Section */}
      <AnimatedSection delay={350}>
        <section id="contact" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
