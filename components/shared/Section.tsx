"use client";
import { Box, type BoxProps } from "@mui/material";
import { Reveal } from "./Reveal";

export function Section({ children, sx = [], ...props }: Omit<BoxProps, "component">) {
  return <Box component="section" {...props} sx={[{ px: "5%", py: { xs: 7.5, md: 11.25 } }, ...(Array.isArray(sx) ? sx : [sx])]}><Reveal>{children}</Reveal></Box>;
}
