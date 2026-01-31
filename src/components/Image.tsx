"use client"
import { buildSrc, Image as ImageKitImage } from '@imagekit/next';
import { useState } from 'react';

const urlEndpoint = process.env.PUBLIC_IMAGEKIT_URL_ENDPOINT as string

type ImageType = {
  path: string,
  w?: number,
  h?: number,
  alt: string,
  className?: string,
  tr?:boolean
}
const Image = ({path, w, h, alt, className, tr}:ImageType) =>{
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  return (
    <ImageKitImage 
    src={path}
    alt={alt}
    width= {w}
    height={h} 
    className={className}
    style={showPlaceholder && urlEndpoint && path ? {
        backgroundImage: `url(${buildSrc({
          urlEndpoint,
          src: path,
          transformation: [
            { quality: 20, blur: 50 }
          ]
        })})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      } : {}}
      onLoad={() => {
        setShowPlaceholder(false);
      }}
    {...(tr ? { transformation:[{ width: `${w}`, height: `${h}` }] } : {})}
    />
  )
}
export default Image