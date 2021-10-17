import 'highlight.js/styles/github-gist.css';
import * as React from 'react';
import Highlight from 'react-highlight';

interface IProps {
  value: string
  language?: string
}

export default (props: IProps) => (
  <Highlight className={ props.language || '' }>
    {props.value}
  </Highlight>
);
