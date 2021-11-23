import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import ExternalLink from 'src/components/atoms/links/ExternalLink';
import styledComponents from 'styled-components';

const SnsList: React.FC = () => (
  <Container>
    <Item>
      <Link href="https://twitter.com/at_sushi_at">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Item>
    <Item>
      <Link href="https://www.facebook.com/tb.atsushi">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </Item>
    <Item>
      <Link href="https://www.instagram.com/tb.atsushi/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Item>
    <Item>
      <Link href="https://github.com/Mori-Atsushi">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Item>
  </Container>
);

const Container = styledComponents.ul`
  display: flex;
  justify-content: center;
`;

const Item = styledComponents.li`
  margin: 0 1.5rem;
`;

const Link = styledComponents(ExternalLink)`
  display: block;
  color: inherit;
  width: 3rem;
  height: 3rem;
`;

export default SnsList;
