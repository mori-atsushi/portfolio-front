import * as React from 'react';
import styledComponents from 'styled-components';

import Menu from '../../atoms/menus/Menu';

export default () => (
  <Container>
    <Title>Mori Atsushi</Title>
    <Menu />
  </Container>
);

const Container = styledComponents.div`
  background: #222222;
  color: #EEEEEE;
  position: sticky;
  top: 0px;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styledComponents.h1`
  font-size: 1.5rem;
`;
