"use client";
import NextLink from "next/link";
import {
  Box,
  IconButton,
  Link,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { useLocale } from "@/locales/LocaleProvider";
import { useThemeMode } from "@/theme/ThemeProvider";
import { Wordmark } from "@/components/shared/Wordmark";
import { routes } from "@/constants/routes";
import type { Locale } from "@/locales";
export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const { locale, setLocale, t } = useLocale();
  const { mode, toggle } = useThemeMode();
  return (
    <>
      <Link
        href="#main"
        sx={{
          position: "fixed",
          top: -100,
          p: 1.5,
          bgcolor: "background.paper",
          zIndex: 2000,
          "&:focus": { top: 0 },
        }}
      >
        {locale === "th" ? "ข้ามไปเนื้อหา" : "Skip to content"}
      </Link>
      <Box
        component="header"
        sx={{
          mx: "5%",
          minHeight: 96,
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          py: { xs: 2, sm: 0 },
        }}
      >
        <Wordmark />
        <Stack
          component="nav"
          direction="row"
          aria-label={locale === "th" ? "เมนูหลัก" : "Main navigation"}
          sx={{
            gap: { xs: 2, md: 4.5 },
            order: { xs: 3, sm: 0 },
            width: { xs: "100%", sm: "auto" },
            justifyContent: "space-between",
            borderTop: { xs: 1, sm: 0 },
            borderColor: "divider",
            pt: { xs: 1.5, sm: 0 },
          }}
        >
          {[
            { href: routes.work, label: t.work },
            { href: routes.about, label: t.about },
            { href: routes.contact, label: t.contact },
          ].map((item) => (
            <Link
              component={NextLink}
              key={item.href}
              href={item.href}
              variant="body2"
            >
              {item.label}
            </Link>
          ))}
        </Stack>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton
            onClick={toggle}
            aria-label={mode === "light" ? t.dark : t.light}
            size="small"
            sx={{ color: "text.primary" }}
          >
            {mode === "light" ? (
              <DarkModeOutlined fontSize="small" />
            ) : (
              <LightModeOutlined fontSize="small" />
            )}
          </IconButton>
          <ToggleButtonGroup
            value={locale}
            exclusive
            onChange={(_, value: Locale | null) => {
              if (value) setLocale(value);
            }}
            aria-label="Language"
            size="small"
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 8,
              p: 0.5,
              "& .MuiToggleButton-root": {
                border: 0,
                borderRadius: "20px !important",
                px: 1.25,
                py: 0.5,
                minWidth: 38,
              },
            }}
          >
            <ToggleButton value="th">TH</ToggleButton>
            <ToggleButton value="en">EN</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box component="main" id="main">
        {children}
      </Box>
      <Stack
        component="footer"
        direction="row"
        useFlexGap
        sx={{
          px: "5%",
          py: 4.5,
          color: "text.secondary",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2.5,
        }}
      >
        <Wordmark />
        <Typography variant="caption">Khampheeraphop Thongsaeng</Typography>
      </Stack>
    </>
  );
}
