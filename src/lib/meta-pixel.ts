// Reemplaza este ID por tu Meta Pixel ID (Events Manager → Configuración del dataset).
export const META_PIXEL_ID = "YOUR_PIXEL_ID";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

/** Trackea un evento estándar de Meta (PageView, Lead, ViewContent, etc.). */
export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (params) window.fbq("track", event, params);
  else window.fbq("track", event);
}

/** Trackea un evento personalizado. */
export function trackPixelCustom(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (params) window.fbq("trackCustom", event, params);
  else window.fbq("trackCustom", event);
}
