export interface ColorSet {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface ColorPreset {
  name: string;
  dark: ColorSet;
  light: ColorSet;
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    name: "Default",
    dark: {
      primary: "#4ADE80",
      secondary: "#16A34A",
      background: "#0C0F0D",
      text: "#F2F7F3",
    },
    light: {
      primary: "#16A34A",
      secondary: "#166534",
      background: "#F2F7F3",
      text: "#0C0F0D",
    },
  },
  {
    name: "Midnight Ocean",
    dark: {
      primary: "#38BDF8",
      secondary: "#0284C7",
      background: "#0B0E12",
      text: "#F0F5FA",
    },
    light: {
      primary: "#0284C7",
      secondary: "#075985",
      background: "#F0F5FA",
      text: "#0B0E12",
    },
  },
  {
    name: "Crimson",
    dark: {
      primary: "#F87171",
      secondary: "#DC2626",
      background: "#0F0B0B",
      text: "#FAF2F2",
    },
    light: {
      primary: "#DC2626",
      secondary: "#991B1B",
      background: "#FAF2F2",
      text: "#0F0B0B",
    },
  },
  {
    name: "Solar Flare",
    dark: {
      primary: "#fcff39",
      secondary: "#d97706",
      background: "#0F0E0A",
      text: "#FAF7EE",
    },
    light: {
      primary: "#D97706",
      secondary: "#92400E",
      background: "#FAF7EE",
      text: "#0F0E0A",
    },
  },
  {
    name: "Ultraviolet",
    dark: {
      primary: "#A78BFA",
      secondary: "#7C3AED",
      background: "#0C0B10",
      text: "#F3F1FA",
    },
    light: {
      primary: "#7C3AED",
      secondary: "#6D28D9",
      background: "#F3F1FA",
      text: "#0C0B10",
    },
  },
  {
    name: "Neon Tokyo",
    dark: {
      primary: "#F472B6",
      secondary: "#BE185D",
      background: "#0F0B0E",
      text: "#FAF1F7",
    },
    light: {
      primary: "#BE185D",
      secondary: "#9D174D",
      background: "#FAF1F7",
      text: "#0F0B0E",
    },
  },
  {
    name: "Matrix",
    dark: {
      primary: "#22C55E",
      secondary: "#15803D",
      background: "#090F09",
      text: "#EEF7EE",
    },
    light: {
      primary: "#15803D",
      secondary: "#166534",
      background: "#EEF7EE",
      text: "#090F09",
    },
  },
  {
    name: "Glacier",
    dark: {
      primary: "#67E8F9",
      secondary: "#0891B2",
      background: "#080E10",
      text: "#EEF8FA",
    },
    light: {
      primary: "#0891B2",
      secondary: "#0E7490",
      background: "#EEF8FA",
      text: "#080E10",
    },
  },
  {
    name: "Ember",
    dark: {
      primary: "#FB923C",
      secondary: "#EA580C",
      background: "#100D09",
      text: "#FAF4EE",
    },
    light: {
      primary: "#EA580C",
      secondary: "#C2410C",
      background: "#FAF4EE",
      text: "#100D09",
    },
  },
  {
    name: "Deep Space",
    dark: {
      primary: "#818CF8",
      secondary: "#4F46E5",
      background: "#09090F",
      text: "#F0F0FA",
    },
    light: {
      primary: "#4F46E5",
      secondary: "#4338CA",
      background: "#F0F0FA",
      text: "#09090F",
    },
  },
  {
    name: "Seafoam",
    dark: {
      primary: "#2DD4BF",
      secondary: "#0F766E",
      background: "#080F0E",
      text: "#EEF8F6",
    },
    light: {
      primary: "#0F766E",
      secondary: "#115E59",
      background: "#EEF8F6",
      text: "#080F0E",
    },
  },
  {
    name: "Blood Moon",
    dark: {
      primary: "#EF4444",
      secondary: "#991B1B",
      background: "#0F0808",
      text: "#FAF0F0",
    },
    light: {
      primary: "#DC2626",
      secondary: "#991B1B",
      background: "#FAF0F0",
      text: "#0F0808",
    },
  },
  {
    name: "Gold Rush",
    dark: {
      primary: "#EAB308",
      secondary: "#A16207",
      background: "#0F0E08",
      text: "#FAF8EE",
    },
    light: {
      primary: "#A16207",
      secondary: "#854D0E",
      background: "#FAF8EE",
      text: "#0F0E08",
    },
  },
  {
    name: "Electric",
    dark: {
      primary: "#60A5FA",
      secondary: "#2563EB",
      background: "#090A0F",
      text: "#EFF2FA",
    },
    light: {
      primary: "#2563EB",
      secondary: "#1D4ED8",
      background: "#EFF2FA",
      text: "#090A0F",
    },
  },
  {
    name: "Rose Quartz",
    dark: {
      primary: "#FB7185",
      secondary: "#E11D48",
      background: "#0F090C",
      text: "#FAF0F3",
    },
    light: {
      primary: "#E11D48",
      secondary: "#BE123C",
      background: "#FAF0F3",
      text: "#0F090C",
    },
  },
  {
    name: "Void",
    dark: {
      primary: "#94A3B8",
      secondary: "#475569",
      background: "#090909",
      text: "#F5F5F7",
    },
    light: {
      primary: "#475569",
      secondary: "#334155",
      background: "#F5F5F7",
      text: "#090909",
    },
  },
  {
    name: "Copper Vein",
    dark: {
      primary: "#D97706",
      secondary: "#92400E",
      background: "#0F0D09",
      text: "#FAF6EE",
    },
    light: {
      primary: "#92400E",
      secondary: "#78350F",
      background: "#FAF6EE",
      text: "#0F0D09",
    },
  },
  {
    name: "Obsidian",
    dark: {
      primary: "#6EE7B7",
      secondary: "#059669",
      background: "#0B0F0D",
      text: "#F0F7F4",
    },
    light: {
      primary: "#059669",
      secondary: "#047857",
      background: "#F0F7F4",
      text: "#0B0F0D",
    },
  },
  {
    name: "Toxic",
    dark: {
      primary: "#A3E635",
      secondary: "#65A30D",
      background: "#0C0F08",
      text: "#F3F8EC",
    },
    light: {
      primary: "#65A30D",
      secondary: "#4D7C0F",
      background: "#F3F8EC",
      text: "#0C0F08",
    },
  },
  {
    name: "Aurora",
    dark: {
      primary: "#E879F9",
      secondary: "#A21CAF",
      background: "#0D0A0F",
      text: "#F8F0FA",
    },
    light: {
      primary: "#A21CAF",
      secondary: "#86198F",
      background: "#F8F0FA",
      text: "#0D0A0F",
    },
  },
  {
    name: "Nebula",
    dark: {
      primary: "#7C3AED",
      secondary: "#6366F1",
      background: "#09080F",
      text: "#F0EEFA",
    },
    light: {
      primary: "#6366F1",
      secondary: "#4F46E5",
      background: "#F0EEFA",
      text: "#09080F",
    },
  },
];
