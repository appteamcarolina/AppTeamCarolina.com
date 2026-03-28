/**
 * CentiblePage
 *
 * Standalone landing page for the Centible app (/centible).
 * Displays the app name, tagline, and a screenshot of the UI over
 * the branded background image. Originally a static HTML page;
 * converted to React to keep all routes under the same build.
 */

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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: '60px 40px 40px',
        gap: '40px',
      }}>
        <div style={{ color: 'white', maxWidth: '400px' }}>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>Centible</p>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.4, marginTop: '8px' }}>
            Promoting financial awareness in<br />college students
          </p>
        </div>
        <div>
          <img
            src="/assets/centible-screens.png"
            alt="Centible app screens"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </div>
      </div>

      {/* Footer: contact link */}
      <div style={{ textAlign: 'center', padding: '20px', color: 'white', fontSize: '0.9rem' }}>
        <p>
          Questions?{' '}
          <a href="mailto:dev@appteamcarolina.com" style={{ color: 'white' }}>
            Send us an email!
          </a>
        </p>
      </div>
    </div>
  )
}
