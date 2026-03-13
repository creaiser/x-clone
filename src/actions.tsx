'use server'

import { imagekit } from './utils'

export const shareAction = async (
  formData: FormData,
  settings: { type: 'original' | 'wide' | 'square'; sensitive: boolean },
): Promise<void> => {
  const file = formData.get('file') as File

  if (!file) {
    throw new Error('No file provided')
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const transformation = `w-600, ${
    settings.type === 'square'
      ? 'ar-1-1'
      : settings.type === 'wide'
        ? 'ar-16-9'
        : ''
  }`

  try {
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: '/posts',
      ...(file.type.includes('image') && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    })

    console.log('Upload success:', uploadResponse)
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}
