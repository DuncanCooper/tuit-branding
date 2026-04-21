import React, { useState } from "react";
import { theme } from "@duncancooper/brand";
import ColorSwatches from "./components/ColorSwatches";
import LogoShowcase from "./components/LogoShowcase";

export default function App() {
  const [primaryColor, setPrimaryColor] = useState<string>(theme.colors.primary);
  const [logoSize, setLogoSize] = useState(48);

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        minHeight: "100vh",
        padding: theme.spacing.xl,
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <h1
        style={{
          fontSize: theme.typography.sizes.heading,
          marginBottom: theme.spacing.lg,
        }}
      >
        Tuit Brand Playground
      </h1>

      <section style={{ marginBottom: theme.spacing.xl }}>
        <h2 style={{ marginBottom: theme.spacing.md, fontSize: "20px" }}>
          Controls
        </h2>
        <div
          style={{
            display: "flex",
            gap: theme.spacing.lg,
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.xs,
            }}
          >
            <span style={{ fontSize: "13px", opacity: 0.7 }}>
              Primary Color
            </span>
            <input
              type="color"
              value={primaryColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrimaryColor(e.target.value)}
              style={{
                width: 48,
                height: 36,
                cursor: "pointer",
                border: "none",
                background: "none",
              }}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.xs,
              flex: 1,
              minWidth: 200,
            }}
          >
            <span style={{ fontSize: "13px", opacity: 0.7 }}>
              Logo Size: {logoSize}px
            </span>
            <input
              type="range"
              min={24}
              max={200}
              value={logoSize}
              onChange={(e) => setLogoSize(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </label>
        </div>
      </section>

      <LogoShowcase primaryColor={primaryColor} size={logoSize} />
      <ColorSwatches primaryColor={primaryColor} />
    </div>
  );
}
