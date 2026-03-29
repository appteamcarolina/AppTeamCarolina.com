"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export type RotatingTestimonialItem = {
  id: number
  quote: string
  author: string
  role: string
  avatar?: string
}

type UniqueTestimonialsProps = {
  items: RotatingTestimonialItem[]
  className?: string
}

// Shared rotating testimonial used on student-facing pages that need a little more warmth and proof.
export function Testimonials({
  items,
  className,
}: UniqueTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = items[activeIndex]

  if (items.length === 0) return null

  return (
    <div className={cn('rotating-testimonial', className)}>
      <div className="rotating-testimonial__quote-shell">
        <span className="rotating-testimonial__mark rotating-testimonial__mark--open">“</span>
        <AnimatePresence mode="wait">
          <motion.p
            key={active.id}
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rotating-testimonial__quote"
          >
            {active.quote}
          </motion.p>
        </AnimatePresence>
        <span className="rotating-testimonial__mark rotating-testimonial__mark--close">”</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={`${active.id}-role`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="rotating-testimonial__role"
        >
          {active.role}
        </motion.p>
      </AnimatePresence>

      <div className="rotating-testimonial__people">
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                'rotating-testimonial__person',
                isActive && 'rotating-testimonial__person--active',
              )}
              aria-pressed={isActive}
            >
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="rotating-testimonial__avatar"
                />
              ) : (
                <span className="rotating-testimonial__avatar rotating-testimonial__avatar--fallback">
                  {item.author[0]}
                </span>
              )}
              <span className="rotating-testimonial__person-name">{item.author}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
