import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  label?: string;
  children?: JSX.Element;
}

export default (props: IProps) => (
  <Wrapper>
    <Label>{ props.label }</Label>
    { props.children }
  </Wrapper>
);

const Wrapper = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Label = styled.div`
  flex-basis: 8rem;
`;
