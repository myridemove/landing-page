import React from 'react';

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
  delay?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Tra parcheggio, traffico e coda al taxi perdo 40 minuti ogni mattina. In moto, per fare la stessa tratta ci metto 10 minuti. Il problema non è la distanza, è il mezzo.',
    initials: 'GF',
    name: 'Giulia F., 28',
    role: 'Art director · Porta Venezia',
  },
  {
    quote:
      'Ho la patente A ma non voglio comprare una moto solo per le riunioni. Un servizio on-demand, professionale, un casco integrale — in città è quello che manca.',
    initials: 'MC',
    name: 'Matteo C., 34',
    role: 'Producer · Isola',
    delay: '100ms',
  },
];

export function Proof() {
  return (
    <section id="proof">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>Perché le città ci stanno aspettando.</h2>
          <p>
            <span className="section-index">§ 03 / Le voci della città</span><br />
            Abbiamo parlato con chi si sposta ogni giorno nelle nostre città. Questo è il problema che sentiamo ogni volta.
          </p>
        </div>

        <div className="proof">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials}
              className="testi reveal"
              style={t.delay ? { '--delay': t.delay } as React.CSSProperties : undefined}
            >
              <q>{t.quote}</q>
              <div className="who">
                <div className="avatar">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
