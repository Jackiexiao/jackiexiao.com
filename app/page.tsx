"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { SkillsSection } from '@/components/skills-section'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { AnimatedSection } from '@/components/animated-section'

export default function IndexPage() {
  const { t } = useLanguage()

  return (
    <div className="container pb-8 pt-6 md:py-10">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="flex flex-col-reverse md:flex-row items-center gap-6 pb-8 pt-6">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{t('name')}</h1>
            <h2 className="text-2xl text-muted-foreground">{t('chineseName')}</h2>
            <p className="text-xl font-medium">{t('motto')}</p>
            <p className="text-lg text-muted-foreground">{t('role')}</p>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64">
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
      <AnimatedSection delay={200}>
        <section id="projects" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('projects.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
      <AnimatedSection delay={400}>
        <section id="community" className="py-8">
          <h2 className="text-3xl font-bold mb-6">Community</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>HackathonWeekly</CardTitle>
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
            <Card>
              <CardHeader>
                <CardTitle>01MVP</CardTitle>
                <CardDescription>{t('community.mvp.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/01mvp-logo.jpg"
                  alt="01MVP Logo"
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
      <AnimatedSection delay={600}>
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
                  src="/life.jpg"
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
      <AnimatedSection delay={800}>
        <section id="skills" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('skills.title')}</h2>
          <SkillsSection />
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={1000}>
        <section id="testimonials" className="py-8">
          <h2 className="text-3xl font-bold mb-6">{t('testimonials.title')}</h2>
          <Testimonials />
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection delay={1200}>
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
