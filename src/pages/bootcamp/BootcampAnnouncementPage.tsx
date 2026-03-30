/**
 * BootcampAnnouncementPage
 *
 * Announcement page introducing App Team's public iOS and UI/UX Bootcamps
 * (/bootcamp-announcement). Originally published for Fall 2024; kept as a
 * React route so the URL remains valid and shareable.
 *
 * Includes the site Navbar and Footer so it feels consistent with the
 * rest of the site even though it isn't linked from the main nav.
 */

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function BootcampAnnouncementPage() {
  return (
    <>
      <Navbar />

      <div id="announcement-section" style={{ maxWidth: '760px', margin: '140px auto 60px', padding: '0 24px' }}>
        <h1>An Announcement from App Team</h1>
        <p>
          Hey Everyone! <br /><br />
          As the Fall 2024 semester approaches, we're excited to share some new
          opportunities and important updates with you.
          <br /><br />
          <b>
            We're excited to introduce a brand new offering, open to the
            public: our iOS and UI/UX Bootcamps.
          </b>{' '}
          These bootcamps will replace our previous Academy teams and will be
          open to all UNC students who satisfy the entry requirements, with no
          interviews needed. We'll now be able to provide high-quality education
          to more people than ever before, and participants will have an
          opportunity to receive a well-rounded introduction to design or
          development without a multi-semester commitment. Then, if they love
          it, they'll be prepared to apply to officially join App Team in the
          following semester. <br /><br />
          If you are interested in participating, please fill out{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/NxLiBF1c2rwowMLs6">
            this form for iOS Bootcamp
          </a>{' '}
          or{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/kdA7th1Gr8NeUgz5A">
            this form for UI/UX Bootcamp
          </a>
          . <br /><br />
          We're looking forward to an exciting year ahead, full of learning,
          designing, developing, and making an impact. We hope to see you on
          campus soon!
          <br /><br />
          Best regards,
          <br />
        </p>
        <h4><i>App Team Carolina C-Suite and Learning Team Leads</i></h4>
      </div>

      <Footer />
    </>
  )
}
