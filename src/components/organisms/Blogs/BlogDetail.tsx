import * as React from 'react';
import styled from 'styled-components';

import YYYYMMDD from 'src/components/atoms/dates/YYYYMMDD';
import Markdown from 'src/components/molecules/markdowns/Markdown';

import IBlog from 'src/entities/blog';

const BlogDetail: React.FC<IBlog> = (props) => {
  return (
    <Wrapper>
      <DateWrapper>
        <YYYYMMDD date={ props.releaseAt } />
      </DateWrapper>
      <Title>{ props.title }</Title>
      <Markdown>
        { props.content }
      </Markdown>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const DateWrapper = styled.div`
  color: #666666;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 3rem;
`;

export default BlogDetail
