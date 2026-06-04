import { useTheme } from '../hooks/useTheme';

const ArrowIcon = () => (
  <svg
    className="arrow"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function Nav() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="MyRide home">
          <button
            className="logo-mark"
            onClick={toggle}
            aria-label={isDark ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          MyRide
        </a>

        <div className="nav-links">
          <a href="#how">Come funziona</a>
          <a href="#why">Perché MyRide</a>
          <a href="#proof">Riders</a>
          <a href="#app">Scarica l&apos;app</a>
        </div>

        <div className="nav-cta">
          <div className="lang" aria-label="Language">
            <b>IT</b><span>/</span>EN
          </div>
          <a className="btn btn-primary btn-sm" href="#app">
            Unisciti alla lista <ArrowIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
