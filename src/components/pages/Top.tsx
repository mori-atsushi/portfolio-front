import * as React from 'react';

import Helmet from 'src/components/atoms/helmets/Helmet';
import MenuHeader from '../molecules/headers/MenuHeader';
import TopHeader from '../molecules/headers/TopHeader';
import Profile from '../organisms/Profiles/Profile';

export default () => (
  <>
    <Helmet/>
    <TopHeader />
    <MenuHeader />
    <Profile />
  </>
);
