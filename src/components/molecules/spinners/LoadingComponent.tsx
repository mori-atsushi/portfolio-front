import * as React from 'react';
import styled from 'styled-components';

import Spinner from 'src/components/atoms/spinners/Spinner';

interface IProps {
  children?: JSX.Element | string | JSX.Element[],
  isLoading?: boolean,
}

export default (props: IProps): JSX.Element => {
  if (props.isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  return <>{ props.children }</>;
}

const SpinnerWrapper = styled.div`
  margin: 5rem 0;
`;
