/**
 * CentiblePage
 *
 * Standalone landing page for the Centible app (/centible).
 * Displays the app name, tagline, and a screenshot of the UI over
 * the branded background image. Originally a static HTML page;
 * converted to React to keep all routes under the same build.
 */

import { motion } from 'framer-motion'

export default function CentiblePage() {
  return (
    <div style={{
      backgroundImage: 'url(/assets/centible-background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Hero: app name, tagline, and screenshot */}
      <motion.div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '60px 40px 40px',
        gap: '40px',
      }}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{ color: 'white', maxWidth: '400px' }}
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>Centible</p>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.4, marginTop: '8px' }}>
            Promoting financial awareness in<br />college students
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 22, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/assets/centible-screens.png"
            alt="Centible app screens"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </motion.div>
      </motion.div>

      {/* Footer: contact link */}
      <motion.div
        style={{ textAlign: 'center', padding: '20px', color: 'white', fontSize: '0.9rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.24 }}
      >
        <p>
          Questions?{' '}
          <a href="mailto:dev@appteamcarolina.com" style={{ color: 'white' }}>
            Send us an email!
          </a>
        </p>
      </motion.div>
    </div>
  )
}
