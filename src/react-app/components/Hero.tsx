import React, { useState, useEffect } from 'react';
import { ROUTES, Route, useCityCtx } from '../contexts/CityContext';

const MARQUEE_ITEMS = [
  <>MI–01 Duomo <b className="dot">●</b> LIVE</>,
  <>MI–07 Navigli <b className="dot">●</b> LIVE</>,
  <>Tempo medio · 3.2 min</>,
  <>Casco fornito · sempre</>,
  <>Zona: M1 – M5</>,
  <>MI–12 Isola <b className="dot">●</b> LIVE</>,
  <>+37% vs taxi</>,
  <>Casco · Giacca · Guanti</>,
];

function MotoSvg() {
  return (
    <svg
      className="moto-svg"
      viewBox="0 0 600 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tank" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.62 0.22 27)" />
          <stop offset="1" stopColor="oklch(0.42 0.19 27)" />
        </linearGradient>
        <linearGradient id="carbon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.28 0.01 40)" />
          <stop offset="1" stopColor="oklch(0.14 0.01 40)" />
        </linearGradient>
        <radialGradient id="wheel" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.3" stopColor="oklch(0.18 0.01 40)" />
          <stop offset="0.9" stopColor="oklch(0.08 0.01 40)" />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.88 0.09 85)" />
          <stop offset="1" stopColor="oklch(0.72 0.08 85)" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="300" cy="430" rx="220" ry="12" fill="oklch(0.05 0 0)" opacity=".6" />

      {/* Rear wheel */}
      <g transform="translate(140,340)">
        <circle r="74" fill="url(#wheel)" stroke="oklch(0.3 0.01 40)" strokeWidth="2" />
        <circle r="40" fill="none" stroke="oklch(0.42 0.01 40)" strokeWidth="1.5" />
        <circle r="18" fill="oklch(0.22 0.01 40)" stroke="url(#gold)" strokeWidth="1.5" />
        <g stroke="oklch(0.5 0.01 40)" strokeWidth="2" strokeLinecap="round">
          <line x1="-40" y1="0" x2="-18" y2="0" /><line x1="40" y1="0" x2="18" y2="0" />
          <line x1="0" y1="-40" x2="0" y2="-18" /><line x1="0" y1="40" x2="0" y2="18" />
          <line x1="-28" y1="-28" x2="-13" y2="-13" /><line x1="28" y1="28" x2="13" y2="13" />
          <line x1="28" y1="-28" x2="13" y2="-13" /><line x1="-28" y1="28" x2="-13" y2="13" />
        </g>
      </g>

      {/* Front wheel */}
      <g transform="translate(460,340)">
        <circle r="74" fill="url(#wheel)" stroke="oklch(0.3 0.01 40)" strokeWidth="2" />
        <circle r="40" fill="none" stroke="oklch(0.42 0.01 40)" strokeWidth="1.5" />
        <circle r="18" fill="oklch(0.22 0.01 40)" stroke="url(#gold)" strokeWidth="1.5" />
        <g stroke="oklch(0.5 0.01 40)" strokeWidth="2" strokeLinecap="round">
          <line x1="-40" y1="0" x2="-18" y2="0" /><line x1="40" y1="0" x2="18" y2="0" />
          <line x1="0" y1="-40" x2="0" y2="-18" /><line x1="0" y1="40" x2="0" y2="18" />
          <line x1="-28" y1="-28" x2="-13" y2="-13" /><line x1="28" y1="28" x2="13" y2="13" />
          <line x1="28" y1="-28" x2="13" y2="-13" /><line x1="-28" y1="28" x2="-13" y2="13" />
        </g>
      </g>

      {/* Frame / engine block */}
      <path
        d="M165 300 L225 215 L340 210 L410 225 L455 260 L440 305 L210 315 Z"
        fill="url(#carbon)"
        stroke="oklch(0.32 0.01 40)"
        strokeWidth="1.2"
      />

      {/* Fuel tank */}
      <path
        d="M230 215 Q260 170 320 168 Q380 166 400 200 L405 230 L260 240 Q240 235 230 215 Z"
        fill="url(#tank)"
        stroke="oklch(0.35 0.18 27)"
        strokeWidth="1"
      />
      {/* Tank highlight */}
      <path
        d="M248 198 Q280 178 330 178 Q370 178 385 195"
        fill="none"
        stroke="oklch(0.78 0.14 27)"
        strokeWidth="1.2"
        opacity=".5"
      />
      {/* Livery stripes */}
      <path d="M238 222 L395 222" stroke="oklch(0.96 0.01 80)" strokeWidth="3" strokeLinecap="round" />
      <path d="M238 230 L395 230" stroke="url(#gold)" strokeWidth="1.2" strokeLinecap="round" />
      <text
        x="300" y="258" textAnchor="middle"
        fontFamily="Bricolage Grotesque" fontWeight="800" fontSize="16"
        fill="oklch(0.96 0.01 80)" letterSpacing="2"
      >
        MYRIDE
      </text>

      {/* Seat */}
      <path d="M170 275 Q185 250 225 248 L280 248 L260 275 Z" fill="oklch(0.10 0.008 40)" />

      {/* Rear cowl */}
      <path
        d="M160 275 L200 245 L225 245 L215 275 Z"
        fill="oklch(0.14 0.008 40)"
        stroke="url(#gold)"
        strokeWidth="1"
        opacity=".9"
      />

      {/* Exhaust */}
      <path d="M200 310 L150 330 L145 340 L195 320 Z" fill="oklch(0.65 0.02 80)" opacity=".8" />

      {/* Forks */}
      <path d="M405 250 L460 335" stroke="oklch(0.48 0.01 40)" strokeWidth="7" strokeLinecap="round" />
      <path d="M395 250 L453 335" stroke="oklch(0.3 0.01 40)" strokeWidth="4" strokeLinecap="round" />

      {/* Handlebars */}
      <path d="M400 170 L440 200" stroke="oklch(0.22 0.01 40)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="400" cy="170" r="6" fill="oklch(0.96 0.01 80)" />
      <circle cx="442" cy="200" r="5" fill="oklch(0.55 0.22 27)" />

      {/* Headlight */}
      <path
        d="M440 200 Q490 215 510 250 L495 260 Q470 235 430 230 Z"
        fill="oklch(0.14 0.008 40)"
        stroke="url(#gold)"
        strokeWidth="1.5"
      />
      <circle cx="475" cy="238" r="10" fill="oklch(0.95 0.04 85)" opacity=".92" />
      <circle cx="475" cy="238" r="4" fill="oklch(1 0 0)" />

      {/* Speed lines */}
      <g stroke="oklch(0.96 0.01 80)" strokeWidth="1.2" strokeLinecap="round" opacity=".18">
        <line x1="60" y1="140" x2="140" y2="140" />
        <line x1="40" y1="170" x2="110" y2="170" />
        <line x1="70" y1="200" x2="150" y2="200" />
        <line x1="30" y1="230" x2="90" y2="230" />
      </g>
    </svg>
  );
}

function DuomoSvg() {
  return (
    <svg
      className="duomo"
      viewBox="0 0 1600 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <g fill="oklch(0.96 0.01 80)">
        <rect x="0" y="150" width="200" height="50" />
        <rect x="1380" y="160" width="220" height="40" />
        <path d="M560 200 L560 130 L580 130 L580 110 L600 110 L600 90 L620 90 L620 60 L640 60 L640 40 L660 40 L660 20 L680 10 L700 20 L700 40 L720 40 L720 60 L740 60 L740 90 L760 90 L760 110 L780 110 L780 130 L800 130 L800 200 Z" />
        <path d="M820 200 L820 110 L840 110 L840 80 L860 80 L860 100 L880 100 L880 130 L900 130 L900 200 Z" />
        <path d="M930 200 L930 140 L950 140 L950 120 L970 120 L970 140 L990 140 L990 200 Z" />
        <rect x="420" y="170" width="120" height="30" />
        <rect x="1020" y="170" width="220" height="30" />
        <rect x="1260" y="160" width="100" height="40" />
        <rect x="662" y="0" width="8" height="14" />
        <rect x="688" y="0" width="8" height="14" />
      </g>
    </svg>
  );
}


function BookingCard({ route, visible }: { route: Route; visible: boolean }) {
  return (
    <div
      className="book-card"
      role="group"
      aria-label="Booking preview"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      <div className="row">
        <span className="pin a">A</span>
        <div className="addr">
          {route.from.street}<small>{route.from.zone}</small>
        </div>
      </div>
      <div className="row">
        <span className="pin b">B</span>
        <div className="addr">
          {route.to.street}<small>{route.to.zone}</small>
        </div>
      </div>
      <div className="eta">
        <div>
          <div className="num">{route.time}</div>
          <div className="unit">{route.km} KM · {route.city}</div>
        </div>
        <span className="go">
          {route.price}{' '}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [displayCity, setDisplayCity] = useState(ROUTES[0].city);
  const [cardVisible, setCardVisible] = useState(true);
  const { setIdx: setGlobalIdx } = useCityCtx();

  useEffect(() => {
    setGlobalIdx(idx);
  }, [idx, setGlobalIdx]);

  useEffect(() => {
    const STEP = 28;        // ms per letter
    const IDLE = 3200;      // ms showing full city before animating
    const EMPTY_PAUSE = 60; // ms pause at empty state

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runCycle = (currentIdx: number) => {
      const current = ROUTES[currentIdx];
      const nextIdx = (currentIdx + 1) % ROUTES.length;
      const next = ROUTES[nextIdx];

      let delay = IDLE;

      // Fade out booking card at start of transition
      timeouts.push(setTimeout(() => setCardVisible(false), delay));

      // Erase current city letter by letter
      for (let i = current.city.length - 1; i >= 0; i--) {
        const partial = current.city.slice(0, i);
        const d = delay;
        timeouts.push(setTimeout(() => setDisplayCity(partial), d));
        delay += STEP;
      }

      // Switch route index when display is empty
      timeouts.push(setTimeout(() => setIdx(nextIdx), delay));
      delay += EMPTY_PAUSE;

      // Type next city letter by letter
      for (let i = 1; i <= next.city.length; i++) {
        const partial = next.city.slice(0, i);
        const d = delay;
        timeouts.push(setTimeout(() => setDisplayCity(partial), d));
        delay += STEP;
      }

      // Fade in booking card once city is fully typed
      timeouts.push(setTimeout(() => setCardVisible(true), delay));

      // Schedule next cycle
      timeouts.push(setTimeout(() => runCycle(nextIdx), delay));
    };

    runCycle(0);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const route = ROUTES[idx];
  const allItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <header className="hero" id="top">
      <div className="mesh" aria-hidden="true" />

      <div className="wrap hero-grid">
        {/* Left column */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="pulse" aria-hidden="true" />
            <span className="eyebrow">
              {route.city}{' · Live · 24 / 7'}
            </span>
          </div>

          <h1 className="hero-h1 reveal">
            <span style={{ display: 'inline-block' }}>{displayCity || '\u00A0'}</span><br />
            non <span className="accent">aspetta</span><span className="period">.</span>
          </h1>

          <p className="hero-sub reveal" style={{ '--delay': '120ms' } as React.CSSProperties}>
            Il primo servizio moto-taxi in Europa — veloce, sicuro, economico.
            Meno attesa nei tuoi spostamenti.
          </p>

          <div className="hero-ctas reveal" style={{ '--delay': '240ms' } as React.CSSProperties}>
            <a href="#app" className="btn btn-primary" data-hot="">
              Unisciti alla lista d&apos;attesa{' '}
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#how" className="btn btn-ghost" data-hot="">
              La nostra visione
            </a>
          </div>

          <div className="hero-meta reveal" style={{ '--delay': '360ms' } as React.CSSProperties}>
            <span>
              <b data-count="3" data-suffix=" min">0 min</b><br />
              tempo stimato*
            </span>
            <span>
              <b>2027</b><br />
              lancio previsto
            </span>
            <span>
              <b data-count="37" data-suffix="%">0%</b><br />
              più veloce del taxi*
            </span>
          </div>
        </div>

        {/* Right column — moto composition */}
        <div className="hero-right" aria-hidden="true">
          <div className="moto-stage">
            <div className="moto-card">
              <div className="label">
                <span><span className="dot" />MR–07 · RED LIVERY</span>
                <span>45° / NORD</span>
              </div>
              <MotoSvg />
            </div>
            <BookingCard route={route} visible={cardVisible} />
          </div>
        </div>
      </div>

      <DuomoSvg />

      {/* Marquee strip */}
      <div className="marquee" role="complementary" aria-label="Live rider status">
        <div className="track" aria-hidden="true">
          {allItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
