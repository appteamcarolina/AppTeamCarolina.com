import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BackgroundPaths } from '@/components/ui/background-paths'

const words = ['App', 'Team', 'Carolina']

export default function Landing() {
  return (
    <section id="landing" className="relative overflow-hidden">
      <div className="landing-background-paths">
        <BackgroundPaths />
      </div>

      <div className="landing-shell">
        <div className="landing-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="landing-eyebrow">UNC Chapel Hill · iOS Development</p>
          </motion.div>

          <h1 className="landing-title">
            {words.map((word, wi) => (
              <span key={wi} className="inline-block mr-3 last:mr-0">
                {word.split('').map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + wi * 0.12 + li * 0.03,
                      type: 'spring',
                      stiffness: 160,
                      damping: 22,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="landing-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            Let's create something amazing.
          </motion.p>

          <motion.div
            className="landing-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            <NavLink to="/apply" className="button" style={{ fontFamily: '"Comfortaa", cursive' }}>
              <h4>Apply Now</h4>
            </NavLink>
            <NavLink to="/about" className="landing-secondary-link">
              Learn more →
            </NavLink>
          </motion.div>
        </div>

        <div className="layered-graphic" aria-hidden="true">
          <img className="layer image1" src="/assets/layer1.svg" alt="" />
          <img className="layer image2" src="/assets/layer2.svg" alt="" />
          <img className="layer image3" src="/assets/layer3.svg" alt="" />
          <img className="layer image4" src="/assets/layer4.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
