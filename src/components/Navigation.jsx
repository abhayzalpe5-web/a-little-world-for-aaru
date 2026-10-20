import React from 'react';
import { Cake, Mail, Heart, BookOpen, Sparkles } from 'lucide-react';

export default function Navigation({ activeTab, onSelectTab }) {
  const tabs = [
    {
      id: 'home',
      label: 'Birthday Home',
      emoji: '🎂',
      icon: Cake,
      badge: 'Home'
    },
    {
      id: 'wishes',
      label: 'Birthday Wishes',
      emoji: '💌',
      icon: Mail,
      badge: 'Letter'
    },
    {
      id: 'reasons',
      label: '100 Reasons I Love You',
      emoji: '💗',
      icon: Heart,
      badge: '100 Reasons'
    },
    {
      id: 'scrapbook',
      label: 'Our Love Scrapbook',
      emoji: '🎀',
      icon: BookOpen,
      badge: 'Scrapbook'
    }
  ];

  return (
    <nav className="site-nav-container" aria-label="Main Navigation">
      <div className="site-nav-inner">
        {/* Top Mini Brand */}
        <div className="nav-brand-title">
          <Sparkles size={16} className="nav-sparkle" />
          <span className="brand-text">A Little World for Aaru</span>
          <span className="brand-heart">❤️</span>
        </div>

        {/* Tab Pills */}
        <ul className="nav-tab-list" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <li key={tab.id} role="presentation" className="nav-item">
                <button
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  className={`nav-tab-button ${isActive ? 'active-tab' : ''}`}
                  onClick={() => {
                    onSelectTab(tab.id);
                    // Scroll to top smoothly
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="tab-emoji-icon" aria-hidden="true">{tab.emoji}</span>
                  <span className="tab-label-text">{tab.label}</span>
                  {isActive && <span className="active-glow-ribbon" aria-hidden="true">🎀</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
