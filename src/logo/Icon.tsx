import rawSvg from '../../icon.svg?raw';
import { theme } from '../theme';

interface IconProps {
  size?: number;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  separation?: number;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({
  size = 48,
  accentColor = theme.colors.primary,
  textColor = theme.colors.text,
  backgroundColor = theme.colors.background,
  separation = 0,
  text = 'tuit',
  className,
  style,
}: IconProps) {
  const svg = rawSvg
    .replace(/%234ADE80/gi, accentColor)
    .replace(/%230F1419/gi, backgroundColor)
    .replace(/#4ADE80/gi, accentColor)
    .replace(/#0F1419/gi, backgroundColor)
    .replace(/#FFFFFF|white/gi, textColor)
    .replace(/d='M 20 36 A 14 14 0 0 0 20 64 Z'/, `d='M ${20 - separation} 36 A 14 14 0 0 0 ${20 - separation} 64 Z'`)
    .replace(/d='M 80 36 A 14 14 0 0 1 80 64 Z'/, `d='M ${80 + separation} 36 A 14 14 0 0 1 ${80 + separation} 64 Z'`)
    .replace(/>tuit<\/text>/, `>${text}</text>`)
    .replace('<svg ', `<svg width="${size}" height="${size}" `);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
