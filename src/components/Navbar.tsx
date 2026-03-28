/**
 * Navbar
 *
 * Site-wide top navigation bar. Contains:
 *   - Brand logo linking back to the page top
 *   - Anchor links to each home page section (#missions, #home-teams, #apps, #quick-apply)
 *   - A hamburger button that toggles a mobile dropdown menu
 *
 * The mobile menu closes automatically when a link is tapped.
 */

import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="site-nav">
        {/* Brand logo — clicking also closes any open mobile menu */}
        <a className="navbar-brand" href="#" onClick={() => setMobileMenuOpen(false)}>
          <img src="/assets/logo.svg" alt="App Team Carolina Logo" />
        </a>

        {/* Desktop nav links */}
        <ul className="links-list">
          <li className="nav-item">
            <a className="nav-link" href="#missions">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home-teams">Teams</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#apps">Apps</a>
          </li>
          <li className="nav-item">
            <a className="nav-link last-link" href="#quick-apply">Apply</a>
          </li>
        </ul>

        {/* Hamburger button — visible on mobile only (controlled via CSS) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        />
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#missions"    onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#home-teams"  onClick={() => setMobileMenuOpen(false)}>Teams</a></li>
            <li><a href="#apps"        onClick={() => setMobileMenuOpen(false)}>Apps</a></li>
            <li><a href="#quick-apply" onClick={() => setMobileMenuOpen(false)}>Apply</a></li>
          </ul>
        </div>
      )}
    </>
  )
}
