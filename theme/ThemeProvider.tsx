"use client";
import { createContext, useContext, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  type PaletteMode,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { createPortfolioTheme } from "./createPortfolioTheme";
import { useStoredPreference } from "@/utils/useStoredPreference";
const modes: readonly PaletteMode[] = ["light", "dark"];

const ThemeModeContext = createContext<{
  mode: PaletteMode;
  toggle: () => void;
}>({ mode: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useStoredPreference("phop-theme", "light", modes);
  const theme = useMemo(() => createPortfolioTheme(mode), [mode]);
  function toggle() {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
  }
  return (
    <AppRouterCacheProvider>
      <ThemeModeContext.Provider value={{ mode, toggle }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
export const useThemeMode = () => useContext(ThemeModeContext);
