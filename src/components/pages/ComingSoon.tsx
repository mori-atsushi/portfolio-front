import * as React from 'react';
import styledComponents from 'styled-components';

import MenuHeader from '../molecules/headers/MenuHeader';

export default () => (
  <>
    <MenuHeader />
    <Wrapper>
      <Message>
        <Emoji>🙇</Emoji>
        <Text>coming soon</Text>
      </Message>
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

const Message = styledComponents.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  flex-wrap: wrap;
`;

const Emoji = styledComponents.div`
  margin: 0 1rem;
`;

const Text = styledComponents.div`
  text-align: center;
`;
