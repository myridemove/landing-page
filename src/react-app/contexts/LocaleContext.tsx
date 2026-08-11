import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, Locale, Translations } from '../i18n/translations';

interface LocaleCtxType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleCtxType>({
  locale: 'it',
  setLocale: () => {},
  t: translations.it,
});

function getInitialLocale(): Locale {
  const stored = localStorage.getItem('myride-locale');
  if (stored === 'en' || stored === 'it') return stored;
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === 'it' ? 'it' : 'en';
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('myride-locale', l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
