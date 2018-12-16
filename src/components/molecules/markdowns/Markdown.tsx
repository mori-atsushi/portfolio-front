import 'github-markdown-css/github-markdown.css';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from 'src/components/atoms/markdowns/CodeBlock';

import 'src/statics/css/markdown.css';

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <ReactMarkdown
    className='markdown-body'
    escapeHtml={ false }
    renderers={{ code: CodeBlock }}
    linkTarget='_blank' >
    { props.children }
  </ReactMarkdown>
);
