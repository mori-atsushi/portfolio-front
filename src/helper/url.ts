const Url = {
  blog: {
    list: '/blog',
    item: (id: number) => `/blog/${id}/`,
    feed: '/blog/feed.xml',
  },
  images: {
    favicon: '/favicon.png'
  },
}

export default Url;
