import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
	const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

	const craft = (await getCollection("craft")).filter(
		(project) => !project.data.draft,
	);

	const items = [...blog, ...craft].sort(
		(a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
	);

	return rss({
		title: "wontory.dev",
		description: "프론트엔드 개발자 조성원의 개인 블로그입니다.",
		site: context.site ?? "https://www.wontory.dev",
		items: items.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.date,
			link: `/${item.collection}/${item.slug}/`,
		})),
	});
}
