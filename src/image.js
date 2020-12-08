export function srcSet (imageHandle, imageUrlFunction, format, baseSize, sizes, fitMode) {
  const sources = sizes.map((size) => {
    const url = imageUrlFunction(
      imageHandle,
      format,
      baseSize.width * size,
      baseSize.height * size,
      fitMode
    )

    return `${url} ${size}x`
  })

  return sources.join(',')
}

export function fallbackImgSrc (imageHandle, imageUrlFunction, format, size, fitMode) {
  return imageUrlFunction(imageHandle, format, size.width, size.height, fitMode)
}
