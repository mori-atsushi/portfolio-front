import { useCallback } from 'react';
import { outbound } from 'src/helper/gtag';

interface IProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<IProps> = ({
  className,
  href,
  children
}) => {
  const onClick = useCallback(() => {
    outbound(href)
  }, [href])
  return (
    <a
      className={className}
      onClick={onClick}
      href={href}
      target='_blank'
      rel='noreferrer'>
      {children}
    </a>
  )
}

export default ExternalLink;
