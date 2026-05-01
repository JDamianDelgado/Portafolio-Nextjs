"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

export function trackMetaEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", eventName, params);
}

export function trackMetaCustomEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("trackCustom", eventName, params);
}
