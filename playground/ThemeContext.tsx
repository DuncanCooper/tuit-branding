import { createContext, useContext } from "react";
import type { ColorSet } from "./App";
import { COLOR_PRESETS } from "./colorSets";

export const ThemeContext = createContext<ColorSet>(COLOR_PRESETS[0].dark);

export const useTheme = () => useContext(ThemeContext);
