import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flame, RotateCcw } from 'lucide-react';
import { WashiTape } from './Illustrations';

export default function BirthdayCake() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [isBlowing, setIsBlowing] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  const handleMakeWish = () => {
    if (!candlesLit || isBlowing) return;
    setIsBlowing(true);

    // 1. Flames flicker intensely for a brief moment
    setTimeout(() => {
      // 2. Extinguish candles
      setCandlesLit(false);
      setIsBlowing(false);
      setWishMade(true);

      // 3. Confetti burst across the screen
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F8C8DC', '#FADADD', '#D94F70', '#FFE066', '#FFFFFF']
        });

        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0.2, y: 0.6 },
            colors: ['#FF8FA3', '#FADADD', '#E6D9FF']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 0.8, y: 0.6 },
            colors: ['#FF8FA3', '#FADADD', '#E6D9FF']
          });
        }, 250);
      } catch (e) {
        // Safe fallback
      }
    }, 700);
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setWishMade(false);
    setIsBlowing(false);
  };

  return (
    <section className="birthday-cake-section" aria-labelledby="cake-heading">
      <div className="cake-card-wrapper scrapbook-card-shadow">
        <div className="tape-corner top-right">
          <WashiTape color="pink" pattern="dots" width={110} rotate={-3} />
        </div>

        {/* Heading */}
        <div className="cake-header text-center">
          <div className="romantic-badge">
            <Sparkles size={14} className="accent-sparkle" />
            <span>Birthday Sweetness</span>
            <Sparkles size={14} className="accent-sparkle" />
          </div>
          <h2 id="cake-heading" className="cake-title">
            A little cake for the sweetest girl in my world. 🎂
          </h2>
          <p className="cake-subtitle">
            Crafted with three tiers of love, sweet strawberries, and a heart full of wishes.
          </p>
        </div>

        {/* 3-Tier Illustrated SVG Birthday Cake */}
        <div className="cake-display-container">
          <svg
            viewBox="0 0 340 380"
            className="cake-svg"
            role="img"
            aria-label="Illustrated three-tier pink birthday cake with glowing candles"
          >
            <defs>
              <radialGradient id="cakePlateGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF8F0" />
                <stop offset="90%" stopColor="#FADADD" />
                <stop offset="100%" stopColor="#E6D9FF" />
              </radialGradient>
              <linearGradient id="tier1Grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="60%" stopColor="#F8C8DC" />
                <stop offset="100%" stopColor="#F5B5CD" />
              </linearGradient>
              <linearGradient id="tier2Grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF5F7" />
                <stop offset="60%" stopColor="#FADADD" />
                <stop offset="100%" stopColor="#F8C8DC" />
              </linearGradient>
              <linearGradient id="tier3Grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#FCE4EC" />
                <stop offset="100%" stopColor="#FADADD" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#FF4D4D" />
                <stop offset="40%" stopColor="#FFA600" />
                <stop offset="85%" stopColor="#FFF275" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="cakeShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#D94F70" floodOpacity="0.16" />
              </filter>
            </defs>

            {/* Soft Shadow beneath Cake Stand */}
            <ellipse cx="170" cy="358" rx="130" ry="14" fill="#E6D9FF" opacity="0.6" />

            {/* Cake Stand Pedestal */}
            <path d="M145 352 L195 352 L185 330 L155 330 Z" fill="#FFF8F0" stroke="#F5B5CD" strokeWidth="2" />
            <ellipse cx="170" cy="352" rx="45" ry="6" fill="#FADADD" />

            {/* Cake Stand Platter */}
            <ellipse cx="170" cy="330" rx="140" ry="18" fill="url(#cakePlateGrad)" stroke="#F8C8DC" strokeWidth="2.5" />
            <ellipse cx="170" cy="328" rx="132" ry="15" fill="#FFF8F0" opacity="0.8" />

            {/* ===================== TIER 1 (BOTTOM LAYER) ===================== */}
            <g filter="url(#cakeShadow)">
              {/* Bottom tier cylinder body */}
              <rect x="55" y="250" width="230" height="74" rx="14" fill="url(#tier1Grad)" stroke="#F5B5CD" strokeWidth="2" />
              <ellipse cx="170" cy="250" rx="115" ry="18" fill="#FFF0F5" stroke="#F5B5CD" strokeWidth="2" />

              {/* White Cream Drippings / Scallops */}
              <path
                d="M55 250 Q66 268 78 250 Q90 270 102 250 Q114 266 126 250 Q138 272 150 250 Q162 268 174 250 Q186 270 198 250 Q210 266 222 250 Q234 272 246 250 Q258 268 270 250 Q280 262 285 250"
                fill="#FFFFFF"
                stroke="#FADADD"
                strokeWidth="1.5"
              />

              {/* Tier 1 Strawberries */}
              {[75, 120, 170, 220, 265].map((x, i) => (
                <g key={`sb-t1-${i}`} transform={`translate(${x}, 285)`}>
                  <path d="M0 -6 C6 -6 8 0 0 10 C-8 0 -6 -6 0 -6 Z" fill="#D94F70" />
                  <path d="M-3 -6 Q0 -9 3 -6" stroke="#94D2BD" strokeWidth="2" fill="none" />
                  <circle cx="-2" cy="0" r="0.8" fill="#FFF8F0" />
                  <circle cx="2" cy="2" r="0.8" fill="#FFF8F0" />
                  <circle cx="0" cy="5" r="0.8" fill="#FFF8F0" />
                </g>
              ))}

              {/* Pink & White Sprinkles on Tier 1 */}
              {[
                { x: 95, y: 275, r: 15, c: '#FFFFFF' },
                { x: 145, y: 282, r: -25, c: '#D94F70' },
                { x: 195, y: 278, r: 35, c: '#FFFFFF' },
                { x: 245, y: 284, r: -15, c: '#FF7597' },
                { x: 105, y: 305, r: 45, c: '#FFB3C6' },
                { x: 160, y: 310, r: -30, c: '#FFFFFF' },
                { x: 210, y: 308, r: 20, c: '#D94F70' }
              ].map((sp, idx) => (
                <line
                  key={`sp1-${idx}`}
                  x1={sp.x}
                  y1={sp.y}
                  x2={sp.x + 6}
                  y2={sp.y + 2}
                  stroke={sp.c}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  transform={`rotate(${sp.r} ${sp.x} ${sp.y})`}
                />
              ))}

              {/* Tiny hearts along bottom rim */}
              {[100, 140, 200, 240].map((hx, idx) => (
                <path
                  key={`h-t1-${idx}`}
                  d={`M${hx} 315 C${hx} 315 ${hx - 4} 312 ${hx - 4} 309 C${hx - 4} 307 ${hx - 2} 306 ${hx} 307.5 C${hx + 2} 306 ${hx + 4} 307 ${hx + 4} 309 C${hx + 4} 312 ${hx} 315 Z`}
                  fill="#FF8FA3"
                />
              ))}
            </g>

            {/* ===================== TIER 2 (MIDDLE LAYER) ===================== */}
            <g filter="url(#cakeShadow)">
              <rect x="85" y="180" width="170" height="65" rx="12" fill="url(#tier2Grad)" stroke="#F5B5CD" strokeWidth="2" />
              <ellipse cx="170" cy="180" rx="85" ry="15" fill="#FFF5F7" stroke="#F5B5CD" strokeWidth="2" />

              {/* White Cream Drippings / Scallops */}
              <path
                d="M85 180 Q96 195 106 180 Q116 198 127 180 Q138 195 149 180 Q160 200 170 180 Q181 195 192 180 Q203 198 214 180 Q225 195 236 180 Q246 195 255 180"
                fill="#FFFFFF"
                stroke="#FADADD"
                strokeWidth="1.5"
              />

              {/* Tier 2 Strawberries */}
              {[110, 170, 230].map((x, i) => (
                <g key={`sb-t2-${i}`} transform={`translate(${x}, 208)`}>
                  <path d="M0 -6 C6 -6 8 0 0 10 C-8 0 -6 -6 0 -6 Z" fill="#D94F70" />
                  <path d="M-3 -6 Q0 -9 3 -6" stroke="#94D2BD" strokeWidth="2" fill="none" />
                  <circle cx="-2" cy="0" r="0.8" fill="#FFF8F0" />
                  <circle cx="2" cy="2" r="0.8" fill="#FFF8F0" />
                </g>
              ))}

              {/* Sprinkles on Tier 2 */}
              {[
                { x: 130, y: 205, r: 20, c: '#FFFFFF' },
                { x: 150, y: 215, r: -35, c: '#D94F70' },
                { x: 190, y: 210, r: 40, c: '#FFFFFF' },
                { x: 210, y: 218, r: -15, c: '#FF7597' }
              ].map((sp, idx) => (
                <line
                  key={`sp2-${idx}`}
                  x1={sp.x}
                  y1={sp.y}
                  x2={sp.x + 5}
                  y2={sp.y + 2}
                  stroke={sp.c}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  transform={`rotate(${sp.r} ${sp.x} ${sp.y})`}
                />
              ))}
            </g>

            {/* ===================== TIER 3 (TOP LAYER) ===================== */}
            <g filter="url(#cakeShadow)">
              <rect x="115" y="120" width="110" height="55" rx="10" fill="url(#tier3Grad)" stroke="#F5B5CD" strokeWidth="2" />
              <ellipse cx="170" cy="120" rx="55" ry="12" fill="#FFFFFF" stroke="#F5B5CD" strokeWidth="2" />

              {/* White Cream Drippings / Scallops */}
              <path
                d="M115 120 Q124 133 133 120 Q142 135 152 120 Q161 133 170 120 Q179 135 188 120 Q198 133 207 120 Q216 133 225 120"
                fill="#FFFFFF"
                stroke="#FADADD"
                strokeWidth="1.5"
              />

              {/* Tier 3 Strawberries */}
              {[138, 170, 202].map((x, i) => (
                <g key={`sb-t3-${i}`} transform={`translate(${x}, 142)`}>
                  <path d="M0 -5 C5 -5 6 0 0 8 C-6 0 -5 -5 0 -5 Z" fill="#D94F70" />
                  <path d="M-2 -5 Q0 -8 2 -5" stroke="#94D2BD" strokeWidth="1.5" fill="none" />
                  <circle cx="0" cy="2" r="0.7" fill="#FFF8F0" />
                </g>
              ))}
            </g>

            {/* ===================== CANDLES ON TOP ===================== */}
            {[
              { x: 140, y: 88, color: '#FADADD', stripe: '#D94F70' },
              { x: 170, y: 84, color: '#FFF8F0', stripe: '#FF7597' },
              { x: 200, y: 88, color: '#E6D9FF', stripe: '#8C3A54' }
            ].map((candle, idx) => (
              <g key={`candle-${idx}`} className="candle-group">
                {/* Candle body */}
                <rect x={candle.x - 4} y={candle.y} width="8" height="30" rx="3" fill={candle.color} stroke="#F5B5CD" strokeWidth="1" />
                {/* Diagonal stripe */}
                <line x1={candle.x - 4} y1={candle.y + 8} x2={candle.x + 4} y2={candle.y + 14} stroke={candle.stripe} strokeWidth="1.8" />
                <line x1={candle.x - 4} y1={candle.y + 18} x2={candle.x + 4} y2={candle.y + 24} stroke={candle.stripe} strokeWidth="1.8" />

                {/* Candle Wick */}
                <line x1={candle.x} y1={candle.y} x2={candle.x} y2={candle.y - 6} stroke="#5A2A38" strokeWidth="1.5" strokeLinecap="round" />

                {/* Animated Candle Flame (If Lit) */}
                {candlesLit ? (
                  <g
                    className={`candle-flame-wrapper ${isBlowing ? 'flame-flicker-intense' : 'flame-sway'}`}
                    filter="url(#flameGlow)"
                    transform={`translate(${candle.x}, ${candle.y - 12})`}
                  >
                    <ellipse cx="0" cy="0" rx="4.5" ry="8" fill="url(#flameGrad)" />
                    <circle cx="0" cy="2" r="2.2" fill="#FFFFFF" />
                  </g>
                ) : (
                  // Smoke wisp when blown out
                  <g className="smoke-wisp-anim" transform={`translate(${candle.x}, ${candle.y - 12})`}>
                    <path d="M0 0 Q-3 -8 0 -16 T2 -24" stroke="#D8C3FF" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
                  </g>
                )}
              </g>
            ))}

            {/* Sparkles around Cake */}
            {[
              { x: 30, y: 150, s: 1 },
              { x: 310, y: 160, s: 0.9 },
              { x: 45, y: 290, s: 0.8 },
              { x: 295, y: 285, s: 1.1 },
              { x: 100, y: 60, s: 0.85 },
              { x: 240, y: 60, s: 0.85 }
            ].map((sparkle, i) => (
              <g key={`sparkle-${i}`} transform={`translate(${sparkle.x}, ${sparkle.y}) scale(${sparkle.s})`} className="sparkle-float">
                <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8 Z" fill="#FFE066" />
                <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
              </g>
            ))}
          </svg>
        </div>

        {/* Wish Actions */}
        <div className="cake-actions-wrapper text-center">
          {candlesLit ? (
            <button
              type="button"
              className="romantic-primary-btn make-wish-btn"
              onClick={handleMakeWish}
              disabled={isBlowing}
            >
              <Sparkles size={18} />
              <span>{isBlowing ? 'Blowing Out Candles... ✨' : 'Make a Wish, Aaru! ✨'}</span>
            </button>
          ) : (
            <button
              type="button"
              className="romantic-secondary-btn relight-btn"
              onClick={handleRelight}
            >
              <RotateCcw size={16} />
              <span>Light the Candles Again 🎂</span>
            </button>
          )}
        </div>

        {/* Wish Revealed Card */}
        {wishMade && (
          <div className="cake-wish-message-card animate-pop-in">
            <div className="wish-card-ribbon">
              <span>🎀 A Birthday Wish Just For You 🎀</span>
            </div>

            <div className="wish-text-content">
              <p className="wish-lead">Close your eyes, Aaru, and make a beautiful wish.</p>
              <p>I hope every dream in your heart finds its way into your life.</p>
              <p>
                I hope you always have reasons to smile, people who care about you, and beautiful moments to remember.
              </p>
              <p className="wish-signature">
                Happy Birthday, my princess! ❤️🎂
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
