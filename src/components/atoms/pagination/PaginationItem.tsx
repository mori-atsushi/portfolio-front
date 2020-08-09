import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  num: number,
  isSelected: boolean,
}

export default (props: IProps) => (
  <Wrapper isSelected={props.isSelected} disabled={props.isSelected}>
    { props.num }
  </Wrapper>
)

const Wrapper = styled.button<{isSelected: boolean}>`
  border: none;
  width: 36px;
  height:36px;
  display: inline-block;
  background-color: ${({isSelected}) => isSelected ? '#fbb03b' : '#333333'};
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fbb03b;
    z-index: -1;
    transition: left 0.3s ease 0s;
    position: absolute;
    top: 0;
    left: -100%;
  }

  &:hover::before {
    left: 0;
  }
`;
