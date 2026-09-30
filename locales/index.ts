import th from "./th";
import en from "./en";
export type Locale = "th" | "en";
export type Localized = Record<Locale, string>;
export const dictionaries = { th, en };
