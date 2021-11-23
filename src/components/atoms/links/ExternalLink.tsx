import { useCallback } from 'react';
import { outbound } from 'src/helper/gtag';
import styledComponents from 'styled-components';

interface IProps {
  href: string;
  children: string;
}

const ExternalLink: React.FC<IProps> = ({
  href,
  children
}) => {
  const onClick = useCallback(() => {
    outbound(href)
  }, [href])
  return (
    <A onClick={onClick} href={href} target='_blank' rel='noreferrer'>
      {children}
    </A>
  )
}

const A = styledComponents.a`
  text-decoration: underline;
`

export default ExternalLink;
