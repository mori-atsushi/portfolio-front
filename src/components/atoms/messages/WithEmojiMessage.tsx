import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  emoji: string;
  children: string;
}

const WithEmojiMessage: React.FC<IProps> = (props) => (
  <Message>
    <Emoji>{ props.emoji }</Emoji>
    <Text>{ props.children }</Text>
  </Message>
);

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

export default WithEmojiMessage;
