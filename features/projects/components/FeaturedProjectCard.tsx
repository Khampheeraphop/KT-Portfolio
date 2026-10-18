"use client";
import NextLink from "next/link";
import { Box, Link, Stack, Typography } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import { useLocale } from "@/locales/LocaleProvider";
import { routes } from "@/constants/routes";
import { formatIndex } from "@/utils/format";
import { getProjectTitle } from "@/utils/project";
import { ProjectTags } from "@/components/shared/ProjectTags";
import type { Project } from "../types";
import { ProjectVisual } from "./ProjectVisual";

export function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { locale, t } = useLocale();
  const headingId = `featured-${project.id}`;
  return (
    <Link
      component={NextLink}
      href={routes.project(project.id)}
      aria-labelledby={headingId}
      underline="none"
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100%",
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        color: "text.primary",
        transition: "border-color .25s, box-shadow .25s",
        "&:hover, &:focus-visible": {
          borderColor: "primary.main",
          boxShadow: "0 12px 30px #0e3c6914",
        },
        "&:hover .project-arrow": { transform: "translate(3px, -3px)" },
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ProjectVisual project={project} compact />
      </Box>
      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            color: "text.secondary",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontVariantNumeric: "tabular-nums" }}
          >
            {formatIndex(index)}
          </Typography>
          <Typography variant="caption">{t[project.category]}</Typography>
        </Stack>
        <Box>
          <Typography
            component="h3"
            id={headingId}
            sx={{
              fontSize: { xs: "1.3rem", lg: "1.65rem" },
              fontWeight: 600,
              lineHeight: 1.5,
              overflowWrap: "anywhere",
            }}
          >
            {getProjectTitle(project, locale)}
          </Typography>
          <Typography
            sx={{ color: "text.secondary", fontSize: ".95rem", mt: 1 }}
          >
            {project.subtitle[locale]}
          </Typography>
        </Box>
        <Box sx={{ mt: "auto", pt: 1 }}>
          <ProjectTags tags={project.tags} />
        </Box>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: 1,
            borderColor: "divider",
            pt: 2,
            color: "primary.main",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {t.details}
          </Typography>
          <ArrowOutward
            className="project-arrow"
            fontSize="small"
            sx={{ transition: "transform .25s" }}
          />
        </Stack>
      </Box>
    </Link>
  );
}
