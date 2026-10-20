import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, Heart, RotateCcw } from 'lucide-react';
import { FINAL_GIFT_MESSAGE } from '../data/loveLetter';
import { WashiTape } from './Illustrations';

export default function FinalGift() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);

    try {
      // 1. Initial burst
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#F8C8DC', '#FADADD', '#D94F70', '#FFE066', '#FFFFFF']
      });

      // 2. Follow-up bursts from both sides
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 55,
          spread: 60,
          origin: { x: 0.15, y: 0.65 },
          colors: ['#FF7597', '#FADADD', '#E6D9FF']
        });
        confetti({
          particleCount: 50,
          angle: 125,
          spread: 60,
          origin: { x: 0.85, y: 0.65 },
          colors: ['#FF7597', '#FADADD', '#E6D9FF']
        });
      }, 300);
    } catch (e) {}
  };

  const handleCloseGift = () => {
    setIsOpen(false);
  };

  return (
    <section className="final-gift-section" aria-labelledby="gift-heading">
      <div className="gift-card-wrapper scrapbook-card-shadow text-center">
        <div className="tape-corner top-center">
          <WashiTape color="rose" pattern="dots" width={130} rotate={-1} />
        </div>

        {/* Header */}
        <div className="gift-header">
          <div className="romantic-badge">
            <Gift size={14} className="accent-sparkle" />
            <span>The Grand Finale</span>
            <Gift size={14} className="accent-sparkle" />
          </div>

          <h2 id="gift-heading" className="gift-main-title">
            Wait, Aaru... One Last Little Surprise! 🎁
          </h2>
          <p className="gift-sub-title">
            A special gift wrapped with ribbon, sealed with a wish, and opened with love.
          </p>
        </div>

        {/* Large Illustrated Gift Box */}
        <div className="gift-box-stage">
          <div className={`gift-box-visual ${isOpen ? 'box-opened' : 'box-waiting'}`}>
            <svg
              width="240"
              height="240"
              viewBox="0 0 200 200"
              className="gift-svg"
              role="img"
              aria-label="Illustrated pink gift box with ribbon"
            >
              <defs>
                <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFF0F5" />
                  <stop offset="60%" stopColor="#F8C8DC" />
                  <stop offset="100%" stopColor="#F5B5CD" />
                </linearGradient>
                <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FADADD" />
                </linearGradient>
                <filter id="giftShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#D94F70" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* Shadow */}
              <ellipse cx="100" cy="180" rx="65" ry="12" fill="#E6D9FF" opacity="0.6" />

              {/* Box Lower Base */}
              <g filter="url(#giftShadow)">
                <rect x="45" y="90" width="110" height="85" rx="8" fill="url(#boxGrad)" stroke="#F5B5CD" strokeWidth="2" />
                {/* Vertical Ribbon */}
                <rect x="90" y="90" width="20" height="85" fill="#D94F70" />
                <line x1="100" y1="90" x2="100" y2="175" stroke="#FF8FA3" strokeWidth="2" />
                {/* Horizontal Ribbon on Base */}
                <rect x="45" y="125" width="110" height="15" fill="#D94F70" opacity="0.9" />
              </g>

              {/* Floating hearts emerging when open */}
              {isOpen && (
                <g className="gift-hearts-burst">
                  <path d="M70 70 C70 70 65 65 65 60 C65 57 68 55 70 56.5 C72 55 75 57 75 60 C75 65 70 70 70 70 Z" fill="#FF7597" />
                  <path d="M130 65 C130 65 125 60 125 55 C125 52 128 50 130 51.5 C132 50 135 52 135 55 C135 60 130 65 130 65 Z" fill="#D94F70" />
                  <circle cx="100" cy="65" r="4" fill="#FFE066" />
                </g>
              )}

              {/* Lid & Bow (Animated on Open) */}
              <g className={`gift-lid-group ${isOpen ? 'lid-lift-off' : ''}`}>
                <rect x="38" y="70" width="124" height="24" rx="6" fill="url(#lidGrad)" stroke="#F5B5CD" strokeWidth="2" />
                {/* Lid vertical ribbon */}
                <rect x="90" y="70" width="20" height="24" fill="#D94F70" />

                {/* Big Pink Satin Bow */}
                <g transform="translate(100, 68)">
                  <path d="M-6 -6 C-24 -24 -36 -12 -20 0 C-36 12 -24 24 -6 6 Z" fill="#D94F70" />
                  <path d="M6 -6 C24 -24 36 -12 20 0 C36 12 24 24 6 6 Z" fill="#D94F70" />
                  <circle cx="0" cy="0" r="7" fill="#FFF8F0" stroke="#D94F70" strokeWidth="2" />
                  <path d="M-4 6 Q-14 26 -22 35" stroke="#D94F70" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <path d="M4 6 Q14 26 22 35" stroke="#D94F70" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </g>
              </g>

              {/* Sparkles around box */}
              <g transform="translate(25, 110)">
                <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6 Z" fill="#FFE066" />
              </g>
              <g transform="translate(175, 120)">
                <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6 Z" fill="#FF7597" />
              </g>
            </svg>
          </div>
        </div>

        {/* Open Button or Close Option */}
        <div className="gift-actions-container">
          {!isOpen ? (
            <button
              type="button"
              className="romantic-primary-btn grand-gift-btn"
              onClick={handleOpenGift}
            >
              <Heart size={20} fill="currentColor" />
              <span>Open Your Final Gift ❤️</span>
              <Sparkles size={18} />
            </button>
          ) : (
            <button
              type="button"
              className="romantic-secondary-btn repack-btn"
              onClick={handleCloseGift}
            >
              <RotateCcw size={15} />
              <span>Wrap Up & Open Again 🎀</span>
            </button>
          )}
        </div>

        {/* Revealed Final Message */}
        {isOpen && (
          <div className="final-revealed-parchment animate-pop-in">
            <div className="parchment-tape">
              <WashiTape color="pink" pattern="stripes" width={110} rotate={2} />
            </div>

            <div className="parchment-inner">
              <h3 className="final-heading">{FINAL_GIFT_MESSAGE.heading}</h3>

              <div className="final-paragraphs">
                {FINAL_GIFT_MESSAGE.paragraphs.map((p, i) => (
                  <p key={i} className="final-para">
                    {p}
                  </p>
                ))}
              </div>

              <div className="final-closing-lines">
                <p className="final-decl-love">{FINAL_GIFT_MESSAGE.closing[0]}</p>
                <p className="final-decl-bday">{FINAL_GIFT_MESSAGE.closing[1]}</p>
              </div>

              {/* Glowing Animated Heart */}
              <div className="glowing-final-heart-wrapper">
                <div className="glowing-heart-pulse">
                  <svg width="60" height="60" viewBox="0 0 100 100">
                    <path
                      d="M50 82 C50 82 14 56 14 32 C14 18 25 10 37 13 C44 15 48 20 50 20 C52 20 56 15 63 13 C75 10 86 18 86 32 C86 56 50 82 50 82 Z"
                      fill="#D94F70"
                    />
                    <circle cx="34" cy="24" r="4" fill="#FFFFFF" opacity="0.6" />
                  </svg>
                </div>
                <p className="final-tagline">{FINAL_GIFT_MESSAGE.tagline}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
