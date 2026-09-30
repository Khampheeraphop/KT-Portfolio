import { createTheme, type PaletteMode } from "@mui/material/styles";
import { designTokens } from "./tokens";

export function createPortfolioTheme(mode: PaletteMode) {
  const colors = designTokens.colors[mode];
  return createTheme({
    palette: {
      mode,
      primary: { main: colors.primary, contrastText: colors.primaryText },
      secondary: { main: colors.panel, light: colors.accent },
      background: { default: colors.background, paper: colors.paper },
      text: { primary: colors.text, secondary: colors.secondaryText },
      divider: colors.divider,
    },
    breakpoints: { values: { xs: 0, sm: 600, md: 800, lg: 1200, xl: 1600 } },
    shape: { borderRadius: 6 },
    typography: {
      fontFamily: designTokens.fontFamily,
      h1: {
        fontSize: "clamp(2.7rem, 5.3vw, 5.5rem)",
        fontWeight: 600,
        lineHeight: 1.35,
        letterSpacing: "-.045em",
      },
      h2: {
        fontSize: "clamp(1.8rem, 3.4vw, 3.3rem)",
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: "-.04em",
      },
      h3: {
        fontSize: "1.8rem",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "-.035em",
      },
      h4: { fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.65 },
      body1: { fontSize: "1rem", lineHeight: 1.85 },
      body2: { fontSize: ".9rem", lineHeight: 1.8 },
      caption: { fontSize: ".8rem", lineHeight: 1.7 },
      overline: { fontSize: ".75rem", lineHeight: 1.7, letterSpacing: ".1em" },
      button: { textTransform: "none", fontWeight: 500 },
    },
    transitions: { duration: { standard: designTokens.motion.duration } },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: "smooth", scrollPaddingTop: 100 },
          body: { maxWidth: designTokens.contentWidth, margin: "0 auto" },
          "a, button": { WebkitTapHighlightColor: "transparent" },
          ":focus-visible": {
            outline: "3px solid " + colors.primary,
            outlineOffset: 4,
          },
          "::selection": { background: "#c5e0ff", color: "#122b43" },
          "@media (prefers-reduced-motion: reduce)": {
            html: { scrollBehavior: "auto" },
            "*, *::before, *::after": {
              animation: "none !important",
              transition: "none !important",
              scrollBehavior: "auto !important",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { padding: "12px 24px", borderRadius: 5, minHeight: 44 },
        },
      },
      MuiLink: {
        defaultProps: { underline: "hover", color: "inherit" },
        styleOverrides: { root: { textUnderlineOffset: 5 } },
      },
      MuiChip: {
        defaultProps: { variant: "outlined", size: "small" },
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontSize: ".75rem",
            height: 30,
            color: colors.secondaryText,
            borderColor: colors.divider,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: ".85rem",
            color: colors.secondaryText,
            borderColor: colors.divider,
            "&.Mui-selected": {
              backgroundColor: colors.text,
              color: colors.background,
              "&:hover": { backgroundColor: colors.text },
            },
          },
        },
      },
    },
  });
}
