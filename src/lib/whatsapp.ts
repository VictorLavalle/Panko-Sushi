export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/52${phone}?text=${encodeURIComponent(message)}`;
}
