/**
 * AppProducts
 *
 * "The Products." section. Renders a card grid of App Team's published apps.
 * Cards with an external link render a CTA button; cards without a link
 * display description text only.
 *
 * App data (cover images, descriptions, links) lives in content.ts.
 */

import { apps } from '../../data/content'

export default function AppProducts() {
  return (
    <div id="apps">
      <div className="section-header">
        <h2 className="display-6 section-title">The Products.</h2>
        <div className="spacer"></div>
      </div>

      <div className="row section-content">
        {apps.map((app) => (
          <div key={app.name} className="col-md-4">
            <div className={`card${app.cardClass ? ` ${app.cardClass}` : ''}`}>
              <img className="card-img-top" src={app.coverSrc} alt={app.coverAlt} />
              <div className="card-body">
                <div className="apps-header">
                  <h4 className="card-title">
                    <img className="apps-icon icon" src={app.iconSrc} alt={app.iconAlt} />
                    {app.name}
                  </h4>
                  <p><i>{app.started}</i></p>
                </div>

                {/* Conditionally render a CTA link if the app has one */}
                {app.link ? (
                  <div className="project-content">
                    <p className="card-text">{app.description}</p>
                    <a
                      href={app.link}
                      target={app.link.startsWith('http') ? '_blank' : undefined}
                      rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="button secondary">{app.linkLabel}</div>
                    </a>
                  </div>
                ) : (
                  <p className="card-text">{app.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
