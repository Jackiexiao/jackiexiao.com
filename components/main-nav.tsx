import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Jackie Xiao"
            fill
            className="object-cover"
          />
        </div>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items.map((item) => (
            item.href ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center text-sm font-medium text-muted-foreground',
                  'hover:text-foreground'
                )}
              >
                {item.title}
              </Link>
            ) : null
          ))}
        </nav>
      ) : null}
    </div>
  )
}
