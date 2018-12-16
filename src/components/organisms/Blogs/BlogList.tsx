import * as React from 'react';
import styled from 'styled-components';

import BlogOverview from 'src/components/molecules/Blogs/BlogOverview';
import LoadingComponent from 'src/components/molecules/spinners/LoadingComponent';

import IBlog from 'src/entities/blog';

interface IProps {
  list: IBlog[],
  isLoading?: boolean,
}

export default (props: IProps): JSX.Element => (
  <LoadingComponent isLoading={ props.isLoading }>
    <Wrapper>
      {
        props.list.map((blog: IBlog) => (
          <Item key={ blog.id }>
            <BlogOverview { ...blog } />
          </Item>
        ))
      }
    </Wrapper>
  </LoadingComponent>
);

const Wrapper = styled.div``;

const Item = styled.div`
  &:not(:last-child){
    margin-bottom: 3rem;
  }
`;
