import { getRequest, postRequest } from 'src/api/common';
import { blogListMapper, blogMapper } from 'src/api/mapper';
import { IBlogListResponse, IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';
import IBlogList from 'src/entities/blogList';

export async function getList(): Promise<IBlogList> {
  return getRequest<IBlogListResponse>('/blog')
    .then((result) => blogListMapper(result));
}

export async function getPopularList(): Promise<IBlogList> {
  return getRequest<IBlogListResponse>('/blog/popular')
    .then((result) => blogListMapper(result));
}

export async function getItem(id: number): Promise<IBlog> {
  return getRequest<IBlogResponse>(`/blog/${ id }`)
    .then((item) => blogMapper(item));
}

export async function sendRead(id: number): Promise<void> {
  return postRequest<void>(`/blog/${ id }/read`);
}
