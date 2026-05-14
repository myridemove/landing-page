import React from 'react';

const AppleIcon = () => (
  <svg className="glyph" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM256.4 84.5c30.1-35.7 27.4-68.2 26.5-79.9-26.6 1.5-57.4 18.1-74.9 38.5-19.3 21.9-30.6 49-28.2 78.8 28.8 2.2 55.1-12.6 76.6-37.4z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="glyph" viewBox="0 0 512 512" aria-hidden="true">
    <defs>
      <linearGradient id="gp1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.72 0.15 145)" />
        <stop offset="1" stopColor="oklch(0.55 0.18 145)" />
      </linearGradient>
      <linearGradient id="gp2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.88 0.16 95)" />
        <stop offset="1" stopColor="oklch(0.72 0.18 55)" />
      </linearGradient>
      <linearGradient id="gp3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.68 0.22 25)" />
        <stop offset="1" stopColor="oklch(0.55 0.22 25)" />
      </linearGradient>
      <linearGradient id="gp4" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="oklch(0.65 0.18 250)" />
        <stop offset="1" stopColor="oklch(0.5 0.18 250)" />
      </linearGradient>
    </defs>
    <path fill="url(#gp4)" d="M60 40c-10 5-16 15-16 28v376c0 13 6 23 16 28l212-216L60 40z" />
    <path fill="url(#gp2)" d="M344 164l-72 72 72 72 76-42c24-14 24-46 0-60l-76-42z" />
    <path fill="url(#gp3)" d="M272 236L60 40c4-2 9-3 14-3 6 0 12 2 18 5l252 146-72 48z" />
    <path fill="url(#gp1)" d="M272 236l72 72L92 470c-6 3-12 5-18 5-5 0-10-1-14-3l212-236z" />
  </svg>
);

function PhoneMockup() {
  return (
    <div className="phone" aria-hidden="true">
      <span className="phone-tag a"><span className="pt" />ETA 3 min</span>
      <span className="phone-tag b"><span className="pt" />€ 9,90 flat</span>
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="sbar">
            <span>09:42</span>
            <span>5G · 97%</span>
          </div>
          <div className="app-nav">
            <div className="hello">
              Ciao, Sofia.<small>Milano · Isola</small>
            </div>
            <div className="avi" />
          </div>
          <div className="search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Dove vuoi andare?
            <span className="k">⌘ K</span>
          </div>
          <div className="routes">
            <div className="route">
              <span className="dot" />
              <div>
                <small style={{ fontFamily: "'JetBrains Mono'", fontSize: '9px', color: 'var(--cream-3)', letterSpacing: '0.18em' }}>CASA</small>
                <br /><b>Via Melzo 14</b>
              </div>
              <span className="eta">6 min</span>
            </div>
            <div className="route active">
              <span className="dot" />
              <div>
                <small style={{ fontFamily: "'JetBrains Mono'", fontSize: '9px', color: 'var(--cream-3)', letterSpacing: '0.18em' }}>LAVORO</small>
                <br /><b>Via Tortona 35</b>
              </div>
              <span className="eta">→ ora</span>
            </div>
            <div className="route">
              <span className="dot" />
              <div>
                <small style={{ fontFamily: "'JetBrains Mono'", fontSize: '9px', color: 'var(--cream-3)', letterSpacing: '0.18em' }}>RECENTI</small>
                <br /><b>Navigli · Alzaia Grande</b>
              </div>
              <span className="eta">12 min</span>
            </div>
          </div>
          <div className="cta-bar">
            <div>
              <small>ETA 3 min · 7.4 km</small>
              <b>Prenota · € 9,90</b>
            </div>
            <span className="circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppSection() {
  return (
    <section className="app" id="app">
      <div className="wrap app-grid">
        {/* Left — text */}
        <div className="reveal">
          <span className="eyebrow">§ 04 / In arrivo</span>
          <h2 style={{ marginTop: '18px' }}>
            Presto tra le tue <em>mani.</em>
          </h2>
          <p>
            L&apos;app MyRide sarà gratuita. La prima corsa sarà a metà prezzo. Nessun abbonamento,
            nessun pedaggio nascosto — solo un casco e una città finalmente rapida.
            Lancio previsto 2026 — iscriviti alla lista d&apos;attesa per essere tra i primi a provarla.
          </p>

          <div className="badges">
            <a className="badge" href="#" aria-label="In arrivo su App Store">
              <AppleIcon />
              <span><small>In arrivo su</small><b>App Store</b></span>
            </a>
            <a className="badge" href="#" aria-label="In arrivo su Google Play">
              <GooglePlayIcon />
              <span><small>In arrivo su</small><b>Google Play</b></span>
            </a>
          </div>

          <div style={{
            marginTop: 'var(--s-6)', display: 'flex', gap: '18px', flexWrap: 'wrap',
            fontFamily: "'JetBrains Mono'", fontSize: '11px',
            color: 'var(--cream-3)', letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <span><span style={{ color: 'var(--gold)' }}>●</span> Lancio Milano · 2026</span>
            <span>Lista d&apos;attesa aperta</span>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="reveal" style={{ '--delay': '140ms' } as React.CSSProperties}>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
