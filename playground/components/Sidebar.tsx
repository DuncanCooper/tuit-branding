import React from "react";
import { Logo, theme } from "@duncancooper/brand";
import { useTheme } from "../ThemeContext";
import type { ColorSet, Mode } from "../App";
import type { ColorPreset } from "../colorSets";
import styles from "./Sidebar.module.css";

interface Props {
  setColor: (key: keyof ColorSet, value: string) => void;
  applyPreset: (preset: ColorPreset) => void;
  activePreset: string;
  presets: ColorPreset[];
  mode: Mode;
  toggleMode: () => void;
  logoSize: number;
  setLogoSize: (size: number) => void;
}

const COLOR_LABELS: Record<keyof ColorSet, string> = {
  primary: "Primary",
  secondary: "Secondary",
  background: "Background",
  text: "Text",
};

export default function Sidebar({
  setColor,
  applyPreset,
  activePreset,
  presets,
  mode,
  toggleMode,
  logoSize,
  setLogoSize,
}: Props) {
  const colors = useTheme();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Logo size={20} accentColor={colors.primary} textColor={colors.text} />
      </div>

      <div className={styles.body}>
        {/* Mode toggle */}
        <section>
          <p className={styles.sectionLabel}>Mode</p>
          <button type="button" className={styles.modeButton} onClick={toggleMode}>
            <span className={styles.modeIcon}>{mode === "dark" ? "🌙" : "☀️"}</span>
            <span className={styles.modeLabel}>{mode === "dark" ? "Dark" : "Light"}</span>
            <span className={styles.modeHint}>{mode === "dark" ? "→ Light" : "→ Dark"}</span>
          </button>
        </section>

        {/* Color set */}
        <section>
          <p className={styles.sectionLabel}>Color Set</p>
          <div className={styles.selectWrapper}>
            <select
              aria-label="Color set"
              className={styles.select}
              value={activePreset}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const preset = presets.find((p) => p.name === e.target.value);
                if (preset) applyPreset(preset);
              }}
            >
              {activePreset === "Custom" && <option value="Custom">Custom</option>}
              {presets.map((p) => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>
            <svg
              className={styles.selectChevron}
              width="10" height="6" viewBox="0 0 10 6" fill="none"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* Colors */}
        <section>
          <p className={styles.sectionLabelLg}>Colors</p>
          <div className={styles.colorRows}>
            {(Object.keys(COLOR_LABELS) as (keyof ColorSet)[]).map((key) => (
              <div key={key} className={styles.colorRow}>
                <div className={styles.swatchWrapper}>
                  <div className={styles.swatch} style={{ "--swatch-color": colors[key] } as React.CSSProperties} />
                  <input
                    type="color"
                    aria-label={`${COLOR_LABELS[key]} color`}
                    className={styles.swatchInput}
                    value={colors[key]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColor(key, e.target.value)}
                  />
                </div>
                <span className={styles.colorLabel}>{COLOR_LABELS[key]}</span>
                <input
                  type="text"
                  aria-label={`${COLOR_LABELS[key]} hex value`}
                  className={styles.hexInput}
                  value={colors[key].toUpperCase()}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) setColor(key, e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Logo size */}
        <section>
          <p className={styles.sectionLabelLg}>Logo</p>
          <label className={styles.sizeLabel}>
            <span className={styles.sizeLabelText}>Size — {logoSize}px</span>
            <input
              type="range"
              className={styles.sizeRange}
              min={20} max={160} value={logoSize}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogoSize(Number(e.target.value))}
            />
          </label>
          <div className={styles.logoPreview}>
            <Logo size={logoSize} accentColor={colors.primary} textColor={colors.text} />
          </div>
        </section>

        {/* Spacing */}
        <section>
          <p className={styles.sectionLabelLg}>Spacing</p>
          <div className={styles.spacingRows}>
            {(Object.entries(theme.spacing) as [string, string][]).map(([key, val]) => (
              <div key={key} className={styles.spacingRow}>
                <div className={styles.spacingBar} style={{ "--bar-width": `${parseInt(val)}px` } as React.CSSProperties} />
                <span className={styles.spacingLabel}>{key} · {val}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
