"use client";
import NextLink from "next/link";
import { Box, Card, CardActionArea, CardContent, Chip, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { routes } from "@/constants/routes";
import { getProjectTitle } from "@/utils/project";
import { Reveal } from "@/components/shared/Reveal";
import type { Project } from "../types";
import { ProjectVisual } from "./ProjectVisual";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  const { locale, t } = useLocale();
  if (!projects.length) return null;
  return <Box component="section" aria-labelledby="related-projects-heading" sx={{ mt: 7, pt: 5, borderTop: 1, borderColor: "divider" }}>
    <Typography id="related-projects-heading" variant="h2" sx={{ fontSize: { xs: "1.7rem", md: "2.2rem" }, mb: 1 }}>{t.relatedProjects}</Typography>
    <Typography color="text.secondary" sx={{ mb: 4 }}>{t.relatedProjectsDescription}</Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }, gap: 2.5 }}>
      {projects.map((project, index) => <Reveal key={project.id} delay={index * 90}>
        <Card variant="outlined" sx={{ height: "100%", overflow: "hidden", borderRadius: 2, transition: "transform .3s, box-shadow .3s, border-color .3s", "&:hover, &:focus-within": { transform: "translateY(-8px)", borderColor: "primary.main", boxShadow: "0 18px 38px #0e3c6920" } }}>
          <CardActionArea component={NextLink} href={routes.project(project.id)} sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "start", height: "100%" }}>
            <ProjectVisual project={project} compact />
            <CardContent sx={{ p: 2.5 }}>
              <Chip label={t[project.category]} sx={{ mb: 1.5 }} />
              <Typography component="h3" sx={{ fontSize: "1.15rem", fontWeight: 600, mb: 1 }}>{getProjectTitle(project, locale)}</Typography>
              <Typography variant="body2" color="text.secondary">{project.subtitle[locale]}</Typography>
              <Typography variant="body2" color="primary" sx={{ mt: 2, fontWeight: 600 }}>{t.details}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Reveal>)}
    </Box>
  </Box>;
}
