import { useEffect } from 'react';

const HOT_SELECTOR = 'a, button, [data-hot], .badge, .tile, .route, .step';

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let rafId: number;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    function animate() {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      cursor!.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    }
    animate();

    const onPointerOver = (e: PointerEvent) => {
      if ((e.target as Element | null)?.closest(HOT_SELECTOR)) {
        cursor.classList.add('hot');
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      if ((e.target as Element | null)?.closest(HOT_SELECTOR)) {
        cursor.classList.remove('hot');
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
    };
  }, []);
}
