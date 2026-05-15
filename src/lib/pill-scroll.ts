export function calculatePillScrollOffset(
  pillLeft: number,
  pillWidth: number,
  containerWidth: number
): number {
  const pillCenter = pillLeft + pillWidth / 2;
  return Math.max(0, pillCenter - containerWidth / 2);
}
