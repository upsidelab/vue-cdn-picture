export function imageUrl (imageUrl, format, width, height, fitMode) {
  const fitValue = fitMode === 'contain' ? 'pad' : 'fill'
  return `${imageUrl}?fm=${format}&w=${width}&h=${height}&fit=${fitValue}`
}
