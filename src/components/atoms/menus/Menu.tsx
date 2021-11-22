import * as React from 'react';
import Link from 'next/link'
import styledComponents from 'styled-components';

const Menu: React.FC = () => (
  <Container>
    <Item><Link href='/'>Top</Link></Item>
    <Item><Link href='/works/'>Works</Link></Item>
    <Item><Link href='/photos/'>Photos</Link></Item>
    <Item><Link href='/blog/'>Blog</Link></Item>
    <Item><Link href='/contact/'>Contact</Link></Item>
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

export default Menu
