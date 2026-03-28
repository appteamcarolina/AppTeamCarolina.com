/**
 * App
 *
 * Root component. Sets up client-side routing via react-router-dom.
 *
 * Route map:
 *   /                          → HomePage (main marketing site)
 *   /bubbly                    → BubblyPage (Bubbly app micro-site)
 *   /bubbly/privacy            → BubblyPrivacyPage
 *   /bubbly/terms              → BubblyTermsPage
 *   /centible                  → CentiblePage (Centible app landing)
 *   /bootcamp-announcement     → BootcampAnnouncementPage (archived Fall 2024 announcement)
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import BubblyLayout from './pages/bubbly/BubblyLayout'
import BubblyPage from './pages/bubbly/BubblyPage'
import BubblyPrivacyPage from './pages/bubbly/BubblyPrivacyPage'
import BubblyTermsPage from './pages/bubbly/BubblyTermsPage'
import CentiblePage from './pages/centible/CentiblePage'
import BootcampAnnouncementPage from './pages/bootcamp/BootcampAnnouncementPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Bubbly micro-site — BubblyLayout provides the dark shell */}
        <Route path="/bubbly" element={<BubblyLayout />}>
          <Route index element={<BubblyPage />} />
          <Route path="privacy" element={<BubblyPrivacyPage />} />
          <Route path="terms" element={<BubblyTermsPage />} />
        </Route>

        <Route path="/centible" element={<CentiblePage />} />
        <Route path="/bootcamp-announcement" element={<BootcampAnnouncementPage />} />
      </Routes>
    </BrowserRouter>
  )
}
