import * as React from 'react';

import Footer from '../molecules/footers/Footer';
import MenuHeader from '../molecules/headers/MenuHeader';
import TopHeader from '../molecules/headers/TopHeader';
import Profile from '../organisms/Profiles/Profile';

export default () => (
  <>
    <TopHeader />
    <MenuHeader />
    <Profile />
    <Footer />
  </>
);
