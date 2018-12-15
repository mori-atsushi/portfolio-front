import { getRequest } from 'src/api/common';
import IBlog from 'src/entities/blog';

export async function getList(): Promise<IBlog[]> {
  return getRequest('/blog')
}
