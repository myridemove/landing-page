import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync with OS-level changes only when the user hasn't made a manual choice
  // in this session (i.e. they're on the saved value from a previous session).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = (e: MediaQueryListEvent) => {
      // Only follow the system if localStorage still matches the system default
      // (i.e. user hasn't overridden with the toggle in this session).
      const saved = localStorage.getItem('theme');
      const systemTheme = e.matches ? 'dark' : 'light';
      if (saved === systemTheme || saved === null) {
        setTheme(systemTheme);
      }
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }, []);

  const toggle = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
