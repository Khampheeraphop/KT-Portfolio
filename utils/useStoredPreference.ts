"use client";
import { useMemo, useSyncExternalStore } from "react";

function createPreferenceStore<T extends string>(key: string, initial: T, allowed: readonly T[]) {
    let fallback = initial;
    const eventName = `portfolio:${key}`;
    return {
      read() {
        try {
          const saved = window.localStorage.getItem(key);
          if (saved && allowed.includes(saved as T)) return saved as T;
        } catch { /* Use the in-memory preference when storage is unavailable. */ }
        return fallback;
      },
      subscribe(callback: () => void) {
        const onStorage = (event: StorageEvent) => { if (event.key === key || event.key === null) callback(); };
        window.addEventListener("storage", onStorage);
        window.addEventListener(eventName, callback);
        return () => {
          window.removeEventListener("storage", onStorage);
          window.removeEventListener(eventName, callback);
        };
      },
      write(value: T) {
        fallback = value;
        try { window.localStorage.setItem(key, value); } catch { /* The preference still works for this visit. */ }
        window.dispatchEvent(new Event(eventName));
      },
    };
}

/** Synchronize a browser preference while keeping the server snapshot stable. */
export function useStoredPreference<T extends string>(key: string, initial: T, allowed: readonly T[]) {
  const store = useMemo(() => createPreferenceStore(key, initial, allowed), [key, initial, allowed]);
  const value = useSyncExternalStore(store.subscribe, store.read, () => initial);
  return [value, store.write] as const;
}
