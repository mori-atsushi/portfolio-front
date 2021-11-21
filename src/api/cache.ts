import IBlog from 'src/entities/blog';

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
