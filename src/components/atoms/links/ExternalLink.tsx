import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  href: string;
  children: string;
}

export default (props: IProps) => (
  <A href={props.href} target="_blank">
    {props.children}
  </A>
)

const A = styledComponents.a`
  text-decoration: underline;
`;
