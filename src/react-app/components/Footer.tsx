export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand column */}
          <div>
            <p className="foot-word">
              Milano,<br />ma <em>veloce.</em>
            </p>
            <p style={{
              color: 'var(--cream-3)', maxWidth: '40ch', fontSize: '13px',
              marginTop: 'var(--s-5)', fontFamily: "'JetBrains Mono'",
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              MyRide S.r.l. · Via Tortona 35 · 20144 Milano · P.IVA 13245670964
            </p>
          </div>

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

        <div className="foot-bottom">
          <span>© 2026 MyRide S.r.l. · Made in Milano</span>
          <span>v 1.0 · Build 07-A</span>
        </div>
      </div>
    </footer>
  );
}
