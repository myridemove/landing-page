import { useEffect } from 'react';

function formatN(n: number, fmt?: string): string {
  if (fmt === 'k') return n >= 1000 ? Math.round(n / 1000) + 'K' : String(n);
  const locale = document.documentElement.lang || 'it';
  return n.toLocaleString(locale === 'it' ? 'it-IT' : 'en-US');
}

export function useCounters() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const target = +(el.dataset.count ?? 0);
          const fmt = el.dataset.fmt;
          const suffix = el.dataset.suffix ?? '';
          const duration = 1400;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = formatN(Math.round(target * eased), fmt) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
