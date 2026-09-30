"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { contacts } from "@/constants/profile";
import { Section } from "@/components/shared/Section";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ContactIcon } from "./ContactIcon";
export function Contact() {
  const { t } = useLocale();
  return (
    <Section id="contact" sx={{ bgcolor: "secondary.light" }}>
      <SectionLabel number="04">{t.contact}</SectionLabel>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
          gap: { xs: 4.5, md: "10%" },
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ mb: 4.5, maxWidth: 560 }}>
            {t.contactTitle}
          </Typography>
          <Typography color="text.secondary">{t.contactBody}</Typography>
        </Box>
        <Stack>
          {contacts.map((contact) => (
            <Link
              key={contact.label}
              href={contact.url}
              target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={contact.url.startsWith("mailto:") ? undefined : "noreferrer"}
              underline="none"
              sx={{
                py: 2.25,
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                borderTop: 1,
                borderColor: "divider",
                "&:hover": { color: "primary.main" },
                "&:last-child": { borderBottom: 1, borderColor: "divider" },
              }}
            >
              <ContactIcon channel={contact.label} />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary">
                  {contact.label}
                </Typography>
                <Typography sx={{ overflowWrap: "anywhere" }}>
                  {contact.display}
                </Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}
