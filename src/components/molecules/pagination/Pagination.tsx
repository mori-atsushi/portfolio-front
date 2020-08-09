import * as React from 'react';
import styled from 'styled-components';

import PaginationItem from 'src/components/atoms/pagination/PaginationItem';

interface IProps {
  pageNum: number,
  currentPage: number,
}

export default (props: IProps) => (
  <Wrapper>
    {
      Array.from(Array(props.pageNum)).map( (_, i) => (
        <PaginationItem
          num={ i + 1 }
          isSelected={ (i + 1) === props.currentPage} />
      ))
    }
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FF0000;
`;
