import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isOpen, setIsOpen] = useState(false);

  // Web Audio Context & Synthesizer State
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerRef = useRef(null);
  const noteIndexRef = useRef(0);

  // Romantic Music Box Melody Notes (Frequencies in Hz)
  // Canon / Romantic gentle lullaby arpeggios
  const melodyNotes = [
    // Measure 1: C Major chord arpeggio
    523.25, 659.25, 783.99, 1046.50,
    // Measure 2: G Major chord arpeggio
    392.00, 493.88, 587.33, 783.99,
    // Measure 3: A Minor chord arpeggio
    440.00, 523.25, 659.25, 880.00,
    // Measure 4: E Minor / Em7 chord arpeggio
    329.63, 392.00, 493.88, 659.25,
    // Measure 5: F Major chord arpeggio
    349.23, 440.00, 523.25, 698.46,
    // Measure 6: C Major chord arpeggio
    261.63, 329.63, 392.00, 523.25,
    // Measure 7: F Major chord arpeggio
    349.23, 440.00, 523.25, 698.46,
    // Measure 8: G7 chord arpeggio
    392.00, 493.88, 587.33, 783.99,
    // Sweet variation melody line
    880.00, 783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 523.25
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();

      const masterGain = audioCtxRef.current.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume, audioCtxRef.current.currentTime);
      masterGain.connect(audioCtxRef.current.destination);
      gainNodeRef.current = masterGain;
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playChimeNote = (freq) => {
    if (!audioCtxRef.current || !gainNodeRef.current) return;
    const ctx = audioCtxRef.current;

    // Dual oscillator for rich, warm chime music-box tone
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, ctx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime); // gentle octave chime shimmer

    const now = ctx.currentTime;
    // Attack
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.25, now + 0.04);
    // Sweet music-box decay
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
  };

  const startMelodyLoop = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const step = () => {
      const freq = melodyNotes[noteIndexRef.current % melodyNotes.length];
      playChimeNote(freq);
      noteIndexRef.current = (noteIndexRef.current + 1) % melodyNotes.length;
    };

    // Play immediate first note
    step();
    // Continue at cozy gentle tempo (every 480ms)
    timerRef.current = setInterval(step, 480);
  };

  const stopMelodyLoop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const togglePlay = () => {
    initAudio();
    if (isPlaying) {
      stopMelodyLoop();
      setIsPlaying(false);
    } else {
      startMelodyLoop();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    const now = audioCtxRef.current.currentTime;
    if (isMuted) {
      gainNodeRef.current.gain.setValueAtTime(volume, now);
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, now);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (!isMuted && gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopMelodyLoop();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <aside className="music-player-container" aria-label="Music Player">
      {/* Floating Pill Toggle Button */}
      <button
        type="button"
        className={`music-floating-btn ${isPlaying ? 'playing' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Background Music Settings"
        aria-label="Toggle music panel"
        aria-expanded={isOpen}
      >
        <span className="music-icon-wrap">
          <Music size={18} className={isPlaying ? 'spinning-note' : ''} />
        </span>
        <span className="music-label-short">
          {isPlaying ? 'Music On ♪' : 'Music Off ♡'}
        </span>
        {isPlaying && <span className="music-pulse-dot" />}
      </button>

      {/* Expanded Control Box */}
      {isOpen && (
        <div className="music-popup-card">
          <div className="music-popup-header">
            <div className="music-title-wrap">
              <Sparkles size={14} className="accent-sparkle" />
              <span className="music-title">Dreamy Music Box</span>
            </div>
            <button
              type="button"
              className="music-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close music panel"
            >
              ✕
            </button>
          </div>

          <p className="music-desc">
            A romantic gentle chime box played softly for Aaru.
          </p>

          <div className="music-controls-row">
            <button
              type="button"
              className={`music-main-play-btn ${isPlaying ? 'active' : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause music' : 'Play romantic music'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
              <span>{isPlaying ? 'Pause' : 'Play Music'}</span>
            </button>

            <button
              type="button"
              className="music-mute-btn"
              onClick={toggleMute}
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <div className="music-volume-row">
            <label htmlFor="music-vol" className="music-vol-label">Volume</label>
            <input
              id="music-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="music-volume-slider"
              aria-label="Volume slider"
            />
          </div>

          <div className="music-note-ribbon">
            <span>♫ "A little melody for the sweetest girl" ♫</span>
          </div>
        </div>
      )}
    </aside>
  );
}
