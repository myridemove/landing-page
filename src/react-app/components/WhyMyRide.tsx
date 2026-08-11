import React, { useState, useEffect } from 'react';
import { ROUTES, useCityCtx } from '../contexts/CityContext';
import { useLocale } from '../contexts/LocaleContext';

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

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
          <stop offset="0" style={{ stopColor: 'var(--red)', stopOpacity: 0.32 }} />
          <stop offset="1" style={{ stopColor: 'var(--red)', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      {/* Street grid abstraction */}
      <g className="map-grid" strokeWidth="0.8" opacity=".8">
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
      <circle cx="320" cy="220" r="150" fill="none" stroke="var(--red)" strokeWidth="1.2" strokeDasharray="2 6" />
      <circle cx="320" cy="220" r="190" fill="none" stroke="var(--red)" strokeWidth="0.8" strokeDasharray="2 8" opacity=".55" />
      {/* Rider dots */}
      <g fill="var(--cream-1)">
        <circle cx="220" cy="160" r="3" /><circle cx="280" cy="230" r="3" />
        <circle cx="360" cy="190" r="3" /><circle cx="400" cy="260" r="3" />
        <circle cx="320" cy="300" r="3" /><circle cx="240" cy="280" r="3" />
        <circle cx="430" cy="210" r="3" /><circle cx="180" cy="220" r="3" />
      </g>
      {/* Duomo marker */}
      <g transform="translate(320,220)">
        <circle r="9" fill="var(--red)" />
        <circle r="16" fill="none" stroke="var(--red)" strokeWidth="1" />
        <circle r="26" fill="none" stroke="var(--red)" strokeWidth="0.5" opacity=".6" />
      </g>
    </svg>
  );
}

export function WhyMyRide() {
  const { idx } = useCityCtx();
  const { t } = useLocale();
  const route = ROUTES[idx];

  const [coverageIdx, setCoverageIdx] = useState(idx);
  const [coverageVisible, setCoverageVisible] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setCoverageVisible(false), 0);
    const fadeIn = setTimeout(() => {
      setCoverageIdx(idx);
      setCoverageVisible(true);
    }, 300);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(fadeIn);
    };
  }, [idx]);

  const coverage = t.routes.coverage[coverageIdx];

  const priceRows = [
    { label: t.why.priceTaxi, sub: t.why.priceTaxiSub, price: '€ 19,40', you: false },
    { label: t.why.priceRideshare, sub: t.why.priceRideshareSub, price: '€ 16,80', you: false },
    { label: t.why.priceMyRide, sub: t.why.priceMyRideSub, price: '€ 9,90', you: true },
  ];

  return (
    <section id="why">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>{t.why.title}</h2>
          <p>
            <span className="section-index">{t.why.index}</span><br />
            {t.why.sub}
          </p>
        </div>

        <div className="bento">
          {/* Speed tile */}
          <div className="tile t-speed reveal">
            <div className="ticker">
              <span className="live">● LIVE</span>
              <span>{route.city} · 09:42</span>
            </div>
            <div>
              <div className="tile-eyebrow">{t.why.avgSpeed}</div>
              <div className="big">
                <em><span data-count="3" data-suffix="">0</span></em>
                <span className="unit">MIN / ETA</span>
              </div>
              <p className="tile-body" style={{ marginTop: '10px' }}>
                {t.why.speedBody}
              </p>
            </div>
            <div className="compare">
              <div className="bar red">
                <small>MyRide</small>
                <b>
                  3 min
                  <span style={{ color: 'var(--cream-3)', fontFamily: "'JetBrains Mono'", fontSize: '11px', marginLeft: '6px' }}>
                    {t.why.avgEta}
                  </span>
                </b>
              </div>
              <div className="bar">
                <small>{t.why.localTaxi}</small>
                <b>
                  11 min
                  <span style={{ color: 'var(--cream-3)', fontFamily: "'JetBrains Mono'", fontSize: '11px', marginLeft: '6px' }}>
                    {t.why.sameHour}
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
                <div className="tile-eyebrow">{t.why.activeArea}</div>
                <h3
                  className="tile-title"
                  style={{
                    marginTop: '6px',
                    opacity: coverageVisible ? 1 : 0,
                    filter: coverageVisible ? 'blur(0px)' : 'blur(6px)',
                    transition: 'opacity 0.3s ease, filter 0.3s ease',
                  }}
                >
                  {coverage.line1}<br />{coverage.line2}
                </h3>
              </div>
              <div className="hq">
                <span style={{ color: 'var(--red)' }}>●</span> {t.why.launchZone}
              </div>
            </div>
          </div>

          {/* Safety tile */}
          <div className="tile t-safety reveal">
            <div>
              <div className="tile-eyebrow">{t.why.safetyEyebrow}</div>
              <h3 className="tile-title" style={{ marginTop: '10px' }}>
                {t.why.safetyTitle.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
                ))}
              </h3>
            </div>
            <ul className="checks">
              {t.why.safetyChecks.map((check) => (
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
              <div className="tile-eyebrow">{t.why.priceEyebrow}</div>
              <h3 className="tile-title" style={{ marginTop: '10px' }}>
                {t.why.priceTitle.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
                ))}
              </h3>
            </div>
            <div className="table">
              {priceRows.map((row) => (
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
              <div className="tile-eyebrow">{t.why.availEyebrow}</div>
              <div className="clock">
                <em>24</em>/7
                <span style={{ fontFamily: "'JetBrains Mono'", color: 'var(--cream-3)', fontSize: '14px', fontWeight: 400, marginLeft: '8px' }}>
                  {t.why.availAlways}
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
