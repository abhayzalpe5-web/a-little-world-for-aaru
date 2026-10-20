import React from 'react';
import { Heart, Sparkles, BookHeart } from 'lucide-react';
import { WHY_YOU_ARE_SPECIAL_LETTER } from '../data/loveLetter';
import { WashiTape, PostageStamp } from './Illustrations';

export default function SpecialJournalSection() {
  return (
    <section className="special-journal-section" aria-labelledby="journal-heading">
      <div className="journal-page-wrapper scrapbook-card-shadow">
        {/* Decorative Washi Tapes */}
        <div className="tape-corner top-left">
          <WashiTape color="lavender" pattern="dots" width={115} rotate={-4} />
        </div>
        <div className="tape-corner top-right">
          <WashiTape color="pink" pattern="stripes" width={115} rotate={5} />
        </div>

        {/* Vintage Stamp */}
        <div className="journal-stamp-badge">
          <PostageStamp label="AARU'S HEART" sub="SPECIAL" />
        </div>

        {/* Header Block */}
        <div className="journal-header text-center">
          <div className="romantic-badge">
            <BookHeart size={14} className="accent-sparkle" />
            <span>Personal Journal Note</span>
            <BookHeart size={14} className="accent-sparkle" />
          </div>

          <h2 id="journal-heading" className="journal-main-title">
            {WHY_YOU_ARE_SPECIAL_LETTER.title}
          </h2>
          <p className="journal-subtitle">
            {WHY_YOU_ARE_SPECIAL_LETTER.subtitle}
          </p>
        </div>

        {/* Journal Paper with decorative lines */}
        <div className="journal-ruled-paper">
          {/* Subtle pressed flowers background decoration */}
          <div className="journal-botanical-bg" aria-hidden="true">
            <span className="flower-stamp f-top-r">🌸</span>
            <span className="flower-stamp f-mid-l">🌷</span>
            <span className="flower-stamp f-bot-r">🌼</span>
          </div>

          <div className="journal-body-text">
            {WHY_YOU_ARE_SPECIAL_LETTER.paragraphs.map((p, idx) => (
              <p key={idx} className="journal-para">
                {p}
              </p>
            ))}
          </div>

          {/* Grand Handwritten Declarations */}
          <div className="journal-closing-block text-center">
            <div className="closing-heart-divider">
              <span>♡</span>
              <span className="big-h">❤️</span>
              <span>♡</span>
            </div>

            <h3 className="closing-declaration-love">
              {WHY_YOU_ARE_SPECIAL_LETTER.closingDeclarations[0]}
            </h3>

            <h4 className="closing-declaration-bday">
              {WHY_YOU_ARE_SPECIAL_LETTER.closingDeclarations[1]}
            </h4>
          </div>
        </div>

        {/* Bottom Tape */}
        <div className="tape-corner bottom-center">
          <WashiTape color="mint" pattern="dots" width={140} rotate={1} />
        </div>
      </div>
    </section>
  );
}
