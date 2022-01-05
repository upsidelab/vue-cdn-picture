const graphCmsBase = 'https://media.graphcms.com/'

export function imageUrl (imageHandle, format, width, height, fitMode) {
  const fitValue = fitMode === 'contain' ? 'clip' : 'crop'
  return `${graphCmsBase}resize=w:${width},h:${height},fit:${fitValue}/output=format:${format}/compress/${imageHandle}`
}
