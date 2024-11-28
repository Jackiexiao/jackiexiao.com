import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'terminal-button',
        destructive: 'bg-[hsl(var(--terminal-red))] text-black hover:bg-[hsl(var(--terminal-red))/90]',
        outline: 'border border-[hsl(var(--terminal-green))] text-[hsl(var(--terminal-green))] hover:bg-[hsl(var(--terminal-green))] hover:text-black',
        secondary: 'bg-[hsl(var(--terminal-yellow))] text-black hover:bg-[hsl(var(--terminal-yellow))/90]',
        ghost: 'text-[hsl(var(--terminal-green))] hover:bg-[hsl(var(--terminal-green))/20]',
        link: 'terminal-link',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
