"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactForm() {
  const { t } = useLanguage()
  const [isCopied, setIsCopied] = useState(false)
  const email = "jackie.xiao@outlook.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="terminal-header text-3xl font-bold leading-[1.1] mb-3">
          {t("contact.title")}
        </h2>
        <Card className="max-w-2xl">
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="terminal-text">
                <span className="terminal-prompt"></span>
                <span className="text-[hsl(var(--terminal-yellow))]">mail</span>
                <span className="text-[hsl(var(--terminal-blue))]"> --to </span>
                <button
                  onClick={handleCopy}
                  className="text-[hsl(var(--terminal-green))] hover:text-[hsl(var(--terminal-cyan))] transition-colors cursor-pointer"
                >
                  {email}
                </button>
              </div>
              {isCopied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-[hsl(var(--terminal-green))]"
                >
                  ✓ {t("contact.copied")}
                </motion.div>
              )}
              <p className="text-sm text-muted-foreground mt-4">
                {t("contact.description")}
              </p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="terminal-text">
                <span className="text-[hsl(var(--terminal-blue))]"># {t("contact.tips")}</span>
              </div>
              <div className="pl-4">
                <div className="terminal-text">
                  <span className="text-[hsl(var(--terminal-green))]">1. </span>
                  {t("contact.tip1")}
                </div>
                <div className="terminal-text">
                  <span className="text-[hsl(var(--terminal-green))]">2. </span>
                  {t("contact.tip2")}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
