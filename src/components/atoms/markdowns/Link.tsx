import { useCallback } from 'react';
import { outbound } from 'src/helper/gtag';

interface IProps {
  href: string;
  children: string;
}

const Link: React.FC<IProps> = ({
  href,
  children
}) => {
  const onClick = useCallback(() => {
    outbound(href)
  }, [href])
  return (
    <a onClick={onClick} href={href} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}

export default Link;
