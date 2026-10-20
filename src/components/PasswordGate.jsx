import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Eye, EyeOff, Lock, Heart, Sparkles, Key } from 'lucide-react';
import { EnvelopeIllustration, PostageStamp } from './Illustrations';
import { CONFIG } from '../data/config';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');

    // Normalize comparison (trim)
    if (password.trim() === CONFIG.secretPassword) {
      setIsOpening(true);

      // Trigger celebratory heart confetti
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F8C8DC', '#FADADD', '#D94F70', '#E6D9FF']
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }

      // Smooth transition after envelope opening animation
      setTimeout(() => {
        onUnlock();
      }, 1200);
    } else {
      setIsShaking(true);
      setErrorMsg("Oops, Aaru! That's not our secret key. Try again, beautiful. 💗");
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  return (
    <div className="password-gate-backdrop">
      {/* Decorative floating decorative hearts in background */}
      <div className="gate-floating-decorations" aria-hidden="true">
        <span className="floating-bubble bubble-1">🌸</span>
        <span className="floating-bubble bubble-2">💖</span>
        <span className="floating-bubble bubble-3">✨</span>
        <span className="floating-bubble bubble-4">🎀</span>
        <span className="floating-bubble bubble-5">🌷</span>
        <span className="floating-bubble bubble-6">⭐</span>
      </div>

      <div className={`password-card scrapbook-card-shadow ${isShaking ? 'shake-animation' : ''} ${isOpening ? 'opening-envelope' : ''}`}>
        {/* Postage Stamp decoration on top right */}
        <div className="card-stamp-wrapper">
          <PostageStamp label="AARU ONLY" sub="SECRETS" />
        </div>

        {/* Illustrated Envelope */}
        <div className="gate-envelope-wrapper">
          <EnvelopeIllustration size={160} isOpen={isOpening} />
        </div>

        {/* Romantic Greetings */}
        <div className="gate-header">
          <div className="gate-badge">
            <Sparkles size={14} className="accent-sparkle" />
            <span>A Secret Garden</span>
            <Sparkles size={14} className="accent-sparkle" />
          </div>
          <h1 className="gate-title">Hey, Aaru! 🎀</h1>
          <p className="gate-lead">I made a little world just for you.</p>
          <p className="gate-sub">
            But first, you'll need our little secret key to enter. 💌
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="gate-form">
          <div className="input-field-container">
            <div className="input-icon-left">
              <Key size={18} className="key-icon" />
            </div>

            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Enter your secret password..."
              className="romantic-input"
              autoFocus
              aria-label="Secret password"
              disabled={isOpening}
            />

            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              tabIndex={0}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errorMsg && (
            <div className="gate-error-message" role="alert">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="romantic-primary-btn gate-submit-btn"
            disabled={isOpening}
          >
            <Heart size={18} fill="currentColor" />
            <span>{isOpening ? 'Opening Your World... ✨' : 'Unlock My Little World ❤️'}</span>
          </button>
        </form>

        {/* Romantic Hint Option */}
        <div className="gate-footer">
          <button
            type="button"
            className="hint-toggle-btn"
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? 'Hide Hint 🎀' : 'Need a little hint? 💌'}
          </button>
          {showHint && (
            <p className="hint-text animate-fade-in">
              {CONFIG.passwordHint} (e.g. <code>{CONFIG.secretPassword}</code>)
            </p>
          )}

          <p className="gate-security-note">
            <small>
              ♡ A romantic gate crafted with love for my favourite girl.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
