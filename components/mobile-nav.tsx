"use client"

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const { t } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Jackie Xiao"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <nav className="flex flex-col space-y-3 px-7 pt-6">
          {items?.map((item) =>
            item.href ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  "text-sm font-medium"
                )}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.title.toLowerCase()}`)}
              </Link>
            ) : null
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
