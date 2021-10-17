import * as React from 'react';
import * as ReactGA from 'react-ga';
import styledComponents from 'styled-components';

interface IProps {
  href: string;
  children: string;
}

export default (props: IProps) => (
  <A eventLabel={props.href} to={props.href} target="_blank">
    {props.children}
  </A>
)

const A = styledComponents(ReactGA.OutboundLink)`
  text-decoration: underline;
`;
