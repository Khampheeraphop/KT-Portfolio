"use client";
import NextLink from "next/link";
import { Box, Link, Stack, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useLocale } from "@/locales/LocaleProvider";
import { projects } from "@/features/projects/registry";
import { routes } from "@/constants/routes";
import { Section } from "@/components/shared/Section";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ProjectTags } from "@/components/shared/ProjectTags";
import { ProjectVisual } from "@/features/projects/components/ProjectVisual";
import { formatIndex } from "@/utils/format";
import { getProjectTitle } from "@/utils/project";
export function SelectedWork() {
  const { locale, t } = useLocale();
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <Section id="work">
      <SectionLabel number="02">{t.selected}</SectionLabel>
      <Typography variant="h2" sx={{ mb: 4.5 }}>
        {t.selectedDesc}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: "50px 30px",
        }}
      >
        {featuredProjects.map((p, i) => {
          const wide =
            i === 0 ||
            (featuredProjects.length % 2 === 0 &&
              i === featuredProjects.length - 1);
          return (
            <Link
              component={NextLink}
              href={routes.project(p.id)}
              key={p.id}
              underline="none"
              sx={{
                display: "grid",
                gridColumn: wide ? "1 / -1" : undefined,
                gridTemplateColumns: wide
                  ? { xs: "1fr", md: "1.4fr 1fr" }
                  : "1fr",
                columnGap: "5%",
                alignItems: "center",
                "&:hover .MuiSvgIcon-root": { transform: "rotate(90deg)" },
                "& .MuiSvgIcon-root": { transition: "transform .3s" },
              }}
            >
              <ProjectVisual project={p} large={wide} />
              <Box>
                <Stack
                  direction="row"
                  sx={{ pt: 3.25, pb: 2.25, alignItems: "center", gap: 2.25 }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ alignSelf: "start", pt: 0.5 }}
                  >
                    {formatIndex(i)}
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {t[p.category]}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: { xs: "1.5rem", lg: "1.8rem" }, mt: 1 }}
                    >
                      {getProjectTitle(p, locale)}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: ".95rem", mt: 1 }}
                    >
                      {p.subtitle[locale]}
                    </Typography>
                  </Box>
                  <Add color="primary" />
                </Stack>
                <ProjectTags tags={p.tags} />
              </Box>
            </Link>
          );
        })}
      </Box>
    </Section>
  );
}
