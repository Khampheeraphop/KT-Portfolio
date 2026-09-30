export const designTokens = {
  fontFamily: '"Manrope", "IBM Plex Sans Thai", sans-serif',
  contentWidth: 1600,
  motion: { duration: 250, entrance: 800 },
  colors: {
    light: {
      background: "#e5edf6",
      paper: "#eff4fa",
      text: "#122b43",
      secondaryText: "#526779",
      primary: "#075ad9",
      primaryText: "#ffffff",
      divider: "#b8cce2",
      panel: "#cfdef2",
      accent: "#d9e6f6",
    },
    dark: {
      background: "#101a26",
      paper: "#172535",
      text: "#e6edf5",
      secondaryText: "#afc0d1",
      primary: "#77b6ff",
      primaryText: "#0a223b",
      divider: "#314356",
      panel: "#192e46",
      accent: "#21364b",
    },
  },
} as const;
