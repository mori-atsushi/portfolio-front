import * as React from 'react';
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import ContactForm from 'src/components/molecules/Contacts/ContactForm';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import HeaderImg from 'src/statics/images/contact_header.jpg';

export default () => (
  <>
    <Helmet
      pageTitle='Contact' />
    <MenuHeader />
    <Header
      title="Contact"
      backgroundImage={HeaderImg} />
    <Content>
      <Message>このサイト内の内容に関するお問い合わせ、お仕事の依頼等、お気軽にお問い合わせください。</Message>
      <ContactForm />
    </Content>
  </>
);

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

const Message = styled.div``;
