import IBlog from 'src/entities/blog';

export default interface IBlogList {
  nextToken?: string,
  prevToken?: string,
  list: IBlog[],
}
