import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  label?: string;
  children?: JSX.Element;
}

const Label = (props: IProps) => (
  <Wrapper>
    <Content>{ props.label }</Content>
    { props.children }
  </Wrapper>
);

const Wrapper = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Content = styled.div`
  flex-basis: 8rem;
`;

export default Label;
