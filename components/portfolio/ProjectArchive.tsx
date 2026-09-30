"use client";
import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Link,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useLocale } from "@/locales/LocaleProvider";
import { projects } from "@/features/projects/registry";
import type { ProjectCategory } from "@/features/projects/types";
import { routes } from "@/constants/routes";
import { formatIndex } from "@/utils/format";
import { getProjectTitle } from "@/utils/project";
import { Section } from "@/components/shared/Section";
import { SectionLabel } from "@/components/shared/SectionLabel";
export function ProjectArchive() {
  const { locale, t } = useLocale();
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const filtered = projects.filter(
    (p) => category === "all" || p.category === category,
  );
  return (
    <Section id="all-work" sx={{ bgcolor: "background.paper" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "end" },
          gap: 3,
        }}
      >
        <Box>
          <SectionLabel number="03">{t.work}</SectionLabel>
          <Typography variant="h2">{t.archive}</Typography>
        </Box>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ maxWidth: { md: 250 } }}
        >
          {t.archiveDesc}
        </Typography>
      </Stack>
      <ToggleButtonGroup
        exclusive
        value={category}
        onChange={(_, value: ProjectCategory | "all" | null) => {
          if (value) setCategory(value);
        }}
        aria-label={locale === "th" ? "ประเภทผลงาน" : "Project categories"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          py: 4,
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "24px !important",
            m: "0 !important",
            px: 2,
            py: 1,
            gap: 1.5,
          },
        }}
      >
        {(["all", "production", "service", "poc"] as const).map((c) => (
          <ToggleButton key={c} value={c}>
            {t[c]}
            <Typography component="span" variant="caption">
              {c === "all"
                ? projects.length
                : projects.filter((p) => p.category === c).length}
            </Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box>
        {filtered.map((p) => (
          <Link
            component={NextLink}
            key={p.id}
            href={routes.project(p.id)}
            underline="none"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "22px minmax(0, 1fr) 25px",
                md: "35px minmax(0, 1fr) 170px 30px",
              },
              gap: { xs: 1.5, md: 3 },
              alignItems: "center",
              py: 3.25,
              borderTop: 1,
              borderColor: "divider",
              transition: "color .25s, padding .25s",
              "&:last-child": { borderBottom: 1, borderColor: "divider" },
              "&:hover": { pl: 1.25, color: "primary.main" },
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {formatIndex(projects.indexOf(p))}
            </Typography>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  fontWeight: 500,
                }}
              >
                {getProjectTitle(p, locale)}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ mt: 0.75 }}
              >
                {p.subtitle[locale]}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              {t[p.category]}
            </Typography>
            <Add color="primary" />
          </Link>
        ))}
      </Box>
    </Section>
  );
}
