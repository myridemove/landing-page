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

const MotoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 16l3-6h6l2 3" />
    <circle cx="6" cy="17" r="2.5" />
    <circle cx="18" cy="17" r="2.5" />
    <path d="M14 10l2-3h2" />
  </svg>
);

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="MyRide home">
          <span className="logo-mark" aria-hidden="true">
            <MotoIcon />
          </span>
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
