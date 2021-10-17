import 'github-markdown-css/github-markdown.css';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import CodeBlock from 'src/components/atoms/markdowns/CodeBlock';
import Link from 'src/components/atoms/markdowns/Link';

import 'src/statics/css/markdown.css';

interface IProps {
  children: string;
}

export default (props: IProps) => (
  <ReactMarkdown
    className='markdown-body'
    escapeHtml={ false }
    renderers={{
      code: CodeBlock,
      link: Link
    }} >
    { props.children }
  </ReactMarkdown>
);
