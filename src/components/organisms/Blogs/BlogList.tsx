import * as React from 'react';
import styled from 'styled-components';

import BlogOverview from 'src/components/molecules/Blogs/BlogOverview';

import IBlog from 'src/entities/blog';

interface IProps {
  list: IBlog[]
}

const BlogList: React.FC<IProps> = (props) => (
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

const Wrapper = styled.div``;

const Item = styled.div`
  &:not(:last-child){
    margin-bottom: 3rem;
  }
`;

export default BlogList
