/**
 * BubblyPage
 *
 * Home page for the Bubbly micro-site (/bubbly).
 * Split into three sections:
 *   1. Hero — app logo, tagline, App Store download button, and video demo CTA
 *   2. Demo  — embedded video walkthrough of the app
 *   3. Footer — copyright and links to privacy policy / terms of service
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BubblyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="bubbly-flex-container">
        {/* Left pane: branding and CTAs */}
        <motion.div
          className="bubbly-left"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bubbly-aligner">
            <div>
              <img
                className="bubbly-logo"
                src="/assets/bubbly-assets/logo-3x.png"
                alt="Bubbly Logo"
              />
              <p className="bubbly-caption">
                The perfect reading and spelling experience to navigate CVI.
              </p>
              <div className="bubbly-button-section">
                <div className="bubbly-button-container">
                  <a
                    href="https://apps.apple.com/us/app/bubbly-cvi-literacy/id1616368300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bubbly-button"
                    id="download_button"
                  >
                    <img src="/assets/bubbly-assets/appstoredownload.svg" alt="Download on App Store" />
                  </a>
                  <a href="#demo" className="bubbly-button" id="video_button">
                    <img src="/assets/bubbly-assets/playvideo.png" alt="Watch Video Demo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right pane: app mockup screenshot */}
        <motion.div
          className="bubbly-right"
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bubbly-aligner">
            <div>
              <img
                className="bubbly-mockup"
                src="/assets/bubbly-assets/mockup.png"
                alt="Bubbly App Mockup"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Video Demo ── */}
      <motion.div
        id="demo"
        className="bubbly-demo"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="bubbly-title">Video Demo</h1>
        <video controls>
          <source src="/assets/bubbly-assets/bubbly-demo.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* ── Footer ── */}
      <motion.div
        id="footer"
        className="bubbly-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="bubbly-footer-content">
          <p id="copyright">Made with ♥ by App Team Carolina in Chapel Hill, NC © 2022</p>
          <div className="bubbly-nav">
            <Link to="/bubbly/privacy">Privacy Policy</Link>
            <Link to="/bubbly/terms">Terms and Conditions</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
