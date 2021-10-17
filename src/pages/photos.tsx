import type { NextPage } from 'next'
import CommonHead from 'src/components/atoms/common-head/CommonHead'
import ComingSoon from 'src/components/organisms/ComingSoon/ComingSoon';

const Photos: NextPage = () => {
  return (
    <>
      <CommonHead
        pageTitle='Photos(Coming Soon)'
        path="photos" />
      <ComingSoon />
    </>
  );
};

export default Photos;
