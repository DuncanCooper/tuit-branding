import rawSvg from '../../icon.svg?raw';
import { theme } from '../theme';

interface IconProps {
  size?: number;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({
  size = 48,
  accentColor = theme.colors.primary,
  textColor = theme.colors.text,
  backgroundColor = theme.colors.background,
  className,
  style,
}: IconProps) {
  const svg = rawSvg
    .replace(/%234ADE80/gi, accentColor)
    .replace(/%230F1419/gi, backgroundColor)
    .replace(/#4ADE80/gi, accentColor)
    .replace(/#0F1419/gi, backgroundColor)
    .replace(/#FFFFFF|white/gi, textColor)
    .replace('<svg ', `<svg width="${size}" height="${size}" `);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
