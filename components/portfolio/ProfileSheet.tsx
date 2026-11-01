"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { identity } from "@/locales/identity";
import { profile, stack } from "@/constants/profile";
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
        sx={{
          my: 2.5,
          aspectRatio: "1 / 1",
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          borderRadius: 1.5,
          bgcolor: "#e4e6e8",
        }}
      >
        <Box
          component="img"
          src={profile.portraitUrl}
          alt={`${content.firstName} ${content.lastName}`}
          width={720}
          height={960}
          fetchPriority="high"
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
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
