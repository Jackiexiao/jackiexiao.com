"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "HackWeek Participant",
      content: t("testimonials.1"),
      avatar: "/testimonials/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Zhang",
      role: "01MVP User",
      content: t("testimonials.2"),
      avatar: "/testimonials/2.jpg",
    },
    {
      id: 3,
      name: "Mike Wang",
      role: "Community Member",
      content: t("testimonials.3"),
      avatar: "/testimonials/3.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full bg-card/50 backdrop-blur hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-10 h-10">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <blockquote className="text-sm text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
