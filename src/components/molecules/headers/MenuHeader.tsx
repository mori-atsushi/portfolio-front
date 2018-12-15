import * as React from 'react';
import styledComponents from 'styled-components';

import Menu from '../../atoms/menus/Menu';

export default () => (
  <Container>
    <Title>Mori Atsushi</Title>
    <MenuWrapper><Menu /></MenuWrapper>
  </Container>
);

const Container = styledComponents.div`
  background: #222222;
  color: #EEEEEE;
  position: sticky;
  top: 0px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;
`;

const Title = styledComponents.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-right: 1rem;
`;

const MenuWrapper = styledComponents.div`
  padding: 0.25rem 0;
`;
