"use client"

import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  level: number
  category: "tts" | "python" | "nextjs"
  description: string
}

export function SkillsSection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills: Skill[] = [
    {
      name: "Text-to-Speech",
      level: 95,
      category: "tts",
      description: t("skills.tts.description"),
    },
    {
      name: "Voice Cloning",
      level: 90,
      category: "tts",
      description: t("skills.voiceCloning.description"),
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
  ]

  return (
    <div ref={ref} className="space-y-6">
      {["tts", "python", "nextjs"].map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="capitalize">{category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full bg-primary transition-all duration-1000 ease-out",
                        inView ? "w-full" : "w-0"
                      )}
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
