/**
 * smoothScroll.js — scroll animado custom FACTOR (ENM-005).
 *
 * Única fuente de verdad para animaciones de scroll a anclas: usado por
 * - Carrusel360.astro: flecha ↓ → #speech
 * - Header.astro: links nav → #speech, #galeria, #trabajos
 *
 * Algoritmo idéntico al original de Carrusel360 (sin variaciones):
 * - targetY = el.getBoundingClientRect().top + window.scrollY − scrollMargin
 *   (scrollMargin leído de getComputedStyle(el).scrollMarginTop; fallback 120px)
 * - duration = 1000ms (configurable)
 * - easing = easeInOutCubic
 * - rAF-based step con window.scrollTo({ behavior: "auto" })
 * - prefers-reduced-motion: reduce → salto instantáneo (window.scrollTo sin animación)
 * - cancela rAF activo en cada llamado (no acumula animaciones)
 * - cancela en wheel/touchstart (no pelea con scroll manual)
 *
 * @param {string|HTMLElement} target — selector CSS o elemento DOM a scrollear
 * @param {{ duration?: number }} [options] — opciones
 * @param {number} [options.duration=1000] — duración en milisegundos
 * @returns {() => void} cancel — cancela la animación activa (opcional usar por caller)
 */
let rafId = null;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function cancel() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

document.addEventListener("wheel", cancel, { passive: true });
document.addEventListener("touchstart", cancel, { passive: true });

export function smoothScrollTo(target, { duration = 1000 } = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return cancel;

  const scrollMargin = parseFloat(getComputedStyle(el).scrollMarginTop) || 120;
  const targetY = el.getBoundingClientRect().top + window.scrollY - scrollMargin;
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return cancel;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return cancel;
  }

  cancel();
  const startTime = performance.now();
  const step = (now) => {
    const t = Math.min((now - startTime) / duration, 1);
    window.scrollTo({ top: startY + distance * easeInOutCubic(t), behavior: "auto" });
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      rafId = null;
    }
  };
  rafId = requestAnimationFrame(step);
  return cancel;
}

export default smoothScrollTo;
