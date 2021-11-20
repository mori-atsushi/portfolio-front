import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getAllList, getItem, getList } from 'src/api/blogs';
import CommonHead from 'src/components/atoms/common-head/CommonHead';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogDetail from 'src/components/organisms/Blogs/BlogDetail';
import IBlog from 'src/entities/blog';
import { useRead } from 'src/hooks/useRead';
import styled from 'styled-components';

type BlogParams = {
  id: string
} & ParsedUrlQuery

const Blog: NextPage<IBlog> = (props) => {
  useRead(props)

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
        <BlogDetail { ...props } />
      </Content>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await getAllList();
  return {
    paths: list.map((page) => ({
      params: { id: page.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<IBlog, BlogParams> = async ({params}) => {
  const page = Number(params?.id) ?? 1
  const blogItem = await getItem(page);
  return {
    props: blogItem
  }
}

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

export default Blog;
