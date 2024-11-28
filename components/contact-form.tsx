"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a success response
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: t("contact.success"),
        description: t("contact.successMessage"),
      })
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: t("contact.error"),
        description: t("contact.errorMessage"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.name")}</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.email")}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">{t("contact.message")}</Label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("contact.sending") : t("contact.send")}
        </Button>
      </form>
    </Card>
  )
}
