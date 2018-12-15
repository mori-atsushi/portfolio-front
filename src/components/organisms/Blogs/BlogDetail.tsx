import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Date from 'src/components/atoms/dates/Date';

import IBlog from 'src/entities/blog';

export default (props: IBlog) => (
  <Wrapper>
    <DateWrapper>
      <Date date={ props.releaseAt } />
    </DateWrapper>
    <Title>{ props.title }</Title>
    <ReactMarkdown source={ props.content } />
  </Wrapper>
)

const Wrapper = styled.div`
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
