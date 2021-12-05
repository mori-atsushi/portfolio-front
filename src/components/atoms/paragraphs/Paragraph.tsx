import * as React from 'react';

interface IProps {
  children: string
}

const Paragraph: React.FC<IProps> = (props) => (
  <div>
    {
      props.children.split("\n").map((line: string, index: number) =>
        <p key={ `line_${ index }` }>{ line }</p>
      )
    }
  </div>
);

export default Paragraph;
