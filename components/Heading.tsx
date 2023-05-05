interface HeadingProps {
  children: React.ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function Heading({
  children,
  size = 'h2',
  as: Tag = 'h2',
  className,
}: HeadingProps) {
  const sizeMap = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
  };

  const sizeClass = sizeMap[size];

  return <Tag className={`${sizeClass} ${className}`}>{children}</Tag>;
}
