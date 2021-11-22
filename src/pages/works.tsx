import type { NextPage } from 'next'
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import ComingSoon from 'src/components/organisms/ComingSoon/ComingSoon';

const Works: NextPage = () => {
  return (
    <>
      <CommonHead
        pageTitle='Works(Coming Soon)'
        path='works/' />
      <ComingSoon />
    </>
  );
};

export default Works;
