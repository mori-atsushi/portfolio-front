import * as React from 'react';
import styledComponents from 'styled-components';

import headerJpg from '../../../statics/images/header.jpg';
import RatioBox from '../../atoms/boxs/RatioBox';

export default () => (
  <RatioBox width={2} height={1}>
    <BackgroundImage>
      <Container>
        test
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
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  position: relative;
`;
