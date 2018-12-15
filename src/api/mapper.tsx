import { IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';

export const blogListMapper = (data: IBlogResponse[]): IBlog[] =>
  data.map((value: IBlogResponse) => blogMapper(value));

export const blogMapper = (data: IBlogResponse): IBlog => ({
  content: data.content || '',
  description: data.description || '',
  id: data.id || 0,
  ogpImage: data.ogpImage,
  releaseAt: new Date(data.releaseAt || ''),
  title: data.title || '',
  updatedAt: new Date(data.updatedAt || ''),
});
