import { Image as ImageKitImage } from '@imagekit/next';

type ImageType = {
  path: string,
  w?: number,
  h?: number,
  alt: string,
  className?: string,
  tr?:boolean
}
const Image = ({path, w, h, alt, className, tr}:ImageType) =>{
  return (
    <ImageKitImage 
    src={path}
    alt={alt}
    width= {w}
     height={h} 
    className={className}
    {...(tr ? { transformation:[{ width: `${w}`, height: `${h}` }] } : {})}
    />
  )
}
export default Image