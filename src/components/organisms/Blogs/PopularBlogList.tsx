import * as React from 'react';
import styled from 'styled-components';

import BlogCard from 'src/components/molecules/Blogs/BlogCard';

import IBlog from 'src/entities/blog';
import { IPopularBlogsState } from 'src/modules/popularBlogs';

export default (props: IPopularBlogsState) => (
  <Wrapper>
    <Title>人気の記事</Title>
    <List>
      {
        props.list.slice(0, 6).map((item: IBlog) => (
          <BlogCard key={ item.id } { ...item } />
        ))
      }
    </List>
  </Wrapper>
);

const Wrapper = styled.div``;

const List = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;
