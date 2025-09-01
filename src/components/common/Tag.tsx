import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const TagVariants = cva(`flex items-center justify-center cursor-pointer`, {
  variants: {
    variant: {
      dark: [
        'bg-[var(--black)] text-[var(--white)] disabled:bg-[var(--gray-light)] disabled:text-[var-(--gray)]',
      ],
      light: [
        'bg-[var(--white)] text-[var(--gray--dark)] border border-solid border-[var(--gray--light)] disabled:bg-[var(--gray--light)] disabled:text-[var-(--gray)] disabled:border disabled:border-solid disabled:border-[var-(--gray)]',
      ],
    },
    size: {
      xs: 'px-2 py-1 text-xs font-medium rounded-md',
      sm: 'px-3 py-1 text-xs font-medium rounded-md',
      md: 'px-3 py-1 text-sm font-medium rounded-md',
      lg: 'px-4 py-2 text-sm font-medium rounded-lg',
      xl: 'px-4 py-2 text-sm font-medium rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'light',
    size: 'xs',
  },
})

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TagVariants> {
  className?: string
  children: React.ReactNode
}

function Button({ variant, size, className, children, ...rest }: TagProps) {
  return (
    <div
      className={cn(TagVariants({ variant, size }), className)}
      {...rest}
    >
      {children && children}
    </div>
  )
}

export default Button
