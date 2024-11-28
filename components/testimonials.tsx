"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

export function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="w-full flex-shrink-0 mx-4 bg-card/50 backdrop-blur"
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <div className="w-12 h-12 rounded-full bg-secondary" />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === activeIndex ? "bg-primary" : "bg-secondary"
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
