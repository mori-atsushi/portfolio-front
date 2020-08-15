import * as React from 'react';
import * as ReactGA from 'react-ga';

interface IProps {
  href: string;
  children: string;
}

export default (props: IProps) => (
  <ReactGA.OutboundLink eventLabel={props.href} to={props.href} target="_blank">
    {props.children}
  </ReactGA.OutboundLink>
)
