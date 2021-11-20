import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getAllList, getItem, getList } from 'src/api/blogs';
import CommonHead from 'src/components/atoms/common-head/CommonHead';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import IBlog from 'src/entities/blog';

type BlogParams = {
  id: string
} & ParsedUrlQuery

const Blog: NextPage<IBlog> = (props) => (
  <>
    <CommonHead
      pageTitle='Blog'
      path='blogs' />
    <MenuHeader />
    <Header
        title='Blog'
        backgroundImage='/images/blog_header.jpg' />
  </>
);

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

export default Blog;
