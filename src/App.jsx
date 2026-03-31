import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════
   CHARACTER ART — SVG portraits
══════════════════════════════════════════ */
function CharArt({ type, color, size = 140 }) {
  const faces = {
    INTJ: (c) => <>
      <rect x="28" y="52" width="64" height="60" rx="6" fill="#16213e"/>
      <path d="M28 65 L8 115 L28 104 Z" fill={c} opacity="0.85"/>
      <path d="M92 65 L112 115 L92 104 Z" fill={c} opacity="0.85"/>
      <ellipse cx="60" cy="40" rx="20" ry="22" fill="#f5c5a3"/>
      <path d="M40 28 L46 15 L51 32 L56 13 L61 29 L66 12 L71 27 L76 18 L82 30 L75 40 L45 40 Z" fill="#d8d8d8"/>
      <ellipse cx="51" cy="43" rx="4.5" ry="3.5" fill="#fff"/>
      <ellipse cx="69" cy="43" rx="4.5" ry="3.5" fill="#fff"/>
      <ellipse cx="51" cy="44" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="69" cy="44" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="52" cy="43" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="70" cy="43" rx="1.1" ry="1.1" fill="#fff"/>
      <path d="M55 52 Q61 55 66 52" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
      <path d="M46 36 Q51 34 56 36" stroke="#888" strokeWidth="1.8" fill="none"/>
      <path d="M64 35 Q69 33 74 35" stroke="#888" strokeWidth="1.8" fill="none"/>
      <path d="M48 52 L60 59 L72 52" fill={c} opacity="0.9"/>
      <rect x="8" y="72" width="20" height="28" rx="2" fill={c} opacity="0.5"/>
    </>,
    INFJ: (c) => <>
      <path d="M26 62 Q60 55 94 62 L98 118 L22 118 Z" fill="#2d1b69"/>
      <circle cx="60" cy="90" r="16" fill="none" stroke={c} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="60" cy="90" r="9" fill={c} opacity="0.25"/>
      <circle cx="60" cy="90" r="4.5" fill={c} opacity="0.6"/>
      <circle cx="58" cy="88" r="1.8" fill="#fff" opacity="0.8"/>
      <ellipse cx="60" cy="40" rx="19" ry="21" fill="#f5c5a3"/>
      <path d="M41 30 Q26 52 24 84 L33 84 Q36 58 44 43 Z" fill="#4a0080"/>
      <path d="M79 30 Q94 52 96 84 L87 84 Q84 58 76 43 Z" fill="#4a0080"/>
      <path d="M41 28 L79 28 L83 40 L60 24 L37 40 Z" fill="#4a0080"/>
      <ellipse cx="51" cy="43" rx="4.5" ry="3.8" fill="#fff"/>
      <ellipse cx="69" cy="43" rx="4.5" ry="3.8" fill="#fff"/>
      <ellipse cx="51" cy="44" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="69" cy="44" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="52" cy="43" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="70" cy="43" rx="1.1" ry="1.1" fill="#fff"/>
      <path d="M55 53 Q60 56 65 53" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
      <text x="20" y="50" fontSize="9" fill={c} opacity="0.7">✦</text>
      <text x="94" y="46" fontSize="7" fill={c} opacity="0.6">✦</text>
    </>,
    ENTP: (c) => <>
      <rect x="30" y="60" width="60" height="52" rx="6" fill="#2a2a10"/>
      <path d="M46 60 L60 73 L74 60 L70 60 L60 68 L50 60 Z" fill={c}/>
      <path d="M30 70 L10 55 L14 64 L30 75 Z" fill="#2a2a10"/>
      <path d="M90 70 L110 55 L106 64 L90 75 Z" fill="#2a2a10"/>
      <ellipse cx="60" cy="38" rx="20" ry="22" fill="#f5d5a3"/>
      <path d="M40 26 L35 13 L44 21 L42 10 L52 20 L49 8 L59 20 L61 7 L63 20 L71 8 L68 20 L78 10 L76 21 L85 13 L80 26 L80 38 L40 38 Z" fill="#3d2000"/>
      <ellipse cx="51" cy="40" rx="4.5" ry="3.5" fill="#fff"/>
      <ellipse cx="69" cy="40" rx="4.5" ry="3.5" fill="#fff"/>
      <ellipse cx="51" cy="41" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="69" cy="41" rx="2.8" ry="2.8" fill={c}/>
      <ellipse cx="52" cy="40" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="70" cy="40" rx="1.1" ry="1.1" fill="#fff"/>
      <path d="M50 51 Q60 59 70 51 Q65 57 55 57 Z" fill="#c0806a"/>
      <path d="M50 51 Q60 59 70 51" stroke="#a06040" strokeWidth="1.1" fill="none"/>
      <path d="M47 35 Q51 33 55 35" stroke="#3d2000" strokeWidth="1.8" fill="none"/>
      <path d="M65 34 Q69 32 73 34" stroke="#3d2000" strokeWidth="1.8" fill="none"/>
      <circle cx="92" cy="28" r="9" fill="#fff" opacity="0.12" stroke={c} strokeWidth="1.2"/>
      <text x="88" y="32" fontSize="11" fill={c}>💡</text>
    </>,
    ENTJ: (c) => <>
      <rect x="26" y="55" width="68" height="58" rx="6" fill="#2a0505"/>
      <rect x="24" y="55" width="20" height="9" rx="4" fill={c}/>
      <rect x="76" y="55" width="20" height="9" rx="4" fill={c}/>
      <circle cx="44" cy="77" r="5" fill={c} opacity="0.8"/>
      <circle cx="44" cy="77" r="2.5" fill="#fff" opacity="0.5"/>
      <ellipse cx="60" cy="37" rx="21" ry="22" fill="#f5b08a"/>
      <rect x="39" y="17" width="42" height="22" rx="6" fill="#1a0000"/>
      <ellipse cx="50" cy="40" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="70" cy="40" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="50" cy="41" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="70" cy="41" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="51" cy="40" rx="1.2" ry="1.2" fill="#fff"/>
      <ellipse cx="71" cy="40" rx="1.2" ry="1.2" fill="#fff"/>
      <path d="M54 52 Q60 50 66 52" stroke="#a06040" strokeWidth="1.6" fill="none"/>
      <path d="M45 34 L55 32" stroke="#1a0000" strokeWidth="2.8" fill="none"/>
      <path d="M65 32 L75 34" stroke="#1a0000" strokeWidth="2.8" fill="none"/>
      <rect x="89" y="54" width="5" height="58" rx="2.5" fill="#999"/>
      <rect x="83" y="65" width="16" height="3.5" rx="1.5" fill="#bbb"/>
      <rect x="87" y="54" width="7" height="11" rx="2" fill={c}/>
    </>,
    INFP: (c) => <>
      <path d="M33 64 Q60 57 87 64 L90 118 L30 118 Z" fill="#5a0030"/>
      <circle cx="50" cy="84" r="6" fill={c} opacity="0.3"/>
      <circle cx="50" cy="84" r="3" fill={c} opacity="0.6"/>
      <ellipse cx="60" cy="39" rx="19" ry="21" fill="#fde8d8"/>
      <path d="M41 29 Q32 19 30 36 Q27 52 32 67 L39 63 Q36 47 40 35 Q44 24 50 29 Z" fill="#8b1a4a"/>
      <path d="M79 29 Q88 19 90 36 Q93 52 88 67 L81 63 Q84 47 80 35 Q76 24 70 29 Z" fill="#8b1a4a"/>
      <path d="M41 27 L60 20 L79 27 L82 37 L60 28 L38 37 Z" fill="#8b1a4a"/>
      <ellipse cx="51" cy="42" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="69" cy="42" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="51" cy="43" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="69" cy="43" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="52" cy="42" rx="1.3" ry="1.3" fill="#fff"/>
      <ellipse cx="70" cy="42" rx="1.3" ry="1.3" fill="#fff"/>
      <path d="M55 52 Q60 56 65 52" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
      <ellipse cx="20" cy="54" rx="5" ry="2.5" fill={c} opacity="0.4" transform="rotate(-30 20 54)"/>
      <ellipse cx="98" cy="64" rx="4" ry="2" fill={c} opacity="0.35" transform="rotate(20 98 64)"/>
      <ellipse cx="17" cy="80" rx="3.5" ry="1.8" fill={c} opacity="0.3" transform="rotate(10 17 80)"/>
    </>,
    INTP: (c) => <>
      <rect x="28" y="57" width="64" height="55" rx="6" fill="#f0f0f0"/>
      <rect x="32" y="61" width="56" height="47" rx="4" fill="#f8f8f8"/>
      <rect x="63" y="67" width="16" height="20" rx="2" fill="#ddd"/>
      <rect x="65" y="65" width="3.5" height="12" rx="1.5" fill="#333"/>
      <rect x="70" y="65" width="3.5" height="14" rx="1.5" fill={c}/>
      <rect x="75" y="65" width="3" height="9" rx="1.5" fill="#666"/>
      <ellipse cx="60" cy="39" rx="20" ry="22" fill="#f5e8d0"/>
      <path d="M40 27 L40 15 L49 22 L51 11 L58 23 L60 9 L62 23 L69 11 L71 22 L80 15 L80 27 L80 38 L40 38 Z" fill="#4a3000"/>
      <circle cx="50" cy="41" r="8" fill="none" stroke="#333" strokeWidth="1.8"/>
      <circle cx="70" cy="41" r="8" fill="none" stroke="#333" strokeWidth="1.8"/>
      <line x1="58" y1="41" x2="62" y2="41" stroke="#333" strokeWidth="1.8"/>
      <line x1="42" y1="41" x2="38" y2="39" stroke="#333" strokeWidth="1.8"/>
      <line x1="78" y1="41" x2="82" y2="39" stroke="#333" strokeWidth="1.8"/>
      <ellipse cx="50" cy="41" rx="3.5" ry="3.5" fill="#fff"/>
      <ellipse cx="70" cy="41" rx="3.5" ry="3.5" fill="#fff"/>
      <ellipse cx="50" cy="42" rx="2.2" ry="2.2" fill={c}/>
      <ellipse cx="70" cy="42" rx="2.2" ry="2.2" fill={c}/>
      <path d="M56 52 Q60 51 64 52" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
      <text x="10" y="45" fontSize="8" fill={c} opacity="0.5">E=mc²</text>
      <text x="92" y="58" fontSize="7" fill={c} opacity="0.45">∑∞</text>
    </>,
    ENFJ: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#0f3a0f"/>
      <path d="M54 57 L60 76 L66 57 L63 57 L60 69 L57 57 Z" fill="#f0a000"/>
      <path d="M30 67 L9 51 L13 60 L30 72 Z" fill="#0f3a0f"/>
      <path d="M90 67 L111 51 L107 60 L90 72 Z" fill="#0f3a0f"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#f5d5a8"/>
      <path d="M40 27 L37 15 L47 24 L48 13 L56 24 L60 11 L64 24 L72 13 L73 24 L83 15 L80 27 L80 37 L40 37 Z" fill="#2d6a00"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4.5" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4.5" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="51" cy="39" rx="1.3" ry="1.3" fill="#fff"/>
      <ellipse cx="71" cy="39" rx="1.3" ry="1.3" fill="#fff"/>
      <path d="M50 50 Q60 58 70 50 Q65 56 55 56 Z" fill="#c0806a"/>
      <text x="8" y="40" fontSize="12" fill={c} opacity="0.7">✨</text>
      <text x="96" y="44" fontSize="10" fill={c} opacity="0.6">✨</text>
    </>,
    ENFP: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#5a2000"/>
      <path d="M43 57 Q60 66 77 57 L80 65 Q60 74 40 65 Z" fill={c}/>
      <path d="M77 57 L80 65 L89 83 L83 85 L74 67 Z" fill={c} opacity="0.8"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#fce0b8"/>
      <path d="M40 24 L33 11 L43 20 L41 8 L51 18 L52 5 L60 18 L68 5 L69 18 L79 8 L77 20 L87 11 L80 24 L80 36 L40 36 Z" fill="#c04000"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="5" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="5" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.8" ry="3.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.8" ry="3.8" fill={c}/>
      <ellipse cx="51" cy="38" rx="1.6" ry="1.6" fill="#fff"/>
      <ellipse cx="71" cy="38" rx="1.6" ry="1.6" fill="#fff"/>
      <path d="M48 51 Q60 62 72 51 Q66 59 54 59 Z" fill="#c0806a"/>
      <text x="13" y="41" fontSize="12" fill={c} opacity="0.8">⭐</text>
      <text x="94" y="37" fontSize="10" fill={c} opacity="0.7">⭐</text>
    </>,
    ISTJ: (c) => <>
      <rect x="28" y="55" width="64" height="57" rx="5" fill="#2a2a2a"/>
      <path d="M54 55 L60 72 L66 55 L63 55 L60 65 L57 55 Z" fill="#888"/>
      <rect x="84" y="59" width="24" height="30" rx="2" fill="#ddd"/>
      <rect x="86" y="63" width="20" height="22" rx="1" fill="#fff"/>
      <line x1="88" y1="67" x2="104" y2="67" stroke="#aaa" strokeWidth="1.1"/>
      <line x1="88" y1="71" x2="104" y2="71" stroke="#aaa" strokeWidth="1.1"/>
      <line x1="88" y1="75" x2="99" y2="75" stroke="#aaa" strokeWidth="1.1"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#f0c898"/>
      <rect x="40" y="17" width="40" height="22" rx="5" fill="#222"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="51" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="71" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <line x1="55" y1="50" x2="65" y2="50" stroke="#c0806a" strokeWidth="1.4"/>
    </>,
    ISFJ: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#002050"/>
      <rect x="54" y="70" width="12" height="22" rx="2.5" fill={c} opacity="0.7"/>
      <rect x="48" y="76" width="24" height="10" rx="2.5" fill={c} opacity="0.7"/>
      <path d="M16 67 L27 64 L27 87 Q21 92 16 87 Z" fill={c} opacity="0.6"/>
      <ellipse cx="60" cy="39" rx="19" ry="21" fill="#fde0c0"/>
      <path d="M41 29 Q38 19 43 17 Q51 21 60 19 Q69 21 77 17 Q82 19 79 29 L80 39 L40 39 Z" fill="#5a3010"/>
      <ellipse cx="60" cy="19" rx="17" ry="7" fill="#5a3010"/>
      <ellipse cx="51" cy="41" rx="5" ry="4" fill="#fff"/>
      <ellipse cx="69" cy="41" rx="5" ry="4" fill="#fff"/>
      <ellipse cx="51" cy="42" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="69" cy="42" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="52" cy="41" rx="1.3" ry="1.3" fill="#fff"/>
      <ellipse cx="70" cy="41" rx="1.3" ry="1.3" fill="#fff"/>
      <path d="M54 51 Q60 55 66 51" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
    </>,
    ESTP: (c) => <>
      <rect x="28" y="57" width="64" height="55" rx="6" fill="#2a1e00"/>
      <path d="M38 57 L49 70 L60 62 L71 70 L82 57 L77 57 L60 68 L43 57 Z" fill="#3a2e00"/>
      <rect x="15" y="67" width="18" height="16" rx="5" fill="#f0b878"/>
      <line x1="17" y1="71" x2="31" y2="71" stroke="#d0904a" strokeWidth="1.1"/>
      <line x1="17" y1="75" x2="31" y2="75" stroke="#d0904a" strokeWidth="1.1"/>
      <line x1="8" y1="63" x2="15" y2="71" stroke={c} strokeWidth="2" opacity="0.5"/>
      <line x1="5" y1="71" x2="14" y2="75" stroke={c} strokeWidth="1.5" opacity="0.4"/>
      <ellipse cx="60" cy="37" rx="21" ry="22" fill="#f0b878"/>
      <rect x="39" y="17" width="42" height="21" rx="6" fill="#1a0800"/>
      <line x1="52" y1="33" x2="57" y2="43" stroke="#d0804a" strokeWidth="1.8" opacity="0.5"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="51" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="71" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <path d="M56 51 Q62 54 67 51" stroke="#c0806a" strokeWidth="1.6" fill="none"/>
    </>,
    ESFP: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#5a0025"/>
      <text x="42" y="82" fontSize="9" fill={c} opacity="0.6">★</text>
      <text x="64" y="91" fontSize="7" fill={c} opacity="0.5">★</text>
      <ellipse cx="90" cy="73" rx="6" ry="8" fill="#999" stroke="#777" strokeWidth="1.1"/>
      <rect x="89" y="81" width="2.5" height="16" rx="1.2" fill="#999"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#fce0c0"/>
      <path d="M40 27 L38 14 L49 23 L51 11 L60 21 L69 11 L71 23 L82 14 L80 27 L80 37 L40 37 Z" fill="#cc0055"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="5" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="5" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.8" ry="3.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.8" ry="3.8" fill={c}/>
      <ellipse cx="51" cy="38" rx="1.6" ry="1.6" fill="#fff"/>
      <ellipse cx="71" cy="38" rx="1.6" ry="1.6" fill="#fff"/>
      <path d="M49 51 Q60 60 71 51 Q65 58 55 58 Z" fill="#c0806a"/>
    </>,
    ISTP: (c) => <>
      <rect x="28" y="57" width="64" height="55" rx="6" fill="#1a1a1a"/>
      <rect x="28" y="88" width="64" height="9" rx="2.5" fill="#3a3a3a"/>
      <rect x="34" y="86" width="9" height="13" rx="2.5" fill="#555"/>
      <rect x="48" y="86" width="9" height="13" rx="2.5" fill="#555"/>
      <path d="M84 54 Q91 50 93 57 L91 59 Q95 65 91 73 L87 69 Q89 64 86 60 Z" fill="#888"/>
      <rect x="84" y="69" width="7" height="24" rx="3" fill="#888"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#f0c898"/>
      <rect x="40" y="16" width="40" height="23" rx="5" fill="#333"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="51" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="71" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <line x1="55" y1="50" x2="65" y2="50" stroke="#c0806a" strokeWidth="1.4"/>
    </>,
    ISFP: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#102200"/>
      <circle cx="46" cy="80" r="3.5" fill={c} opacity="0.5"/>
      <circle cx="70" cy="74" r="2.5" fill="#ec4899" opacity="0.4"/>
      <circle cx="54" cy="92" r="4.5" fill="#3b82f6" opacity="0.3"/>
      <ellipse cx="90" cy="82" rx="13" ry="10" fill="#8B4513" opacity="0.7"/>
      <circle cx="84" cy="77" r="3" fill={c}/>
      <circle cx="91" cy="75" r="2.5" fill="#ec4899"/>
      <circle cx="97" cy="80" r="3" fill="#3b82f6"/>
      <ellipse cx="60" cy="39" rx="19" ry="21" fill="#fde8d0"/>
      <path d="M41 29 Q33 21 34 37 L42 39 Q38 27 44 23 Q51 21 60 21 Q69 21 76 23 Q82 27 78 39 L86 37 Q87 21 79 29 L80 39 L40 39 Z" fill="#4a6000"/>
      <ellipse cx="51" cy="42" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="69" cy="42" rx="5" ry="4.5" fill="#fff"/>
      <ellipse cx="51" cy="43" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="69" cy="43" rx="3.2" ry="3.2" fill={c}/>
      <ellipse cx="52" cy="42" rx="1.3" ry="1.3" fill="#fff"/>
      <ellipse cx="70" cy="42" rx="1.3" ry="1.3" fill="#fff"/>
      <path d="M55 52 Q60 56 65 52" stroke="#c0806a" strokeWidth="1.3" fill="none"/>
    </>,
    ESTJ: (c) => <>
      <rect x="26" y="55" width="68" height="57" rx="5" fill="#1a1a00"/>
      <path d="M38 67 L44 64 L50 67 L50 78 L44 83 L38 78 Z" fill={c} opacity="0.85"/>
      <text x="41" y="75" fontSize="7" fill="#fff">★</text>
      <path d="M54 55 L60 72 L66 55 L63 55 L60 65 L57 55 Z" fill="#444"/>
      <rect x="84" y="61" width="22" height="9" rx="3.5" fill="#8B4513"/>
      <rect x="90" y="70" width="7" height="25" rx="3" fill="#A0522D"/>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#f0c888"/>
      <rect x="40" y="17" width="40" height="22" rx="5" fill="#1a1000"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.2" ry="2.8" fill={c}/>
      <ellipse cx="51" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <ellipse cx="71" cy="39" rx="1.1" ry="1.1" fill="#fff"/>
      <path d="M54 51 Q60 49 66 51" stroke="#a06040" strokeWidth="1.6" fill="none"/>
      <path d="M45 34 L55 32" stroke="#1a1000" strokeWidth="2.5" fill="none"/>
      <path d="M65 32 L75 34" stroke="#1a1000" strokeWidth="2.5" fill="none"/>
    </>,
    ESFJ: (c) => <>
      <rect x="30" y="57" width="60" height="55" rx="6" fill="#280010"/>
      <path d="M53 74 Q53 67 60 72 Q67 67 67 74 Q67 81 60 86 Q53 81 53 74 Z" fill={c} opacity="0.7"/>
      <path d="M30 66 L11 61 L13 70 L30 71 Z" fill="#280010"/>
      <path d="M90 66 L109 61 L107 70 L90 71 Z" fill="#280010"/>
      <text x="12" y="57" fontSize="10" fill={c} opacity="0.6">♡</text>
      <text x="97" y="54" fontSize="8" fill={c} opacity="0.5">♡</text>
      <ellipse cx="60" cy="37" rx="20" ry="22" fill="#fce0b8"/>
      <path d="M40 27 L37 15 L49 23 L51 14 L58 23 L60 11 L62 23 L69 14 L71 23 L83 15 L80 27 L80 37 L40 37 Z" fill="#8b2252"/>
      <ellipse cx="50" cy="39" rx="5.5" ry="4.5" fill="#fff"/>
      <ellipse cx="70" cy="39" rx="5.5" ry="4.5" fill="#fff"/>
      <ellipse cx="50" cy="40" rx="3.8" ry="3.2" fill={c}/>
      <ellipse cx="70" cy="40" rx="3.8" ry="3.2" fill={c}/>
      <ellipse cx="51" cy="38" rx="1.5" ry="1.5" fill="#fff"/>
      <ellipse cx="71" cy="38" rx="1.5" ry="1.5" fill="#fff"/>
      <path d="M50 50 Q60 58 70 50 Q65 56 55 56 Z" fill="#c0806a"/>
    </>,
  };
  const d = faces[type];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{display:"block"}}>
      {d(color)}
    </svg>
  );
}

/* ══════════════════════════════════════════
   TRAIT BADGES — things you pick on screen 1
══════════════════════════════════════════ */
const TRAIT_BADGES = [
  { id:"strategic",  icon:"♟", label:"Strategic",    zh:"計謀深遠",  scores:{E:-1,I:1,S:-1,N:1,T:1,F:-1,J:1,P:-1} },
  { id:"empathetic", icon:"💞", label:"Empathetic",   zh:"感同身受",  scores:{E:0,I:0,S:-1,N:1,T:-2,F:2,J:0,P:0} },
  { id:"spontaneous",icon:"🎲", label:"Spontaneous",  zh:"即興發揮",  scores:{E:1,I:-1,S:1,N:-1,T:0,F:0,J:-2,P:2} },
  { id:"logical",    icon:"⚙", label:"Logical",      zh:"邏輯清晰",  scores:{E:0,I:0,S:0,N:0,T:2,F:-2,J:1,P:-1} },
  { id:"creative",   icon:"🎨", label:"Creative",     zh:"創意無限",  scores:{E:0,I:0,S:-2,N:2,T:-1,F:1,J:-1,P:1} },
  { id:"energetic",  icon:"⚡", label:"Energetic",    zh:"精力充沛",  scores:{E:2,I:-2,S:1,N:-1,T:0,F:0,J:0,P:0} },
  { id:"loyal",      icon:"🛡", label:"Loyal",        zh:"忠誠可靠",  scores:{E:-1,I:1,S:2,N:-2,T:0,F:0,J:2,P:-2} },
  { id:"curious",    icon:"🔭", label:"Curious",      zh:"求知若渴",  scores:{E:0,I:0,S:-1,N:2,T:1,F:-1,J:-1,P:1} },
  { id:"charismatic",icon:"🌟", label:"Charismatic",  zh:"魅力四射",  scores:{E:2,I:-2,S:0,N:0,T:-1,F:2,J:0,P:0} },
  { id:"disciplined",icon:"📐", label:"Disciplined",  zh:"自律嚴格",  scores:{E:0,I:0,S:1,N:-1,T:1,F:-1,J:2,P:-2} },
  { id:"intuitive",  icon:"🌀", label:"Intuitive",    zh:"直覺敏銳",  scores:{E:-1,I:1,S:-2,N:2,T:0,F:1,J:-1,P:1} },
  { id:"adventurous",icon:"🗺", label:"Adventurous",  zh:"勇於冒險",  scores:{E:2,I:-1,S:1,N:1,T:0,F:0,J:-2,P:2} },
];

/* ══════════════════════════════════════════
   CHARACTERS
══════════════════════════════════════════ */
const CHARS = [
  { type:"INTJ",  name:"The Architect", zh:"玄謀者",     rarity:"SSR", color:"#7B2FBE",
    title:"Strategic Shadow",  quote:"The game ends before others know it began.",
    desc:"Cold, precise, always 10 steps ahead. Builds invisible systems to shape outcomes.",
    strength:"Long-range strategy", weakness:"Emotional warmth",
    functions:[
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"主技 Dom", icon:"🌀", desc:"Sees where things are heading long before anyone else."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"副技 Aux", icon:"📊", desc:"Marshals resources and people with ruthless efficiency."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"三技 Ter", icon:"🔥", desc:"Deep private values — unshakeable inner compass."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"弱技 Inf", icon:"⚡", desc:"Weak spot: living in the present moment."},
    ]},
  { type:"INFJ",  name:"The Oracle",    zh:"命運先知",   rarity:"SSR", color:"#8B5CF6",
    title:"Fate Reader",       quote:"I already knew this day would come.",
    desc:"Sees what others cannot. Carries the heavy gift of foresight.",
    strength:"Intuitive insight", weakness:"Perfectionism",
    functions:[
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"主技 Dom", icon:"🌀", desc:"Deep pattern recognition — sees beyond the surface."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"副技 Aux", icon:"💫", desc:"Reads and shifts the emotional energy of any room."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"三技 Ter", icon:"⚙", desc:"Internal logical framework — precise but private."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"弱技 Inf", icon:"⚡", desc:"Weak spot: being fully present in the physical world."},
    ]},
  { type:"ENTP",  name:"The Wildcard",  zh:"混沌詭辯師", rarity:"SSR", color:"#F59E0B",
    title:"System Breaker",    quote:"Actually — what if YOU'RE the one who's wrong?",
    desc:"Breaks rules just to see what happens. Every debate is a game.",
    strength:"Creative disruption", weakness:"Follow-through",
    functions:[
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"主技 Dom", icon:"💥", desc:"Fires off creative connections in every direction."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"副技 Aux", icon:"⚙", desc:"Pins down the precise flaw in any argument."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"三技 Ter", icon:"💫", desc:"Can read a room — uses it for persuasion."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"弱技 Inf", icon:"🛡", desc:"Weak spot: relying on past experience and routine."},
    ]},
  { type:"ENTJ",  name:"The Warlord",   zh:"霸王將軍",   rarity:"SSR", color:"#EF4444",
    title:"Born Commander",    quote:"Stop talking. Execute the plan.",
    desc:"Never doubts their decisions. Victory is the only acceptable outcome.",
    strength:"Decisive command", weakness:"Listening to others",
    functions:[
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"主技 Dom", icon:"📊", desc:"Organises people and resources with iron efficiency."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"副技 Aux", icon:"🌀", desc:"Sets the long-term vision and pursues it relentlessly."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"三技 Ter", icon:"⚡", desc:"Acts decisively in the moment — seizes opportunity."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"弱技 Inf", icon:"🔥", desc:"Weak spot: tuning into personal feelings and values."},
    ]},
  { type:"INFP",  name:"The Dreamer",   zh:"夢幻詩人",   rarity:"SR",  color:"#F472B6",
    title:"Soul Guardian",     quote:"Even if the whole world disagrees — I know what's right.",
    desc:"Finds the extraordinary in the ordinary. Fights darkness with pure idealism.",
    strength:"Personal values", weakness:"Practical planning",
    functions:[
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"主技 Dom", icon:"🔥", desc:"Unshakeable inner values. Impossible to manipulate."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"副技 Aux", icon:"💥", desc:"Generates imaginative possibilities and meaning."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"三技 Ter", icon:"🛡", desc:"Treasures meaningful past experiences and memories."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"弱技 Inf", icon:"📊", desc:"Weak spot: external organisation and efficiency."},
    ]},
  { type:"INTP",  name:"The Scholar",   zh:"邏輯魔導士", rarity:"SR",  color:"#06B6D4",
    title:"System Analyst",    quote:"Interesting... but your premise has three logical flaws.",
    desc:"Every problem has an optimal solution. Just a matter of time — and ignoring sleep.",
    strength:"Logical analysis", weakness:"Emotional expression",
    functions:[
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"主技 Dom", icon:"⚙", desc:"Strips any system to core logic. Finds the exact flaw."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"副技 Aux", icon:"💥", desc:"Explores theories and connections across domains."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"三技 Ter", icon:"🛡", desc:"Stores detailed information for internal reference."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"弱技 Inf", icon:"💫", desc:"Weak spot: expressing feelings and social harmony."},
    ]},
  { type:"ENFJ",  name:"The Beacon",    zh:"聖光使者",   rarity:"SR",  color:"#10B981",
    title:"Heart Unifier",     quote:"I believe in you more than you believe in yourself.",
    desc:"Radiates conviction. Refuses to let people settle for less than their potential.",
    strength:"Inspiring others", weakness:"Self-sacrifice",
    functions:[
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"主技 Dom", icon:"💫", desc:"Reads and uplifts the emotional energy of any group."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"副技 Aux", icon:"🌀", desc:"Sees long-term potential in people and situations."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"三技 Ter", icon:"⚡", desc:"Present and charismatic — responds to the room live."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"弱技 Inf", icon:"⚙", desc:"Weak spot: cold detached logical analysis."},
    ]},
  { type:"ENFP",  name:"The Spark",     zh:"烈焰冒險家", rarity:"SR",  color:"#F97316",
    title:"Idea Bomb",         quote:"WAIT. I just had the BEST idea!!!!",
    desc:"Treats every day as an adventure and every stranger as a potential best friend.",
    strength:"Infectious enthusiasm", weakness:"Consistency",
    functions:[
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"主技 Dom", icon:"💥", desc:"Explodes with creative connections — impossible to predict."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"副技 Aux", icon:"🔥", desc:"Deep personal values driving every enthusiastic pursuit."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"三技 Ter", icon:"📊", desc:"Can rally and organise when the mission matters enough."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"弱技 Inf", icon:"🛡", desc:"Weak spot: routine, detail, and past-based reliability."},
    ]},
  { type:"ISTJ",  name:"The Sentinel",  zh:"磐石守衛",   rarity:"R",   color:"#64748B",
    title:"Iron Discipline",   quote:"Rules exist for a reason. They always have.",
    desc:"The backbone of any operation. Reliable, thorough, and completely incorruptible.",
    strength:"Reliable execution", weakness:"Adapting to change",
    functions:[
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"主技 Dom", icon:"🛡", desc:"Recalls procedures and precedents with perfect fidelity."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"副技 Aux", icon:"📊", desc:"Executes tasks efficiently and holds others accountable."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"三技 Ter", icon:"🔥", desc:"Private but firm sense of personal integrity."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"弱技 Inf", icon:"💥", desc:"Weak spot: abstract brainstorming and radical new ideas."},
    ]},
  { type:"ISFJ",  name:"The Keeper",    zh:"溫柔守護神", rarity:"R",   color:"#3B82F6",
    title:"Silent Guardian",   quote:"It's okay. I'm here.",
    desc:"Quietly protects everyone who needs it. Remembers every detail and every birthday.",
    strength:"Caring attention", weakness:"Self-assertion",
    functions:[
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"主技 Dom", icon:"🛡", desc:"Remembers everything important about the people they love."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"副技 Aux", icon:"💫", desc:"Attuned to others' emotional needs — always ready to help."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"三技 Ter", icon:"⚙", desc:"Quiet internal logic for problem-solving."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"弱技 Inf", icon:"💥", desc:"Weak spot: abstract speculation and constant change."},
    ]},
  { type:"ESTP",  name:"The Striker",   zh:"閃電鬥士",   rarity:"R",   color:"#FBBF24",
    title:"Instant Reactor",   quote:"Forget analysis — CHARGE!",
    desc:"Lives at full throttle. Pure instinct, zero hesitation. First in, last out.",
    strength:"Instant reaction", weakness:"Long-term planning",
    functions:[
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"主技 Dom", icon:"⚡", desc:"Fully present and razor sharp — reacts before thought."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"副技 Aux", icon:"⚙", desc:"Quick tactical analysis in the heat of the moment."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"三技 Ter", icon:"💫", desc:"Reads social cues and uses charm when needed."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"弱技 Inf", icon:"🌀", desc:"Weak spot: long-term vision and abstract future-thinking."},
    ]},
  { type:"ESFP",  name:"The Star",      zh:"舞台王者",   rarity:"R",   color:"#EC4899",
    title:"Born Performer",    quote:"Watch closely — here comes the good part!",
    desc:"Life is a stage and every moment deserves a performance. Magnetic energy.",
    strength:"Live charisma", weakness:"Deep reflection",
    functions:[
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"主技 Dom", icon:"⚡", desc:"Thrives in the moment — pure sensory engagement."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"副技 Aux", icon:"🔥", desc:"Authentic self-expression in everything they do."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"三技 Ter", icon:"📊", desc:"Gets things done when the vibe demands it."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"弱技 Inf", icon:"🌀", desc:"Weak spot: abstract long-term planning."},
    ]},
  { type:"ISTP",  name:"The Ghost",     zh:"機械刃客",   rarity:"R",   color:"#6B7280",
    title:"Silent Solver",     quote:"...(just fixes the problem without saying a word)",
    desc:"Few words. Precise actions. Masters any tool and solves any problem invisibly.",
    strength:"Hands-on mastery", weakness:"Emotional sharing",
    functions:[
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"主技 Dom", icon:"⚙", desc:"Internal precision — fixes anything by understanding its logic."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"副技 Aux", icon:"⚡", desc:"Hands-on physical mastery — acts with perfect timing."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"三技 Ter", icon:"🌀", desc:"Occasional flashes of insight about underlying patterns."},
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"弱技 Inf", icon:"💫", desc:"Weak spot: emotional expression and group harmony."},
    ]},
  { type:"ISFP",  name:"The Artist",    zh:"感性詩靈",   rarity:"R",   color:"#84CC16",
    title:"Sense Weaver",      quote:"Don't explain it. Do you feel it?",
    desc:"Lives in beauty and sensation. Creates meaning from every moment. Quietly fierce.",
    strength:"Aesthetic intuition", weakness:"Long-term commitment",
    functions:[
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"主技 Dom", icon:"🔥", desc:"Deeply personal values expressed through art and action."},
      {fn:"Se",name:"Instant Strike",  zh:"瞬間出擊", role:"副技 Aux", icon:"⚡", desc:"Lives fully in the present — acute sensory awareness."},
      {fn:"Ni",name:"Future Sight",    zh:"未來預視", role:"三技 Ter", icon:"🌀", desc:"Quiet intuition guiding artistic choices."},
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"弱技 Inf", icon:"📊", desc:"Weak spot: external structure and long-term organisation."},
    ]},
  { type:"ESTJ",  name:"The Marshal",   zh:"鐵律將軍",   rarity:"R",   color:"#78716C",
    title:"Order Enforcer",    quote:"Rules are rules. That's not up for debate.",
    desc:"The system works because of people like this. Organised, fair, non-negotiable.",
    strength:"Structured execution", weakness:"Flexibility",
    functions:[
      {fn:"Te",name:"War Command",     zh:"號令全軍", role:"主技 Dom", icon:"📊", desc:"Commands and organises with clear expectations."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"副技 Aux", icon:"🛡", desc:"Upholds proven procedures and institutional knowledge."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"三技 Ter", icon:"💥", desc:"Considers possibilities — within acceptable parameters."},
      {fn:"Fi",name:"Soul Armor",      zh:"靈魂護甲", role:"弱技 Inf", icon:"🔥", desc:"Weak spot: personal feelings and subjective values."},
    ]},
  { type:"ESFJ",  name:"The Host",      zh:"暖陽守護者", rarity:"R",   color:"#F43F5E",
    title:"Community Core",    quote:"Has everyone eaten? Does anyone need anything?",
    desc:"Makes every person feel seen. The glue holding any group together — invisibly.",
    strength:"Caring for others", weakness:"Taking criticism",
    functions:[
      {fn:"Fe",name:"Crowd Wave",      zh:"情緒感染", role:"主技 Dom", icon:"💫", desc:"Nurtures group harmony — everyone belongs around them."},
      {fn:"Si",name:"Memory Shield",   zh:"記憶護盾", role:"副技 Aux", icon:"🛡", desc:"Remembers every person's needs, preferences, and history."},
      {fn:"Ne",name:"Idea Storm",      zh:"靈感爆發", role:"三技 Ter", icon:"💥", desc:"Generates ideas in service of community wellbeing."},
      {fn:"Ti",name:"Logic Hack",      zh:"邏輯破解", role:"弱技 Inf", icon:"⚙", desc:"Weak spot: cold impersonal logical analysis."},
    ]},
];

/* ══════════════════════════════════════════
   SCORING → type
══════════════════════════════════════════ */
function calcType(picked) {
  const s = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  picked.forEach(id => {
    const t = TRAIT_BADGES.find(b=>b.id===id);
    if (!t) return;
    Object.entries(t.scores).forEach(([k,v]) => { s[k] = (s[k]||0) + v; });
  });
  return (s.E>=s.I?"E":"I")+(s.S>=s.N?"S":"N")+(s.T>=s.F?"T":"F")+(s.J>=s.P?"J":"P");
}

/* ══════════════════════════════════════════
   RARITY CONFIG
══════════════════════════════════════════ */
const RC = {
  SSR:{ badge:"from-yellow-400 to-orange-500", shine:true, glow:true },
  SR: { badge:"from-purple-500 to-pink-500",   shine:false, glow:true },
  R:  { badge:"from-slate-500 to-gray-600",    shine:false, glow:false },
};

/* ══════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════ */
export default function App() {
  // screen: "pick" | "analysing" | "reveal" | "detail"
  const [screen, setScreen] = useState("pick");
  const [picked, setPicked] = useState([]);
  const [resultType, setResultType] = useState(null);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [detailChar, setDetailChar] = useState(null);
  const [activeMove, setActiveMove] = useState(null);
  const [battleFn, setBattleFn] = useState(null);
  const MIN_PICK = 3, MAX_PICK = 6;

  const toggleTrait = (id) => {
    setPicked(p => p.includes(id) ? p.filter(x=>x!==id) : p.length < MAX_PICK ? [...p, id] : p);
  };

  const startAnalysis = () => {
    const type = calcType(picked);
    setResultType(type);
    setScreen("analysing");
    setAnalysisStep(0);
    // Step through analysis
    [0,1,2,3,4].forEach(i => setTimeout(()=>setAnalysisStep(i+1), i*700+300));
    setTimeout(()=>setScreen("reveal"), 4200);
  };

  const resultChar = CHARS.find(c=>c.type===resultType) || CHARS[0];

  const handleMoveClick = (fn) => {
    if (activeMove===fn) { setActiveMove(null); return; }
    setActiveMove(fn);
    setBattleFn(fn);
    setTimeout(()=>setBattleFn(null), 1600);
  };

  /* ── PICK SCREEN ── */
  if (screen === "pick") return (
    <div style={{minHeight:"100svh",background:"#06060f",fontFamily:"'Segoe UI',system-ui,sans-serif",display:"flex",flexDirection:"column"}}>
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes pop{0%{transform:scale(0.8);opacity:0}100%{transform:scale(1);opacity:1}}
        @keyframes fadein{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .fadein{animation:fadein 0.3s ease-out}
        .badge-btn{transition:all 0.15s;cursor:pointer;-webkit-tap-highlight-color:transparent}
        .badge-btn:active{transform:scale(0.92)}
      `}</style>

      {/* Header */}
      <div style={{padding:"28px 20px 16px",textAlign:"center"}}>
        <div style={{fontSize:10,color:"#E8453C",fontWeight:900,letterSpacing:"0.25em",marginBottom:6}}>JUNG · MBTI</div>
        <div style={{fontSize:26,fontWeight:900,color:"#fff",lineHeight:1.1,textShadow:"0 0 30px #E8453C40"}}>
          你想成為邊個？
        </div>
        <div style={{fontSize:12,color:"#666",marginTop:8,lineHeight:1.6}}>
          選 {MIN_PICK}–{MAX_PICK} 個最符合你嘅特質
        </div>
      </div>

      {/* Floating character tease — rotating 4 SSR art */}
      <div style={{display:"flex",justifyContent:"center",gap:0,marginBottom:12,position:"relative",height:80}}>
        {["INTJ","INFJ","ENTP","ENTJ"].map((t,i)=>{
          const c = CHARS.find(x=>x.type===t);
          return (
            <div key={t} style={{
              position:"absolute",
              left:`calc(50% + ${(i-1.5)*38}px)`,
              top:0,
              opacity: 0.7 - Math.abs(i-1.5)*0.15,
              transform:`scale(${1 - Math.abs(i-1.5)*0.1}) rotate(${(i-1.5)*4}deg)`,
              animation:`float ${2.5+i*0.3}s ${i*0.4}s ease-in-out infinite`,
              zIndex: 4-Math.abs(i-1.5)*1|0,
            }}>
              <CharArt type={t} color={c.color} size={72}/>
            </div>
          );
        })}
      </div>

      {/* Trait grid */}
      <div style={{padding:"0 16px",flex:1,overflowY:"auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,paddingBottom:100}}>
          {TRAIT_BADGES.map(b=>{
            const sel = picked.includes(b.id);
            return (
              <div key={b.id} className="badge-btn"
                onClick={()=>toggleTrait(b.id)}
                style={{
                  background: sel ? b.id==="strategic"?"#7B2FBE":b.id==="empathetic"?"#EC4899":b.id==="spontaneous"?"#F97316":b.id==="logical"?"#06B6D4":b.id==="creative"?"#8B5CF6":b.id==="energetic"?"#EF4444":b.id==="loyal"?"#3B82F6":b.id==="curious"?"#F59E0B":b.id==="charismatic"?"#10B981":b.id==="disciplined"?"#64748B":b.id==="intuitive"?"#7B2FBE":"#F97316" : "#0d0d1a",
                  border: sel ? "2px solid #fff2" : "1.5px solid #ffffff12",
                  borderRadius:14,
                  padding:"12px 6px",
                  textAlign:"center",
                  boxShadow: sel ? "0 4px 20px #0008" : "none",
                  transform: sel ? "scale(1.04)" : "scale(1)",
                  transition:"all 0.15s",
                }}>
                <div style={{fontSize:26,lineHeight:1,marginBottom:5}}>{b.icon}</div>
                <div style={{fontSize:12,fontWeight:800,color:sel?"#fff":"#888",lineHeight:1.2}}>{b.label}</div>
                <div style={{fontSize:9,color:sel?"#ffffff99":"#444",marginTop:2}}>{b.zh}</div>
                {sel && <div style={{fontSize:8,color:"#fff9",marginTop:3}}>✓</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        position:"sticky",bottom:0,
        padding:"16px 20px 28px",
        background:"linear-gradient(to top, #06060f 70%, transparent)",
      }}>
        <div style={{textAlign:"center",marginBottom:10}}>
          <span style={{fontSize:11,color: picked.length>=MIN_PICK?"#f59e0b":"#444"}}>
            {picked.length}/{MAX_PICK} 已選 {picked.length>=MIN_PICK?"✓ 可以開始！":"（最少選"+MIN_PICK+"個）"}
          </span>
        </div>
        <button
          disabled={picked.length < MIN_PICK}
          onClick={startAnalysis}
          style={{
            width:"100%",padding:"16px",borderRadius:16,border:"none",cursor:picked.length>=MIN_PICK?"pointer":"not-allowed",
            background: picked.length>=MIN_PICK
              ? "linear-gradient(135deg, #E8453C, #f97316)"
              : "#1a1a1a",
            color: picked.length>=MIN_PICK ? "#fff" : "#333",
            fontSize:16,fontWeight:900,
            boxShadow: picked.length>=MIN_PICK ? "0 4px 24px #E8453C50" : "none",
            transition:"all 0.2s",
            letterSpacing:1,
          }}>
          {picked.length>=MIN_PICK ? "揭曉我的人格 →" : "請先選擇特質"}
        </button>
      </div>
    </div>
  );

  /* ── ANALYSING SCREEN ── */
  if (screen === "analysing") {
    const steps = [
      { label:"掃描特質中…",       detail:"Scanning selected traits" },
      { label:"計算能量方向…",     detail:"E vs I — Energy source" },
      { label:"分析感知方式…",     detail:"S vs N — Information intake" },
      { label:"判斷決策模式…",     detail:"T vs F — Decision making" },
      { label:"確定生活態度…",     detail:"J vs P — Lifestyle" },
    ];
    return (
      <div style={{minHeight:"100svh",background:"#06060f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px 20px",fontFamily:"'Segoe UI',system-ui,sans-serif"}}>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.fadein{animation:fadein 0.4s ease-out}`}</style>

        {/* Big spinner */}
        <div style={{width:80,height:80,borderRadius:"50%",border:"3px solid #1a1a2e",borderTop:`3px solid #E8453C`,animation:"spin 1s linear infinite",marginBottom:32}}/>

        <div style={{fontSize:22,fontWeight:900,color:"#fff",marginBottom:6,letterSpacing:1}}>分析緊你嘅人格</div>
        <div style={{fontSize:12,color:"#444",marginBottom:32}}>Analysing your personality…</div>

        {/* Steps */}
        <div style={{width:"100%",maxWidth:320,space:"y-2"}}>
          {steps.map((s,i)=>(
            <div key={i} className={analysisStep>i?"fadein":""} style={{
              display:"flex",alignItems:"center",gap:12,
              padding:"10px 14px",borderRadius:12,marginBottom:8,
              background: analysisStep>i ? "#0d1a0d" : "#0d0d18",
              border: `1.5px solid ${analysisStep>i?"#10B98140":"#ffffff08"}`,
              opacity: analysisStep>i ? 1 : 0.2,
              transition:"all 0.3s",
            }}>
              <div style={{fontSize:16}}>{analysisStep>i?"✅":"⏳"}</div>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:analysisStep>i?"#10B981":"#555"}}>{s.label}</div>
                <div style={{fontSize:9,color:"#444"}}>{s.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected badges */}
        <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",marginTop:20,maxWidth:320}}>
          {picked.map(id=>{
            const b=TRAIT_BADGES.find(x=>x.id===id);
            return <span key={id} style={{fontSize:10,background:"#ffffff0a",color:"#666",padding:"4px 10px",borderRadius:99}}>{b.icon} {b.label}</span>;
          })}
        </div>
      </div>
    );
  }

  /* ── REVEAL SCREEN ── */
  if (screen === "reveal") return (
    <div style={{minHeight:"100svh",background:"#06060f",fontFamily:"'Segoe UI',system-ui,sans-serif",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 16px 32px"}}>
      <style>{`
        @keyframes shoot-in{0%{transform:translateY(-60px) scale(0.6);opacity:0}60%{transform:translateY(8px) scale(1.04)}100%{transform:translateY(0) scale(1);opacity:1}}
        @keyframes shine{0%{left:-80%}20%,100%{left:130%}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes glow-in{0%{opacity:0}100%{opacity:1}}
        @keyframes pop{0%{transform:scale(0.7);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
      `}</style>

      {/* Title */}
      <div style={{textAlign:"center",padding:"28px 0 16px"}}>
        <div style={{fontSize:10,color:"#f59e0b",fontWeight:900,letterSpacing:"0.25em",marginBottom:4}}>✦ 你係 ✦</div>
        <div style={{fontSize:11,color:"#444"}}>Based on your selected traits</div>
      </div>

      {/* Card */}
      <div style={{
        width:"100%",maxWidth:340,
        position:"relative",overflow:"hidden",borderRadius:24,
        background:"linear-gradient(160deg,#0a0a18,#12121f)",
        border:`2.5px solid ${resultChar.color}`,
        boxShadow:`0 0 40px ${resultChar.color}40,inset 0 0 40px ${resultChar.color}06`,
        animation:"shoot-in 0.6s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
      }}>
        {/* Shine */}
        {RC[resultChar.rarity].shine && (
          <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",borderRadius:24}}>
            <div style={{position:"absolute",top:"-100%",left:"-80%",width:"50%",height:"300%",
              background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.07),transparent)",
              animation:"shine 2.5s 0.8s infinite"}}/>
          </div>
        )}

        {/* Top section */}
        <div style={{
          display:"flex",alignItems:"flex-start",justifyContent:"space-between",
          padding:"20px 20px 12px",
          background:`linear-gradient(to bottom, ${resultChar.color}25, transparent)`,
        }}>
          <div style={{flex:1,paddingRight:8}}>
            <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}>
              <span className={`font-black text-white bg-gradient-to-r ${RC[resultChar.rarity].badge} px-2 py-0.5 rounded-full`}
                style={{fontSize:10,fontWeight:900}}>
                {resultChar.rarity}
              </span>
            </div>
            <div style={{fontSize:28,fontWeight:900,color:"#fff",lineHeight:1,animation:"pop 0.5s 0.3s ease-out both"}}>
              {resultChar.name}
            </div>
            <div style={{fontSize:14,fontWeight:700,color:resultChar.color,marginTop:4}}>{resultChar.type}</div>
            <div style={{fontSize:10,color:"#666",marginTop:2}}>{resultChar.zh} · {resultChar.title}</div>
          </div>
          <div style={{animation:"float 3s ease-in-out infinite",flexShrink:0}}>
            <CharArt type={resultChar.type} color={resultChar.color} size={120}/>
          </div>
        </div>

        {/* Quote */}
        <div style={{
          margin:"0 16px 14px",padding:"10px 14px",borderRadius:12,
          background:"#ffffff06",borderLeft:`3px solid ${resultChar.color}`,
          color:"#ccc",fontSize:12,lineHeight:1.7,fontStyle:"italic",
        }}>
          "{resultChar.quote}"
        </div>

        {/* Desc */}
        <div style={{margin:"0 16px 14px",fontSize:12,color:"#999",lineHeight:1.7}}>
          {resultChar.desc}
        </div>

        {/* Strength / Weakness */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,margin:"0 16px 16px"}}>
          <div style={{background:"#0a1a0a",borderRadius:12,padding:"10px 12px"}}>
            <div style={{fontSize:8,color:"#333",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>Strength</div>
            <div style={{fontSize:11,color:"#22c55e",fontWeight:700}}>{resultChar.strength}</div>
          </div>
          <div style={{background:"#1a0a0a",borderRadius:12,padding:"10px 12px"}}>
            <div style={{fontSize:8,color:"#333",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>Weakness</div>
            <div style={{fontSize:11,color:"#ef4444",fontWeight:700}}>{resultChar.weakness}</div>
          </div>
        </div>

        {/* Traits that matched */}
        <div style={{margin:"0 16px 16px"}}>
          <div style={{fontSize:8,color:"#333",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>You Selected</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
            {picked.map(id=>{
              const b=TRAIT_BADGES.find(x=>x.id===id);
              return <span key={id} style={{fontSize:9,background:resultChar.color+"18",color:resultChar.color,border:`1px solid ${resultChar.color}30`,padding:"3px 8px",borderRadius:99,fontWeight:700}}>{b.icon} {b.label}</span>;
            })}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{width:"100%",maxWidth:340,marginTop:16,display:"flex",flexDirection:"column",gap:10}}>
        <button onClick={()=>setDetailChar(resultChar)}
          style={{width:"100%",padding:"14px",borderRadius:14,border:`1.5px solid ${resultChar.color}`,
            background:resultChar.color+"15",color:resultChar.color,fontSize:14,fontWeight:900,cursor:"pointer"}}>
          查看招數 / 認知功能 →
        </button>
        <button onClick={()=>{setPicked([]);setScreen("pick");setResultType(null);}}
          style={{width:"100%",padding:"14px",borderRadius:14,border:"1.5px solid #ffffff15",
            background:"transparent",color:"#555",fontSize:13,fontWeight:700,cursor:"pointer"}}>
          再試一次
        </button>
      </div>

      {/* Other characters teaser */}
      <div style={{width:"100%",maxWidth:340,marginTop:24}}>
        <div style={{fontSize:9,color:"#333",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10}}>
          其他人格角色
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
          {CHARS.filter(c=>c.type!==resultChar.type).slice(0,8).map(c=>(
            <div key={c.type} onClick={()=>setDetailChar(c)}
              style={{background:"#0d0d18",borderRadius:12,padding:"8px 4px",
                border:`1.5px solid ${c.color}30`,textAlign:"center",cursor:"pointer",
                boxShadow:c.rarity!=="R"?`0 0 10px ${c.color}15`:"none"}}>
              <CharArt type={c.type} color={c.color} size={52}/>
              <div style={{fontSize:7,color:c.color,fontWeight:700,marginTop:3}}>{c.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── DETAIL / MOVES SCREEN ── */
  if (detailChar) {
    const c = detailChar;
    return (
      <div style={{minHeight:"100svh",background:"#06060f",fontFamily:"'Segoe UI',system-ui,sans-serif",padding:"0 16px 40px"}}>
        <style>{`
          @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
          @keyframes shine{0%{left:-80%}15%,100%{left:130%}}
          @keyframes flash{0%{opacity:0.5}30%{opacity:1}100%{opacity:0}}
          @keyframes lines-out{0%{opacity:0;transform:scale(0.5)}40%{opacity:0.35}100%{opacity:0;transform:scale(1.6)}}
          @keyframes move-name{0%{opacity:0;transform:scale(0.6)}50%{opacity:1;transform:scale(1.15)}100%{opacity:0;transform:scale(1.3)}}
        `}</style>

        {/* Back button */}
        <div style={{padding:"16px 0 12px"}}>
          <button onClick={()=>setDetailChar(null)}
            style={{background:"none",border:"none",color:"#555",fontSize:13,fontWeight:700,cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:6}}>
            ← {screen==="reveal"?"返回結果":"返回"}
          </button>
        </div>

        {/* Card */}
        <div style={{
          position:"relative",overflow:"hidden",borderRadius:24,marginBottom:16,
          background:"linear-gradient(160deg,#0a0a18,#12121f)",
          border:`2.5px solid ${c.color}`,
          boxShadow:`0 0 30px ${c.color}30,inset 0 0 40px ${c.color}05`,
        }}>
          {/* Battle flash */}
          {battleFn && (() => {
            const fn = battleFn;
            const move = c.functions.find(m=>m.fn===fn);
            return (
              <div style={{position:"absolute",inset:0,zIndex:40,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",overflow:"hidden",borderRadius:24}}>
                <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",animation:"lines-out 0.9s ease-out forwards"}}>
                  {Array.from({length:20}).map((_,i)=>{
                    const a=(i/20)*360;
                    return <line key={i}
                      x1={`calc(50% + ${20*Math.cos(a*Math.PI/180)}px)`} y1={`calc(50% + ${20*Math.sin(a*Math.PI/180)}px)`}
                      x2={`calc(50% + ${180*Math.cos(a*Math.PI/180)}px)`} y2={`calc(50% + ${180*Math.sin(a*Math.PI/180)}px)`}
                      stroke={c.color} strokeWidth="1.5"/>;
                  })}
                </svg>
                <div style={{textAlign:"center",animation:"move-name 0.9s ease-out forwards",zIndex:2}}>
                  <div style={{fontSize:28,marginBottom:4}}>{move?.icon}</div>
                  <div style={{fontSize:18,fontWeight:900,color:c.color,textShadow:`0 0 20px ${c.color}`,letterSpacing:1}}>{move?.name}</div>
                  <div style={{fontSize:11,color:"#ccc",fontWeight:700,marginTop:2}}>{move?.zh}</div>
                </div>
              </div>
            );
          })()}

          {RC[c.rarity].shine && (
            <div style={{position:"absolute",inset:0,overflow:"hidden",borderRadius:24,pointerEvents:"none"}}>
              <div style={{position:"absolute",top:"-100%",left:"-80%",width:"50%",height:"300%",
                background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.06),transparent)",
                animation:"shine 3s infinite"}}/>
            </div>
          )}

          {/* Top */}
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
            padding:"20px 20px 10px",background:`linear-gradient(to bottom, ${c.color}22, transparent)`}}>
            <div style={{flex:1,paddingRight:8}}>
              <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:5}}>
                <span style={{fontSize:9,fontWeight:900,color:"#fff",padding:"3px 8px",borderRadius:99,background:`linear-gradient(to right, ${RC[c.rarity].badge.includes("yellow")?"#facc15,#f97316":"#a855f7,#ec4899"})`,}}>{c.rarity}</span>
              </div>
              <div style={{fontSize:24,fontWeight:900,color:"#fff",lineHeight:1}}>{c.name}</div>
              <div style={{fontSize:13,fontWeight:700,color:c.color,marginTop:3}}>{c.type} · {c.title}</div>
              <div style={{fontSize:9,color:"#555",marginTop:1}}>{c.zh}</div>
            </div>
            <div style={{animation:"float 3s ease-in-out infinite",flexShrink:0}}>
              <CharArt type={c.type} color={c.color} size={110}/>
            </div>
          </div>

          {/* Quote */}
          <div style={{margin:"0 16px 12px",padding:"10px 14px",borderRadius:12,
            background:"#ffffff06",borderLeft:`3px solid ${c.color}`,
            color:"#ccc",fontSize:11,lineHeight:1.7,fontStyle:"italic"}}>
            "{c.quote}"
          </div>

          {/* Moves section */}
          <div style={{padding:"0 16px 20px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <div style={{flex:1,height:1,background:c.color+"25"}}/>
              <span style={{fontSize:10,color:c.color,fontWeight:700}}>招數 · MOVES</span>
              <div style={{flex:1,height:1,background:c.color+"25"}}/>
              <span style={{fontSize:8,color:"#333"}}>tap to use</span>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {c.functions.map((m,i)=>{
                const isActive = activeMove===m.fn;
                const roleColors = ["#f59e0b","#3b82f6","#8b5cf6","#ef444460"];
                return (
                  <div key={m.fn} onClick={()=>handleMoveClick(m.fn)}
                    style={{
                      borderRadius:14,overflow:"hidden",cursor:"pointer",
                      border:`1.5px solid ${isActive?c.color:c.color+"30"}`,
                      background:isActive?`${c.color}18`:"#0d0d18",
                      boxShadow:isActive?`0 0 14px ${c.color}40`:"none",
                      transition:"all 0.15s",
                    }}>
                    <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px"}}>
                      {/* Role bar */}
                      <div style={{width:3,height:36,borderRadius:2,background:roleColors[i],flexShrink:0}}/>
                      <div style={{fontSize:22,minWidth:26}}>{m.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14,fontWeight:800,color:isActive?c.color:"#ddd",lineHeight:1.2}}>{m.name}</div>
                        <div style={{fontSize:9,color:"#555",marginTop:1}}>{m.zh} · {m.role}</div>
                      </div>
                      <div style={{fontSize:9,color:isActive?c.color:"#333",fontWeight:700}}>
                        {isActive?"▼":"▶"}
                      </div>
                    </div>
                    {isActive && (
                      <div style={{padding:"0 14px 12px",paddingLeft:45}}>
                        <div style={{fontSize:11,color:"#999",lineHeight:1.6}}>{m.desc}</div>
                        <div style={{fontSize:9,color:"#555",marginTop:4,fontStyle:"italic"}}>
                          {["The core function — defines this character","Supporting strength","Developing ability","Blind spot / growth area"][i]}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desc card */}
        <div style={{borderRadius:16,padding:"14px 16px",background:"#0d0d18",border:"1px solid #ffffff08",marginBottom:16}}>
          <p style={{fontSize:12,color:"#999",lineHeight:1.8,margin:0}}>{c.desc}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:12}}>
            <div style={{background:"#0a1a0a",borderRadius:10,padding:"8px 12px"}}>
              <div style={{fontSize:8,color:"#333",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>Strength</div>
              <div style={{fontSize:11,color:"#22c55e",fontWeight:700}}>{c.strength}</div>
            </div>
            <div style={{background:"#1a0a0a",borderRadius:10,padding:"8px 12px"}}>
              <div style={{fontSize:8,color:"#333",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>Weakness</div>
              <div style={{fontSize:11,color:"#ef4444",fontWeight:700}}>{c.weakness}</div>
            </div>
          </div>
        </div>

        {/* Back to reveal */}
        {screen==="reveal" && (
          <button onClick={()=>setDetailChar(null)}
            style={{width:"100%",padding:"14px",borderRadius:14,border:`1.5px solid ${c.color}40`,
              background:`${c.color}10`,color:c.color,fontSize:13,fontWeight:700,cursor:"pointer"}}>
            ← 返回我嘅結果
          </button>
        )}
      </div>
    );
  }

  return null;
}