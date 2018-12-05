import * as React from 'react';
import styledComponents from 'styled-components';

import headerJpg from '../../../statics/images/header.jpg';
import RatioBox from '../../atoms/boxs/RatioBox';

export default () => (
  <RatioBox width={2} height={1}>
    <BackgroundImage>
      <Container>
        <Content>
          <Title>Mori Atsushi</Title>
          <Description>
            <Line>Enginner</Line>
            <Line>and</Line>
            <Line>Photographer</Line>
          </Description>
        </Content>
      </Container>
    </BackgroundImage>
  </RatioBox>
);

const BackgroundImage = styledComponents.div`
  background-image: url(${headerJpg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Container = styledComponents.div`
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  padding: 5%;
  color: #FFFFFF;
  text-shadow:0px 2px 10px #000000;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styledComponents.div`
`;

const Title = styledComponents.h1`
  font-size: 4rem;
`;

const Description = styledComponents.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

const Line = styledComponents.p`
  line-height: 2.5rem;
`;
