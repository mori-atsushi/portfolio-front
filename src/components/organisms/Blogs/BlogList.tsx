import * as React from 'react';
import styled from 'styled-components';

import Spinner from 'src/components/atoms/spinners/Spinner';
import BlogOverview from 'src/components/molecules/Blogs/BlogOverview';

import IBlog from 'src/entities/blog';

interface IProps {
  list: IBlog[],
  isLoading?: boolean,
}

export default (props: IProps): JSX.Element => {
  if (props.isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  return(
    <Wrapper>
      {
        props.list.map((blog: IBlog) => (
          <Item key={ blog.id }>
            <BlogOverview { ...blog } />
          </Item>
        ))
      }
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Item = styled.div`
  &:not(:last-child){
    margin-bottom: 2rem;
  }
`;

const SpinnerWrapper = styled.div`
  margin: 5rem 0;
`;
