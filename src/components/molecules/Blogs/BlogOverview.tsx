import * as React from 'react';
import styled from 'styled-components';

import Date from 'src/components/atoms/dates/Date';

import IBlog from 'src/entities/blog';

export default (props: IBlog) => (
  <Wrapper>
    <Content>
      <DateWrapper>
        <Date date={ props.releaseAt } />
      </DateWrapper>
      <Title>{ props.title }</Title>
      <Description>{ props.description }</Description>
    </Content>
    <ImageWrapper>
      <Image src={ props.ogpImage } />
    </ImageWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 0.5rem;
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

const Description = styled.p`
  line-height: 1.5rem;
`;

const ImageWrapper = styled.div`
  width: 30%;
  min-width: 120px;
`;

const Image = styled.img`
  width: 100%;
`;
