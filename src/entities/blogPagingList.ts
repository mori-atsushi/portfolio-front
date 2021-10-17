import IBlog from 'src/entities/blog';

export default interface IBlogPagingList {
  list: IBlog[],
  currentPage: number,
  pageNum: number,
}
