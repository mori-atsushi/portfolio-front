import type { NextPage, GetStaticProps } from 'next'
import { getList } from 'src/api/blogs';
import BlogPage from 'src/components/pages/BlogPage';
import IBlogPagingList from 'src/entities/blogPagingList';
import styled from 'styled-components';

const Blog: NextPage<IBlogPagingList> = (props) => (
  <BlogPage {...props} />
);

export const getStaticProps: GetStaticProps<IBlogPagingList> = async () => {
  const blogList = await getList();
  return {
    props: blogList
  }
}

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

export default Blog;
