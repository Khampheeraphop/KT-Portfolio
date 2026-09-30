"use client";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { identity } from "@/locales/identity";
import { profile } from "@/constants/profile";
import { projects } from "@/features/projects/registry";
import { ProfileSheet } from "./ProfileSheet";
import { reveal } from "@/theme/motion";
export function Hero() {
  const { locale, t } = useLocale();
  const content = identity[locale];
  return (
    <Box
      component="section"
      id="home"
      sx={{ px: "5%", pt: 3.5, overflow: "hidden", background: theme => theme.palette.mode === "light" ? "radial-gradient(ellipse at 90% 20%, #bcd8f7 0%, transparent 60%), linear-gradient(130deg, #e5edf6, #d4e3f6)" : "radial-gradient(ellipse at 90% 20%, #234767 0%, transparent 60%)" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", color: "text.secondary" }}
      >
        <Typography variant="overline">PERSONAL PORTFOLIO</Typography>
        <Typography
          variant="overline"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          DEVELOPMENT / SELECTED WORK
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.5fr) minmax(270px, 1fr)",
          },
          gap: { xs: 4.5, md: "6%" },
          alignItems: "center",
          pt: { xs: 2, md: 4 },
          pb: 6,
        }}
      >
        <Box sx={{ py: { xs: 4, md: 6 }, animation: reveal + " .8s ease-out" }}>
          <Typography sx={{ fontSize: "1.1rem", mb: 3 }}>
            {content.heading}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize:
                locale === "en"
                  ? {
                      xs: "clamp(1.85rem, 6.3vw, 3.5rem)",
                      md: "clamp(2.2rem, 4vw, 4.4rem)",
                    }
                  : {
                      xs: "clamp(2.9rem, 9vw, 4.6rem)",
                      md: "clamp(2.7rem, 5.3vw, 5.5rem)",
                    },
              overflowWrap: "anywhere",
            }}
          >
            {content.firstName}
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              {content.lastName}
            </Box>
          </Typography>
          {content.alternateName && (
            <Typography
              sx={{
                fontSize: ".85rem",
                letterSpacing: ".1em",
                my: 2.5,
                color: "text.secondary",
              }}
            >
              {content.alternateName}
            </Typography>
          )}
          <Typography
            component="h2"
            sx={{ fontSize: "1.5rem", fontWeight: 500, mt: 3 }}
          >
            Full Stack Developer
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 590 }}>
            {content.introduction}
          </Typography>
          <Stack
            direction="row"
            useFlexGap
            sx={{ mt: 4, alignItems: "center", flexWrap: "wrap", gap: 3 }}
          >
            <Button href="#about" variant="contained">
              {content.about}
            </Button>
            <Link href="#work" variant="body2">
              {t.explore}
            </Link>
          </Stack>
        </Box>
        <ProfileSheet />
      </Box>
      <Stack
        direction="row"
        useFlexGap
        sx={{
          py: 3.5,
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
          flexWrap: "wrap",
          alignItems: "center",
          gap: { xs: 3.75, md: 8 },
        }}
      >
        {[
          { value: t.duration, unit: "", label: t.plannedDuration },
          { value: projects.length, unit: "PROJECTS", label: t.projects },
        ].map((item) => (
          <Box key={item.label}>
            <Typography
              component="p"
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
                letterSpacing: "-.05em",
              }}
            >
              {item.value}
              {item.unit && <Typography component="span" variant="overline" sx={{ ml: 1 }}>
                {item.unit}
              </Typography>}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.label}
            </Typography>
          </Box>
        ))}
        <Box sx={{ ml: { xs: 0, md: "auto" } }}>
          {profile.resumeUrl ? (
            <Link href={profile.resumeUrl}>Résumé</Link>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {t.resume}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
