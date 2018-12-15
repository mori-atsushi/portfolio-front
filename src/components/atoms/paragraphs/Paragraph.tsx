import * as React from 'react';

interface IProps {
  children: string
}

export default (props: IProps) => (
  <div>
    {
      props.children.split("\n").map((line: string, index: number) =>
        <p key={ `line_${ index }` }>{ line }</p>
      )
    }
  </div>
);
