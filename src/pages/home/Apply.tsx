/**
 * Apply
 *
 * Call-to-action section at the bottom of the home page.
 * Displays an "Apply Now" button that opens a full-screen modal listing
 * all available roles with their descriptions, requirements, and individual
 * application links.
 *
 * Role data is sourced from content.ts. Roles are laid out in two-column
 * pairs inside the modal.
 */

import { useState } from 'react'
import { roles } from '../../data/content'

/** Groups an array into consecutive pairs for two-column modal layout. */
function chunkPairs<T>(arr: T[]): [T, T | undefined][] {
  const pairs: [T, T | undefined][] = []
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push([arr[i], arr[i + 1]])
  }
  return pairs
}

export default function Apply() {
  const [modalOpen, setModalOpen] = useState(false)
  const rolePairs = chunkPairs(roles)

  return (
    <>
      {/* CTA hero */}
      <div id="quick-apply" className="section apply">
        <div className="section-content" style={{ paddingTop: '200px' }}>
          <h1 className="logo">
            <img className="logo-img" src="/assets/logo.svg" alt="App Team Carolina" />
          </h1>
          <h1 className="display-5 apply-header">Learn. Design. Develop.</h1>
          <div className="button-container">
            <div className="button apply-button btn" onClick={() => setModalOpen(true)}>
              <h4>Apply Now for Spring 2026</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Role-selection modal — clicking the backdrop closes it */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className="modal-box">
            <div className="modal-head">
              <h3>Which role is right for you?</h3>
              <span className="close-symbol" onClick={() => setModalOpen(false)}>&#10005;</span>
            </div>

            {rolePairs.map(([left, right], rowIndex) => (
              <div key={rowIndex} className="modal-row">
                {[left, right].map((role, colIndex) => {
                  if (!role) return null
                  return (
                    <div key={role.title} className="modal-col">
                      <div className={`card${colIndex === 1 ? ' second-space' : ''}${role.cardClass ? ` ${role.cardClass}` : ''}`}>
                        <div className="card-body">
                          {/* Role header: title, optional subtitle, and track label */}
                          <div className="team-head">
                            <div className="team-head-text">
                              <h5>{role.title}</h5>
                              {role.subtitle && <p>{role.subtitle}</p>}
                            </div>
                            {role.label && (
                              <p className={`label ${role.label.toLowerCase()}`}>
                                <mark>{role.label}</mark>
                              </p>
                            )}
                          </div>

                          {/* Role description, requirements list, and apply button */}
                          <div className={role.spacingClass}>
                            <div className="role-content">
                              <p className="req">{role.description}</p>
                              <br />
                              <p className="req">What are we looking for?</p>
                              <ul>
                                {role.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <a href={role.applyUrl} target="_blank" rel="noopener noreferrer">
                              <div className="button modal-apply">{role.applyLabel}</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}

          </div>
        </div>
      )}
    </>
  )
}
