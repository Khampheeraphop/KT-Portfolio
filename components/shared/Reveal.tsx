"use client";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

/** Content stays readable during SSR and when motion is disabled. */
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight * .95) return;
    setVisible(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0, rootMargin: "0px 0px -30px 0px" });
    const handlePreference = () => { if (preference.matches) { setVisible(true); observer.disconnect(); } };
    preference.addEventListener("change", handlePreference);
    observer.observe(element);
    return () => { observer.disconnect(); preference.removeEventListener("change", handlePreference); };
  }, []);
  return <Box ref={ref} onFocusCapture={() => setVisible(true)} sx={{ height: "100%", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 650ms ease, transform 650ms cubic-bezier(.2,.7,.2,1)", transitionDelay: delay + "ms", "@media (prefers-reduced-motion: reduce)": { opacity: 1, transform: "none", transition: "none" } }}>{children}</Box>;
}
