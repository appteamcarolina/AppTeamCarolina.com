import { NavLink } from 'react-router-dom'
import Reveal from '@/components/site/Reveal'

export default function Apply() {
  return (
    <section id="quick-apply" className="home-cta section">
      <Reveal className="home-cta__shell">
        <div className="home-cta__grid">
          <div className="home-cta__main">
            <p className="home-cta__eyebrow">Interested in joining?</p>
            <h2 className="home-cta__title">We’d love to hear from you.</h2>
            <p className="home-cta__text">
              Whether you want to start in Learning or join a Production team, there is a place here for people who want to get better by making.
            </p>
            <div className="home-cta__actions">
              <NavLink to="/apply" className="button home-cta__button">
                Explore Open Roles
              </NavLink>
              <NavLink to="/about" className="landing-secondary-link home-cta__link">
                Learn more about App Team
              </NavLink>
            </div>
          </div>

          <div className="home-cta__side">
            <div className="home-cta__note">
              <p className="home-cta__note-title">Don&apos;t see your fit yet?</p>
              <p className="home-cta__note-text">
                We also have roles in product, marketing, backend, and web.
              </p>
            </div>
            <div className="home-cta__note">
              <p className="home-cta__note-title">Want to learn more first?</p>
              <p className="home-cta__note-text">
                Reach out and we&apos;d be happy to point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
