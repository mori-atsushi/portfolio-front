import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import RatioBox from 'src/components/atoms/boxs/RatioBox';
import Date from 'src/components/atoms/dates/Date';

import IBlog from 'src/entities/blog';

export default (props: IBlog) => (
  <Wrapper to={ `/blog/${ props.id }` } >
    <RatioBox width={16} height={9}>
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
  box-shadow:0px 2px 3px rgba(0,0,0,0.3);
  border-radius: 10px;
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
