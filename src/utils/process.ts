import type { CollectionEntry, ContentEntryMap } from 'astro:content'

export const process = <T extends keyof ContentEntryMap>(
  entries: CollectionEntry<T>[],
) =>
  entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
