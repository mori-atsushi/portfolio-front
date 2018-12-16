import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from 'src/components/atoms/markdowns/CodeBlock';

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <ReactMarkdown
    className='markdown-style'
    escapeHtml={ false }
    renderers={{ code: CodeBlock }}
    linkTarget='_blank' >
    { props.children }
  </ReactMarkdown>
);
