import Head from 'next/head';
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import Pagination from 'src/components/molecules/pagination/Pagination';
import BlogList from 'src/components/organisms/Blogs/BlogList';
import IBlogPagingList from 'src/entities/blogPagingList';
import Config from 'src/helper/config';
import Url from 'src/helper/url';
import styled from 'styled-components';

const BlogPage: React.FC<IBlogPagingList> = ({
  list,
  pageNum,
  currentPage,
}) => {
  const title = currentPage === 1 ? 'Blog' : `Blog(${currentPage})`;
  const path = currentPage === 1 ? `blogs/` : `blogs/list/${currentPage}/`
  return (
    <>
      <CommonHead
        pageTitle={title}
        path={path} />
      <Head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title='森 篤史のブログ'
          href={`${Config.domain}${Url.blog.feed}`} />
      </Head>
      <MenuHeader />
      <Header
          title='Blog'
          backgroundImage='/images/blog_header.jpg' />
      <Content>
        <BlogList
          list={list}/>
        <Pagination
            pageNum={ pageNum }
            currentPage={ currentPage } />
      </Content>
    </>
  );
};

export default BlogPage;

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;
