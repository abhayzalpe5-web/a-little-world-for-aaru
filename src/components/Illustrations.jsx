import React from 'react';

// Cute Pink Teddy Bear holding a heart
export function TeddyBear({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration teddy-bear ${className}`}
      role="img"
      aria-label="Cute teddy bear holding a heart"
    >
      <defs>
        <radialGradient id="bearBody" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE2E8" />
          <stop offset="80%" stopColor="#F8C8DC" />
          <stop offset="100%" stopColor="#F5B5CD" />
        </radialGradient>
        <radialGradient id="bearEar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#FADADD" />
        </radialGradient>
        <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF7597" />
          <stop offset="100%" stopColor="#D94F70" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#D94F70" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="100" cy="188" rx="55" ry="10" fill="#E6D9FF" opacity="0.6" />

      {/* Ears */}
      <circle cx="58" cy="62" r="24" fill="url(#bearBody)" filter="url(#softShadow)" />
      <circle cx="58" cy="62" r="14" fill="url(#bearEar)" />
      <circle cx="142" cy="62" r="24" fill="url(#bearBody)" filter="url(#softShadow)" />
      <circle cx="142" cy="62" r="14" fill="url(#bearEar)" />

      {/* Head */}
      <circle cx="100" cy="85" r="48" fill="url(#bearBody)" filter="url(#softShadow)" />

      {/* Rosy Cheeks */}
      <ellipse cx="76" cy="98" rx="8" ry="5" fill="#FF8FA3" opacity="0.55" />
      <ellipse cx="124" cy="98" rx="8" ry="5" fill="#FF8FA3" opacity="0.55" />

      {/* Snout */}
      <ellipse cx="100" cy="98" rx="19" ry="14" fill="#FFF8F0" />
      <ellipse cx="100" cy="92" rx="7" ry="5" fill="#5A2A38" />
      <path d="M100 97 v6 M96 103 q4 3 8 0" stroke="#5A2A38" strokeWidth="2.2" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="83" cy="82" r="5" fill="#3D1A24" />
      <circle cx="81.5" cy="80.5" r="1.8" fill="#FFFFFF" />
      <circle cx="117" cy="82" r="5" fill="#3D1A24" />
      <circle cx="115.5" cy="80.5" r="1.8" fill="#FFFFFF" />

      {/* Little Bow on ear */}
      <g transform="translate(136, 46) rotate(15)">
        <path d="M-8 -6 C-12 -12 -18 -8 -14 0 C-18 8 -12 12 -8 6 Z" fill="#D94F70" />
        <path d="M8 -6 C12 -12 18 -8 14 0 C18 8 12 12 8 6 Z" fill="#D94F70" />
        <circle cx="0" cy="0" r="3.5" fill="#FFF8F0" />
      </g>

      {/* Body */}
      <ellipse cx="100" cy="142" rx="42" ry="40" fill="url(#bearBody)" filter="url(#softShadow)" />
      <ellipse cx="100" cy="146" rx="26" ry="24" fill="#FFF8F0" opacity="0.8" />

      {/* Feet / Paws */}
      <ellipse cx="68" cy="172" rx="16" ry="12" fill="url(#bearBody)" />
      <circle cx="68" cy="172" r="8" fill="#FADADD" />
      <ellipse cx="132" cy="172" rx="16" ry="12" fill="url(#bearBody)" />
      <circle cx="132" cy="172" r="8" fill="#FADADD" />

      {/* Heart Held in Arms */}
      <g filter="url(#softShadow)" transform="translate(100, 134) scale(0.9)">
        <path
          d="M0 24 C0 24 -32 -2 -32 -18 C-32 -30 -20 -38 -8 -32 C-2 -29 0 -24 0 -24 C0 -24 2 -29 8 -32 C20 -38 32 -30 32 -18 C32 -2 0 24 0 24 Z"
          fill="url(#heartGrad)"
        />
        <circle cx="-10" cy="-22" r="3" fill="#FFFFFF" opacity="0.7" />
        {/* Heart text */}
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="Quicksand, sans-serif"
        >
          AARU
        </text>
      </g>

      {/* Arms holding the heart */}
      <ellipse cx="68" cy="132" rx="14" ry="11" fill="url(#bearBody)" transform="rotate(25 68 132)" />
      <ellipse cx="132" cy="132" rx="14" ry="11" fill="url(#bearBody)" transform="rotate(-25 132 132)" />
    </svg>
  );
}

// Vintage Envelope with Bow & Flowers
export function EnvelopeIllustration({ size = 180, isOpen = false, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration envelope-illus ${className}`}
    >
      <defs>
        <filter id="envShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#D94F70" floodOpacity="0.18" />
        </filter>
        <linearGradient id="envGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#FADADD" />
        </linearGradient>
      </defs>

      {/* Envelope shadow */}
      <ellipse cx="100" cy="175" rx="70" ry="10" fill="#E6D9FF" opacity="0.6" />

      {/* Letter popping out if open */}
      {isOpen && (
        <g transform="translate(40, 20)" className="letter-popping">
          <rect x="0" y="0" width="120" height="90" rx="6" fill="#FFFFFF" stroke="#F8C8DC" strokeWidth="2" />
          <line x1="16" y1="20" x2="104" y2="20" stroke="#F8C8DC" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="36" x2="80" y2="36" stroke="#FADADD" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="52" x2="104" y2="52" stroke="#F8C8DC" strokeWidth="3" strokeLinecap="round" />
          <path d="M88,68 C88,68 80,62 80,56 C80,52 84,49 87,51 C90,53 90,56 90,56 C90,56 90,53 93,51 C96,49 100,52 100,56 C100,62 92,68 88,68 Z" fill="#D94F70" />
        </g>
      )}

      {/* Back & Body */}
      <rect x="30" y="70" width="140" height="95" rx="8" fill="url(#envGrad)" stroke="#F8C8DC" strokeWidth="2" filter="url(#envShadow)" />

      {/* Inner flap lines */}
      <path d="M30 70 L100 125 L170 70" stroke="#F5B5CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M30 165 L85 110" stroke="#F5B5CD" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M170 165 L115 110" stroke="#F5B5CD" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />

      {/* Front flap (open vs closed) */}
      {!isOpen ? (
        <path d="M30 70 L100 126 L170 70 Z" fill="#FFF0F5" stroke="#F5B5CD" strokeWidth="2" />
      ) : (
        <path d="M30 70 L100 20 L170 70 Z" fill="#FFF8F0" stroke="#F5B5CD" strokeWidth="2" />
      )}

      {/* Wax Seal or Bow */}
      <circle cx="100" cy={isOpen ? 70 : 126} r="14" fill="#D94F70" />
      <path
        d={isOpen ? "M100 74 C100 74 94 69 94 65 C94 62 97 60 99 61 C100 62 100 64 100 64 C100 64 100 62 101 61 C103 60 106 62 106 65 C106 69 100 74 100 74 Z"
          : "M100 130 C100 130 94 125 94 121 C94 118 97 116 99 117 C100 118 100 120 100 120 C100 120 100 118 101 117 C103 116 106 118 106 121 C106 125 100 130 100 130 Z"}
        fill="#FFFFFF"
      />

      {/* Decorative botanical leaf branch */}
      <path d="M40 160 Q60 145 75 160" stroke="#8C3A54" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="50" cy="151" rx="4" ry="2" fill="#F8C8DC" transform="rotate(-30 50 151)" />
      <ellipse cx="65" cy="153" rx="4" ry="2" fill="#F8C8DC" transform="rotate(30 65 153)" />

      {/* Little Stamp */}
      <g transform="translate(134, 76)">
        <rect width="28" height="24" fill="#FFF8F0" stroke="#D94F70" strokeWidth="1.5" strokeDasharray="2 2" rx="2" />
        <circle cx="14" cy="12" r="5" fill="#FADADD" />
        <path d="M14 15 C14 15 10 12 10 10 C10 8 12 7 13.5 8 C14 8.5 14 9 14 9 C14 9 14 8.5 14.5 8 C16 7 18 8 18 10 C18 12 14 15 14 15 Z" fill="#D94F70" />
      </g>
    </svg>
  );
}

// Smiling Cartoon Flowers
export function SmilingFlowers({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration smiling-flowers ${className}`}
    >
      <defs>
        <radialGradient id="sunFlower" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#FFE066" />
        </radialGradient>
      </defs>

      {/* Soil / Grass curve */}
      <path d="M20 170 Q100 155 180 170" stroke="#E6D9FF" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Stems */}
      <path d="M65 168 Q60 120 70 85" stroke="#94D2BD" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M135 168 Q140 130 130 95" stroke="#94D2BD" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M100 165 Q102 110 100 60" stroke="#94D2BD" strokeWidth="4.5" strokeLinecap="round" fill="none" />

      {/* Stem Leaves */}
      <path d="M66 130 Q50 120 54 136 Q60 136 66 130 Z" fill="#B7E4C7" />
      <path d="M134 135 Q150 125 146 141 Q140 141 134 135 Z" fill="#B7E4C7" />
      <path d="M101 115 Q118 105 116 122 Q108 122 101 115 Z" fill="#B7E4C7" />

      {/* Left Flower (Blush Pink) */}
      <g transform="translate(70, 85)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="0"
            rx="10"
            ry="18"
            fill="#FADADD"
            stroke="#F8C8DC"
            strokeWidth="1.5"
            transform={`rotate(${deg}) translate(0, -16)`}
          />
        ))}
        <circle cx="0" cy="0" r="14" fill="#FFF8F0" stroke="#F5B5CD" strokeWidth="1.5" />
        {/* Smiling face */}
        <circle cx="-5" cy="-2" r="2" fill="#5A2A38" />
        <circle cx="5" cy="-2" r="2" fill="#5A2A38" />
        <path d="M-4 3 Q0 8 4 3" stroke="#D94F70" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="-7" cy="1" rx="2" ry="1.2" fill="#FF8FA3" opacity="0.6" />
        <ellipse cx="7" cy="1" rx="2" ry="1.2" fill="#FF8FA3" opacity="0.6" />
      </g>

      {/* Right Flower (Lavender Pink) */}
      <g transform="translate(130, 95)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="0"
            rx="9"
            ry="16"
            fill="#E6D9FF"
            stroke="#D8C3FF"
            strokeWidth="1.5"
            transform={`rotate(${deg}) translate(0, -14)`}
          />
        ))}
        <circle cx="0" cy="0" r="12" fill="#FFF8F0" stroke="#D8C3FF" strokeWidth="1.5" />
        <circle cx="-4" cy="-2" r="1.8" fill="#5A2A38" />
        <circle cx="4" cy="-2" r="1.8" fill="#5A2A38" />
        <path d="M-3 2.5 Q0 6.5 3 2.5" stroke="#8C3A54" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Center Flower (Queen Flower with Crown/Bow) */}
      <g transform="translate(100, 60)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="0"
            rx="12"
            ry="22"
            fill="#F8C8DC"
            stroke="#FFB3C6"
            strokeWidth="1.5"
            transform={`rotate(${deg}) translate(0, -20)`}
          />
        ))}
        <circle cx="0" cy="0" r="18" fill="url(#sunFlower)" stroke="#F5B5CD" strokeWidth="2" />
        {/* Happy Winking Face */}
        <circle cx="6" cy="-2" r="2.5" fill="#5A2A38" />
        <path d="M-8 -2 Q-5 -5 -2 -2" stroke="#5A2A38" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M-5 4 Q0 11 5 4" stroke="#D94F70" strokeWidth="2" strokeLinecap="round" fill="#FFCCD5" />
        <ellipse cx="-10" cy="2" rx="3" ry="1.8" fill="#FF7597" opacity="0.6" />
        <ellipse cx="10" cy="2" rx="3" ry="1.8" fill="#FF7597" opacity="0.6" />
        {/* Cute Bow on Top */}
        <path d="M-4 -20 C-9 -24 -12 -18 -8 -15 C-12 -12 -9 -6 -4 -10 Z" fill="#D94F70" />
        <path d="M4 -20 C9 -24 12 -18 8 -15 C12 -12 9 -6 4 -10 Z" fill="#D94F70" />
        <circle cx="0" cy="-15" r="3" fill="#FFF8F0" />
      </g>

      {/* Floating tiny hearts around */}
      <path d="M45 55 C45 55 40 50 40 46 C40 43 43 41 45 42.5 C47 41 50 43 50 46 C50 50 45 55 45 55 Z" fill="#FF7597" />
      <path d="M155 45 C155 45 150 40 150 36 C150 33 153 31 155 32.5 C157 31 160 33 160 36 C160 40 155 45 155 45 Z" fill="#D94F70" />
    </svg>
  );
}

// Pink Moon, Starry Sky & Heart-Shaped Planet
export function PinkMoonPlanet({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration moon-planet ${className}`}
    >
      <defs>
        <radialGradient id="skyCircle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="70%" stopColor="#FADADD" />
          <stop offset="100%" stopColor="#E6D9FF" />
        </radialGradient>
        <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#FFE4E6" />
          <stop offset="100%" stopColor="#F8C8DC" />
        </linearGradient>
      </defs>

      {/* Background circle badge */}
      <circle cx="100" cy="100" r="85" fill="url(#skyCircle)" opacity="0.6" stroke="#F8C8DC" strokeWidth="2" strokeDasharray="3 3" />

      {/* Crescent Pink Moon */}
      <g transform="translate(65, 50)">
        <path
          d="M30 10 A35 35 0 1 0 75 80 A42 42 0 0 1 30 10 Z"
          fill="url(#moonGrad)"
          stroke="#F5B5CD"
          strokeWidth="2"
        />
        {/* Sleeping peaceful eye on moon */}
        <path d="M42 48 Q47 54 52 48" stroke="#8C3A54" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Rosy cheek */}
        <circle cx="47" cy="54" r="3" fill="#FF8FA3" opacity="0.6" />
        {/* Little nightcap or star */}
        <circle cx="28" cy="14" r="3" fill="#FFE066" />
      </g>

      {/* Heart-Shaped Planet with Saturn Rings */}
      <g transform="translate(130, 130)">
        {/* Ring Back */}
        <ellipse cx="0" cy="0" rx="34" ry="10" stroke="#F8C8DC" strokeWidth="3" fill="none" transform="rotate(-25)" opacity="0.6" />
        
        {/* Heart Planet Body */}
        <path
          d="M0 16 C0 16 -18 2 -18 -8 C-18 -16 -10 -20 -2 -16 C0 -14 0 -12 0 -12 C0 -12 0 -14 2 -16 C10 -20 18 -16 18 -8 C18 2 0 16 0 16 Z"
          fill="#D94F70"
        />
        <circle cx="-5" cy="-9" r="2" fill="#FFFFFF" opacity="0.7" />

        {/* Ring Front */}
        <path
          d="M-30 8 A34 10 0 0 0 26 -16"
          stroke="#FFF8F0"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-25)"
        />
      </g>

      {/* Twinkling Stars */}
      {[
        { x: 40, y: 50, s: 0.8 },
        { x: 155, y: 55, s: 1.1 },
        { x: 45, y: 140, s: 0.9 },
        { x: 105, y: 165, s: 0.7 },
        { x: 140, y: 90, s: 0.6 }
      ].map((star, i) => (
        <g key={i} transform={`translate(${star.x}, ${star.y}) scale(${star.s})`}>
          <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8 Z" fill="#FFE066" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>
      ))}
    </svg>
  );
}

// Jar Filled with Paper Hearts
export function JarOfHearts({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration jar-hearts ${className}`}
    >
      <defs>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#FFF0F5" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#F8C8DC" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Jar base shadow */}
      <ellipse cx="100" cy="180" rx="46" ry="8" fill="#E6D9FF" opacity="0.6" />

      {/* Hearts inside jar (stacked up) */}
      {[
        { x: 80, y: 155, rot: 15, col: '#D94F70', s: 0.8 },
        { x: 105, y: 158, rot: -20, col: '#FF7597', s: 0.85 },
        { x: 120, y: 148, rot: 35, col: '#F8C8DC', s: 0.75 },
        { x: 75, y: 135, rot: -30, col: '#FF8FA3', s: 0.8 },
        { x: 98, y: 138, rot: 10, col: '#D94F70', s: 0.9 },
        { x: 118, y: 128, rot: -15, col: '#E6D9FF', s: 0.75 },
        { x: 85, y: 118, rot: 25, col: '#FADADD', s: 0.8 },
        { x: 108, y: 116, rot: -8, col: '#D94F70', s: 0.85 },
        { x: 95, y: 98, rot: 12, col: '#FF7597', s: 0.8 }
      ].map((h, i) => (
        <g key={i} transform={`translate(${h.x}, ${h.y}) rotate(${h.rot}) scale(${h.s})`}>
          <path
            d="M0 14 C0 14 -16 2 -16 -8 C-16 -16 -8 -20 0 -14 C8 -20 16 -16 16 -8 C16 2 0 14 0 14 Z"
            fill={h.col}
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Jar Glass Outline & Highlight */}
      <path
        d="M75 58 C64 58 60 70 60 90 L60 155 C60 172 72 178 100 178 C128 178 140 172 140 155 L140 90 C140 70 136 58 125 58 Z"
        fill="url(#glassGrad)"
        stroke="#F8C8DC"
        strokeWidth="3"
      />
      {/* Curved glass highlight */}
      <path d="M68 90 L68 150 Q68 165 85 168" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* Jar Neck and Rim */}
      <rect x="70" y="44" width="60" height="14" rx="4" fill="#FFF8F0" stroke="#F5B5CD" strokeWidth="2.5" />
      <ellipse cx="100" cy="44" rx="30" ry="5" fill="#FFF0F5" stroke="#F5B5CD" strokeWidth="2" />

      {/* Pink Ribbon Tied Around Neck */}
      <rect x="72" y="52" width="56" height="6" fill="#D94F70" rx="2" />
      {/* Bow */}
      <g transform="translate(100, 55)">
        <path d="M-6 -5 C-12 -9 -16 -6 -12 0 C-16 6 -12 9 -6 5 Z" fill="#D94F70" />
        <path d="M6 -5 C12 -9 16 -6 12 0 C16 6 12 9 6 5 Z" fill="#D94F70" />
        <circle cx="0" cy="0" r="3.5" fill="#FFF8F0" />
        <path d="M-2 2 Q-5 14 -10 16" stroke="#D94F70" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M2 2 Q5 14 10 16" stroke="#D94F70" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Label on Jar */}
      <g transform="translate(76, 122)">
        <rect width="48" height="26" rx="4" fill="#FFF8F0" stroke="#D94F70" strokeWidth="1.5" strokeDasharray="2 2" />
        <text x="24" y="17" textAnchor="middle" fill="#D94F70" fontSize="10" fontWeight="bold" fontFamily="Dancing Script, cursive">
          100 Reasons
        </text>
      </g>
    </svg>
  );
}

// Shooting Star over Pastel Sky
export function ShootingStarSky({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration shooting-star ${className}`}
    >
      <defs>
        <linearGradient id="starTrail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" stopOpacity="0" />
          <stop offset="50%" stopColor="#F8C8DC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFE066" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Pastel background clouds */}
      <path
        d="M20 150 C20 135 35 125 50 130 C60 115 85 115 95 130 C105 125 120 132 120 145 C135 145 145 158 140 170 L20 170 Z"
        fill="#FFF0F5"
        stroke="#FADADD"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M100 160 C100 148 115 140 125 145 C135 132 155 132 165 145 C175 140 185 148 185 160 L100 160 Z"
        fill="#E6D9FF"
        opacity="0.6"
      />

      {/* Shooting Star Trail */}
      <path
        d="M30 40 Q85 85 145 110"
        stroke="url(#starTrail)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M45 35 Q95 75 145 110"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sparkling trail particles */}
      <circle cx="65" cy="62" r="3" fill="#FFE066" />
      <circle cx="95" cy="84" r="2.5" fill="#FF8FA3" />
      <circle cx="118" cy="98" r="3.5" fill="#FFFFFF" />

      {/* Head of the star */}
      <g transform="translate(145, 110)">
        <polygon
          points="0,-16 4,-5 16,-4 7,4 10,16 0,8 -10,16 -7,4 -16,-4 -4,-5"
          fill="#FFE066"
          stroke="#FFAA00"
          strokeWidth="1"
        />
        <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
      </g>

      {/* Little wish sparkles */}
      <g transform="translate(160, 85)">
        <path d="M0 -6 Q0 0 6 0 Q0 0 0 6 Q0 0 -6 0 Q0 0 0 -6 Z" fill="#D94F70" />
      </g>
      <g transform="translate(70, 30)">
        <path d="M0 -5 Q0 0 5 0 Q0 0 0 5 Q0 0 -5 0 Q0 0 0 -5 Z" fill="#FF7597" />
      </g>
    </svg>
  );
}

// Stack of Blank Scrapbook Pages with Pink Ribbon
export function ScrapbookRibbon({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration scrapbook-pages ${className}`}
    >
      <defs>
        <filter id="pageShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#D94F70" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Bottom Page 3 (Lavender) */}
      <rect x="35" y="65" width="125" height="95" rx="6" fill="#E6D9FF" stroke="#D8C3FF" strokeWidth="1.5" transform="rotate(-6 97 112)" filter="url(#pageShadow)" />

      {/* Middle Page 2 (Blush Pink) */}
      <rect x="38" y="55" width="125" height="95" rx="6" fill="#FADADD" stroke="#F8C8DC" strokeWidth="1.5" transform="rotate(4 100 102)" filter="url(#pageShadow)" />

      {/* Top Page 1 (Cream Scrapbook Paper) */}
      <rect x="36" y="50" width="128" height="98" rx="6" fill="#FFF8F0" stroke="#F5B5CD" strokeWidth="2" filter="url(#pageShadow)" />

      {/* Lined paper lines */}
      <line x1="50" y1="70" x2="148" y2="70" stroke="#FADADD" strokeWidth="1.5" />
      <line x1="50" y1="84" x2="148" y2="84" stroke="#FADADD" strokeWidth="1.5" />
      <line x1="50" y1="98" x2="148" y2="98" stroke="#FADADD" strokeWidth="1.5" />
      <line x1="50" y1="112" x2="120" y2="112" stroke="#FADADD" strokeWidth="1.5" />

      {/* Washi tape on top right corner */}
      <rect x="130" y="42" width="30" height="12" fill="#D94F70" opacity="0.8" transform="rotate(25 145 48)" rx="1" />

      {/* Pink Satin Ribbon wrapping the stack */}
      <rect x="94" y="45" width="12" height="106" fill="#D94F70" rx="2" />
      <line x1="97" y1="45" x2="97" y2="151" stroke="#FF8FA3" strokeWidth="1.5" />

      {/* Large Beautiful Ribbon Bow in Center */}
      <g transform="translate(100, 98)">
        <path d="M-3 -4 C-16 -16 -26 -8 -16 0 C-26 8 -16 16 -3 4 Z" fill="#D94F70" />
        <path d="M3 -4 C16 -16 26 -8 16 0 C26 8 16 16 3 4 Z" fill="#D94F70" />
        <circle cx="0" cy="0" r="5" fill="#FFF8F0" stroke="#D94F70" strokeWidth="1.5" />
        <path d="M-4 3 Q-12 18 -18 24" stroke="#D94F70" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M4 3 Q12 18 18 24" stroke="#D94F70" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

// Two Cartoon Hearts with Glowing Stars
export function TwoHeartsStars({ size = 180, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-illustration two-hearts ${className}`}
    >
      <defs>
        <radialGradient id="heartA" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8FA3" />
          <stop offset="100%" stopColor="#D94F70" />
        </radialGradient>
        <radialGradient id="heartB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="100%" stopColor="#F8C8DC" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="100" cy="165" rx="50" ry="8" fill="#E6D9FF" opacity="0.6" />

      {/* Left Big Heart */}
      <g transform="translate(80, 110) rotate(-12) scale(1.1)">
        <path
          d="M0 26 C0 26 -30 2 -30 -16 C-30 -28 -18 -36 -4 -30 C-1 -28 0 -24 0 -24 C0 -24 1 -28 4 -30 C18 -36 30 -28 30 -16 C30 2 0 26 0 26 Z"
          fill="url(#heartA)"
        />
        {/* Smiling Face */}
        <circle cx="-7" cy="-14" r="2.5" fill="#FFFFFF" />
        <circle cx="7" cy="-14" r="2.5" fill="#FFFFFF" />
        <path d="M-4 -8 Q0 -3 4 -8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <ellipse cx="-11" cy="-10" rx="3" ry="1.8" fill="#FFF0F5" opacity="0.8" />
        <ellipse cx="11" cy="-10" rx="3" ry="1.8" fill="#FFF0F5" opacity="0.8" />
      </g>

      {/* Right Sweet Little Heart */}
      <g transform="translate(125, 118) rotate(14) scale(0.9)">
        <path
          d="M0 26 C0 26 -30 2 -30 -16 C-30 -28 -18 -36 -4 -30 C-1 -28 0 -24 0 -24 C0 -24 1 -28 4 -30 C18 -36 30 -28 30 -16 C30 2 0 26 0 26 Z"
          fill="url(#heartB)"
          stroke="#FFB3C6"
          strokeWidth="1.5"
        />
        {/* Cute Bow on Little Heart */}
        <g transform="translate(18, -26) rotate(20)">
          <path d="M-5 -4 C-9 -8 -12 -5 -9 0 C-12 5 -9 8 -5 4 Z" fill="#D94F70" />
          <path d="M5 -4 C9 -8 12 -5 9 0 C12 5 9 8 5 4 Z" fill="#D94F70" />
          <circle cx="0" cy="0" r="2.5" fill="#FFF8F0" />
        </g>
        {/* Blushing Eyes */}
        <path d="M-8 -14 Q-5 -17 -2 -14" stroke="#5A2A38" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M2 -14 Q5 -17 8 -14" stroke="#5A2A38" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M-3 -8 Q0 -4 3 -8" stroke="#D94F70" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <ellipse cx="-9" cy="-10" rx="3" ry="1.8" fill="#FF7597" opacity="0.6" />
        <ellipse cx="9" cy="-10" rx="3" ry="1.8" fill="#FF7597" opacity="0.6" />
      </g>

      {/* Surrounding Sparkles & Stars */}
      {[
        { x: 35, y: 70, s: 0.9 },
        { x: 165, y: 75, s: 0.8 },
        { x: 100, y: 40, s: 1.2 },
        { x: 50, y: 140, s: 0.7 },
        { x: 155, y: 145, s: 0.7 }
      ].map((star, i) => (
        <g key={i} transform={`translate(${star.x}, ${star.y}) scale(${star.s})`}>
          <path d="M0 -9 Q0 0 9 0 Q0 0 0 9 Q0 0 -9 0 Q0 0 0 -9 Z" fill="#FFE066" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
      ))}
    </svg>
  );
}

// Vintage Postage Stamp decoration
export function PostageStamp({ label = "AARU'S DAY", sub = "OCT 21" }) {
  return (
    <div className="postage-stamp-badge">
      <div className="stamp-inner">
        <span className="stamp-sub">{sub}</span>
        <span className="stamp-heart">💌</span>
        <span className="stamp-label">{label}</span>
      </div>
    </div>
  );
}

// Decorative Washi Tape Strip
export function WashiTape({ color = "pink", pattern = "dots", width = 110, rotate = -3 }) {
  return (
    <div
      className={`washi-tape-strip tape-${color} pattern-${pattern}`}
      style={{ width: `${width}px`, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    />
  );
}
