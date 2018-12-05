import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styledComponents from 'styled-components';

export default () => (
  <Container>
    <Item>
      <Link href="https://twitter.com/at_sushi_at" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Item>
    <Item>
      <Link href="https://www.facebook.com/tb.atsushi" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </Item>
    <Item>
      <Link href="https://www.instagram.com/tb.atsushi/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </Item>
    <Item>
      <Link href="https://github.com/Mori-Atsushi" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Item>
  </Container>
);

const Container = styledComponents.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Item = styledComponents.li`
  font-size: 3rem;
  margin: 0 1.5rem;
`;

const Link = styledComponents.a`
  display: block;
  color: inherit;
`;
