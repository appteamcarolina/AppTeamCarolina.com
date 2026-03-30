import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import { useScroll } from '@/components/ui/use-scroll'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About',      href: '/about' },
  { label: 'Learning',   href: '/learning' },
  { label: 'Production', href: '/production' },
  { label: 'Apps',       href: '/apps' },
]

const GUTTER = 'clamp(20px, 5vw, 72px)'
const NAV_H = 72

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [disableTransition, setDisableTransition] = React.useState(false)
  const scrolled = useScroll(10)
  const location = useLocation()

  React.useEffect(() => {
    setOpen(false)
    setDisableTransition(true)
    const timeout = window.setTimeout(() => setDisableTransition(false), 80)
    return () => window.clearTimeout(timeout)
  }, [location.pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const pill = scrolled

  return (
    <header
      style={{
        position: 'fixed',
        zIndex: 50,
        top:          pill && !open ? '10px' : '0px',
        left:         pill && !open ? GUTTER : '0px',
        right:        pill && !open ? GUTTER : '0px',
        borderRadius: pill && !open ? '18px'  : '0px',
        background:   open
          ? 'rgb(11, 21, 28)'
          : pill
            ? 'rgba(11, 21, 28, 0.8)'
            : 'transparent',
        backdropFilter:       pill && !open ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: pill && !open ? 'blur(24px)' : 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: pill && !open ? 'rgba(255,255,255,0.10)' : 'transparent',
        boxShadow:   pill && !open ? '0 12px 34px rgba(0,0,0,0.3)' : 'none',
        transition: disableTransition
          ? 'none'
          : 'top 0.35s ease, left 0.35s ease, right 0.35s ease, border-radius 0.35s ease, background 0.4s ease, box-shadow 0.35s ease, border-color 0.35s ease',
      }}
    >
      <nav
        style={{ height: `${NAV_H}px`, paddingLeft: '18px', paddingRight: '18px' }}
        className="flex w-full items-center justify-between"
      >
        <NavLink to="/" onClick={() => setOpen(false)} className="nav-logo-link flex items-center shrink-0">
          <img src="/assets/brand/logo.svg" alt="App Team Carolina" className="h-11 w-11" />
        </NavLink>

        <div className="hidden items-center gap-1.5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                cn('nav-text-link', buttonVariants({ variant: 'ghost', size: 'default' }), 'rounded-full px-4', isActive && 'text-white bg-white/10')
              }
              style={{ fontFamily: '"Comfortaa", cursive', fontSize: '14px' }}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/apply"
            className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'nav-apply-btn ml-1 rounded-full px-5')}
            style={{ fontFamily: '"Comfortaa", cursive', fontSize: '14px' }}
          >
            Apply Now
          </NavLink>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen((p) => !p)}
          className={cn(
            'size-10 rounded-full border border-white/10 bg-white/4 text-white/80 md:hidden',
            open && 'bg-white/8 text-white'
          )}
          aria-label="Toggle navigation"
        >
          <MenuToggleIcon open={open} className="size-5" />
        </Button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#081018]/86 backdrop-blur-md md:hidden" style={{ top: `${NAV_H + 8}px` }}>
          <div
            className="mx-4 mt-2 rounded-[24px] border border-white/10 bg-[#0b151c]/96 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({ variant: 'ghost' }),
                      'h-12 justify-start rounded-2xl px-4 text-[15px]',
                      isActive && 'bg-white/10 text-white'
                    )
                  }
                  style={{ fontFamily: '"Comfortaa", cursive' }}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <NavLink
              to="/apply"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: 'default' }), 'mt-4 h-12 w-full rounded-full text-[15px]')}
              style={{ fontFamily: '"Comfortaa", cursive' }}
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
