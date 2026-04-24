import { Logo, Icon, theme } from "@duncancooper/brand";
import { useTheme } from "../ThemeContext";
import type { ColorSet } from "../App";
import styles from "./MainContent.module.css";

interface Props {
  logoSize: number;
}

function SectionLabel({ label }: { label: string }) {
  return <p className={styles.sectionLabel}>{label}</p>;
}

function Divider() {
  return <div className={styles.divider} />;
}

const LOGO_BACKGROUNDS: {
  label: string;
  rowClass: string;
  textColor: (c: ColorSet) => string;
}[] = [
  {
    label: "On Background",
    rowClass: styles.logoBgOnBackground,
    textColor: (c) => c.text,
  },
  {
    label: "On White",
    rowClass: styles.logoBgOnWhite,
    textColor: () => "#111111",
  },
  {
    label: "On Black",
    rowClass: styles.logoBgOnBlack,
    textColor: () => "#FFFFFF",
  },
  {
    label: "On Primary",
    rowClass: styles.logoBgOnPrimary,
    textColor: (c) => c.background,
  },
];

export default function MainContent({ logoSize }: Props) {
  const colors = useTheme();

  return (
    <main className={styles.main}>
      {/* ── Navbar ── */}
      <nav className={styles.nav}>
        <Logo size={22} accentColor={colors.primary} textColor={colors.text} />
        <div className={styles.navLinks}>
          {["Home", "About", "Components", "GitHub"].map((link) => (
            <span key={link} className={styles.navLink}>
              {link}
            </span>
          ))}
          <button type="button" className={styles.navCta}>
            Get Started
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroBadge}>
          <div className={styles.heroBadgeDot} />
          <span className={styles.heroBadgeText}>
            @duncancooper/brand · v0.1.2
          </span>
        </div>
        <h1 className={styles.heroTitle}>
          One package. <span className={styles.heroAccent}>Every project.</span>
        </h1>
        <p className={styles.heroBody}>
          A single source of truth for colors, typography, and logo — installed
          in any React project with one command.
        </p>
        <div className={styles.heroCtas}>
          <button type="button" className={styles.ctaPrimary}>
            Install package
          </button>
          <button type="button" className={styles.ctaSecondary}>
            View on GitHub →
          </button>
        </div>
      </div>

      <Divider />

      {/* ── Color System ── */}
      <div className={styles.section}>
        <SectionLabel label="Color System" />
        <div className={styles.colorGrid}>
          {(Object.entries(colors) as [keyof ColorSet, string][]).map(
            ([name, value]) => (
              <div key={name} className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: value }}
                />
                <div className={styles.colorInfo}>
                  <p className={styles.colorName}>{name}</p>
                  <p className={styles.colorHex}>{value.toUpperCase()}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <Divider />

      {/* ── Logo & Icon ── */}
      <div className={styles.section}>
        <SectionLabel label="Logo & Icon" />
        <div className={styles.logoBgList}>
          {LOGO_BACKGROUNDS.map(({ label, rowClass, textColor }) => {
            const txtColor = textColor(colors);
            return (
              <div key={label}>
                <p className={styles.logoBgLabel}>{label}</p>
                <div className={`${styles.logoBgRow} ${rowClass}`}>
                  <Logo
                    size={logoSize}
                    accentColor={colors.primary}
                    textColor={txtColor}
                  />
                  <Icon
                    size={logoSize}
                    accentColor={colors.primary}
                    textColor={txtColor}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Divider />

      {/* ── Typography ── */}
      <div className={styles.section}>
        <SectionLabel label="Typography" />
        <div className={styles.typeStack}>
          {[
            {
              label: "Display · 800",
              cls: styles.typeDisplay,
              text: "The quick brown fox",
            },
            {
              label: "Heading · 700",
              cls: styles.typeHeading,
              text: "The quick brown fox jumps",
            },
            {
              label: "Subheading · 600",
              cls: styles.typeSubhead,
              text: "The quick brown fox jumps over",
            },
            {
              label: "Body · 400",
              cls: styles.typeBody,
              text: "The quick brown fox jumps over the lazy dog. A shared design system means every team works from the same visual language.",
            },
            {
              label: "Caption · 400",
              cls: styles.typeCaption,
              text: "The quick brown fox jumps over the lazy dog.",
            },
          ].map(({ label, cls, text }) => (
            <div key={label}>
              <span className={styles.typeRowLabel}>{label}</span>
              <p className={cls}>{text}</p>
            </div>
          ))}
          <div>
            <span className={styles.typeRowLabel}>Font Family</span>
            <p className={styles.typeFontFamily}>
              {theme.typography.fontFamily}
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── Components ── */}
      <div className={styles.section}>
        <SectionLabel label="Components" />
        <div className={styles.componentStack}>
          {/* Buttons */}
          <div>
            <p className={styles.componentGroupLabel}>Buttons</p>
            <div className={styles.buttonRow}>
              <button type="button" className={styles.btnPrimary}>
                Primary
              </button>
              <button type="button" className={styles.btnSecondary}>
                Secondary
              </button>
              <button type="button" className={styles.btnOutlined}>
                Outlined
              </button>
              <button type="button" className={styles.btnGhost}>
                Ghost
              </button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <p className={styles.componentGroupLabel}>Badges</p>
            <div className={styles.badgeRow}>
              <span className={styles.badgeNew}>New</span>
              <span className={styles.badgeBeta}>Beta</span>
              <span className={styles.badgeStable}>Stable</span>
              <span className={styles.badgeDeprecated}>Deprecated</span>
            </div>
          </div>

          {/* Cards */}
          <div>
            <p className={styles.componentGroupLabel}>Cards</p>
            <div className={styles.cardRow}>
              {[
                {
                  title: "theme",
                  desc: "Design tokens for color, spacing, and typography.",
                },
                {
                  title: "Logo",
                  desc: "SVG wordmark with size and color props.",
                },
                {
                  title: "Icon",
                  desc: "Square icon variant for favicons and avatars.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <div className={styles.cardIconDot} />
                  </div>
                  <p className={styles.cardTitle}>{title}</p>
                  <p className={styles.cardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <Logo size={18} accentColor={colors.primary} textColor={colors.text} />
        <span className={styles.footerText}>@duncancooper/brand</span>
      </div>
    </main>
  );
}
