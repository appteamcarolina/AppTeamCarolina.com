import { NavLink } from 'react-router-dom'
import { legacyLeadershipCredits, socials } from '../data/content'
import ContentTooltip from './ui/content-tooltip'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Learning',   href: '/learning' },
  { label: 'Production', href: '/production' },
  { label: 'Apps',       href: '/apps' },
  { label: 'Apply',      href: '/apply' },
]

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-skyline-bg" aria-hidden="true">
        <img src="/assets/brand/unc-skyline.png" alt="" className="footer-skyline-img" />
      </div>

      <div className="footer-content-shell">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <ContentTooltip credits={legacyLeadershipCredits} />
            </div>
            <p className="footer-tagline">App Team Carolina</p>
            <p className="footer-sub">Building apps that matter,<br />from Chapel Hill to everywhere.</p>
            <div className="footer-socials-row">
              {socials.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target={social.target}
                  rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="footer-icon-link"
                  aria-label={social.alt}
                >
                  <img src={social.iconSrc} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Links */}
          <div className="footer-col">
            <p className="footer-col-title">Pages</p>
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.href} className="footer-link">
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Connect</p>
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target={social.target}
                rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="footer-link"
              >
                {social.alt}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <a href="mailto:appteamcarolina@unc.edu" className="footer-link">appteamcarolina@unc.edu</a>
            <p className="footer-link-plain">University of North Carolina</p>
            <p className="footer-link-plain">Chapel Hill, NC 27514</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 App Team Carolina · All rights reserved</p>
          <div className="footer-love-note">
            <p>Made with ♥ at UNC Chapel Hill</p>
            <div className="footer-love-note__tooltip" role="tooltip">
              Designed & developed by Morgan Roberts & Will Wang.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
