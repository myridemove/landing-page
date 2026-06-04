import { useEffect, useRef, useState } from 'react';
import { ROUTES, useCityCtx } from '../contexts/CityContext';

const STEP = 28;
const EMPTY_PAUSE = 60;

export function Footer() {
  const { idx } = useCityCtx();
  const [displayCity, setDisplayCity] = useState(ROUTES[0].city);
  const prevIdxRef = useRef(idx);

  useEffect(() => {
    const prevIdx = prevIdxRef.current;
    if (prevIdx === idx) return;

    const currentCity = ROUTES[prevIdx].city;
    const nextCity = ROUTES[idx].city;
    prevIdxRef.current = idx;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 0;

    for (let i = currentCity.length - 1; i >= 0; i--) {
      const partial = currentCity.slice(0, i);
      const d = delay;
      timeouts.push(setTimeout(() => setDisplayCity(partial), d));
      delay += STEP;
    }

    delay += EMPTY_PAUSE;

    for (let i = 1; i <= nextCity.length; i++) {
      const partial = nextCity.slice(0, i);
      const d = delay;
      timeouts.push(setTimeout(() => setDisplayCity(partial), d));
      delay += STEP;
    }

    return () => timeouts.forEach(clearTimeout);
  }, [idx]);

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand column */}
          <div>
            <p className="foot-word">
              {displayCity || '\u00A0'},<br />ma <em>veloce.</em>
            </p>
            <p style={{
              color: 'var(--cream-3)', maxWidth: '40ch', fontSize: '13px',
              marginTop: 'var(--s-5)', fontFamily: "'JetBrains Mono'",
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              MyRide S.r.l.s · Piazza del Lino snc · 27100 Pavia · P.IVA 03016770186 · C.F. 03016770186
            </p>
          </div>

          <div className="foot-links">
            <div className="foot-col">
              <h4>Servizio</h4>
              <a href="#how">How it works <span className="it">Come funziona</span></a>
            </div>

            <div className="foot-col">
              <h4>Company</h4>
              <a href="#why">About <span className="it">Perché MyRide</span></a>
            </div>

            <div className="foot-col">
              <h4>Legale</h4>
              <a href="mailto:ciao@myride.it">Contact <span className="it">Contatti</span></a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 MyRide S.r.l.s · Made in Italy</span>
          <span>v 1.0 · Build 07-A</span>
        </div>
      </div>
    </footer>
  );
}
