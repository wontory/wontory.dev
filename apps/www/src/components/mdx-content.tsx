import * as runtime from 'react/jsx-runtime'

import { ImageZoom, type ImageZoomProps } from '~/components/image-zoom'

const sharedComponents = {
  img: (props: ImageZoomProps) => <ImageZoom {...props} />,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code)

  return <Component components={{ ...sharedComponents, ...components }} />
}

export { MDXContent }
