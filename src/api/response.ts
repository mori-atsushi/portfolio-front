export interface IBlogListResponse {
  list?: IBlogResponse[],
}

export interface IBlogPagingListResponsne {
  list?: IBlogResponse[],
  currentPage: number,
  pageNum: number,
}

export interface IBlogResponse {
  id?: number,
  title?: string,
  description?: string,
  content?: string,
  ogpImage?: string,
  releaseAt?: string,
  updatedAt?: string,
}
