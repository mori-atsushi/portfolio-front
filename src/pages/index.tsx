import type { NextPage } from 'next'
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import TopHeader from 'src/components/molecules/headers/TopHeader';
import Profile from 'src/components/organisms/Profiles/Profile';

const Home: NextPage = () => {
  return (
    <>
      <CommonHead/>
      <TopHeader />
      <MenuHeader />
      <Profile />
    </>
  );
};

export default Home;
