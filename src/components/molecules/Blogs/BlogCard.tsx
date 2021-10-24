import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import RatioBox from 'src/components/atoms/boxs/RatioBox';
import Date from 'src/components/atoms/dates/YYYYMMDD';

import IBlog from 'src/entities/blog';

export default (props: IBlog) => (
  <Wrapper href={ `/blog/${ props.id }` } >
    <RatioBox width={40} height={21}>
      <Image src={ props.ogpImage } />
    </RatioBox>
    <Content>
      <DateWrapper>
        <Date date={ props.releaseAt } />
      </DateWrapper>
      <Title>{ props.title }</Title>
    </Content>
  </Wrapper>
);

const Wrapper = styled(Link)`
  display: block;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.18);
  border-radius: 10px;
  transition: box-shadow 0.3s cubic-bezier(0.25,0.8,0.25,1);

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const DateWrapper = styled.div`
  font-size: 0.8rem;
  color: #666666;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
`;
