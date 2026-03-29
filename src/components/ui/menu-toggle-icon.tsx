import React from 'react'
import { cn } from '@/lib/utils'

type MenuToggleProps = React.ComponentProps<'span'> & {
  open: boolean
}

export function MenuToggleIcon({ open, className, ...props }: MenuToggleProps) {
  return (
    <span
      className={cn('relative inline-flex h-5 w-5 items-center justify-center', className)}
      aria-hidden="true"
      {...props}
    >
      <span
        className={cn(
          'absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ease-out',
          open ? 'rotate-45' : '-translate-y-1.5'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-4 rounded-full bg-current transition-all duration-200 ease-out',
          open ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ease-out',
          open ? '-rotate-45' : 'translate-y-1.5'
        )}
      />
    </span>
  )
}
