import React from 'react';
import { theme } from '@duncancooper/brand';

interface Props {
  primaryColor: string;
}

export default function ColorSwatches({ primaryColor }: Props) {
  const colors = { ...theme.colors, primary: primaryColor };

  return (
    <section style={{ marginBottom: theme.spacing.xl }}>
      <h2 style={{ marginBottom: theme.spacing.md, fontSize: '20px' }}>Color Palette</h2>
      <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
        {Object.entries(colors).map(([name, value]) => (
          <div
            key={name}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: theme.spacing.xs }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: value,
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            />
            <span style={{ fontSize: '12px', fontFamily: theme.typography.fontFamily }}>{name}</span>
            <span style={{ fontSize: '11px', opacity: 0.6, fontFamily: 'monospace' }}>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
