import { getRequest } from 'src/api/common';
import { blogListMapper } from 'src/api/mapper';
import { IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';

export async function getList(): Promise<IBlog[]> {
  return getRequest<IBlogResponse[]>('/blog')
    .then((list) => blogListMapper(list));
}
