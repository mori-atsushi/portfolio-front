import IBlog from 'src/entities/blog';
import IBlogPagingList from 'src/entities/blogPagingList';

export class BlogCache {
  private map = new Map<number, IBlog>()

  setList(list: IBlog[]) {
    list.forEach((item) => {
      this.set(item)
    })
  }

  set(item: IBlog) {
    this.map.set(item.id, item)
  }

  get(id: number): IBlog | undefined {
    return this.map.get(id)
  }
}

export class BlogListCache {
  private map = new Map<number, IBlogPagingList>()

  set(page: number, list: IBlogPagingList) {
    this.map.set(page, list)
  }

  get(page: number): IBlogPagingList | undefined {
    return this.map.get(page)
  }
}
