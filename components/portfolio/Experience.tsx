"use client";
import { Box, Link, List, ListItem, Stack, Typography } from "@mui/material";
import { useLocale } from "@/locales/LocaleProvider";
import { profile } from "@/constants/profile";
import { responsibilities, toolGroups } from "@/constants/experience";
import { experienceCopy } from "@/locales/experience";
import { Section } from "@/components/shared/Section";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ResponsibilityRow } from "./experience/ResponsibilityRow";
import { ExperienceSubheading } from "./experience/ExperienceSubheading";
import { formatDate } from "@/utils/format";
export function Experience() {
  const { locale, t } = useLocale();
  const content = experienceCopy[locale];
  return (
    <Section id="about" sx={{ borderBottom: 1, borderColor: "divider" }}>
      <SectionLabel number="01">{t.about}</SectionLabel>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 5, md: "10%" },
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ mb: 4.5 }}>
            {t.experienceTitle}
          </Typography>
          <Stack spacing={2.75}>
            {content.introduction.map((paragraph) => (
              <Typography key={paragraph} color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
        <Box>
          <Box
            component="article"
            sx={{ borderTop: 1, borderColor: "divider", py: 3 }}
          >
            <Typography variant="caption" color="text.secondary">
              {t.experience}
            </Typography>
            <Typography
              component="h3"
              sx={{ fontSize: "1.25rem", fontWeight: 600, my: 1.5 }}
            >
              {t.internship}
            </Typography>
            <Link
              href={profile.companyUrl}
              target="_blank"
              rel="noreferrer"
              variant="body2"
            >
              {profile.company}
            </Link>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {t.internshipPeriod}: <Box component="time" dateTime={profile.internship.startDate}>{formatDate(profile.internship.startDate, locale)}</Box>
              {" – "}<Box component="time" dateTime={profile.internship.endDate}>{formatDate(profile.internship.endDate, locale)}</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              {t.plannedDuration}: {t.duration}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              {t.plannedEnd}: {formatDate(profile.internship.endDate, locale)}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2.75 }}>
              {content.internshipSummary}
            </Typography>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2.5,
                pt: 2.25,
                display: "grid",
                gap: 1.5,
              }}
            >
              {content.internshipHighlights.map((item) => (
                <ListItem
                  key={item}
                  sx={{
                    display: "list-item",
                    p: 0,
                    color: "text.secondary",
                    "&::marker": { color: "primary.main" },
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            component="article"
            sx={{ borderTop: 1, borderColor: "divider", py: 3 }}
          >
            <Typography variant="caption" color="text.secondary">
              {t.education}
            </Typography>
            <Typography
              component="h3"
              sx={{ fontSize: "1.25rem", fontWeight: 600, my: 1.5 }}
            >
              {t.university}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t.faculty}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 5.5, md: 8 } }}>
        <ExperienceSubheading
          title={content.scopeTitle}
          description={content.scopeIntroduction}
        />
        {responsibilities.map((item, index) => (
          <ResponsibilityRow
            key={item.id}
            index={index}
            {...content.responsibilities[item.id]}
            projectIds={item.projectIds}
            relatedLabel={content.relatedWork}
          />
        ))}
      </Box>
      <Box sx={{ mt: { xs: 5.5, md: 8 } }}>
        <ExperienceSubheading
          title={t.toolkit}
          description={content.toolsIntroduction}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: 3.75,
          }}
        >
          {toolGroups.map((group) => (
            <Box
              key={group.id}
              sx={{ pt: 2.5, borderTop: 2, borderColor: "divider" }}
            >
              <Typography
                component="h4"
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2.5 }}
              >
                {content.toolGroups[group.id]}
              </Typography>
              <List disablePadding sx={{ display: "grid", gap: 1.5 }}>
                {group.tools.map((tool) => (
                  <ListItem key={tool} disablePadding>
                    {tool}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
