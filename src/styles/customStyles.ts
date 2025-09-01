import type { ClassValue } from 'clsx'
import { cn } from '../utils/cn'

//Title
export const mainTitle = (...args: ClassValue[]) =>
  cn('text-2xl', 'font-bold', 'whitespace-nowrap', ...args)

//Input
export const defaultInput = (...args: ClassValue[]) =>
  cn(
    'px-[24px]',
    'py-[12px]',
    'text-[var(--black)]',
    'bg-[var(--white)]',
    'rounded-[12px]',
    'border',
    'border-[var(--gray)]',
    'focus:bg-[var(--white--alter)]',
    'placeholder:text-[var(--label--subtle)]',
    'placeholder:text-[20px]',
    'placeholder:font-regular',
    ...args,
  )

//Card
export const Card = (...args: ClassValue[]) =>
  cn('bg-white', 'rounded-[16px]', 'shadow-sm', ...args)

export const retroCard = (...args: ClassValue[]) =>
  cn(
    'bg-[var(--white--alter)]',
    'px-[48px]',
    'py-[32px]',
    'rounded-[12px]',
    'shadow-lg',
    ...args,
  )
