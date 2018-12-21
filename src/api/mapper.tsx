import { IBlogListResponse, IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';
import IBlogList from 'src/entities/blogList';

export const blogListMapper = (data: IBlogListResponse): IBlogList => ({
  list: (data.list || []).map((value: IBlogResponse) => blogMapper(value)),
  nextToken: data.nextToken,
  prevToken: data.prevToken,
});

export const blogMapper = (data: IBlogResponse): IBlog => ({
  content: data.content || '',
  description: data.description || '',
  id: data.id || 0,
  ogpImage: data.ogpImage,
  releaseAt: new Date(data.releaseAt || ''),
  title: data.title || '',
  updatedAt: new Date(data.updatedAt || ''),
});
