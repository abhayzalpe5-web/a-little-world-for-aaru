import React from 'react';
import { Sparkles, Heart, Flower2, Stars } from 'lucide-react';
import { TeddyBear, EnvelopeIllustration, PostageStamp, WashiTape } from './Illustrations';

export default function WelcomeBanner({ onBeginStory }) {
  return (
    <section className="welcome-banner-section" aria-labelledby="welcome-heading">
      <div className="scrapbook-page-outer">
        {/* Decorative Washi Tape on corners */}
        <div className="tape-corner top-left">
          <WashiTape color="pink" pattern="dots" width={110} rotate={-6} />
        </div>
        <div className="tape-corner top-right">
          <WashiTape color="lavender" pattern="stripes" width={110} rotate={8} />
        </div>

        {/* Vintage Stamp badge */}
        <div className="banner-stamp">
          <PostageStamp label="AARU'S SPECIAL DAY" sub="21 OCT" />
        </div>

        {/* Header Title & Subtitle */}
        <div className="banner-header text-center">
          <div className="banner-pill-tag">
            <Sparkles size={14} className="accent-sparkle" />
            <span>Dedicated to Arpita</span>
            <Sparkles size={14} className="accent-sparkle" />
          </div>

          <h1 id="welcome-heading" className="banner-main-title">
            Welcome to Your Little World, Aaru ❤️
          </h1>

          <p className="banner-subtitle">
            A tiny corner of the universe, made with a whole lot of love.
          </p>
        </div>

        {/* Cute Illustrations Row: Teddy Bear & Envelope */}
        <div className="banner-illustrations-grid">
          <div className="illus-col teddy-col">
            <div className="illus-halo" />
            <TeddyBear size={190} />
            <span className="illus-caption-tag">"Always My Favourite Girl 🧸"</span>
          </div>

          <div className="illus-col envelope-col">
            <div className="illus-halo" />
            <EnvelopeIllustration size={170} isOpen={true} />
            <span className="illus-caption-tag">"Letters Sealed with Love 💌"</span>
          </div>
        </div>

        {/* Heartfelt Scrapbook Note Message */}
        <div className="banner-message-card">
          <div className="message-header">
            <span className="pink-ribbon-icon">🎀</span>
            <span className="message-from-tag">A Message For My Princess</span>
            <span className="pink-ribbon-icon">🎀</span>
          </div>

          <div className="banner-text-body">
            <p className="salutation">Hey, my beautiful Aaru! 🎀</p>
            <p>I wanted to give you something a little different this birthday.</p>
            <p>
              Something made of words, feelings, little surprises, and all the love I have for you.
            </p>
            <p>Every page in this little world has been created especially for you.</p>
            <p>
              There are no ordinary pages here, only tiny reminders of how special you are to me.
            </p>
            <p>So, my princess, take your time and explore.</p>
            <p className="highlight-line">This little world belongs to you. ❤️</p>
          </div>

          {/* Action Button */}
          <div className="banner-cta-container">
            <button
              type="button"
              className="romantic-primary-btn cta-begin-btn"
              onClick={onBeginStory}
            >
              <Heart size={18} fill="currentColor" />
              <span>Let's Begin Our Story ♡</span>
              <Sparkles size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Tape */}
        <div className="tape-corner bottom-center">
          <WashiTape color="mint" pattern="dots" width={140} rotate={-1} />
        </div>
      </div>
    </section>
  );
}
