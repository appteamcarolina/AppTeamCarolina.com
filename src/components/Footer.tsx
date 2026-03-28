/**
 * Footer
 *
 * Site-wide footer. Displays a copyright notice and a row of social media
 * icon links (LinkedIn, newsletter, Instagram, Twitter, email).
 *
 * Social link data is sourced from content.ts so URLs and icons can be
 * updated in one place.
 */

import { socials } from '../data/content'

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-content">
        <p>Made with ♥ by App Team Carolina in Chapel Hill, NC © 2025</p>

        {/* Social media icon links */}
        <div className="social-media">
          {socials.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target={social.target}
              rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              <img className="social-icon" src={social.iconSrc} alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
