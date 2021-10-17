import type { NextPage } from 'next'
import CommonHead from 'src/components/atoms/common-head/CommonHead'

const Home: NextPage = () => {
  return (
    <>
      <CommonHead/>
      <div>Hello World</div>
    </>
  );
};

export default Home;
