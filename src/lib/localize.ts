type Locale = "es" | "en";

/**
 * Returns the localized value for a field.
 * Looks for `${field}En` when locale is "en", falling back to the base field.
 */
export function localize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
  field: string,
  locale: Locale
): string {
  if (locale === "en") {
    return (item[`${field}En`] as string) ?? (item[field] as string) ?? "";
  }
  return (item[field] as string) ?? "";
}
