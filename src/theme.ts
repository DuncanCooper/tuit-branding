export const theme = {
  colors: {
    primary: '#4ADE80',
    secondary: '#16A34A',
    background: '#0F1419',
    text: '#FFFFFF',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
  },
  typography: {
    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    sizes: {
      body: '16px',
      heading: '32px',
    },
  },
} as const;

export type Theme = typeof theme;
