"use client";
import NextLink from "next/link";
import { Box, Link, Stack, Typography } from "@mui/material";
import { getProject } from "@/features/projects/registry";
import { routes } from "@/constants/routes";
import { formatIndex } from "@/utils/format";
import { getProjectTitle } from "@/utils/project";
import { useLocale } from "@/locales/LocaleProvider";
interface ResponsibilityRowProps {
  index: number;
  title: string;
  description: string;
  relatedLabel: string;
  projectIds: string[];
}
export function ResponsibilityRow({
  index,
  title,
  description,
  relatedLabel,
  projectIds,
}: ResponsibilityRowProps) {
  const { locale } = useLocale();
  return (
    <Box
      component="article"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "26px minmax(0, 1fr)",
          md: "35px minmax(180px, .8fr) minmax(0, 1.5fr)",
        },
        gap: { xs: "12px 16px", md: 3.5 },
        py: 3.5,
        borderTop: 1,
        borderColor: "divider",
        "&:last-child": { borderBottom: 1, borderColor: "divider" },
      }}
    >
      <Typography variant="caption" color="primary" sx={{ pt: 0.5 }}>
        {formatIndex(index)}
      </Typography>
      <Typography variant="h4">{title}</Typography>
      <Box sx={{ gridColumn: { xs: 2, md: "auto" } }}>
        <Typography color="text.secondary">{description}</Typography>
        <Stack
          direction="row"
          useFlexGap
          aria-label={relatedLabel}
          sx={{ mt: 2.25, flexWrap: "wrap", gap: "10px 20px" }}
        >
          {projectIds.map((id) => {
            const p = getProject(id);
            return p ? (
              <Link
                component={NextLink}
                key={id}
                href={routes.project(id)}
                variant="body2"
              >
                {getProjectTitle(p, locale)}
              </Link>
            ) : null;
          })}
        </Stack>
      </Box>
    </Box>
  );
}
