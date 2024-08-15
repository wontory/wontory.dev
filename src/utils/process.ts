import type { CollectionEntry, CollectionKey } from "astro:content";

const process = <T extends CollectionKey>(
	collectionEntries: CollectionEntry<T>[],
	numEntries?: number,
): CollectionEntry<T>[] =>
	collectionEntries
		.filter((entry) => !entry.data.draft)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
		.slice(0, numEntries ?? collectionEntries.length);

export { process };
