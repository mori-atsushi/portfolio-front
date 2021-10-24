import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

interface IProps {
  page: number;
  isSelected: boolean;
  to: string;
}

const PaginationItem = (props: IProps) => {
  if (props.isSelected) {
    return (
      <SelectedWrapper>
        { props.page }
      </SelectedWrapper>
    )
  }
  return (
    <Link href={props.to} passHref>
      <Wrapper>
        { props.page }
      </Wrapper>
    </Link>
  )
}

export default PaginationItem;

const CommonWrapper = styled.div`
  border: none;
  width: 36px;
  height: 36px;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

const SelectedWrapper = styled(CommonWrapper.withComponent('div'))`
  background-color: #fbb03b;
`;

const Wrapper = styled(CommonWrapper.withComponent('a'))`
  background-color: #333333;
  cursor: pointer;

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
