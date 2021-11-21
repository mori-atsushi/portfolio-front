import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getAllList, getItem, getList, getPopularList } from 'src/api/blogs';
import CommonHead from 'src/components/atoms/common-head/CommonHead';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogDetail from 'src/components/organisms/Blogs/BlogDetail';
import PopularBlogList from 'src/components/organisms/Blogs/PopularBlogList';
import IBlog from 'src/entities/blog';
import { useRead } from 'src/hooks/useRead';
import styled from 'styled-components';

type BlogProps = {
  blog: IBlog,
  popularBlogs: IBlog[]
}

type BlogParams = {
  id: string
} & ParsedUrlQuery

const Blog: NextPage<BlogProps> = ({
  blog,
  popularBlogs
}) => {
  useRead(blog)
  const pageTitle = `${ blog.title } - Blog`;
  const path = `blogs/${ blog.id }`

  return (
    <>
      <CommonHead
        pageTitle={pageTitle}
        path={path}
        ogpImage={ blog.ogpImage }
        description={ blog.description }  />
      <MenuHeader />
      <Header
          title='Blog'
          backgroundImage='/images/blog_header.jpg' />
      <Content>
        <BlogDetail { ...blog } />
        <PopularBlogList
          current={blog}
          popularBlogs={popularBlogs} />
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

export const getStaticProps: GetStaticProps<BlogProps, BlogParams> = async ({params}) => {
  const page = Number(params?.id) ?? 1
  const result = await Promise.all([
    getItem(page),
    getPopularList()
  ])
  return {
    props: {
      blog: result[0],
      popularBlogs: result[1].list
    }
  }
}

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

export default Blog;
