import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Clock, Sparkles, RefreshCw } from 'lucide-react';
import { CONFIG } from '../data/config';
import { WashiTape } from './Illustrations';

export default function BirthdayCountdown() {
  // Mode toggle: allows toggling between configured 2025 date and upcoming birthday countdown
  const [targetDateStr, setTargetDateStr] = useState(CONFIG.birthdayDate);
  const [isNextMode, setIsNextMode] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: true
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(targetDateStr).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isPast: false
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const toggleTargetDate = () => {
    if (isNextMode) {
      setTargetDateStr(CONFIG.birthdayDate);
      setIsNextMode(false);
    } else {
      // Set to upcoming 21 October
      const currentYear = new Date().getFullYear();
      let nextTarget = new Date(`${currentYear}-10-21T00:00:00+05:30`);
      if (nextTarget.getTime() <= Date.now()) {
        nextTarget = new Date(`${currentYear + 1}-10-21T00:00:00+05:30`);
      }
      setTargetDateStr(nextTarget.toISOString());
      setIsNextMode(true);
    }
  };

  return (
    <section className="birthday-countdown-section" aria-labelledby="countdown-heading">
      <div className="countdown-card-wrapper scrapbook-card-shadow">
        <div className="tape-corner top-center">
          <WashiTape color="rose" pattern="stripes" width={130} rotate={1} />
        </div>

        {/* Section Header */}
        <div className="countdown-header text-center">
          <div className="romantic-badge">
            <Calendar size={14} className="accent-sparkle" />
            <span>21 October • Asia/Kolkata (IST)</span>
          </div>

          <h2 id="countdown-heading" className="countdown-title">
            Counting Every Moment for My Favourite Girl 💗
          </h2>
          <p className="countdown-subtitle">
            Every second that ticks by is another moment I cherish having you in my life.
          </p>
        </div>

        {/* Floating animated floral hearts around */}
        <div className="countdown-decorations" aria-hidden="true">
          <span className="flower-decor f-top-left">🌸</span>
          <span className="flower-decor f-top-right">🌷</span>
          <span className="flower-decor f-bottom-left">💖</span>
          <span className="flower-decor f-bottom-right">🌼</span>
        </div>

        {/* Timer Display or Celebratory Message */}
        {timeLeft.isPast ? (
          <div className="past-birthday-celebration animate-fade-in">
            <div className="celebration-ribbon-badge">
              <span className="cake-icon">🎂</span>
              <span className="celebration-label">CELEBRATING MY BEAUTIFUL GIRL</span>
              <span className="cake-icon">🎂</span>
            </div>

            <div className="celebration-quotes">
              <h3 className="celebration-heading">
                Happy Birthday, My Beautiful Aaru! 🎂❤️
              </h3>
              <p className="celebration-subtext">
                Today, tomorrow, and every day, you deserve to feel special.
              </p>
            </div>

            <div className="past-cards-preview">
              <div className="zero-card">
                <span className="zero-num">21</span>
                <span className="zero-lbl">October</span>
              </div>
              <div className="zero-divider">♡</div>
              <div className="zero-card">
                <span className="zero-num">365</span>
                <span className="zero-lbl">Days Of Love</span>
              </div>
              <div className="zero-divider">♡</div>
              <div className="zero-card">
                <span className="zero-num">∞</span>
                <span className="zero-lbl">Cherished</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="live-countdown-grid animate-fade-in">
            <div className="time-card">
              <span className="time-digit">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="time-label">DAYS</span>
              <span className="card-deco-heart">♡</span>
            </div>
            <div className="time-card">
              <span className="time-digit">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">HOURS</span>
              <span className="card-deco-heart">♡</span>
            </div>
            <div className="time-card">
              <span className="time-digit">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">MINUTES</span>
              <span className="card-deco-heart">♡</span>
            </div>
            <div className="time-card">
              <span className="time-digit">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">SECONDS</span>
              <span className="card-deco-heart">♡</span>
            </div>
          </div>
        )}

        {/* Date Switcher Toggle */}
        <div className="countdown-actions text-center">
          <button
            type="button"
            className="romantic-secondary-btn"
            onClick={toggleTargetDate}
            title="Toggle between configured celebration and live future countdown"
          >
            <RefreshCw size={14} className="spin-icon" />
            <span>
              {isNextMode
                ? "Switch to Birthday Mode (21 Oct 2025) 🎂"
                : "Preview Live Countdown to Upcoming Birthday ⏰"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
