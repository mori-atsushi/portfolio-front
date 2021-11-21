import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import Button from 'src/components/atoms/buttons/Button';
import Date from 'src/components/atoms/dates/YYYYMMDD';
import Paragraph from 'src/components/atoms/paragraphs/Paragraph';

import IBlog from 'src/entities/blog';

const BlogOverview: React.FC<IBlog> = (props: IBlog) => {
  const url = `/blog/${ props.id }`
  return (
    <Wrapper>
      <Content>
        <DateWrapper>
          <Date date={ props.releaseAt } />
        </DateWrapper>
          <Link href={ url } passHref>
            <Title>{ props.title }</Title>
          </Link>
        <Description>
          <Paragraph>{ props.description }</Paragraph>
        </Description>
        <Button to={ url } >続きを読む</Button>
      </Content>
      <Link href={url} passHref>
        <ImageWrapper href={ url }>
          <Image src={ props.ogpImage } />
        </ImageWrapper>
      </Link>
    </Wrapper>
  )
}

export default BlogOverview;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 0.5rem;
`;

const DateWrapper = styled.div`
  color: #666666;
`;

const Title = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 3rem;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.7;
  }
`;

const Description = styled.div`
  line-height: 1.5rem;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.a`
  width: 30%;
  min-width: 120px;
  transition: box-shadow 0.3s cubic-bezier(0.25,0.8,0.25,1);

  :hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.12), 0 5px 5px rgba(0,0,0,0.1);
  }
`;

const Image = styled.img`
  width: 100%;
`;
