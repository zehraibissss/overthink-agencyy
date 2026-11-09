/**
 * Pure helpers for scroll-triggered section reveal transitions.
 */

export function isElementInRevealZone(
  rectTop: number,
  viewportHeight: number,
  offsetPx: number = 48
): boolean {
  if (viewportHeight <= 0) return true;
  return rectTop <= viewportHeight - offsetPx;
}

export function getRevealClassName(visible: boolean, settled: boolean): string {
  if (settled) {
    return 'opacity-100';
  }
  if (visible) {
    return 'opacity-100 translate-y-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]';
  }
  return 'opacity-0 translate-y-7 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]';
}
