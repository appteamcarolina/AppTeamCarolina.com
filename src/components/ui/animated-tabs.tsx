"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface AnimatedTab {
  id: string
  label: string
  image: string
  imageAlt: string
  eyebrow?: string
  title: string
  description: string
}

interface AnimatedTabsProps {
  tabs: AnimatedTab[]
  defaultTab?: string
  className?: string
}

export function AnimatedTabs({
  tabs,
  defaultTab,
  className,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id)

  if (!tabs.length) return null

  return (
    <div className={cn('animated-tabs', className)}>
      <div className="animated-tabs__nav" role="tablist" aria-label="App Team overview tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`animated-tab-panel-${tab.id}`}
              className="animated-tabs__trigger"
              onClick={() => setActiveTab(tab.id)}
            >
              {isActive && (
                <motion.div
                  layoutId="animated-tabs-active-pill"
                  className="animated-tabs__trigger-active"
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                />
              )}
              <span className="animated-tabs__trigger-label">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div className="animated-tabs__panel-shell">
        <AnimatePresence mode="wait">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <motion.div
                key={tab.id}
                id={`animated-tab-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={tab.id}
                className="animated-tabs__panel"
                initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="animated-tabs__media">
                  <img src={tab.image} alt={tab.imageAlt} className="animated-tabs__image" />
                </div>
                <div className="animated-tabs__content">
                  {tab.eyebrow ? <p className="animated-tabs__eyebrow">{tab.eyebrow}</p> : null}
                  <h3 className="animated-tabs__title">{tab.title}</h3>
                  <p className="animated-tabs__description">{tab.description}</p>
                </div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
