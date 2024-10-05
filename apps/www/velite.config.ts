import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from 'rehype-expressive-code'
import { defineCollection, defineConfig, s } from 'velite'

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
}

const slugify = (slug: string) => slug.split('/').slice(1).join('/')

const blog = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      draft: s.boolean().default(false),
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({ ...data, slug: slugify(data.slug) })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { blog },
  mdx: {
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
    remarkPlugins: [],
  },
})
