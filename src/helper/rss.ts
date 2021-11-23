import { promises } from 'fs';
import RSS from 'rss';
import IBlog from 'src/entities/blog';
import Config from 'src/helper/config';
import Url from 'src/helper/url';

export const generateRss = async (blogs: IBlog[]) => {
  const feed = new RSS({
    title: 'Blog - Mori Atsushi',
    description: 'Mori Atsushiのブログ',
    site_url: `${Config.domain}${Url.blog.list}`,
    feed_url: `${Config.domain}${Url.blog.feed}`,
    image_url: `${Config.domain}${Url.images.favicon}`,
    language: 'ja',
  })
  blogs.forEach((item) => {
    feed.item({
      title: item.title,
      description: item.description.replace(/\r?\n/g,""),
      url: `${Config.domain}${Url.blog.item(item.id)}`,
      date: new Date(item.releaseAt),
    })
  })
  await promises.mkdir('public/blog', { recursive: true })
  await promises.writeFile(`public${Url.blog.feed}`, feed.xml())
}
