import * as React from 'react';
import styledComponents from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import WithEmojiMessage from 'src/components/atoms/messages/WithEmojiMessage';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';

export default () => (
  <>
    <Helmet
      pageTitle='Coming Soon' />
    <MenuHeader />
    <Wrapper>
      <WithEmojiMessage emoji='🙇'>
        coming soon
      </WithEmojiMessage>
    </Wrapper>
  </>
);

const Wrapper = styledComponents.div`
  display: flex;
  margin: 1rem;
  height: calc(100vh - 18rem);
  align-items: center;
  justify-content: center;
`;
