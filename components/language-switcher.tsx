"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <Button
      variant="ghost"
      className="w-9 px-0"
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
    >
      {locale === "en" ? "中" : "En"}
    </Button>
  )
}
