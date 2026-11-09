/**
 * Calculates normalized scroll progress between 0 and 1.
 */
export function calculateScrollProgress(
  scrollY: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScrollable = scrollHeight - clientHeight;
  if (maxScrollable <= 0) {
    return 0;
  }
  const raw = scrollY / maxScrollable;
  if (raw <= 0) return 0;
  if (raw >= 1) return 1;
  return raw;
}
