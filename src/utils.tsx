const ImageKit = require("imagekit")

export const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY as string,
  privateKey: process.env.PRIVATE_KEY as string,
  urlEndpoint: process.env.PUBLIC_IMAGEKIT_URL_ENDPOINT as string, // например: https://ik.imagekit.io/your_imagekit_id
})
