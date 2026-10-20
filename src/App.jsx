import React, { useState, useEffect } from 'react';
import PasswordGate from './components/PasswordGate';
import Navigation from './components/Navigation';
import BackgroundParticles from './components/BackgroundParticles';
import MusicPlayer from './components/MusicPlayer';
import WelcomeBanner from './components/WelcomeBanner';
import BirthdayCountdown from './components/BirthdayCountdown';
import BirthdayCake from './components/BirthdayCake';
import BirthdayLetterTab from './components/BirthdayLetterTab';
import ReasonsTab from './components/ReasonsTab';
import ScrapbookTab from './components/ScrapbookTab';
import SpecialJournalSection from './components/SpecialJournalSection';
import FinalGift from './components/FinalGift';
import { CONFIG } from './data/config';
import { Lock, Heart, Sparkles, Wand2 } from 'lucide-react';
import './App.css';

export default function App() {
  // Session unlock state
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('aaru_unlocked') === 'true';
  });

  // Current active navigation tab: 'home' | 'wishes' | 'reasons' | 'scrapbook'
  const [activeTab, setActiveTab] = useState('home');

  // Ambient particles toggle
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  const handleUnlock = () => {
    setIsUnlocked(true);
    sessionStorage.setItem('aaru_unlocked', 'true');
  };

  const handleLockAgain = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem('aaru_unlocked');
  };

  const handleBeginStory = () => {
    const target = document.getElementById('countdown-section-anchor');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If not unlocked yet, render the romantic password gate
  if (!isUnlocked) {
    return (
      <main className="app-root gate-mode">
        <BackgroundParticles enabled={particlesEnabled} />
        <PasswordGate onUnlock={handleUnlock} />
      </main>
    );
  }

  return (
    <div className="app-root main-site-mode">
      {/* Background Floating Canvas Elements */}
      <BackgroundParticles enabled={particlesEnabled} />

      {/* Floating Background Music Player */}
      <MusicPlayer />

      {/* Main Romantic Navigation Bar */}
      <header className="sticky-header-wrapper">
        <Navigation activeTab={activeTab} onSelectTab={setActiveTab} />
      </header>

      {/* Main Tab Content Panels */}
      <main className="main-content-area" id="main-content">
        {/* TAB 1: BIRTHDAY HOME */}
        {activeTab === 'home' && (
          <div className="tab-pane home-pane animate-fade-in" role="tabpanel" id="panel-home" aria-labelledby="tab-home">
            {/* 1. Welcome Scrapbook Page */}
            <WelcomeBanner onBeginStory={handleBeginStory} />

            {/* Anchor for smooth scroll */}
            <div id="countdown-section-anchor" />

            {/* 2. Birthday Countdown Section */}
            <BirthdayCountdown />

            {/* 3. 3-Tier Illustrated Animated Birthday Cake */}
            <BirthdayCake />

            {/* 4. Special Journal Letter Section */}
            <SpecialJournalSection />

            {/* 5. Final Interactive Gift Box */}
            <FinalGift />
          </div>
        )}

        {/* TAB 2: BIRTHDAY WISHES */}
        {activeTab === 'wishes' && (
          <div className="tab-pane wishes-pane" role="tabpanel" id="panel-wishes" aria-labelledby="tab-wishes">
            <BirthdayLetterTab />
          </div>
        )}

        {/* TAB 3: 100 REASONS I LOVE YOU */}
        {activeTab === 'reasons' && (
          <div className="tab-pane reasons-pane" role="tabpanel" id="panel-reasons" aria-labelledby="tab-reasons">
            <ReasonsTab />
          </div>
        )}

        {/* TAB 4: OUR LOVE SCRAPBOOK */}
        {activeTab === 'scrapbook' && (
          <div className="tab-pane scrapbook-pane" role="tabpanel" id="panel-scrapbook" aria-labelledby="tab-scrapbook">
            <ScrapbookTab />
          </div>
        )}
      </main>

      {/* Romantic Site Footer */}
      <footer className="romantic-site-footer text-center" role="contentinfo">
        <div className="footer-inner-card scrapbook-card-shadow">
          <div className="footer-ribbon-tag">
            <span>🎀 Forever & Always 🎀</span>
          </div>

          <h3 className="footer-grand-love">
            {CONFIG.signatureMessages.love}
          </h3>
          <h4 className="footer-grand-bday">
            {CONFIG.signatureMessages.birthday}
          </h4>

          <div className="footer-hearts-row">
            <span>🌸</span>
            <span>💖</span>
            <span>⭐</span>
            <span>🌷</span>
            <span>✨</span>
          </div>

          <p className="footer-tagline">
            {CONFIG.signatureMessages.footer}
          </p>

          {/* Quick utility controls */}
          <div className="footer-controls-row">
            <button
              type="button"
              className="footer-mini-btn"
              onClick={() => setParticlesEnabled(!particlesEnabled)}
              title="Toggle floating background petals and hearts"
            >
              <Wand2 size={13} />
              <span>{particlesEnabled ? 'Pause Floating Petals' : 'Resume Floating Petals'}</span>
            </button>

            <button
              type="button"
              className="footer-mini-btn"
              onClick={handleLockAgain}
              title="Lock website with secret key"
            >
              <Lock size={13} />
              <span>Lock World 💌</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
