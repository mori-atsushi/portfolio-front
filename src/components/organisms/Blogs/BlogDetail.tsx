import * as React from 'react';
import styled from 'styled-components';

import Date from 'src/components/atoms/dates/Date';
import WithEmojiMessage from 'src/components/atoms/messages/WithEmojiMessage';
import Markdown from 'src/components/molecules/markdowns/Markdown';
import LoadingComponent from 'src/components/molecules/spinners/LoadingComponent';

import { IBlogArticleState } from 'src/modules/blogArticle';

export default (props: IBlogArticleState) => {
  if( props.loadState === 'error' ) {
    return (
      <ErrorMessage>
        <WithEmojiMessage emoji='😭'>
          404 Not Found
        </WithEmojiMessage>
      </ErrorMessage>
    );
  }

  return (
    <LoadingComponent isLoading={ props.loadState === 'loading' }>
      { props.article && (
        <Wrapper>
          <DateWrapper>
            <Date date={ props.article.releaseAt } />
          </DateWrapper>
          <Title>{ props.article.title }</Title>
          <Markdown>
            { props.article.content }
          </Markdown>
        </Wrapper>
      ) }
    </LoadingComponent>
  );
}

const ErrorMessage = styled.div`
  display: flex;
  margin: 1rem;
  height: calc(100vh - 30rem);
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-bottom: 3rem;
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
