import React from 'react';

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const SAFETY_CHECKS = [
  'Casco integrale ECE 22.06',
  'Giacca e guanti certificati',
  'GPS tracciato in tempo reale',
  'Copertura assicurativa full',
  'Rider con patente A ≥ 3 anni',
];

const PRICE_ROWS = [
  { label: 'Taxi tradizionale', sub: 'tariffa urbana', price: '€ 19,40', you: false },
  { label: 'Ride-share auto', sub: 'tariffa dinamica', price: '€ 16,80', you: false },
  { label: 'MyRide', sub: 'tariffa piatta · moto', price: '€ 9,90', you: true },
];

const PEAK_HOURS = new Set([7, 8, 9, 17, 18, 19, 22, 23, 0]);

function CoverageSvg() {
  return (
    <svg
      className="zones"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cov" cx="0.5" cy="0.55" r="0.6">
          <stop offset="0" stopColor="oklch(0.55 0.22 27)" stopOpacity="0.32" />
          <stop offset="1" stopColor="oklch(0.55 0.22 27)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Street grid abstraction */}
      <g stroke="oklch(0.32 0.01 40)" strokeWidth="0.8" opacity=".8">
        <path d="M0 80 C 150 60 360 120 600 90" />
        <path d="M0 160 C 180 140 400 200 600 170" />
        <path d="M0 240 C 120 220 420 280 600 250" />
        <path d="M0 320 C 200 300 380 360 600 330" />
        <path d="M120 0 C 100 120 160 260 140 400" />
        <path d="M240 0 C 260 120 220 260 260 400" />
        <path d="M380 0 C 360 120 400 260 380 400" />
        <path d="M480 0 C 500 120 460 260 500 400" />
      </g>
      {/* Service zone */}
      <circle cx="320" cy="220" r="190" fill="url(#cov)" />
      <circle cx="320" cy="220" r="150" fill="none" stroke="oklch(0.55 0.22 27)" strokeWidth="1.2" strokeDasharray="2 6" />
      <circle cx="320" cy="220" r="190" fill="none" stroke="oklch(0.55 0.22 27)" strokeWidth="0.8" strokeDasharray="2 8" opacity=".55" />
      {/* Rider dots */}
      <g fill="oklch(0.96 0.01 80)">
        <circle cx="220" cy="160" r="3" /><circle cx="280" cy="230" r="3" />
        <circle cx="360" cy="190" r="3" /><circle cx="400" cy="260" r="3" />
        <circle cx="320" cy="300" r="3" /><circle cx="240" cy="280" r="3" />
        <circle cx="430" cy="210" r="3" /><circle cx="180" cy="220" r="3" />
      </g>
      {/* Duomo marker */}
      <g transform="translate(320,220)">
        <circle r="9" fill="oklch(0.55 0.22 27)" />
        <circle r="16" fill="none" stroke="oklch(0.55 0.22 27)" strokeWidth="1" />
        <circle r="26" fill="none" stroke="oklch(0.55 0.22 27)" strokeWidth="0.5" opacity=".6" />
      </g>
    </svg>
  );
}

export function WhyMyRide() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>Perché MyRide vince il traffico di Milano.</h2>
          <p>
            <span className="section-index">§ 02 / Perché MyRide</span><br />
            Non siamo un&apos;altra app per chiamare un taxi. Siamo il modo più onesto di spostarsi in una città costruita a misura di Vespa.
          </p>
        </div>

        <div className="bento">
          {/* Speed tile */}
          <div className="tile t-speed reveal">
            <div className="ticker">
              <span className="live">● LIVE</span>
              <span>Milano · 09:42</span>
            </div>
            <div>
              <div className="tile-eyebrow">Velocità media</div>
              <div className="big">
                <em><span data-count="3" data-suffix="">0</span></em>
                <span className="unit">MIN / ETA</span>
              </div>
              <p className="tile-body" style={{ marginTop: '10px' }}>
                Dall&apos;istante in cui prenoti, al momento in cui ti siedi. Abbiamo misurato. Abbiamo vinto.
              </p>
            </div>
            <div className="compare">
              <div className="bar red">
                <small>MyRide</small>
                <b>
                  3 min
                  <span style={{ color: 'var(--cream-3)', fontFamily: "'JetBrains Mono'", fontSize: '11px', marginLeft: '6px' }}>
                    ETA medio
                  </span>
                </b>
              </div>
              <div className="bar">
                <small>Taxi Milano</small>
                <b>
                  11 min
                  <span style={{ color: 'var(--cream-3)', fontFamily: "'JetBrains Mono'", fontSize: '11px', marginLeft: '6px' }}>
                    a pari ora
                  </span>
                </b>
              </div>
            </div>
          </div>

          {/* Coverage tile */}
          <div className="tile t-coverage reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
            <CoverageSvg />
            <div className="map-inner">
              <div>
                <div className="tile-eyebrow">Area attiva</div>
                <h3 className="tile-title" style={{ marginTop: '6px' }}>
                  Dal Duomo ai Navigli,<br />da Isola a Tortona.
                </h3>
              </div>
              <div className="hq">
                <span style={{ color: 'var(--red)' }}>●</span> Zona di lancio · Raggio 8 km
              </div>
            </div>
          </div>

          {/* Safety tile */}
          <div className="tile t-safety reveal">
            <div>
              <div className="tile-eyebrow">Sicurezza, sempre</div>
              <h3 className="tile-title" style={{ marginTop: '10px' }}>
                Ogni rider è<br />un professionista.
              </h3>
            </div>
            <ul className="checks">
              {SAFETY_CHECKS.map((check) => (
                <li key={check}>
                  <span className="c"><CheckIcon /></span>
                  {check}
                </li>
              ))}
            </ul>
          </div>

          {/* Price tile */}
          <div className="tile t-price reveal" style={{ '--delay': '60ms' } as React.CSSProperties}>
            <div>
              <div className="tile-eyebrow">Prezzo onesto</div>
              <h3 className="tile-title" style={{ marginTop: '10px' }}>
                Duomo → Isola,<br />alle 18:40.
              </h3>
            </div>
            <div className="table">
              {PRICE_ROWS.map((row) => (
                <div key={row.label} className={`row${row.you ? ' you' : ''}`}>
                  <div>
                    <b>{row.label}</b><br />
                    <small>{row.sub}</small>
                  </div>
                  <div
                    className="price"
                    style={!row.you ? { color: 'var(--cream-3)' } : undefined}
                  >
                    {row.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability tile */}
          <div className="tile t-avail reveal" style={{ '--delay': '120ms' } as React.CSSProperties}>
            <div>
              <div className="tile-eyebrow">Disponibilità</div>
              <div className="clock">
                <em>24</em>/7
                <span style={{ fontFamily: "'JetBrains Mono'", color: 'var(--cream-3)', fontSize: '14px', fontWeight: 400, marginLeft: '8px' }}>
                  · SEMPRE ATTIVI*
                </span>
              </div>
            </div>
            <div>
              <div className="ring" aria-hidden="true">
                {Array.from({ length: 24 }, (_, i) => (
                  <span
                    key={i}
                    style={PEAK_HOURS.has(i) ? { opacity: 1 } : undefined}
                  />
                ))}
              </div>
              <div className="legend">
                <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
