import { getRequest, postRequest } from 'src/api/common';
import { blogListMapper, blogMapper, blogPagingListMapper } from 'src/api/mapper';
import { IBlogListResponse, IBlogPagingListResponsne, IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';
import IBlogList from 'src/entities/blogList';
import IBlogPagingList from 'src/entities/blogPagingList';
import { BlogCache, BlogListCache, PopularBlogCache } from './cache';

const blogCache = new BlogCache()
const blogListCache = new BlogListCache()
const popularBlogCache = new PopularBlogCache()

export async function getAllList(): Promise<IBlog[]> {
  let list: IBlog[] = []
  const initial = await getList()
  list = list.concat(initial.list)
  for (let i = 1; i < initial.pageNum; i++) {
    const result = await getList(i + 1)
    list = list.concat(result.list)
  }
  return list
}

export async function getList(page?: number): Promise<IBlogPagingList> {
  const _page = page ?? 0
  const cache = blogListCache.get(_page)
  if (cache) {
    return cache
  }
  const response = await getRequest<IBlogPagingListResponsne>('/blog', { page })
  const list = blogPagingListMapper(response)
  blogCache.setList(list.list)
  blogListCache.set(_page, list)
  return list
}

export async function getPopularList(): Promise<IBlogList> {
  const cache = popularBlogCache.get()
  if (cache) {
    return cache
  }
  const response = await getRequest<IBlogListResponse>('/blog/popular')
  const list = blogListMapper(response)
  blogCache.setList(list.list)
  popularBlogCache.set(list)
  return list
}

export async function getItem(id: number): Promise<IBlog> {
  const cache = blogCache.get(id)
  if (cache) {
    return cache
  }
  const response = await getRequest<IBlogResponse>(`/blog/${ id }`)
  const item = blogMapper(response)
  blogCache.set(item)
  return item
}

export async function sendRead(id: number): Promise<void> {
  return postRequest<void>(`/blog/${ id }/read`);
}
