import { keyframes } from "@mui/material/styles";
export const drift = keyframes({
  "0%, 100%": { translate: "0 0" },
  "50%": { translate: "0 -12px" },
});
export const float = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-12px)" },
});
export const reveal = keyframes({
  from: { opacity: 0, transform: "translateY(12px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});
export const signal = keyframes({
  "0%": { top: 0, opacity: 0 },
  "20%": { opacity: 1 },
  "100%": { top: "100%", opacity: 0 },
});
