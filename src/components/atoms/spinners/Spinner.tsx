import * as React from 'react';
import MDSpinner from 'react-md-spinner';
import styled from 'styled-components';

export default () => (
  <Spinner>
    <MDSpinner size={ 100 }/>
  </Spinner>
);

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
