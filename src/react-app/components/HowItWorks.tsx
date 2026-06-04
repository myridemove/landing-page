import React from 'react';
import { MapPin, HardHat, Zap } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  num: string;
  title: string;
  body: string;
  delay?: string;
}

const STEPS: Step[] = [
  {
    icon: <MapPin size={18} />,
    num: '01',
    title: 'Fissa il punto.',
    body: 'Apri l\'app, tocca la mappa. Il rider più vicino arriva in meno di 3 minuti.',
  },
  {
    icon: <HardHat size={18} />,
    num: '02',
    title: 'Indossa il casco.',
    body: 'Casco integrale — sanificato dopo ogni corsa. Ogni viaggio con la massima sicurezza e igiene.',
    delay: '120ms',
  },
  {
    icon: <Zap size={18} />,
    num: '03',
    title: 'Taglia il traffico.',
    body: 'Ti siedi. Il rider parte. Parti, arrivi a destinazione, e paghi direttamente dall\'app quando scendi.',
    delay: '240ms',
  },
];

export function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>Tre tap. Un casco. Ovunque in un lampo.</h2>
          <p>
            <span className="section-index">§ 01 / Come funziona</span><br />
            Niente stalli, niente attese, niente ansia da traffico. MyRide ti porta dove devi essere — precisamente quando devi esserci.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="step reveal"
              style={step.delay ? { '--delay': step.delay } as React.CSSProperties : undefined}
            >
              <div className="icon">{step.icon}</div>
              <div className="num">
                {step.num}<sup>/03</sup>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
