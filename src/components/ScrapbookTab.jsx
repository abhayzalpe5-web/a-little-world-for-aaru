import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { SCRAPBOOK_SLIDES } from '../data/scrapbookSlides';
import {
  TeddyBear,
  EnvelopeIllustration,
  SmilingFlowers,
  PinkMoonPlanet,
  JarOfHearts,
  ShootingStarSky,
  ScrapbookRibbon,
  TwoHeartsStars,
  PostageStamp,
  WashiTape
} from './Illustrations';

export default function ScrapbookTab() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const totalSlides = SCRAPBOOK_SLIDES.length;
  const currentSlide = SCRAPBOOK_SLIDES[currentSlideIndex];

  const goToPrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const goToNext = () => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> go next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> go prev
      goToPrev();
    }
  };

  // Render specific illustration based on slide metadata
  const renderSlideIllustration = (type) => {
    switch (type) {
      case 'teddy_bear_heart':
        return <TeddyBear size={170} />;
      case 'envelope_flowers':
        return <EnvelopeIllustration size={160} isOpen={false} />;
      case 'smiling_flowers':
        return <SmilingFlowers size={170} />;
      case 'open_letter_stamp':
        return <EnvelopeIllustration size={165} isOpen={true} />;
      case 'pink_moon_planet':
        return <PinkMoonPlanet size={170} />;
      case 'jar_of_hearts':
        return <JarOfHearts size={170} />;
      case 'mini_cake_candles':
        return (
          <div className="mini-cake-art">
            <svg width="170" height="170" viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="160" rx="60" ry="10" fill="#E6D9FF" opacity="0.6" />
              <rect x="50" y="100" width="100" height="55" rx="10" fill="#F8C8DC" stroke="#F5B5CD" strokeWidth="2" />
              <ellipse cx="100" cy="100" rx="50" ry="12" fill="#FFF0F5" stroke="#F5B5CD" strokeWidth="2" />
              {/* candle */}
              <rect x="97" y="70" width="6" height="26" rx="2" fill="#FFF8F0" stroke="#F5B5CD" />
              <circle cx="100" cy="62" r="5" fill="#FFE066" />
              <circle cx="100" cy="62" r="2.5" fill="#FFFFFF" />
              {/* strawberry */}
              <circle cx="75" cy="98" r="6" fill="#D94F70" />
              <circle cx="125" cy="98" r="6" fill="#D94F70" />
            </svg>
          </div>
        );
      case 'shooting_star_sky':
        return <ShootingStarSky size={170} />;
      case 'scrapbook_ribbon':
        return <ScrapbookRibbon size={170} />;
      case 'two_hearts_stars':
        return <TwoHeartsStars size={170} />;
      default:
        return <TeddyBear size={160} />;
    }
  };

  return (
    <div className="scrapbook-tab-container animate-fade-in" role="tabpanel" id="panel-scrapbook" aria-labelledby="tab-scrapbook">
      {/* Section Header */}
      <div className="scrapbook-header-card scrapbook-card-shadow text-center">
        <div className="tape-corner top-center">
          <WashiTape color="pink" pattern="dots" width={130} rotate={1} />
        </div>

        <div className="romantic-badge">
          <Sparkles size={14} className="accent-sparkle" />
          <span>Handmade Digital Pages</span>
          <Sparkles size={14} className="accent-sparkle" />
        </div>

        <h2 className="scrapbook-main-title">
          Our Little Scrapbook of Love 🎀
        </h2>
        <p className="scrapbook-sub-title">
          No pictures needed. Some feelings deserve their own little pages.
        </p>
      </div>

      {/* Main Slidable Scrapbook Viewport */}
      <div
        className="scrapbook-slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="Handmade scrapbook slides"
      >
        {/* Navigation Arrow Left */}
        <button
          type="button"
          className="scrapbook-arrow-btn arrow-prev"
          onClick={goToPrev}
          aria-label="Previous scrapbook page"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Current Handmade Scrapbook Page Card */}
        <div
          className={`handmade-page-card paper-color-${currentSlide.paperColor} scrapbook-card-shadow animate-slide-fade`}
          style={{ transform: `rotate(${currentSlide.rotation})` }}
        >
          {/* Decorative Corner Tape */}
          <div className="tape-corner top-left">
            <WashiTape color={currentSlide.tapeColor} pattern="dots" width={95} rotate={-6} />
          </div>
          <div className="tape-corner top-right">
            <WashiTape color={currentSlide.tapeColor} pattern="stripes" width={95} rotate={7} />
          </div>

          {/* Page Top Header */}
          <div className="page-header-row">
            <span className="page-number-tag">
              PAGE {currentSlide.slideNumber} / {String(totalSlides).padStart(2, '0')}
            </span>
            <span className="page-category-tag">
              {currentSlide.tag}
            </span>
          </div>

          {/* Main Title on Page */}
          <h3 className="page-title-handwritten">
            {currentSlide.title}
          </h3>

          {/* Center Illustration Area */}
          <div className="page-illustration-box">
            <div className="illustration-glow-circle" />
            {renderSlideIllustration(currentSlide.illustrationType)}
          </div>

          {/* Page Caption Badge */}
          <div className="page-caption-badge">
            <span>"{currentSlide.caption}"</span>
          </div>

          {/* Page Message */}
          <div className="page-message-content">
            <p className="page-main-message">
              {currentSlide.message}
            </p>
          </div>

          {/* Cute Sticker on Bottom Corner */}
          <div className="page-bottom-sticker">
            <span className="sticker-label">{currentSlide.stickerText}</span>
          </div>
        </div>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          className="scrapbook-arrow-btn arrow-next"
          onClick={goToNext}
          aria-label="Next scrapbook page"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Pagination Controls & Dots */}
      <div className="scrapbook-controls-footer text-center">
        <div className="pagination-dots-list" role="tablist" aria-label="Scrapbook page dots">
          {SCRAPBOOK_SLIDES.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                className={`pagination-dot ${isActive ? 'active-dot' : ''}`}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-selected={isActive}
              >
                <span className="dot-inner" />
              </button>
            );
          })}
        </div>

        <div className="swipe-hint-indicator">
          <span>👈 Swipe or tap arrows to flip pages 👉</span>
        </div>
      </div>
    </div>
  );
}
