import { useState, useEffect } from "react";
import iconRaw from "../icon.svg?raw";
import { theme } from "@duncancooper/brand";
import { ThemeContext } from "./ThemeContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { COLOR_PRESETS } from "./colorSets";
import type { ColorPreset } from "./colorSets";
import "./styles/theme.css";

export interface ColorSet {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export type Mode = "dark" | "light";

export default function App() {
  const [mode, setMode] = useState<Mode>("dark");
  const [activePreset, setActivePreset] = useState<string>("Tuit");
  const [colors, setColors] = useState<ColorSet>(COLOR_PRESETS[0].dark);
  const [logoSize, setLogoSize] = useState(48);

  const applyPreset = (preset: ColorPreset, nextMode?: Mode) => {
    const m = nextMode ?? mode;
    setColors(preset[m]);
    setActivePreset(preset.name);
  };

  const toggleMode = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    if (activePreset !== "Custom") {
      const preset = COLOR_PRESETS.find((p) => p.name === activePreset);
      if (preset) setColors(preset[next]);
    }
  };

  const setColor = (key: keyof ColorSet, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
    setActivePreset("Custom");
  };

  useEffect(() => {
    const svg = iconRaw
      .replace(/%234ADE80/gi, colors.primary)
      .replace(/%230F1419/gi, colors.background)
      .replace(/#4ADE80/gi, colors.primary)
      .replace(/#0F1419/gi, colors.background)
      .replace(/#FFFFFF|white/gi, colors.text);
    const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
    if (favicon) favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }, [colors.primary, colors.text, colors.background]);

  const cssVars = {
    "--color-primary": colors.primary,
    "--color-secondary": colors.secondary,
    "--color-background": colors.background,
    "--color-text": colors.text,
    "--font-family": theme.typography.fontFamily,
    "--color-scheme": mode,
  } as React.CSSProperties;

  return (
    <ThemeContext.Provider value={colors}>
      <div className="app-root" style={cssVars}>
        <Sidebar
          setColor={setColor}
          applyPreset={applyPreset}
          activePreset={activePreset}
          presets={COLOR_PRESETS}
          mode={mode}
          toggleMode={toggleMode}
          logoSize={logoSize}
          setLogoSize={setLogoSize}
        />
        <MainContent logoSize={logoSize} />
      </div>
    </ThemeContext.Provider>
  );
}
