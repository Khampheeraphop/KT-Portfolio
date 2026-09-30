"use client";
import { Chip, Stack } from "@mui/material";
export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} />
      ))}
    </Stack>
  );
}
