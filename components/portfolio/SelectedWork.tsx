"use client";
import { Box, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { projects } from "@/features/projects/registry";
import { Section } from "@/components/shared/Section";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { FeaturedProjectCard } from "@/features/projects/components/FeaturedProjectCard";

export function SelectedWork() {
  const { t } = useLocale();
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <Section id="work" aria-labelledby="selected-work-heading">
      <SectionLabel number="02">SELECTED WORK</SectionLabel>
      <Typography id="selected-work-heading" variant="h2" sx={{ mb: 1.5 }}>
        {t.selected}
      </Typography>
      <Typography
        sx={{ color: "text.secondary", mb: { xs: 3.5, md: 5 }, maxWidth: 680 }}
      >
        {t.selectedDesc}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </Box>
    </Section>
  );
}
