import type { Locale } from "@/locales";

export const formatIndex = (index: number) =>
  String(index + 1).padStart(2, "0");

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "th" ? "th-TH" : "en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
