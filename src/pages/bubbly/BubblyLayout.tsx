/**
 * BubblyLayout
 *
 * Shared layout wrapper for all Bubbly routes (/bubbly, /bubbly/privacy,
 * /bubbly/terms). Applies the dark background and base font used across
 * the Bubbly micro-site, then renders the matched child route via <Outlet>.
 */

import { Outlet } from 'react-router-dom'
import './bubbly.css'

export default function BubblyLayout() {
  return (
    <div className="bubbly-root">
      <Outlet />
    </div>
  )
}
