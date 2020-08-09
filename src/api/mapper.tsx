import { IBlogListResponse, IBlogPagingListResponsne, IBlogResponse } from 'src/api/response';
import IBlog from 'src/entities/blog';
import IBlogList from 'src/entities/blogList';
import IBlogPagingList from 'src/entities/blogPagingList';

export const blogListMapper = (data: IBlogListResponse): IBlogList => ({
  list: (data.list || []).map((value: IBlogResponse) => blogMapper(value))
});

export const blogPagingListMapper = (data: IBlogPagingListResponsne): IBlogPagingList => ({
  currentPage: data.currentPage || 0,
  list: (data.list || []).map((value: IBlogResponse) => blogMapper(value)),
  pageNum: data.pageNum || 0,
})

export const blogMapper = (data: IBlogResponse): IBlog => ({
  content: data.content || '',
  description: data.description || '',
  id: data.id || 0,
  ogpImage: data.ogpImage,
  releaseAt: new Date(data.releaseAt || ''),
  title: data.title || '',
  updatedAt: new Date(data.updatedAt || ''),
});
