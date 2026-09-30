"use client";
import { createContext, useContext, useEffect } from "react";
import { dictionaries, type Locale } from "./index";
import { useStoredPreference } from "@/utils/useStoredPreference";
const locales: readonly Locale[] = ["th", "en"];
const Context = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({ locale: "th", setLocale: () => {} });
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useStoredPreference("phop-locale", "th", locales);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <Context.Provider value={{ locale, setLocale }}>
      {children}
    </Context.Provider>
  );
}
export function useLocale() {
  const context = useContext(Context);
  return { ...context, t: dictionaries[context.locale] };
}
