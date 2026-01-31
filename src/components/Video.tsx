import { Video as ImageKitVideo } from '@imagekit/next';

const urlEndpoint = process.env.PUBLIC_IMAGEKIT_URL_ENDPOINT as string

type VideoType = {
  path:string;
  className?:string;
}

export default function Video({path, className}:VideoType) {
  return (
    <ImageKitVideo
      className={ className}
      urlEndpoint={urlEndpoint}
      src={path}
      transformation={[{
        width: "1920", 
        height: "1080", 
      }]}
      controls
    />
  );
}