import rawSvg from '../../logo.svg?raw';
import { theme } from '../theme';

interface LogoProps {
  size?: number;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  separation?: number;
  text?: string;
  textOffsetX?: number;
  textOffsetY?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({
  size = 48,
  accentColor = theme.colors.primary,
  textColor = theme.colors.text,
  backgroundColor = 'transparent',
  separation = 0,
  text = 'tuit',
  textOffsetX = 0,
  textOffsetY = 0,
  className,
  style,
}: LogoProps) {
  const viewBoxWidth = 92 + 2 * separation;
  const viewBoxX = -separation;
  const width = Math.round(size * (viewBoxWidth / 24));

  const svg = rawSvg
    .replace(/#4ADE80/gi, accentColor)
    .replace(/#0F1419/gi, backgroundColor)
    .replace(/#FFFFFF/gi, textColor)
    .replace('viewBox="0 0 92 24"', `viewBox="${viewBoxX} 0 ${viewBoxWidth} 24"`)
    .replace('M 12 0 A 12 12 0 0 0 12 24 Z', `M ${12 - separation} 0 A 12 12 0 0 0 ${12 - separation} 24 Z`)
    .replace('M 80 0 A 12 12 0 0 1 80 24 Z', `M ${80 + separation} 0 A 12 12 0 0 1 ${80 + separation} 24 Z`)
    .replace(/x="46"/, `x="${46 + textOffsetX}"`)
    .replace(/y="23\.6"/, `y="${23.6 + textOffsetY}"`)
    .replace(/>tuit<\/text>/, `>${text}</text>`)
    .replace('<svg ', `<svg width="${width}" height="${size}" `);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
