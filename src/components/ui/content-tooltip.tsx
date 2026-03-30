"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownAZ, ArrowUpAZ, InfoIcon, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type LeadershipCredit = {
  name: string
  role: string
  era: string
  sortYear: number
}

type ContentTooltipProps = {
  credits: LeadershipCredit[]
  className?: string
}

export default function ContentTooltip({
  credits,
  className,
}: ContentTooltipProps) {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isReverseAlphabetical, setIsReverseAlphabetical] = useState(false)

  const groupedCredits = Array.from(
    credits.reduce((map, credit) => {
      const existing = map.get(credit.name)
      if (existing) {
        existing.roles = Array.from(new Set([...existing.roles, credit.role]))
        existing.sortYear = Math.min(existing.sortYear, credit.sortYear)
      } else {
        map.set(credit.name, {
          name: credit.name,
          roles: [credit.role],
          sortYear: credit.sortYear,
        })
      }

      return map
    }, new Map<string, { name: string; roles: string[]; sortYear: number }>())
      .values(),
  )

  const normalizedSearch = searchValue.trim().toLowerCase()

  const visibleCredits = groupedCredits
    .filter((credit) => {
      if (!normalizedSearch) return true

      return (
        credit.name.toLowerCase().includes(normalizedSearch) ||
        credit.roles.some((role) => role.toLowerCase().includes(normalizedSearch))
      )
    })
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name)
      return isReverseAlphabetical ? comparison * -1 : comparison
    })

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    setSearchValue('')
    setIsReverseAlphabetical(false)
  }, [open])

  return (
    <>
      <div className={cn('footer-easter-egg', className)}>
        <motion.button
          type="button"
          className="footer-credits-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open App Team leadership credits"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ y: 0, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <img src="/assets/brand/logo.svg" alt="App Team Carolina" className="footer-logo" />
        </motion.button>

        <div className="footer-credits-tooltip" role="tooltip">
          <div className="footer-credits-tooltip__row">
            <InfoIcon className="h-4 w-4" />
            <p>A little thank-you</p>
          </div>
          <span>Click for a small thank-you to the people who helped shape App Team over the years.</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="footer-credits-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="footer-credits-dialog"
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="footer-credits-dialog__header">
                <div>
                  <p className="footer-credits-dialog__eyebrow">Hidden in the footer</p>
                  <h3 className="footer-credits-dialog__title">The people who helped make App Team Carolina possible.</h3>
                  <p className="footer-credits-dialog__sub">
                    A small thank-you to the students who gave their time, care, and energy to help App Team become what it is.
                  </p>
                </div>

                <motion.button
                  type="button"
                  className="footer-credits-dialog__close"
                  onClick={() => setOpen(false)}
                  aria-label="Close credits dialog"
                  whileHover={{ y: -1, scale: 1.04 }}
                  whileTap={{ y: 0, scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="footer-credits-dialog__meta">
                <div className="footer-credits-dialog__controls">
                  <label className="footer-credits-dialog__search">
                    <Search className="h-4 w-4" />
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                      placeholder="Search names or roles"
                      aria-label="Search leadership archive"
                    />
                  </label>

                  <motion.button
                    type="button"
                    className="footer-credits-dialog__sort"
                    onClick={() => setIsReverseAlphabetical((current) => !current)}
                    aria-label={isReverseAlphabetical ? 'Switch to alphabetical order' : 'Switch to reverse alphabetical order'}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ y: 0, scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  >
                    {isReverseAlphabetical ? <ArrowUpAZ className="h-4 w-4" /> : <ArrowDownAZ className="h-4 w-4" />}
                    <span>{isReverseAlphabetical ? 'Z-A' : 'A-Z'}</span>
                  </motion.button>
                </div>
              </div>

              <div className="footer-credits-dialog__grid">
                {visibleCredits.length > 0 ? (
                  visibleCredits.map((credit) => (
                    <motion.article
                      key={credit.name}
                      className="footer-credits-card"
                      whileHover={{ y: -4, scale: 1.012 }}
                      whileTap={{ y: -1, scale: 0.992 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <div className="footer-credits-card__top">
                        <h4 className="footer-credits-card__name">{credit.name}</h4>
                      </div>
                      <div className="footer-credits-card__role-tags">
                        {credit.roles.map((role) => (
                          <span key={`${credit.name}-${role}`} className="footer-credits-card__role-tag">{role.toUpperCase()}</span>
                        ))}
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="footer-credits-dialog__empty">
                    <p>No matches yet.</p>
                    <span>Try a different name or role.</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
