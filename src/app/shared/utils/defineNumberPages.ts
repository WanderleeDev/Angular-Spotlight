export function defineNumberPages(
  value: string | number,
  cardPerView: number
): number {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numValue)) return 1;

  return Math.ceil(numValue / cardPerView);
}
