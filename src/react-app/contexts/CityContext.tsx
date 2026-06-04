import React, { createContext, useContext, useState } from 'react';

export const ROUTES = [
  {
    city: 'Milano',
    from: { street: 'Corso Como 12', zone: 'Zona Porta Nuova' },
    to: { street: 'Via Tortona 35', zone: 'Zona Tortona · Navigli' },
    time: '3:42',
    km: '7.4',
    price: '€ 11,90',
    coverageLine1: 'Dal Duomo ai Navigli,',
    coverageLine2: 'da Isola a Tortona.',
  },
  {
    city: 'Malta',
    from: { street: 'Tower Rd, Sliema', zone: 'Sliema' },
    to: { street: 'Spinola Bay', zone: "St. Julian's" },
    time: '2:15',
    km: '2.1',
    price: '€ 6,50',
    coverageLine1: "Da Sliema a St. Julian's,",
    coverageLine2: 'dal centro alla baia.',
  },
  {
    city: 'Praga',
    from: { street: 'Václavské nám. 1', zone: 'Nové Město' },
    to: { street: 'Dlouhá 12', zone: 'Staré Město' },
    time: '1:48',
    km: '1.8',
    price: '€ 4,90',
    coverageLine1: 'Da Nové Město a Staré Město,',
    coverageLine2: 'dal centro alla storia.',
  },
  {
    city: 'Zagabria',
    from: { street: 'Trg Ban Jelačić 1', zone: 'Donji Grad' },
    to: { street: 'Tkalčićeva 15', zone: 'Gornji Grad' },
    time: '2:10',
    km: '1.9',
    price: '€ 5,90',
    coverageLine1: 'Da Trg Ban Jelačić a Tkalčićeva,',
    coverageLine2: 'dal centro alla città alta.',
  },
];

export type Route = (typeof ROUTES)[number];

interface CityCtxType {
  idx: number;
  setIdx: (i: number) => void;
}

const CityContext = createContext<CityCtxType>({ idx: 0, setIdx: () => {} });

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [idx, setIdx] = useState(0);
  return <CityContext.Provider value={{ idx, setIdx }}>{children}</CityContext.Provider>;
}

export function useCityCtx() {
  return useContext(CityContext);
}
