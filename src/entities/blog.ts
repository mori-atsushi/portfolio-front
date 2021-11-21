export default interface IBlog {
  id: number,
  title: string,
  description: string,
  content: string,
  ogpImage?: string,
  releaseAt: string,
  updatedAt: string,
}
