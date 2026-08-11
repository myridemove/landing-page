import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

export function Proof() {
  const { t } = useLocale();

  return (
    <section id="proof">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>{t.proof.title}</h2>
          <p>
            <span className="section-index">{t.proof.index}</span><br />
            {t.proof.sub}
          </p>
        </div>

        <div className="proof">
          {t.proof.testimonials.map((testimonial, i) => (
            <div
              key={testimonial.initials}
              className="testi reveal"
              style={i > 0 ? { '--delay': '100ms' } as React.CSSProperties : undefined}
            >
              <q>{testimonial.quote}</q>
              <div className="who">
                <div className="avatar">{testimonial.initials}</div>
                <div>
                  <b>{testimonial.name}</b>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
