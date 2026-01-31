"use server"

import { imagekit } from "./utils";


export const shareAction = async (formData: FormData, settings:{type: 'original' | 'wide' | 'square';sensitive: boolean}): Promise<void> => {
  const file = formData.get('file') as File
  // const desc = formData.get('desc') as string
  
  if (!file) {
    throw new Error("No file provided")
  }

  // Конвертируем File в Buffer для серверной загрузки
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
 
  const transformation = `w-600, ${
    settings.type === "square" 
    ? "ar-1-1" 
    : settings.type === "wide" 
    ? "ar-16-9"
    : ""}`

  try {
    // Используем серверный ImageKit SDK
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: '/posts',
      ...(file.type.includes("image") && {transformation: {
          pre: transformation,
        },
      }),
      customMetadata:{
        sensitive:settings.sensitive
      }
    })

    console.log("Upload success:", uploadResponse)
    // Если нужно вернуть данные, используйте useFormState или redirect
  } catch (error) {
    console.error("Upload error:", error)
    throw error
  }
}