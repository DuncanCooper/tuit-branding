import { useState, useRef, useEffect, useCallback } from "react";
import type { Mode } from "../App";
import type { ColorPreset } from "../colorSets";
import { useTheme } from "../ThemeContext";
import styles from "./ColorSetSelect.module.css";

interface Props {
  presets: ColorPreset[];
  activePreset: string;
  mode: Mode;
  onChange: (preset: ColorPreset) => void;
}

export default function ColorSetSelect({ presets, activePreset, mode, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // The last explicitly confirmed selection — used to revert on dismiss
  const committedRef = useRef(activePreset);
  const colors = useTheme();

  const activeIndex = presets.findIndex((p) => p.name === activePreset);

  // Revert to the committed preset and close the dropdown
  const dismiss = useCallback(() => {
    if (activePreset !== committedRef.current) {
      const committed = presets.find((p) => p.name === committedRef.current);
      if (committed) onChange(committed);
    }
    setOpen(false);
  }, [activePreset, presets, onChange]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) dismiss();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, dismiss]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const item = listRef.current.children[highlightedIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [open, highlightedIndex]);

  const openAt = (index: number) => {
    committedRef.current = activePreset;
    setHighlightedIndex(index >= 0 ? index : 0);
    setOpen(true);
  };

  const confirm = (preset: ColorPreset) => {
    committedRef.current = preset.name;
    onChange(preset);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = activeIndex < presets.length - 1 ? activeIndex + 1 : 0;
        committedRef.current = presets[next].name;
        onChange(presets[next]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = activeIndex > 0 ? activeIndex - 1 : presets.length - 1;
        committedRef.current = presets[prev].name;
        onChange(presets[prev]);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openAt(activeIndex);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = highlightedIndex < presets.length - 1 ? highlightedIndex + 1 : 0;
      setHighlightedIndex(next);
      onChange(presets[next]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = highlightedIndex > 0 ? highlightedIndex - 1 : presets.length - 1;
      setHighlightedIndex(prev);
      onChange(presets[prev]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      confirm(presets[highlightedIndex]);
    } else if (e.key === "Escape" || e.key === "Tab") {
      dismiss();
    }
  };

  const pipColor = (preset: ColorPreset) => preset[mode].primary;
  const activePip =
    activePreset === "Custom"
      ? colors.primary
      : (presets.find((p) => p.name === activePreset)?.[mode].primary ?? colors.primary);

  return (
    <div ref={ref} className={styles.root}>
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        onClick={() => (open ? dismiss() : openAt(activeIndex))}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span
          className={styles.pip}
          style={{ "--pip-color": activePip } as React.CSSProperties}
        />
        <span className={styles.label}>{activePreset}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul ref={listRef} role="listbox" className={styles.list}>
          {activePreset === "Custom" && (
            <li
              role="option"
              aria-selected
              className={`${styles.item} ${styles.itemActive}`}
              onClick={() => setOpen(false)}
            >
              <span
                className={styles.pip}
                style={{ "--pip-color": colors.primary } as React.CSSProperties}
              />
              Custom
            </li>
          )}
          {presets.map((p, i) => (
            <li
              key={p.name}
              role="option"
              aria-selected={p.name === activePreset ? "true" : "false"}
              className={`${styles.item} ${p.name === activePreset ? styles.itemActive : ""} ${i === highlightedIndex ? styles.itemHighlighted : ""}`}
              onMouseEnter={() => { setHighlightedIndex(i); onChange(p); }}
              onFocus={() => { setHighlightedIndex(i); onChange(p); }}
              onClick={() => confirm(p)}
            >
              <span
                className={styles.pip}
                style={{ "--pip-color": pipColor(p) } as React.CSSProperties}
              />
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
