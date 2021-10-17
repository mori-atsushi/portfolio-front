import * as React from 'react';
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components';

export default () => (
  <Container>
    <Item><Link to='/'>Top</Link></Item>
    <Item><Link to='/works'>Works</Link></Item>
    <Item><Link to='/photos'>Photos</Link></Item>
    <Item><Link to='/blog'>Blog</Link></Item>
    <Item><Link to='/contact'>Contact</Link></Item>
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
