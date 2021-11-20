import 'github-markdown-css/github-markdown-light.css';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'src/components/atoms/markdowns/CodeBlock';
import Link from 'src/components/atoms/markdowns/Link';
import styled from 'styled-components';

interface IProps {
  children: string;
}

const Markdown: React.FC<IProps> = (props) => (
  <MyReactMarkdown
    className='markdown-body'
    escapeHtml={ false }
    renderers={{
      code: CodeBlock,
      link: Link
    }} >
    { props.children }
  </MyReactMarkdown>
);

const MyReactMarkdown = styled(ReactMarkdown)`
  background-color: transparent;
`

export default Markdown
