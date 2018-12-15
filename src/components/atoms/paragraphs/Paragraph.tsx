import * as React from 'react';

interface IProps {
  children: string
}

export default (props: IProps) => (
  <div>
    { props.children.split("\n").map(line => (<p>{ line }</p>)) }
  </div>
);
