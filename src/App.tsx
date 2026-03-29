/**
 * App
 *
 * Route map:
 *   /                          → HomePage
 *   /about                     → AboutPage
 *   /teams                     → TeamsPage
 *   /apps                      → AppsPage
 *   /apply                     → ApplyPage
 *   /bubbly                    → BubblyPage (micro-site)
 *   /bubbly/privacy            → BubblyPrivacyPage
 *   /bubbly/terms              → BubblyTermsPage
 *   /centible                  → CentiblePage
 *   /bootcamp-announcement     → BootcampAnnouncementPage (archived)
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeamsPage from "./pages/teams/TeamsPage";
import AppsPage from "./pages/apps/AppsPage";
import ApplyPage from "./pages/apply/ApplyPage";
import LearningPage from "./pages/learning/LearningPage";
import ProductionPage from "./pages/production/ProductionPage";
import BubblyLayout from "./pages/bubbly/BubblyLayout";
import BubblyPage from "./pages/bubbly/BubblyPage";
import BubblyPrivacyPage from "./pages/bubbly/BubblyPrivacyPage";
import BubblyTermsPage from "./pages/bubbly/BubblyTermsPage";
import CentiblePage from "./pages/centible/CentiblePage";
import BootcampAnnouncementPage from "./pages/bootcamp/BootcampAnnouncementPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/apply" element={<ApplyPage />} />

        <Route path="/bubbly" element={<BubblyLayout />}>
          <Route index element={<BubblyPage />} />
          <Route path="privacy" element={<BubblyPrivacyPage />} />
          <Route path="terms" element={<BubblyTermsPage />} />
        </Route>

        <Route path="/centible" element={<CentiblePage />} />
        <Route
          path="/bootcamp-announcement"
          element={<BootcampAnnouncementPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
