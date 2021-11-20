import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getList } from 'src/api/blogs';
import BlogPage from 'src/components/pages/BlogPage';
import IBlogPagingList from 'src/entities/blogPagingList';

type BlogListParams = {
  id: string
} & ParsedUrlQuery

const Blog: NextPage<IBlogPagingList> = (props) => (
  <BlogPage {...props} />
);

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

export default Blog;
