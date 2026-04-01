/** Single source of truth: WhatsApp / dial country code + number (no + prefix). */
export const RESORT_WHATSAPP_E164 = '919627438408';

/** Human-readable phone line for UI. */
export const RESORT_PHONE_DISPLAY = '+91 96274 38408';

/** Use for `tel:` links (E.164 with +). */
export const RESORT_PHONE_TEL_HREF = `tel:+${RESORT_WHATSAPP_E164}`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${RESORT_WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
