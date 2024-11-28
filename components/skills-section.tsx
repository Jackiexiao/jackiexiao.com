"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  category: string
  description: string
}

export function SkillsSection() {
  const { t } = useLanguage()

  const skills: Skill[] = [
    {
      name: "Next.js",
      level: 85,
      category: "nextjs",
      description: t("skills.nextjs.description"),
    },
    {
      name: "React",
      level: 80,
      category: "nextjs",
      description: t("skills.react.description"),
    },
    {
      name: "Python",
      level: 90,
      category: "python",
      description: t("skills.python.description"),
    },
    {
      name: "Machine Learning",
      level: 85,
      category: "python",
      description: t("skills.ml.description"),
    },
    {
      name: "text-to-speech",
      level: 95,
      category: "tts",
      description: t("skills.tts.description"),
    },
  ]

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="terminal-header text-3xl font-bold leading-[1.1] mb-3">
          {t("skills.title")}
        </h2>
        <AnimatePresence>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">
                        <span className="terminal-prompt"></span>
                        {skill.name}
                      </CardTitle>
                      <span className="text-sm text-[hsl(var(--terminal-green))]">
                        {skill.level}%
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="terminal-progress-bg">
                        <motion.div
                          className="terminal-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
