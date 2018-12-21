export interface IBlogListResponse {
  nextToken?: string,
  prevToken?: string,
  list?: IBlogResponse[],
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
