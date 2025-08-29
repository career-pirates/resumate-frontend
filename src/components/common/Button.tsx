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
        'bg-[var(--white)] text-[var(--gray--dark)] border border-solid border-[var(--gray--light)] disabled:bg-[var(--gray--light)] disabled:text-[var-(--gray)] disabled:border disabled:border-solid disabled:border-[var-(--gray)]',
      ],
    },
    size: {
      sm: 'px-[12px] py-[2px] text-[16px] font-medium rounded-md',
      md: 'px-[16px] py-[2px] text-[18px] font-medium rounded-md',
      lg: 'px-[20px] py-[2px] text-[20px] font-medium rounded-lg',
      xl: 'px-[24px] py-[2px] text-[20px] font-medium rounded-lg',
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
