import { getCollection } from 'astro:content';

export const BLOG_PAGE_SIZE = 16;

export async function getSortedBlogPosts() {
	const allPosts = (await getCollection('blog')).sort((a, b) => {
		const dateA = a.data.updatedDate || a.data.pubDate;
		const dateB = b.data.updatedDate || b.data.pubDate;
		return dateB.valueOf() - dateA.valueOf(); // Sort in descending order (newest first)
	});
	return allPosts;
}
