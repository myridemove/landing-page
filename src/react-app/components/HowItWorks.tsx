import React from 'react';
import { MapPin, HardHat, Zap } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

export function HowItWorks() {
  const { t } = useLocale();

  const steps = [
    {
      icon: <MapPin size={18} />,
      num: '01',
      title: t.how.step1Title,
      body: t.how.step1Body,
    },
    {
      icon: <HardHat size={18} />,
      num: '02',
      title: t.how.step2Title,
      body: t.how.step2Body,
      delay: '120ms',
    },
    {
      icon: <Zap size={18} />,
      num: '03',
      title: t.how.step3Title,
      body: t.how.step3Body,
      delay: '240ms',
    },
  ];

  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head two reveal">
          <h2>{t.how.title}</h2>
          <p>
            <span className="section-index">{t.how.index}</span><br />
            {t.how.sub}
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => (
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
