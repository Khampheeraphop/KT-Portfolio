import type { Metadata } from "next";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { LocaleProvider } from "@/locales/LocaleProvider";
export const metadata: Metadata = {
  title: "Phop — Khampheeraphop Thongsaeng | Full Stack Developer",
  description:
    "ผลงานของ คัมภีรภพณ์ ธงแสง — Full Stack Developer. Production systems, shared services, and prototypes.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
