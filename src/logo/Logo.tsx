import rawSvg from '../../logo.svg?raw';
import { theme } from '../theme';

interface LogoProps {
  size?: number;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({
  size = 48,
  accentColor = theme.colors.primary,
  textColor = theme.colors.text,
  backgroundColor = 'transparent',
  className,
  style,
}: LogoProps) {
  const width = Math.round(size * (92 / 24));

  const svg = rawSvg
    .replace(/#4ADE80/gi, accentColor)
    .replace(/#0F1419/gi, backgroundColor)
    .replace(/#FFFFFF/gi, textColor)
    .replace('<svg ', `<svg width="${width}" height="${size}" `);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
