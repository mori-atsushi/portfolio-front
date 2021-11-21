import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as ReactGA from 'react-ga';
import styledComponents from 'styled-components';

const SnsList: React.FC = () => (
  <Container>
    <Item>
      <Link eventLabel="https://twitter.com/at_sushi_at" to="https://twitter.com/at_sushi_at" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Item>
    <Item>
      <Link eventLabel="https://www.facebook.com/tb.atsushi" to="https://www.facebook.com/tb.atsushi" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </Item>
    <Item>
      <Link eventLabel="https://www.instagram.com/tb.atsushi/" to="https://www.instagram.com/tb.atsushi/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Item>
    <Item>
      <Link eventLabel="https://github.com/Mori-Atsushi" to="https://github.com/Mori-Atsushi" target="_blank">
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

const Link = styledComponents(ReactGA.OutboundLink)`
  display: block;
  color: inherit;
  width: 3rem;
  height: 3rem;
`;

export default SnsList;
