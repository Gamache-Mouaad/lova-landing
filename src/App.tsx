// src/App.tsx
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import { StoriesSection } from './components/sections/StoriesSection';
import GamesSection from './components/sections/GamesSection';
import { ParentsBlogSection } from './components/sections/ParentsBlogSection';
import { CharactersSection } from './components/sections/CharactersSection';
import { AboutUsSection } from './components/sections/AboutUsSection';
import PricingSection from './components/sections/PricingSection';
import RewardsSection from './components/sections/RewardsSection';
import UnderConstruction from './pages/UnderConstruction';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      // Clear location state using navigate for React Router consistency
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <main className="flex-1 space-y-[150px]">
      <section id="hero"><HeroSection /></section>
      <section id="features"><FeaturesSection /></section>
      <section id="stories"><StoriesSection /></section>
      <section id="games"><GamesSection /></section>
      <section id="blog"><ParentsBlogSection /></section>
      <section id="characters"><CharactersSection /></section>
      <section id="about"><AboutUsSection /></section>
      <section id="pricing"><PricingSection /></section>
      <section id="awards"><RewardsSection /></section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<UnderConstruction />} />
          <Route path="/games" element={<UnderConstruction />} />
          <Route path="/characters" element={<UnderConstruction />} />
          <Route path="/blog" element={<UnderConstruction />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/pricing" element={<UnderConstruction />} />
          <Route path="/login" element={<UnderConstruction />} />
          <Route path="/trial" element={<UnderConstruction />} />
          <Route path="/awards" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
          <Route path="/privacy" element={<UnderConstruction />} />
          <Route path="/terms" element={<UnderConstruction />} />
          <Route path="/help" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;