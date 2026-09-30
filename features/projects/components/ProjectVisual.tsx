"use client";
import { useState } from "react";
import { Box, ButtonBase, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";
import FullscreenOutlined from "@mui/icons-material/FullscreenOutlined";
import { useLocale } from "@/locales/LocaleProvider";
import { getProjectTitle } from "@/utils/project";
import type { Project } from "../types";
import { ProjectDiagram } from "./ProjectDiagram";

export function ProjectVisual({ project, large = false, compact = false, interactive = false }: {
  project: Project; large?: boolean; compact?: boolean; interactive?: boolean;
}) {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const image = project.image;
  if (!image) return <ProjectDiagram project={project} large={large} compact={compact} />;

  const picture = <Box component="img" src={image.src} alt={image.alt[locale]}
    width={image.width} height={image.height} loading="lazy" decoding="async"
    sx={{ display: "block", width: "100%", height: "auto", aspectRatio: large ? `${image.width}/${image.height}` : "16/9", objectFit: large ? "contain" : "cover", objectPosition: "top", transition: "transform .55s ease", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }} />;
  const surface = { display: "block", width: "100%", overflow: "hidden", borderRadius: compact ? 0 : 2, bgcolor: "secondary.light", border: compact ? 0 : 1, borderColor: "divider", "&:hover img": { transform: interactive ? "none" : "scale(1.025)" } };
  if (!interactive) return <Box sx={surface}>{picture}</Box>;

  return <>
    <ButtonBase onClick={() => setOpen(true)} aria-label={`${t.viewImage}: ${getProjectTitle(project, locale)}`} sx={{ ...surface, position: "relative" }}>
      {picture}
      <Box sx={{ position: "absolute", bottom: 16, right: 16, display: "flex", alignItems: "center", gap: 1, px: 1.5, py: 1, bgcolor: "#122b43e8", color: "#fff", borderRadius: 1 }}>
        <FullscreenOutlined fontSize="small" /><Typography variant="caption">{t.viewImage}</Typography>
      </Box>
    </ButtonBase>
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xl" fullWidth aria-labelledby="project-image-title">
      <DialogTitle id="project-image-title" sx={{ pr: 7, fontSize: "1.1rem" }}>
        {getProjectTitle(project, locale)}
        <IconButton onClick={() => setOpen(false)} aria-label={t.closeImage} sx={{ position: "absolute", right: 12, top: 12 }}><Close /></IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Box component="img" src={image.src} alt={image.alt[locale]} width={image.width} height={image.height} sx={{ display: "block", width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" }} />
      </DialogContent>
    </Dialog>
  </>;
}
