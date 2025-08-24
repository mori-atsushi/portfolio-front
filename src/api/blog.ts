import { getCollection } from 'astro:content';

export const BLOG_PAGE_SIZE = 16;

export async function getSortedBlogPosts() {
	const allPosts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return allPosts;
}
