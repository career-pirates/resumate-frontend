import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import type { ButtonHTMLAttributes } from 'react'

const ButtonVariants = cva(`flex items-center justify-center cursor-pointer`, {
  variants: {
    variant: {
      black: [
        'bg-[var(--black)] text-[var(--white)] disabled:bg-[var(--gray-light)] disabled:text-[var-(--gray)]',
      ],
      line: [
        'bg-[var(--white)] text-[var(--gray--dark)] border border-solid border-[var(--gray)] disabled:bg-[var(--gray--light)] disabled:text-[var-(--gray)] disabled:border disabled:border-solid disabled:border-[var-(--gray)]',
      ],
      redLine: [
        'bg-[var(--white)] text-[var(--red--strong)] border border-solid border-[var(--red--strong)] disabled:bg-[var(--gray--light)] disabled:text-[var-(--gray)] disabled:border disabled:border-solid disabled:border-[var-(--gray)]',
      ],
    },
    size: {
      xs: 'px-2 py-2 text-xs font-medium rounded-md',
      sm: 'px-3 py-2 text-xs font-medium rounded-md',
      md: 'px-3 py-2 text-sm font-medium rounded-md',
      lg: 'px-4 py-2 text-sm font-medium rounded-lg',
      xl: 'px-4 py-2 text-sm font-medium rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'black',
    size: 'md',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  className?: string
  children: React.ReactNode
}

function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), className)}
      {...rest}
    >
      {children && children}
    </button>
  )
}

export default Button
