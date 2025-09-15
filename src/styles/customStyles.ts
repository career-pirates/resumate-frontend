import type { ClassValue } from 'clsx'
import { cn } from '../utils/cn'

//Title
export const mainTitle = (...args: ClassValue[]) =>
  cn('text-2xl', 'font-bold', 'whitespace-nowrap', ...args)

export const mainText = (...args: ClassValue[]) =>
  cn('text-sm', 'text-[var(--gray--dark)]', 'font-normal', ...args)

//Input
export const defaultInput = (...args: ClassValue[]) =>
  cn(
    'flex',
    'justify-start',
    'items-center',
    'px-3',
    'py-2',
    'text-sm',
    'text-[var(--black)]',
    'bg-[var(--white)]',
    'rounded-md',
    'border',
    'border-[var(--gray)]',
    'focus:bg-[var(--white--alter)]',
    'placeholder:text-[var(--label--subtle)]',
    'placeholder:text-sm',
    'placeholder:font-regular',
    ...args,
  )

//Card
export const Card = (...args: ClassValue[]) =>
  cn('bg-white', 'rounded-[16px]', 'shadow-sm', ...args)

export const retroCard = (...args: ClassValue[]) =>
  cn(
    'bg-[var(--white--alter)]',
    'px-6',
    'py-4',
    'rounded-[12px]',
    'shadow-lg',
    ...args,
  )
