import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import Date from 'src/components/atoms/dates/YYYYMMDD';
import IBlog from 'src/entities/blog';

const BlogCard: React.FC<IBlog> = (props) => (
  <Link href={ `/blog/${ props.id }/`} passHref>
    <Wrapper>
      <Image src={ props.ogpImage } alt='' width='1200' height='630' />
      <Content>
        <DateWrapper>
          <Date date={ props.releaseAt } />
        </DateWrapper>
        <Title>{ props.title }</Title>
      </Content>
    </Wrapper>
  </Link>
);

const Wrapper = styled.div`
  display: block;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.18);
  border-radius: 10px;
  transition: box-shadow 0.3s cubic-bezier(0.25,0.8,0.25,1);

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.1);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const DateWrapper = styled.div`
  font-size: 0.8rem;
  color: #666666;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
`;

export default BlogCard
