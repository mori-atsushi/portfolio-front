import * as React from 'react';

import Helmet from 'src/components/atoms/helmets/Helmet';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import HeaderImg from 'src/statics/images/contact_header.jpg';

export default () => (
  <>
    <Helmet
      pageTitle='Coming Soon' />
    <MenuHeader />
    <Header
      title="Contact"
      backgroundImage={HeaderImg} />
  </>
);
