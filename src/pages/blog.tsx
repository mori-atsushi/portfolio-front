import type { NextPage, GetStaticProps } from 'next'
import { getList } from 'src/api/blogs';
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import Pagination from 'src/components/molecules/pagination/Pagination';
import BlogList from 'src/components/organisms/Blogs/BlogList';
import IBlogPagingList from 'src/entities/blogPagingList';
import styled from 'styled-components';

const Blog: NextPage<IBlogPagingList> = (props) => {
  return (
    <>
      <CommonHead
        pageTitle='Blog'
        path='blogs' />
      <MenuHeader />
      <Header
          title='Blog'
          backgroundImage='/images/blog_header.jpg' />
      <Content>
        <BlogList
          list={props.list}/>
        <Pagination
            pageNum={ props.pageNum }
            currentPage={ props.currentPage } />
      </Content>
    </>
  );
};

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
