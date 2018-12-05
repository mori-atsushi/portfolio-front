import * as React from 'react';
import styledComponents from 'styled-components';

export default () => (
  <Container>
    <Title>Mori Atsushi</Title>
    <Menu>
      <Item>About</Item>
      <Item>Works</Item>
      <Item>Photos</Item>
      <Item>Blog</Item>
      <Item>Contact</Item>
    </Menu>
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

const Menu = styledComponents.ul`
  display: flex;
  align-items: baseline;
`;

const Item = styledComponents.li`
  cursor: pointer;

  :not(:last-child) {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #AAAAAA;
  }

  :hover {
    text-decoration: underline;
  }
`;
