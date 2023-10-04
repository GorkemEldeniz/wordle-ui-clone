import { HtmlHTMLAttributes } from 'react'

import cn from '@utils/cn'

interface CellProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  letter: string
  result: 'absent' | 'present' | 'correct' | null
  isOpen: boolean
}

function Cell({ letter, result, isOpen, ...rest }: CellProps) {
  return (
    <span
      className={cn(
        'mr-1  inline-flex h-8 w-8 items-center justify-center border-[2px] border-[#888a8c] text-center text-[25px] font-bold text-[color:var(--color-tone-1)] delay-200 duration-100',
        {
          'text-color:var(--color-tone-7) animate-rotate border-transparent bg-[color:var(--green)] transition-all':
            result === 'correct' && isOpen,
          'text-color:var(--color-tone-7) animate-rotate border-transparent bg-[color:var(--yellow)] transition-all':
            result === 'present' && isOpen,
          'text-color:var(--color-tone-7) animate-rotate border-transparent bg-[color:var(--color-tone-2)] transition-all':
            result === 'absent' && isOpen,
        }
      )}
      {...rest}
    >
      {letter}
    </span>
  )
}

export default Cell
