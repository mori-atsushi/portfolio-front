import { getRequest } from 'src/api/common';
import { blogListMapper, blogMapper } from 'src/api/mapper';
import { IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';

export async function getList(): Promise<IBlog[]> {
  return getRequest<IBlogResponse[]>('/blog')
    .then((list) => blogListMapper(list));
}

export async function getItem(id: number): Promise<IBlog> {
  return getRequest<IBlogResponse>(`/blog/${ id }`)
    .then((item) => blogMapper(item));
}
