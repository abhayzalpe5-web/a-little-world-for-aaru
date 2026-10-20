import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, X } from 'lucide-react';
import { BIRTHDAY_WISHES_LETTER } from '../data/loveLetter';
import { PostageStamp, WashiTape } from './Illustrations';

export default function BirthdayLetterTab() {
  const [showHugModal, setShowHugModal] = useState(false);

  const handleSendHug = () => {
    setShowHugModal(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#F8C8DC', '#FF8FA3', '#D94F70', '#FFF8F0']
      });
    } catch (err) {}
  };

  return (
    <div className="birthday-wishes-tab-wrapper animate-fade-in" role="tabpanel" id="panel-wishes" aria-labelledby="tab-wishes">
      {/* Scrapbook Container */}
      <div className="letter-scrapbook-page scrapbook-card-shadow">
        {/* Washi tape strips on top corners */}
        <div className="tape-corner top-left">
          <WashiTape color="pink" pattern="dots" width={120} rotate={-5} />
        </div>
        <div className="tape-corner top-right">
          <WashiTape color="lavender" pattern="stripes" width={110} rotate={6} />
        </div>

        {/* Vintage Stamp Header */}
        <div className="letter-stamp-holder">
          <PostageStamp label="FOR ARPITA" sub="LOVE LETTER" />
        </div>

        {/* Letter Heading */}
        <div className="letter-title-block text-center">
          <div className="romantic-badge">
            <Sparkles size={14} className="accent-sparkle" />
            <span>A Love Letter For You</span>
            <Sparkles size={14} className="accent-sparkle" />
          </div>

          <h2 className="letter-heading-text">
            {BIRTHDAY_WISHES_LETTER.title}
          </h2>
          <p className="letter-subtitle-text">
            {BIRTHDAY_WISHES_LETTER.subtitle}
          </p>
        </div>

        {/* Open Parchment Letter Body */}
        <article className="parchment-letter-body">
          {/* Pressed botanical dried flower illustrations in corners */}
          <div className="pressed-flower-corner top-left-flower" aria-hidden="true">
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 C55 30 70 45 90 50 C70 55 55 70 50 90 C45 70 30 55 10 50 C30 45 45 30 50 10 Z" fill="#FADADD" opacity="0.7" />
              <circle cx="50" cy="50" r="10" fill="#FFE066" />
            </svg>
          </div>

          <div className="pressed-flower-corner bottom-right-flower" aria-hidden="true">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <path d="M20 80 Q50 40 80 20" stroke="#94D2BD" strokeWidth="3" />
              <circle cx="80" cy="20" r="14" fill="#F8C8DC" opacity="0.8" />
              <circle cx="80" cy="20" r="6" fill="#D94F70" />
            </svg>
          </div>

          {/* Salutation */}
          <p className="letter-salutation">
            {BIRTHDAY_WISHES_LETTER.salutation}
          </p>

          {/* Letter Paragraphs */}
          <div className="letter-paragraphs">
            {BIRTHDAY_WISHES_LETTER.paragraphs.map((para, index) => (
              <p key={index} className="letter-para">
                {para}
              </p>
            ))}
          </div>

          {/* Signoff */}
          <div className="letter-signoff-wrap">
            <p className="letter-signoff">
              {BIRTHDAY_WISHES_LETTER.signOff}
            </p>

            <div className="letter-grand-declaration">
              <span>{BIRTHDAY_WISHES_LETTER.declaration}</span>
            </div>
          </div>

          {/* Virtual Hug Action Button */}
          <div className="letter-action-footer text-center">
            <button
              type="button"
              className="romantic-primary-btn virtual-hug-btn"
              onClick={handleSendHug}
              aria-label="Send a virtual hug"
            >
              <Heart size={20} fill="currentColor" />
              <span>Send a Virtual Hug 🤗</span>
            </button>
          </div>
        </article>

        {/* Bottom Tape */}
        <div className="tape-corner bottom-left">
          <WashiTape color="mint" pattern="dots" width={100} rotate={4} />
        </div>
      </div>

      {/* Virtual Hug Modal */}
      {showHugModal && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowHugModal(false)}>
          <div className="hug-modal-card scrapbook-card-shadow animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowHugModal(false)}
              aria-label="Close hug modal"
            >
              <X size={20} />
            </button>

            <div className="hug-heart-animation">
              <svg width="120" height="120" viewBox="0 0 100 100" className="pulsing-hug-heart">
                <defs>
                  <radialGradient id="hugGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF7597" />
                    <stop offset="100%" stopColor="#D94F70" />
                  </radialGradient>
                </defs>
                <path
                  d="M50 82 C50 82 14 56 14 32 C14 18 25 10 37 13 C44 15 48 20 50 20 C52 20 56 15 63 13 C75 10 86 18 86 32 C86 56 50 82 50 82 Z"
                  fill="url(#hugGrad)"
                />
                <circle cx="34" cy="24" r="4" fill="#FFFFFF" opacity="0.6" />
              </svg>
            </div>

            <h3 className="hug-modal-title">A Big Warm Hug For You! 🤗❤️</h3>
            <p className="hug-modal-message">
              "Sending you the warmest hug, the sweetest kisses, and all my love. ❤️"
            </p>

            <button
              type="button"
              className="romantic-secondary-btn hug-ok-btn"
              onClick={() => setShowHugModal(false)}
            >
              Receive With Love ♡
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
