import * as history from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

interface IProps {
  page: number;
  isSelected: boolean;
  to: history.LocationDescriptor;
}

export default (props: IProps) => {
  if (props.isSelected) {
    return (
      <SelectedWrapper>
        { props.page }
      </SelectedWrapper>
    )
  }
  return (
    <Wrapper
      to={props.to}>
      { props.page }
    </Wrapper>
  )
}

const SelectedWrapper = styled.div`
  border: none;
  width: 36px;
  height: 36px;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbb03b;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
`

const Wrapper = styled(SelectedWrapper.withComponent(Link))`
  background-color: #333333;

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
