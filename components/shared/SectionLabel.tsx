"use client";
import { Box, Typography } from "@mui/material";
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <Typography
      component="p"
      variant="caption"
      color="text.secondary"
      sx={{ display: "flex", gap: 2.25, mb: 3, fontWeight: 500 }}
    >
      <Box component="span" sx={{ color: "primary.main" }}>
        {number}
      </Box>
      {children}
    </Typography>
  );
}
