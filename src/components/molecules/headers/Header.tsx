import * as React from 'react';
import styled from 'styled-components';

import RatioBox from 'src/components/atoms/boxs/RatioBox';

interface IProps {
  title: string;
  backgroundImage: string;
}

export default (props: IProps) => (
  <RatioBox width={12} height={5} maxHeight={300}>
    <BackgroundImage style={ { backgroundImage: `url(${props.backgroundImage})` } }>
      <Container>{ props.title }</Container>
    </BackgroundImage>
  </RatioBox>
);

const BackgroundImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 5%;
  color: #FFFFFF;
  text-shadow:0px 2px 10px #000000;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;
