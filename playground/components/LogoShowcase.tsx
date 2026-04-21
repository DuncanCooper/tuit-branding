import React from 'react';
import { Logo, Icon, theme } from '@duncancooper/brand';

interface Props {
  primaryColor: string;
  size: number;
}

const BACKGROUNDS = [
  { label: 'Dark (default)', bg: theme.colors.background },
  { label: 'White', bg: '#FFFFFF' },
  { label: 'Black', bg: '#000000' },
  { label: 'Primary', bg: 'primary' },
] as const;

export default function LogoShowcase({ primaryColor, size }: Props) {
  return (
    <section style={{ marginBottom: theme.spacing.xl }}>
      <h2 style={{ marginBottom: theme.spacing.md, fontSize: '20px' }}>Logo Showcase</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {BACKGROUNDS.map(({ label, bg }) => {
          const actualBg = bg === 'primary' ? primaryColor : bg;
          return (
            <div key={label}>
              <p style={{ fontSize: '12px', marginBottom: theme.spacing.xs, opacity: 0.6 }}>{label}</p>
              <div
                style={{
                  backgroundColor: actualBg,
                  padding: theme.spacing.lg,
                  borderRadius: 8,
                  display: 'flex',
                  gap: theme.spacing.xl,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Logo size={size} accentColor={primaryColor} />
                <Icon size={size} accentColor={primaryColor} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
