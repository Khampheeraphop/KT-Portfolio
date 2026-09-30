"use client";
import NextLink from "next/link";
import { Box, Link } from "@mui/material";
export function Wordmark() {
  return (
    <Link
      component={NextLink}
      href="/"
      aria-label="Khampheeraphop Thongsaeng — Home"
      underline="none"
      sx={{
        fontSize: "2.1rem",
        fontWeight: 800,
        letterSpacing: "-.09em",
        lineHeight: 1,
      }}
    >
      kt
      <Box component="span" sx={{ color: "primary.main" }}>
        .
      </Box>
    </Link>
  );
}
