import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getList } from 'src/api/blogs';
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import Pagination from 'src/components/molecules/pagination/Pagination';
import BlogList from 'src/components/organisms/Blogs/BlogList';
import IBlogPagingList from 'src/entities/blogPagingList';
import styled from 'styled-components';

type BlogListParams = {
  id: string
} & ParsedUrlQuery

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

export const getStaticPaths: GetStaticPaths = async () => {
  const { pageNum } = await getList();
  const pageArray = pageNum > 0
    ? [...Array(pageNum - 1)].map((_, i) => i + 2)
    : []
  return {
    paths: pageArray.map((page) => ({
      params: { id: page.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<IBlogPagingList, BlogListParams> = async ({params}) => {
  const page = Number(params?.id) ?? 1
  const blogList = await getList(page);
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
