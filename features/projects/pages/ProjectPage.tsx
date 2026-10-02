"use client";
import NextLink from "next/link";
import { Box, Button, Chip, Link, Paper, Typography } from "@mui/material";
import type { Project } from "@/features/projects/types";
import { ProjectVisual } from "@/features/projects/components/ProjectVisual";
import { RelatedProjects } from "@/features/projects/components/RelatedProjects";
import { ProjectTags } from "@/components/shared/ProjectTags";
import { Reveal } from "@/components/shared/Reveal";
import { PortfolioLayout } from "@/layouts/PortfolioLayout";
import { useLocale } from "@/locales/LocaleProvider";
import { routes } from "@/constants/routes";
import { getProjectTitle } from "@/utils/project";
import { reveal } from "@/theme/motion";

export function ProjectPage({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const { locale, t } = useLocale();
  return (
    <PortfolioLayout>
      <Box
        component="article"
        sx={{ px: "5%", pt: 4, pb: 9, maxWidth: 1360, mx: "auto" }}
      >
        <Link
          component={NextLink}
          href={routes.work}
          variant="body2"
          sx={{ display: "inline-block", mb: 3 }}
        >
          {t.back}
        </Link>
        <Box
          component="header"
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#153e6a",
            color: "#f1f6ff",
            p: { xs: 3, md: 5 },
            mb: 4,
            borderRadius: 2,
            animation: reveal + " .7s ease-out",
            "&::after": {
              content: '""',
              position: "absolute",
              width: 330,
              height: 330,
              border: "1px solid #ffffff18",
              borderRadius: "50%",
              right: -100,
              top: -150,
              pointerEvents: "none",
            },
          }}
        >
          <Chip
            label={t[project.category]}
            sx={{ color: "#c8e5ff", borderColor: "#6793ba", mb: 3 }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(2.1rem, 4.5vw, 4.4rem)",
              overflowWrap: "anywhere",
              position: "relative",
              zIndex: 1,
            }}
          >
            {getProjectTitle(project, locale)}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              mt: 2,
              color: "#c4d9ee",
              maxWidth: 750,
            }}
          >
            {project.subtitle[locale]}
          </Typography>
          <Typography
            variant="caption"
            sx={{ display: "block", mt: 3, color: "#b1cbe4" }}
          >
            {project.tags.join(" / ")}
          </Typography>
        </Box>
        <Reveal>
          <ProjectVisual project={project} large interactive />
        </Reveal>
        {!project.image && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", textAlign: "right", mt: 1.25 }}
          >
            {t.diagramNote}
          </Typography>
        )}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mt: 5,
          }}
        >
          <Reveal>
            <Paper
              variant="outlined"
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderTop: "3px solid",
                borderTopColor: "primary.main",
              }}
            >
              <Typography
                component="h2"
                variant="caption"
                color="primary"
                sx={{ mb: 2.5, fontWeight: 600 }}
              >
                01 / {t.overview}
              </Typography>
              <Typography>{project.description[locale]}</Typography>
            </Paper>
          </Reveal>
          <Reveal delay={100}>
            <Paper
              variant="outlined"
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                bgcolor: "secondary.light",
                borderTop: "3px solid",
                borderTopColor: "#389caa",
              }}
            >
              <Typography
                component="h2"
                variant="caption"
                color="primary"
                sx={{ mb: 2.5, fontWeight: 600 }}
              >
                02 / {t.role}
              </Typography>
              <Box sx={{ display: "grid", gap: 2.5 }}>
                {project.contribution[locale].split("\n\n").map((paragraph) => (
                  <Typography key={paragraph}>{paragraph}</Typography>
                ))}
              </Box>
              <Box sx={{ my: 3 }}>
                <ProjectTags tags={project.tags} />
              </Box>
              {project.url && (
                <Button
                  variant="contained"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.visit}
                </Button>
              )}
            </Paper>
          </Reveal>
        </Box>
        <RelatedProjects projects={relatedProjects} />
      </Box>
    </PortfolioLayout>
  );
}
