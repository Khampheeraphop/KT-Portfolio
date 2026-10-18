"use client";
import { Button, Stack } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import OpenInNew from "@mui/icons-material/OpenInNew";
import type { Project } from "../types";
import { useLocale } from "@/locales/LocaleProvider";

export function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLocale();
  if (!project.url && !project.repositories?.length) return null;
  return (
    <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1.5 }}>
      {project.url && (
        <Button
          variant="contained"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNew />}
        >
          {t.visit}
        </Button>
      )}
      {project.repositories?.map((repository) => (
        <Button
          key={repository.url}
          variant="outlined"
          href={repository.url}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
        >
          {t.sourceCode} · {repository.label}
        </Button>
      ))}
    </Stack>
  );
}
