import type { NextPage } from 'next'
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import ContactFrom from 'src/components/molecules/contacts/ContactFrom';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import styled from 'styled-components';

const Contact: NextPage = () => {
  return (
    <>
      <CommonHead
        pageTitle='Contact'
        path='contact/' />
      <MenuHeader />
      <Header
          title='Contact'
          backgroundImage='/images/contact_header.jpg' />
      <Content>
        <Message>このサイト内の内容に関するお問い合わせ、お仕事の依頼等、お気軽にお問い合わせください。</Message>
        <ContactFrom />
      </Content>
    </>
  );
};

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

const Message = styled.div``;

export default Contact;
