import * as React from 'react';
import styledComponents from 'styled-components';

import WithEmojiMessage from 'src/components/atoms/messages/WithEmojiMessage';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';

const ComingSoon: React.FC = () => (
  <>
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

export default ComingSoon;
