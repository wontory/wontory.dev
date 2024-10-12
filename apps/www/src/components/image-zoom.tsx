import Image, { type ImageProps } from 'next/image'
import Zoom from 'react-medium-image-zoom'

import '~/styles/image-zoom.css'

export interface ImageZoomProps extends ImageProps {
  src: string
}

function ImageZoom({ ...props }: ImageZoomProps) {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      zoomImg={{
        src: props.src,
        className: 'rounded-sm border shadow-primary/5 shadow-xl',
      }}
    >
      <Image
        className="rounded-sm border shadow-primary/5 shadow-xl"
        width={props.width ?? 640}
        height={props.height ?? 640}
        {...props}
      />
    </Zoom>
  )
}

export { ImageZoom }
