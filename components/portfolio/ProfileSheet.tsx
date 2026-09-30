"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { identity } from "@/locales/identity";
import { float } from "@/theme/motion";
import { stack } from "@/constants/profile";
import { ProjectTags } from "@/components/shared/ProjectTags";
export function ProfileSheet() {
  const { locale, t } = useLocale();
  const content = identity[locale];
  const facts = [
    { label: content.nickname, value: content.nicknameValue },
    { label: content.internship, value: t.duration },
  ];
  return (
    <Paper
      component="aside"
      variant="outlined"
      sx={{
        p: { xs: 2.75, md: 3.75 },
        width: { xs: "92%", md: "100%" },
        maxWidth: 430,
        mx: "auto",
        borderRadius: 0,
        transform: "rotate(2deg)",
        boxShadow: (theme) =>
          "10px 10px 0 " +
          theme.palette.secondary.light +
          ", 10px 10px 0 1px " +
          theme.palette.divider,
        transition: "transform .5s",
        "&:hover": { transform: "rotate(0)" },
        "@media (prefers-reduced-motion: reduce)": { transform: "none" },
      }}
    >
      <Stack
        direction="row"
        sx={{
          pb: 2.25,
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="overline" color="text.secondary">
          KT / PROFILE
        </Typography>
        <Typography variant="caption">01</Typography>
      </Stack>
      <Box
        aria-hidden="true"
        sx={{
          position: "relative",
          fontSize: { xs: "8rem", md: "clamp(6rem, 12vw, 11rem)" },
          lineHeight: 1.1,
          letterSpacing: "-.15em",
          fontWeight: 800,
          color: "primary.main",
          py: 2,
        }}
      >
        K
        <Box
          component="span"
          sx={{
            color: "transparent",
            WebkitTextStroke: (theme) => "1px " + theme.palette.primary.main,
          }}
        >
          T
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 4,
            top: 36,
            width: 60,
            height: 60,
            border: 1,
            borderColor: "divider",
            borderRadius: "50%",
            animation: float + " 7s ease-in-out infinite",
          }}
        />
      </Box>
      <Typography
        sx={{ overflowWrap: "anywhere", fontSize: "1.1rem", fontWeight: 600 }}
      >
        {t.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.75 }}>
        Full Stack Developer
      </Typography>
      <Box component="dl" sx={{ m: 0 }}>
        {facts.map((fact) => (
          <Box
            key={fact.label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              py: 1.5,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Typography component="dt" variant="caption" color="text.secondary">
              {fact.label}
            </Typography>
            <Typography
              component="dd"
              variant="caption"
              sx={{ m: 0, textAlign: "right" }}
            >
              {fact.value}
            </Typography>
          </Box>
        ))}
        <Box sx={{ py: 1.5, borderTop: 1, borderColor: "divider" }}>
          <Typography
            component="dt"
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1.5 }}
          >
            {content.coreStack}
          </Typography>
          <Box component="dd" sx={{ m: 0 }}>
            <ProjectTags tags={stack} />
          </Box>
        </Box>
      </Box>
      <Stack
        direction="row"
        sx={{ mt: 2.25, alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography variant="caption" sx={{ fontSize: ".75rem" }}>
          FRONTEND / BACKEND / DATABASE
        </Typography>
        <Typography
          aria-hidden="true"
          color="primary"
          sx={{ fontSize: "1.5rem" }}
        >
          ✳
        </Typography>
      </Stack>
    </Paper>
  );
}
