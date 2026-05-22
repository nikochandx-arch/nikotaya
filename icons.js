// ============================================
// icons.js  (for v13.22+)
// ============================================
// Nikotaya Mining Roguelike のSVGアイコン定義ファイル。
// SVG_ICONS オブジェクトを定義する。index.html 本体より
// 先に読み込むこと（index.html 側で <script src="icons.js">）。
//
// アイコンを追加・変更したら、上の (for v12.xx+) の
// バージョン番号を手で書き換えること。
// ============================================

const SVG_ICONS = {
  pickaxe: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <g transform="rotate(45 70 70)">
      <g fill="none" stroke="#27272a" stroke-width="8" stroke-linejoin="round" stroke-linecap="round">
        <rect x="62" y="25" width="16" height="95" rx="6"/>
        <path d="M 15 45 Q 70 -5 125 45 Q 90 25 76 35 L 76 45 L 64 45 L 64 35 Q 50 25 15 45 Z"/>
      </g>
      <rect x="62" y="25" width="16" height="95" rx="6" fill="#b45309" stroke="#18181b" stroke-width="4"/>
      <rect x="66" y="28" width="4" height="89" rx="2" fill="#f59e0b"/>
      <path d="M 15 45 Q 70 -5 125 45 Q 90 25 76 35 L 76 45 L 64 45 L 64 35 Q 50 25 15 45 Z" fill="#e2e8f0" stroke="#18181b" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 23 41 Q 70 5 117 41 Q 90 26 74 34 L 74 38 L 66 38 L 66 34 Q 50 26 23 41 Z" fill="#ffffff"/>
    </g>
  </svg>`,
  tent: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width:1.4em;height:1.4em;vertical-align:-0.3em;display:inline-block;">
  <ellipse cx="60" cy="95" rx="50" ry="10" fill="#18181b"/>
  <radialGradient id="tentGlowYellow" cx="50%" cy="80%" r="50%">
    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.5"/>
    <stop offset="100%" stop-color="#fef08a" stop-opacity="0"/>
  </radialGradient>
  <ellipse cx="50" cy="85" rx="35" ry="15" fill="url(#tentGlowYellow)"/>
  <path d="M 50 25 L 25 90 L 75 90 Z" fill="#27272a" stroke="#18181b" stroke-width="2"/>
  <path d="M 40 85 L 60 85 L 50 70 Z" fill="#ef4444" opacity="0.6"/>
  <path d="M 50 25 L 75 90 L 95 85 L 50 25" fill="#eab308" stroke="#854d0e" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 50 25 L 35 90 L 15 85 Z" fill="#facc15" stroke="#a16207" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 50 25 C 45 50 40 70 35 90" fill="none" stroke="#a16207" stroke-width="1.5" opacity="0.6"/>
  <path d="M 50 25 C 60 50 65 70 75 90" fill="none" stroke="#854d0e" stroke-width="1.5" opacity="0.6"/>
  <line x1="50" y1="20" x2="50" y2="25" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="25" x2="10" y2="95" stroke="#d4d4d8" stroke-width="1.5"/>
  <line x1="50" y1="25" x2="110" y2="95" stroke="#d4d4d8" stroke-width="1.5"/>
  <rect x="8" y="93" width="4" height="8" rx="1" fill="#71717a" stroke="#000" stroke-width="1" transform="rotate(-30 10 95)"/>
  <rect x="108" y="93" width="4" height="8" rx="1" fill="#71717a" stroke="#000" stroke-width="1" transform="rotate(30 110 95)"/>
  <g transform="translate(45, 75)">
    <rect x="2" y="5" width="6" height="8" rx="1" fill="#fef08a" stroke="#18181b" stroke-width="1.5"/>
    <path d="M 1 5 L 9 5" stroke="#18181b" stroke-width="2"/>
    <path d="M 1 13 L 9 13" stroke="#18181b" stroke-width="2"/>
    <circle cx="5" cy="9" r="2" fill="#fff"/>
  </g>
</svg>`,
  journal: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1.4em;height:1.4em;vertical-align:-0.3em;display:inline-block;">
  <rect x="18" y="16" width="64" height="74" rx="4" fill="#000" opacity="0.5"/>
  <rect x="22" y="12" width="56" height="74" rx="1" fill="#fef3c7" stroke="#000" stroke-width="2"/>
  <line x1="78" y1="20" x2="80" y2="20" stroke="#000" stroke-width="2"/>
  <line x1="78" y1="30" x2="82" y2="30" stroke="#000" stroke-width="2"/>
  <path d="M 20 16 L 65 16 L 70 90 L 20 90 Z" fill="#065f46" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
  <path d="M 24 20 L 61 20 L 66 86 L 24 86 Z" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6"/>
  <rect x="60" y="45" width="20" height="12" rx="1" fill="#78350f" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
  <rect x="74" y="44" width="8" height="14" rx="1" fill="#fcd34d" stroke="#000" stroke-width="1.5"/>
  <circle cx="76" cy="51" r="1.5" fill="#000"/>
  <circle cx="45" cy="50" r="8" fill="none" stroke="#047857" stroke-width="2"/>
  <path d="M 45 42 L 48 50 L 45 58 L 42 50 Z" fill="#047857"/>
  <circle cx="45" cy="50" r="1.5" fill="#000"/>
</svg>`,
  goldenMole: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <path d="M12 0L13 3L16 4L13 5L12 8L11 5L8 4L11 3Z" fill="#FFA500"/>
    <path d="M21 4L22 6L24 7L22 8L21 10L20 8L18 7L20 6Z" fill="#FFA500"/>
    <path d="M4 5L5 7L7 8L5 9L4 11L3 9L1 8L3 7Z" fill="#FFA500"/>
    <path d="M4 24C4 10,20 10,20 24" fill="#FFD700" stroke="#DAA520" stroke-width="1"/>
    <ellipse cx="12" cy="18" rx="5.5" ry="4.5" fill="#FFF8DC"/>
    <ellipse cx="12" cy="16" rx="2" ry="1.5" fill="#FF69B4"/>
    <path d="M7.5 14Q9 12 10.5 14" fill="none" stroke="#654321" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M13.5 14Q15 12 16.5 14" fill="none" stroke="#654321" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5 24C5 19,9 19,9 24" fill="#FFD700" stroke="#DAA520" stroke-width="1"/>
    <path d="M15 24C15 19,19 19,19 24" fill="#FFD700" stroke="#DAA520" stroke-width="1"/>
  </svg>`,
  mushroom: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <radialGradient id="bodyShade" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e2e2d0"/>
      </radialGradient>
      <path id="capPath" d="M 12,48 C 12,10 88,10 88,48 C 88,60 75,65 50,65 C 25,65 12,60 12,48 Z"/>
      <clipPath id="capClip">
        <use href="#capPath"/>
      </clipPath>
    </defs>
    <path d="M 32,58 C 24,85 30,95 50,95 C 70,95 76,85 68,58" fill="url(#bodyShade)" stroke="#3f231a" stroke-width="2" stroke-linejoin="round"/>
    <path d="M 32,58 Q 50,68 68,58" fill="none" stroke="#3f231a" stroke-width="2" opacity="0.15"/>
    <use href="#capPath" fill="#ef4444"/>
    <g clip-path="url(#capClip)">
      <circle cx="20" cy="40" r="7" fill="#fff" opacity="0.9"/>
      <circle cx="50" cy="22" r="11" fill="#fff" opacity="0.9"/>
      <circle cx="82" cy="38" r="8" fill="#fff" opacity="0.9"/>
      <circle cx="35" cy="24" r="4.5" fill="#fff" opacity="0.9"/>
      <circle cx="65" cy="46" r="6" fill="#fff" opacity="0.9"/>
      <circle cx="32" cy="55" r="5" fill="#fff" opacity="0.9"/>
      <circle cx="50" cy="65" r="6" fill="#fff" opacity="0.9"/>
    </g>
    <use href="#capPath" fill="none" stroke="#3f231a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <g fill="#3f231a">
      <circle cx="41" cy="78" r="2.2"/>
      <circle cx="59" cy="78" r="2.2"/>
      <path d="M 46,82 Q 50,86 54,82" fill="none" stroke="#3f231a" stroke-width="1.5" stroke-linecap="round"/>
    </g>
    <circle cx="36" cy="81" r="3" fill="#fca5a5" opacity="0.6"/>
    <circle cx="64" cy="81" r="3" fill="#fca5a5" opacity="0.6"/>
  </svg>`,
  badMushroom: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <radialGradient id="bodyShade2" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </radialGradient>
      <path id="capPath2" d="M 12,48 C 12,10 88,10 88,48 C 88,60 75,65 50,65 C 25,65 12,60 12,48 Z"/>
      <clipPath id="capClip2"><use href="#capPath2"/></clipPath>
    </defs>
    <path d="M 32,58 C 24,85 30,95 50,95 C 70,95 76,85 68,58" fill="url(#bodyShade2)" stroke="#1e1b4b" stroke-width="2" stroke-linejoin="round"/>
    <path d="M 32,58 Q 50,68 68,58" fill="none" stroke="#1e1b4b" stroke-width="2" opacity="0.2"/>
    <use href="#capPath2" fill="#7e22ce"/>
    <g clip-path="url(#capClip2)">
      <circle cx="20" cy="40" r="7" fill="#fff" opacity="0.9"/>
      <circle cx="50" cy="22" r="11" fill="#fff" opacity="0.9"/>
      <circle cx="82" cy="38" r="8" fill="#fff" opacity="0.9"/>
      <circle cx="35" cy="24" r="4.5" fill="#fff" opacity="0.9"/>
      <circle cx="65" cy="46" r="6" fill="#fff" opacity="0.9"/>
      <circle cx="32" cy="55" r="5" fill="#fff" opacity="0.9"/>
      <circle cx="50" cy="65" r="6" fill="#fff" opacity="0.9"/>
    </g>
    <use href="#capPath2" fill="none" stroke="#1e1b4b" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <g stroke="#1e1b4b" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 38,76 L 43,80" stroke-width="2.5"/>
      <path d="M 62,76 L 57,80" stroke-width="2.5"/>
      <path d="M 45,82 Q 47.5,86 50,83 Q 52.5,86 55,82" fill="none" stroke-width="1.5"/>
    </g>
    <circle cx="36" cy="81" r="3" fill="#d946ef" opacity="0.5"/>
    <circle cx="64" cy="81" r="3" fill="#d946ef" opacity="0.5"/>
  </svg>`,
  goddess: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <circle cx="50" cy="35" r="25" fill="none" stroke="#fcd34d" stroke-width="0.5" opacity="0.5">
      <animate attributeName="r" values="22;28;22" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="35" r="18" fill="#fef3c7" opacity="0.2">
      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
    </circle>
    <g fill="#d4d4d8">
      <circle cx="50" cy="25" r="8"/>
      <path d="M50,33 L35,85 L65,85 Z"/>
      <path d="M42,40 Q50,45 58,40" fill="none" stroke="#d4d4d8" stroke-width="3" stroke-linecap="round"/>
      <path d="M38,35 Q20,20 15,50 Q20,60 38,55" fill="#a1a1aa" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="-2 50 35" to="2 50 35" dur="5s" repeatCount="indefinite" additive="sum"/>
      </path>
      <path d="M62,35 Q80,20 85,50 Q80,60 62,55" fill="#a1a1aa" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="2 50 35" to="-2 50 35" dur="5s" repeatCount="indefinite" additive="sum"/>
      </path>
    </g>
    <rect x="30" y="85" width="40" height="8" rx="2" fill="#71717a"/>
    <circle cx="25" cy="20" r="1.2" fill="#fbbf24">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="20;15" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="45" r="1.2" fill="#fbbf24">
      <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="45;35" dur="3s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="15" r="1" fill="#fff">
      <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </svg>`,
  scrap: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <path d="M12 2L13.5 2L14.5 4.5L16.5 5.5L19 4L20 5L18.5 7.5L19.5 9.5L22 10.5L22 12L22 13.5L19.5 14.5L18.5 16.5L20 19L19 20L16.5 18.5L14.5 19.5L13.5 22L12 22L10.5 22L9.5 19.5L7.5 18.5L5 20L4 19L5.5 16.5L4.5 14.5L2 13.5L2 12L2 10.5L4.5 9.5L5.5 7.5L4 5L5 4L7.5 5.5L9.5 4.5L10.5 2Z" fill="#7F8C8D" stroke="#2C3E50" stroke-width="1" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="4" fill="#2C3E50"/>
    <path d="M8 8A5.5 5.5 0 0 1 15 8" fill="none" stroke="#BDC3C7" stroke-width="1.5" stroke-linecap="round"/>
    <g transform="translate(13,13) rotate(-35)">
      <rect x="-3" y="0" width="6" height="12" fill="#BDC3C7" stroke="#2C3E50" stroke-width="1.5"/>
      <line x1="-3" y1="3" x2="3" y2="3" stroke="#2C3E50" stroke-width="1.5"/>
      <line x1="-3" y1="6" x2="3" y2="6" stroke="#2C3E50" stroke-width="1.5"/>
      <line x1="-3" y1="9" x2="3" y2="9" stroke="#2C3E50" stroke-width="1.5"/>
      <polygon points="-5,0 -3,-3 3,-3 5,0" fill="#ECF0F1" stroke="#2C3E50" stroke-width="1.5" stroke-linejoin="round"/>
    </g>
  </svg>`,
  emerald: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <polygon points="6,2 18,2 22,6 22,18 18,22 6,22 2,18 2,6" fill="#2ECC71" stroke="#145A32" stroke-width="1" stroke-linejoin="round"/>
    <polygon points="8,6 16,6 18,8 18,16 16,18 8,18 6,16 6,8" fill="#27AE60" stroke="#1E8449" stroke-width="1" stroke-linejoin="round"/>
    <rect x="9" y="7" width="6" height="10" fill="#ABEBC6"/>
    <line x1="6" y1="2" x2="8" y2="6" stroke="#145A32" stroke-width="1"/>
    <line x1="18" y1="2" x2="16" y2="6" stroke="#145A32" stroke-width="1"/>
    <line x1="22" y1="6" x2="18" y2="8" stroke="#145A32" stroke-width="1"/>
    <line x1="22" y1="18" x2="18" y2="16" stroke="#145A32" stroke-width="1"/>
    <line x1="18" y1="22" x2="16" y2="18" stroke="#145A32" stroke-width="1"/>
    <line x1="6" y1="22" x2="8" y2="18" stroke="#145A32" stroke-width="1"/>
    <line x1="2" y1="18" x2="6" y2="16" stroke="#145A32" stroke-width="1"/>
    <line x1="2" y1="6" x2="6" y2="8" stroke="#145A32" stroke-width="1"/>
    <polygon points="4,7 7,4 12,4 7,9" fill="#FFFFFF" opacity="0.5"/>
    <path d="M19 13L20 16L23 17L20 18L19 21L18 18L15 17L18 16Z" fill="#FFF"/>
  </svg>`,
  merchant: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <path d="M20,100 L25,50 Q25,15 50,15 Q75,15 75,50 L80,100 Z" fill="#2e1065"/>
    <path d="M25,50 Q25,15 50,15 Q75,15 75,50 L70,50 Q70,22 50,22 Q30,22 30,50 Z" fill="#4c1d95"/>
    <path d="M35,35 Q50,30 65,35 Q65,65 50,70 Q35,65 35,35 Z" fill="#000"/>
    <circle cx="43" cy="48" r="1.5" fill="#f43f5e">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="57" cy="48" r="1.5" fill="#f43f5e">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="75" r="4" fill="#ca8a04"/>
    <path d="M50,72 L50,78 M47,75 L53,75" stroke="#fef08a" stroke-width="1"/>
    <circle cx="80" cy="80" r="4" fill="#a855f7" opacity="0.3">
      <animate attributeName="cy" values="80;70" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>`,
  door: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <filter id="rustEffect"><feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3"></feTurbulence><feDiffuseLighting lighting-color="#451a03" surfaceScale="2"><feDistantLight azimuth="45" elevation="50"></feDistantLight></feDiffuseLighting><feComposite in2="SourceAlpha" operator="in"></feComposite></filter>
      <linearGradient id="doorGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#3f3f46"></stop><stop offset="50%" stop-color="#71717a"></stop><stop offset="100%" stop-color="#3f3f46"></stop></linearGradient>
    </defs>
    <rect x="15" y="10" width="70" height="85" fill="#18181b" stroke="#3f3f46" stroke-width="3"></rect>
    <rect x="20" y="15" width="60" height="80" fill="url(#doorGrad)"></rect>
    <rect x="20" y="15" width="60" height="80" fill="#451a03" filter="url(#rustEffect)" opacity="0.4"></rect>
    <rect x="20" y="30" width="60" height="6" fill="#27272a"></rect>
    <rect x="20" y="70" width="60" height="6" fill="#27272a"></rect>
    <circle cx="25" cy="33" r="1.5" fill="#18181b"></circle><circle cx="75" cy="33" r="1.5" fill="#18181b"></circle>
    <circle cx="25" cy="73" r="1.5" fill="#18181b"></circle><circle cx="75" cy="73" r="1.5" fill="#18181b"></circle>
    <rect x="65" y="45" width="10" height="15" rx="1" fill="#18181b"></rect>
    <circle cx="70" cy="50" r="2.5" fill="#000"></circle>
    <path d="M70,50 L70,56" stroke="#000" stroke-width="2" stroke-linecap="round"></path>
    <rect x="18" y="15" width="2" height="80" fill="#fbbf24" opacity="0.1"></rect>
  </svg>`,
  vein: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <filter id="fRock1"><feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="4"></feTurbulence><feDiffuseLighting lighting-color="#444" surfaceScale="2"><feDistantLight azimuth="225" elevation="45"></feDistantLight></feDiffuseLighting><feComposite in2="SourceAlpha" operator="in"></feComposite></filter>
      <linearGradient id="gSilver" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f8fafc"></stop><stop offset="50%" stop-color="#94a3b8"></stop><stop offset="100%" stop-color="#334155"></stop></linearGradient>
    </defs>
    <path d="M5,15 L95,10 L90,90 L10,85 Z" fill="#262626" filter="url(#fRock1)"></path>
    <path d="M45,10 L40,40 L55,60 L50,90" stroke="#000" stroke-width="3" fill="none" opacity="0.7"></path>
    <g transform="translate(20,25) rotate(-15)">
      <path d="M0,0 L15,-5 L18,10 L5,12 Z" fill="url(#gSilver)"></path>
      <path d="M2,2 L12,2" stroke="#fff" stroke-width="0.5" opacity="0.8"><animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite"></animate></path>
    </g>
    <g transform="translate(55,50)">
      <path d="M0,0 L10,-3 L12,7 L2,8 Z" fill="url(#gSilver)"></path>
    </g>
    <path d="M65,25 L75,20 L78,30 L68,35 Z" fill="#3b82f6"><animate attributeName="fill" values="#3b82f6;#93c5fd;#3b82f6" dur="3s" repeatCount="indefinite"></animate></path>
    <circle cx="28" cy="22" r="0.6" fill="#fff"><animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"></animate></circle>
  </svg>`,
  thiefMole: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <path d="M4 24C4 10,20 10,20 24" fill="#8B4513" stroke="#5C2E0B" stroke-width="1"/>
    <path d="M4 15C4 8,20 8,20 15Z" fill="#2E8B57" stroke="#1C5C39" stroke-width="1"/>
    <circle cx="8" cy="10" r="1.5" fill="#FFF" opacity="0.8"/>
    <circle cx="16" cy="10" r="1.5" fill="#FFF" opacity="0.8"/>
    <circle cx="12" cy="12" r="1.5" fill="#FFF" opacity="0.8"/>
    <path d="M5.5 13Q12 16.5 18.5 13Q12 18 5.5 13Z" fill="#222"/>
    <line x1="8" y1="13.5" x2="10" y2="14.5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="16" y1="13.5" x2="14" y2="14.5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="12" cy="19" rx="4.5" ry="3.5" fill="#D2B48C"/>
    <ellipse cx="12" cy="17" rx="2" ry="1.5" fill="#FF9999"/>
    <path d="M5 24C5 20,8 20,8 24" fill="#8B4513" stroke="#5C2E0B" stroke-width="1"/>
    <polygon points="17,16 23,16 20,21" fill="#00FFFF" stroke="#008080" stroke-width="1"/>
    <path d="M16 24C16 20,19 20,19 24" fill="#8B4513" stroke="#5C2E0B" stroke-width="1"/>
  </svg>`,
  campfire: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <radialGradient id="fireGlow2" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.3"></stop>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
      </radialGradient>
    </defs>
    <circle cx="50" cy="60" r="45" fill="url(#fireGlow2)"></circle>
    <rect x="35" y="65" width="30" height="10" rx="3" fill="#78350f" stroke="#000" stroke-width="2" transform="rotate(-15 50 70)"></rect>
    <rect x="35" y="65" width="30" height="10" rx="3" fill="#92400e" stroke="#000" stroke-width="2" transform="rotate(15 50 70)"></rect>
    <path d="M 50 20 C 65 45 65 65 55 75 C 50 80 45 80 40 70 C 35 60 40 40 50 20 Z" fill="#ef4444" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
    <path d="M 50 40 C 58 55 58 65 53 72 C 50 76 45 72 45 65 C 45 55 48 48 50 40 Z" fill="#fef08a"></path>
    <path d="M 35 45 C 45 60 40 75 35 80 C 30 85 25 80 25 70 C 25 60 30 50 35 45 Z" fill="#f97316" stroke="#000" stroke-width="2" stroke-linejoin="round"></path>
    <path d="M 68 50 C 75 60 75 75 70 80 C 65 85 60 80 60 70 C 60 60 65 55 68 50 Z" fill="#f97316" stroke="#000" stroke-width="2" stroke-linejoin="round"></path>
    <g stroke="#000" stroke-width="2.5" stroke-linejoin="round">
      <ellipse cx="25" cy="80" rx="12" ry="8" fill="#71717a"></ellipse>
      <ellipse cx="40" cy="86" rx="14" ry="9" fill="#a1a1aa"></ellipse>
      <ellipse cx="60" cy="86" rx="14" ry="9" fill="#71717a"></ellipse>
      <ellipse cx="75" cy="80" rx="12" ry="8" fill="#52525b"></ellipse>
      <ellipse cx="50" cy="90" rx="15" ry="8" fill="#52525b"></ellipse>
    </g>
    <path d="M 30 80 C 40 76 60 76 70 80" fill="none" stroke="#fca5a5" stroke-width="1.5" opacity="0.4"></path>
    <g fill="#f97316">
      <circle cx="30" cy="25" r="1.5"></circle>
      <circle cx="55" cy="15" r="2"></circle>
      <circle cx="70" cy="35" r="1.5"></circle>
    </g>
  </svg>`,
  youki: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <g stroke="#a1a1aa" stroke-width="2" stroke-linecap="round" fill="none">
      <path d="M 75 30 Q 85 25 90 35" opacity="0.6"></path>
      <path d="M 80 25 Q 95 15 100 30" opacity="0.3"></path>
    </g>
    <g fill="#09090b" stroke="#71717a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
      <path d="M 45 45 C 35 60 40 85 55 85 C 65 85 65 60 55 45 Z"></path>
      <path d="M 45 80 L 40 100 L 45 115" stroke-width="4"></path>
      <path d="M 45 115 L 35 115" stroke-width="4"></path>
      <path d="M 55 85 L 65 100 L 60 115" stroke-width="4"></path>
      <path d="M 60 115 L 70 115" stroke-width="4"></path>
      <path d="M 40 50 L 30 70 L 35 85" stroke-width="4"></path>
      <path d="M 60 50 L 70 65 L 60 75" stroke-width="4"></path>
      <circle cx="50" cy="35" r="9"></circle>
    </g>
    <g transform="translate(-8, 0)">
      <path d="M 50 35 L 45 20 L 52 25 L 55 12 L 60 22 L 68 15 L 65 28 L 72 32 L 65 38 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" stroke-linejoin="round"></path>
    </g>
    <circle cx="58" cy="38" r="1.5" fill="#fef08a" stroke="none"></circle>
    <path d="M 45 45 Q 50 52 55 45" fill="none" stroke="#fef08a" stroke-width="1.5" opacity="0.8"></path>
  </svg>`,
  poison: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <radialGradient id="vortexGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#9333ea" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#9333ea" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="greenSmoke" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ade80"/>
        <stop offset="50%" stop-color="#22c55e"/>
        <stop offset="100%" stop-color="#14532d"/>
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="50" fill="url(#vortexGlow)"/>
    <path d="M 20 60 C 10 30 50 15 65 30 C 80 15 110 30 100 65 C 115 80 85 105 60 95 C 40 105 10 85 20 60 Z" fill="#7e22ce" stroke="#4c1d95" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="20" cy="35" r="12" fill="#7e22ce" stroke="#4c1d95" stroke-width="2"/>
    <circle cx="95" cy="85" r="15" fill="#7e22ce" stroke="#4c1d95" stroke-width="2"/>
    <path d="M 30 65 C 20 40 50 30 60 45 C 80 30 100 50 90 75 C 100 95 65 105 50 90 C 35 100 20 85 30 65 Z" fill="url(#greenSmoke)" stroke="#064e3b" stroke-width="3" stroke-linejoin="round"/>
    <path d="M 40 45 C 50 35 60 50 50 60" fill="none" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M 80 60 C 95 65 85 85 70 75" fill="none" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M 40 80 C 30 90 50 95 55 85" fill="none" stroke="#bbf7d0" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <g transform="translate(60, 60) scale(0.9) translate(-60, -60)">
      <path d="M 30 45 C 30 15 90 15 90 45 C 90 65 80 75 75 80 L 75 95 L 45 95 L 45 80 C 40 75 30 65 30 45 Z" fill="#f8fafc" stroke="#064e3b" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 45 25 L 55 35 M 75 25 L 70 30 L 75 35" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <path d="M 40 55 C 40 40 55 45 55 55 C 55 65 40 65 40 55 Z" fill="#022c22"/>
      <path d="M 80 55 C 80 40 65 45 65 55 C 65 65 80 65 80 55 Z" fill="#022c22"/>
      <circle cx="50" cy="55" r="4" fill="#d8b4fe"/>
      <circle cx="70" cy="55" r="4" fill="#d8b4fe"/>
      <path d="M 60 65 L 53 75 L 67 75 Z" fill="#022c22"/>
      <line x1="45" y1="85" x2="75" y2="85" stroke="#022c22" stroke-width="3" stroke-linecap="round"/>
      <line x1="52" y1="80" x2="52" y2="95" stroke="#022c22" stroke-width="3"/>
      <line x1="60" y1="80" x2="60" y2="95" stroke="#022c22" stroke-width="3"/>
      <line x1="68" y1="80" x2="68" y2="95" stroke="#022c22" stroke-width="3"/>
    </g>
    <g fill="#bef264">
      <circle cx="20" cy="80" r="3"/>
      <circle cx="25" cy="95" r="4"/>
      <circle cx="100" cy="40" r="3"/>
      <circle cx="90" cy="20" r="4"/>
    </g>
  </svg>`,
  pitJump: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <linearGradient id="pitJumpDeepBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" fill="url(#pitJumpDeepBlueGrad)"/>
    <path d="M -10 -10 L 45 -10 L 30 30 L 50 70 L 30 100 L 45 130 L -10 130 Z" transform="translate(0, 24)" fill="#0f172a"/>
    <path d="M -10 -10 L 45 -10 L 30 30 L 50 70 L 30 100 L 45 130 L -10 130 Z" transform="translate(0, 12)" fill="#1e293b"/>
    <path d="M -10 -10 L 45 -10 L 30 30 L 50 70 L 30 100 L 45 130 L -10 130 Z" fill="#334155" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
    <path d="M 130 -10 L 75 -10 L 90 40 L 70 80 L 85 130 L 130 130 Z" transform="translate(0, 24)" fill="#0f172a"/>
    <path d="M 130 -10 L 75 -10 L 90 40 L 70 80 L 85 130 L 130 130 Z" transform="translate(0, 12)" fill="#1e293b"/>
    <path d="M 130 -10 L 75 -10 L 90 40 L 70 80 L 85 130 L 130 130 Z" fill="#334155" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke="#0f172a" stroke-width="2" stroke-linecap="round">
      <path d="M 30 30 L 20 40 M 30 30 L 15 25"/>
      <path d="M 50 70 L 40 85 M 40 85 L 25 80"/>
      <path d="M 90 40 L 105 50 M 105 50 L 115 45"/>
    </g>
    <g stroke="#1d4ed8" stroke-width="1.5" stroke-linejoin="round">
      <path d="M 25 25 L 30 10 L 35 27 Z" fill="#60a5fa"/>
      <path d="M 30 10 L 32 25" stroke="#bfdbfe" stroke-width="1"/>
      <path d="M 95 85 L 90 70 L 85 82 Z" fill="#60a5fa"/>
      <path d="M 100 110 L 105 95 L 110 112 Z" fill="#60a5fa" transform="scale(0.8) translate(20, 20)"/>
    </g>
    <g fill="#64748b" opacity="0.5">
      <path d="M 60 50 L 63 53 L 58 55 Z"/>
      <path d="M 70 80 L 72 82 L 69 84 Z" transform="scale(0.8) translate(20, 20)"/>
      <path d="M 50 100 L 52 101 L 49 103 Z" transform="scale(0.5) translate(50, 50)" opacity="0.3"/>
    </g>
    <g fill="#93c5fd" opacity="0.6">
      <circle cx="55" cy="40" r="1.5"/>
      <circle cx="65" cy="20" r="1"/>
      <circle cx="45" cy="90" r="1.5"/>
      <circle cx="80" cy="60" r="2"/>
      <circle cx="60" cy="110" r="1"/>
    </g>
  </svg>`,

  fallenMiner: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <g transform="translate(0, 5)">
      <!-- 1. 地面の影 -->
      <ellipse cx="70" cy="115" rx="50" ry="8" fill="#18181b"/>

      <!-- 2. 背景分離用の太いフチ -->
      <g fill="none" stroke="#d4d4d8" stroke-width="12" stroke-linejoin="round" stroke-linecap="round">
        <!-- ピッケル -->
        <g transform="translate(35, 75) rotate(-65) scale(0.8)">
          <rect x="-4" y="-35" width="8" height="75" rx="4"/>
          <path d="M -24 -25 Q 0 -45 24 -25 L 20 -19 Q 0 -35 -20 -19 Z"/>
        </g>
        <!-- キャラ本体（うつ伏せ） -->
        <rect x="35" y="95" width="45" height="20" rx="10"/>
        <circle cx="85" cy="100" r="20"/>
        <rect x="25" y="105" width="18" height="10" rx="5"/>
        <rect x="35" y="110" width="18" height="10" rx="5"/>
        <rect x="60" y="105" width="18" height="10" rx="5"/>
        <!-- ヘルメット（右に転がる） -->
        <g transform="translate(115, 105) rotate(75)">
          <path d="M -18 0 C -18 -22 18 -22 18 0 Z"/>
          <path d="M -22 6 L -18 0 L 18 0 L 22 6 Z"/>
          <rect x="-8" y="-14" width="16" height="14" rx="4"/>
        </g>
      </g>

      <!-- 3. ピッケル（手前に落ちている） -->
      <g transform="translate(35, 75) rotate(-65) scale(0.8)">
        <rect x="-4" y="-35" width="8" height="75" rx="4" fill="#b45309" stroke="#18181b" stroke-width="3"/>
        <path d="M -24 -25 Q 0 -45 24 -25 L 20 -19 Q 0 -35 -20 -19 Z" fill="#e2e8f0" stroke="#18181b" stroke-width="3" stroke-linejoin="round"/>
        <path d="M -19 -26 Q 0 -42 19 -26" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- 4. キャラ本体（黒塗りシルエット） -->
      <g fill="#09090b">
        <rect x="35" y="95" width="45" height="20" rx="10"/>
        <rect x="25" y="105" width="18" height="10" rx="5"/>
        <rect x="35" y="110" width="18" height="10" rx="5"/>
        <rect x="60" y="105" width="18" height="10" rx="5"/>
        <circle cx="85" cy="100" r="20"/>
      </g>

      <!-- 5. 脱げて転がったヘルメット -->
      <g transform="translate(115, 105) rotate(75)" stroke="#18181b" stroke-width="3" stroke-linejoin="round">
        <path d="M -18 0 C -18 -22 18 -22 18 0 Z" fill="#facc15"/>
        <path d="M -22 6 L -18 0 L 18 0 L 22 6 Z" fill="#eab308"/>
        <rect x="-8" y="-14" width="16" height="14" rx="4" fill="#52525b"/>
        <circle cx="0" cy="-7" r="4" fill="#ffffff" stroke="none"/>
        <circle cx="0" cy="-7" r="1.5" fill="#fef08a" stroke="none"/>
      </g>

      <!-- 6. 倒れた衝撃のホコリ（土煙） -->
      <g fill="#a1a1aa" opacity="0.6">
        <circle cx="20" cy="100" r="4"/>
        <circle cx="10" cy="110" r="3"/>
        <circle cx="105" cy="85" r="3"/>
      </g>
    </g>
  </svg>`,

  // v13.10：コンテナアイコン（旧📦絵文字を置換）
  // にこたゃ作のSVGをサイズ規格に合わせて既存形式に揃えたもの。
  // defs内のidは他SVGとの衝突を避けるため container- プレフィックス付き。
  container: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <defs>
      <path id="container-box-lid" d="M 25 60 C 25 52 115 52 115 60 L 115 68 L 25 68 Z"/>
      <path id="container-box-base" d="M 25 68 L 115 68 L 110 112 L 30 112 Z"/>
    </defs>
    <g transform="translate(0, 10)">
      <!-- 影 -->
      <ellipse cx="70" cy="115" rx="45" ry="8" fill="#18181b"/>

      <!-- 1. ダークグレーの太フチ（背景分離） -->
      <g fill="#27272a" stroke="#27272a" stroke-width="12" stroke-linejoin="round" stroke-linecap="round">
        <use href="#container-box-lid"/>
        <use href="#container-box-base"/>
      </g>

      <!-- 2. 本体と蓋（くすんだ茶色の木材） -->
      <use href="#container-box-base" fill="#78350f" stroke="#18181b" stroke-width="4" stroke-linejoin="round"/>
      <use href="#container-box-lid"  fill="#92400e" stroke="#18181b" stroke-width="4" stroke-linejoin="round"/>

      <!-- 3. 木目（シンプルな横線） -->
      <path d="M 32 82 L 108 82 M 35 96 L 105 96 M 30 58 L 110 58" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>

      <!-- 4. 鉄の補強枠（グレー） -->
      <rect x="40" y="54" width="12" height="56" fill="#71717a" stroke="#18181b" stroke-width="3"/>
      <circle cx="46" cy="62" r="1.5" fill="#18181b"/>
      <circle cx="46" cy="104" r="1.5" fill="#18181b"/>

      <rect x="88" y="54" width="12" height="56" fill="#71717a" stroke="#18181b" stroke-width="3"/>
      <circle cx="94" cy="62" r="1.5" fill="#18181b"/>
      <circle cx="94" cy="104" r="1.5" fill="#18181b"/>

      <!-- 5. 簡素な錠前（四角いプレートと丸穴） -->
      <rect x="62" y="58" width="16" height="14" rx="2" fill="#a1a1aa" stroke="#18181b" stroke-width="3"/>
      <circle cx="70" cy="65" r="2.5" fill="#18181b"/>
      <line x1="70" y1="66" x2="70" y2="69" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>

      <!-- 6. わずかなハイライト -->
      <path d="M 28 55 C 45 52 95 52 112 55" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    </g>
  </svg>`,

  grave: `<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:1em;height:1em;vertical-align:-0.2em;display:inline-block;">
    <g transform="translate(0, 10)">
      <!-- 1. ダークな外周フチ（既存アイコンと同じ程度の太さに調整） -->
      <g fill="none" stroke="#27272a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <ellipse cx="70" cy="110" rx="45" ry="12"/>
        <path d="M 40 110 L 40 50 A 30 30 0 0 1 100 50 L 100 110 Z"/>
      </g>

      <!-- 2. 盛り土（ベース） -->
      <ellipse cx="70" cy="110" rx="45" ry="12" fill="#78350f" stroke="#18181b" stroke-width="2"/>

      <!-- 3. 墓石本体（暗めのグレー） -->
      <path d="M 40 110 L 40 50 A 30 30 0 0 1 100 50 L 100 110 Z" fill="#64748b" stroke="#18181b" stroke-width="2" stroke-linejoin="round"/>

      <!-- 4. 十字の刻印 -->
      <path d="M 70 45 L 70 65 M 60 52 L 80 52" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>

      <!-- 5. 文字が書いてある風の横線 -->
      <g fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round">
        <path d="M 50 78 L 90 78"/>
        <path d="M 55 88 L 85 88"/>
        <path d="M 50 98 L 75 98"/>
      </g>
    </g>
  </svg>`,

  // アイテムボタン用SVG（紋スロット横に配置）。
  // バッグ（鞄）デザイン。サイズは .item-button CSS クラス側で制御するため、
  // SVG タグ自体には width/height を指定せず、viewBox のみ。
  itemButton: `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style="display:block;">
    <defs>
      <rect id="bag-main" x="30" y="40" width="140" height="80" rx="15"/>
      <path id="bag-lid" d="M 25 45 Q 100 25 175 45 L 168 85 Q 100 110 32 85 Z"/>
      <rect id="bag-belt1" x="55" y="50" width="16" height="45" rx="4"/>
      <rect id="bag-belt2" x="129" y="50" width="16" height="45" rx="4"/>
    </defs>
    <g fill="#27272a" stroke="#27272a" stroke-width="12" stroke-linejoin="round" stroke-linecap="round">
      <use href="#bag-main"/>
      <use href="#bag-lid"/>
      <use href="#bag-belt1"/>
      <use href="#bag-belt2"/>
    </g>
    <g stroke="#18181b" stroke-width="4" stroke-linejoin="round">
      <use href="#bag-main" fill="#92400e"/>
      <use href="#bag-lid" fill="#d97706"/>
      <path d="M 35 48 Q 100 33 165 48" fill="none" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
      <use href="#bag-belt1" fill="#78350f"/>
      <use href="#bag-belt2" fill="#78350f"/>
      <rect x="51" y="75" width="24" height="14" rx="2" fill="#eab308"/>
      <rect x="125" y="75" width="24" height="14" rx="2" fill="#eab308"/>
    </g>
  </svg>`,
};
