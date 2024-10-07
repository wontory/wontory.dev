import { type VariantProps, cva } from 'cva'

import { cn } from '@wontory/util/cn'

const buttonVariants = cva({
  base: 'inline-flex items-center justify-center rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-gradient-to-t from-primary/60 to-primary text-primary-foreground shadow-background/20 shadow-inner hover:bg-primary/90',
      secondary:
        'border bg-gradient-to-t from-primary/10 text-secondary-foreground shadow-inner shadow-primary/10 hover:bg-secondary/50',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
