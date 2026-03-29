import { NavLink } from 'react-router-dom'
import Reveal from '@/components/site/Reveal'

export default function Apply() {
  return (
    <section id="quick-apply" className="home-cta section">
      <Reveal className="home-cta__shell">
        <p className="home-cta__eyebrow">Ready to build with us?</p>
        <h2 className="display-5 home-cta__title">Find the track that matches how you want to grow.</h2>
        <p className="home-cta__text">
          Whether you want to learn from scratch or join a team shipping real products,
          we built a path that helps students get genuinely better while making things they are proud of.
        </p>
        <div className="home-cta__actions">
          <NavLink to="/apply" className="button" style={{ fontFamily: '"Comfortaa", cursive' }}>
            <h4>Explore Open Roles</h4>
          </NavLink>
          <NavLink to="/about" className="landing-secondary-link">
            Learn more about App Team
          </NavLink>
        </div>
      </Reveal>
    </section>
  )
}
