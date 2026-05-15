export function determineActiveSection(
  sectionOffsets: { id: string; top: number }[],
  scrollPosition: number,
  headerOffset: number = 0
): string | null {
  const adjusted = scrollPosition + headerOffset;
  let active: string | null = null;

  for (const section of sectionOffsets) {
    if (section.top <= adjusted) {
      active = section.id;
    }
  }

  return active ?? sectionOffsets[0]?.id ?? null;
}
