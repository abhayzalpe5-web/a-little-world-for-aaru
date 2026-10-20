import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Shuffle, Eye, EyeOff, X, Award } from 'lucide-react';
import { REASONS, LAST_SECRET_REASON } from '../data/reasons';
import { WashiTape } from './Illustrations';

export default function ReasonsTab() {
  const [revealedIds, setRevealedIds] = useState(new Set());
  const [randomModalReason, setRandomModalReason] = useState(null);
  const [showSecretModal, setShowSecretModal] = useState(false);

  const totalCount = REASONS.length;
  const discoveredCount = revealedIds.size;
  const progressPercent = Math.round((discoveredCount / totalCount) * 100);

  const toggleCard = (id) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // Small mini confetti when hitting milestones
        if (next.size === 25 || next.size === 50 || next.size === 75 || next.size === 100) {
          try {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#F8C8DC', '#FF7597', '#FFE066']
            });
          } catch (e) {}
        }
      }
      return next;
    });
  };

  const handleRevealAll = () => {
    if (revealedIds.size === totalCount) {
      // Fold all
      setRevealedIds(new Set());
    } else {
      // Reveal all
      const all = new Set(REASONS.map((r) => r.id));
      setRevealedIds(all);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F8C8DC', '#FADADD', '#D94F70', '#E6D9FF']
        });
      } catch (e) {}
    }
  };

  const handleRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * REASONS.length);
    const chosen = REASONS[randomIndex];
    setRevealedIds((prev) => new Set(prev).add(chosen.id));
    setRandomModalReason(chosen);
  };

  const handleOpenSecret = () => {
    setShowSecretModal(true);
    try {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.5 },
        colors: ['#D94F70', '#FF7597', '#FADADD', '#FFE066']
      });
    } catch (e) {}
  };

  const getDoodleEmoji = (type) => {
    switch (type) {
      case 'heart': return '💖';
      case 'star': return '⭐';
      case 'flower': return '🌸';
      case 'bow': return '🎀';
      case 'ribbon': return '🎗️';
      case 'sparkle': default: return '✨';
    }
  };

  return (
    <div className="reasons-tab-container animate-fade-in" role="tabpanel" id="panel-reasons" aria-labelledby="tab-reasons">
      {/* Header Block */}
      <div className="reasons-header-card scrapbook-card-shadow text-center">
        <div className="tape-corner top-center">
          <WashiTape color="lavender" pattern="dots" width={130} rotate={-1} />
        </div>

        <div className="romantic-badge">
          <Heart size={14} fill="currentColor" />
          <span>Little Love Notes</span>
          <Heart size={14} fill="currentColor" />
        </div>

        <h2 className="reasons-main-heading">
          100 Little Reasons Why I Love You, Aaru 💗
        </h2>
        <p className="reasons-sub-heading">
          If I wrote down every reason, 100 would never be enough.
        </p>

        {/* Progress Tracker */}
        <div className="discovery-progress-bar-wrap">
          <div className="progress-info-row">
            <span className="progress-title">
              <Award size={15} className="accent-sparkle" />
              Reasons Discovered:
            </span>
            <span className="progress-fraction">
              <strong>{discoveredCount}</strong> of {totalCount} ({progressPercent}%) 💌
            </span>
          </div>

          <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="reasons-actions-row">
          <button
            type="button"
            className="romantic-secondary-btn"
            onClick={handleRevealAll}
          >
            {revealedIds.size === totalCount ? (
              <>
                <EyeOff size={16} />
                <span>Fold All Notes 💌</span>
              </>
            ) : (
              <>
                <Eye size={16} />
                <span>Reveal All 100 Reasons ✨</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="romantic-primary-btn"
            onClick={handleRandomReason}
          >
            <Shuffle size={16} />
            <span>Give Me a Random Reason 🎲</span>
          </button>
        </div>
      </div>

      {/* Grid of 100 Interactive Scrapbook Note Cards */}
      <div className="reasons-cards-grid" aria-label="100 reasons grid">
        {REASONS.map((item) => {
          const isFlipped = revealedIds.has(item.id);

          return (
            <div
              key={item.id}
              className={`reason-flip-card paper-color-${item.color} ${isFlipped ? 'flipped' : ''}`}
              onClick={() => toggleCard(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleCard(item.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isFlipped}
              aria-label={`Reason number ${item.id}. Click to ${isFlipped ? 'hide' : 'reveal'}`}
            >
              <div className="card-flipper">
                {/* Front of Note Card */}
                <div className="card-face card-front">
                  <div className="mini-washi-tape" />
                  <div className="card-top-info">
                    <span className="reason-number-badge">#{item.id}</span>
                    <span className="reason-doodle-icon">{getDoodleEmoji(item.doodle)}</span>
                  </div>

                  <div className="front-center-content">
                    <span className="folded-heart">💌</span>
                    <span className="tap-to-open-hint">Tap to open</span>
                  </div>

                  <div className="card-bottom-line">
                    <span className="little-sparkle">♡</span>
                  </div>
                </div>

                {/* Back of Note Card (Revealed Reason) */}
                <div className="card-face card-back">
                  <div className="mini-washi-tape back-tape" />
                  <div className="back-card-header">
                    <span className="back-reason-num">Reason #{item.id}</span>
                    <span className="back-heart-tag">❤️</span>
                  </div>

                  <p className="reason-full-text">
                    "{item.text}"
                  </p>

                  <div className="back-card-footer">
                    <span className="back-tap-hint">Tap to fold</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section: One Last Reason */}
      <div className="reasons-bottom-summary scrapbook-card-shadow text-center">
        <p className="reasons-summary-text">
          100 reasons, one beautiful girl, and a heart that still has so much more to say. ❤️
        </p>

        <button
          type="button"
          className="romantic-primary-btn grand-secret-btn"
          onClick={handleOpenSecret}
        >
          <Heart size={18} fill="currentColor" />
          <span>One Last Reason... 💌</span>
        </button>
      </div>

      {/* Random Reason Spotlight Modal */}
      {randomModalReason && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setRandomModalReason(null)}>
          <div className="random-reason-modal scrapbook-card-shadow animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setRandomModalReason(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-pill-tag">
              <Sparkles size={14} className="accent-sparkle" />
              <span>Random Reason For Aaru</span>
              <Sparkles size={14} className="accent-sparkle" />
            </div>

            <div className="spotlight-card-body paper-color-cream">
              <div className="spotlight-num">Reason #{randomModalReason.id}</div>
              <p className="spotlight-reason-text">"{randomModalReason.text}"</p>
              <div className="spotlight-signature">Forever & Always ❤️</div>
            </div>

            <button
              type="button"
              className="romantic-secondary-btn"
              onClick={() => setRandomModalReason(null)}
            >
              Close & Keep Reading ♡
            </button>
          </div>
        </div>
      )}

      {/* One Last Secret Reason Modal */}
      {showSecretModal && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowSecretModal(false)}>
          <div className="secret-modal-card scrapbook-card-shadow animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowSecretModal(false)}
              aria-label="Close secret modal"
            >
              <X size={20} />
            </button>

            <div className="secret-modal-envelope-icon">
              <span className="big-envelope-emoji">💌</span>
            </div>

            <h3 className="secret-modal-title">
              {LAST_SECRET_REASON.title}
            </h3>

            <div className="secret-modal-body">
              {LAST_SECRET_REASON.message.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="secret-para">
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              type="button"
              className="romantic-primary-btn"
              onClick={() => setShowSecretModal(false)}
            >
              Forever in My Heart ♡
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
