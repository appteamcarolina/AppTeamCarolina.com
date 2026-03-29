import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (hash) return

    const html = document.documentElement
    const body = document.body
    const previousHtmlBehavior = html.style.scrollBehavior
    const previousBodyBehavior = body.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    html.scrollTop = 0
    body.scrollTop = 0

    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlBehavior
      body.style.scrollBehavior = previousBodyBehavior
    })
  }, [pathname, search, hash])

  return null
}
