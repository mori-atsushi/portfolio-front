import * as React from 'react';
import styledComponents from 'styled-components';

export default () => (
  <Container>
    <Item>About</Item>
    <Item>Works</Item>
    <Item>Photos</Item>
    <Item>Blog</Item>
    <Item>Contact</Item>
  </Container>
);

const Container = styledComponents.ul`
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
