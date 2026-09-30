"use client";
import NextLink from "next/link";
import { Button, Typography } from "@mui/material";
import { Section } from "@/components/shared/Section";
import { useLocale } from "@/locales/LocaleProvider";
export default function NotFound() {
  const { locale } = useLocale();
  return (
    <Section sx={{ minHeight: "80vh" }}>
      <Typography variant="overline" color="text.secondary">
        404 / KHAMPHEERAPHOP
      </Typography>
      <Typography variant="h1" sx={{ my: 3 }}>
        {locale === "th" ? "ไม่พบหน้าที่ต้องการ" : "Page not found"}
      </Typography>
      <Button component={NextLink} href="/" variant="contained">
        {locale === "th" ? "กลับหน้าหลัก" : "Back to home"}
      </Button>
    </Section>
  );
}
