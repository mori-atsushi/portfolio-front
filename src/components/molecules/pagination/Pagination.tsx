import * as React from 'react';
import styled from 'styled-components';

import PaginationItem from 'src/components/atoms/pagination/PaginationItem';

interface IProps {
  pageNum: number,
  currentPage: number,
}

const Pagination = (props: IProps) => (
  <Wrapper>
    {
      Array.from(Array(props.pageNum)).map( (_, i) =>
        renderItem(i + 1, props.currentPage)
      )
    }
  </Wrapper>
)

export default Pagination;

const renderItem = (page: number, currentPage: number) => {
  const to = page === 1 ? `/blog` : `/blog/list/${page}`

  return (
    <PaginationItem
      key = {page}
      page={ page }
      to={ to }
      isSelected={ page === currentPage } />
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
