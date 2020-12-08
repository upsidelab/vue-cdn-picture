const graphCmsBase = 'https://media.graphcms.com/'

export function imageUrl (imageHandle, format, width, height) {
  return `${graphCmsBase}resize=w:${width},h:${height},fit:crop/output=format:${format}/compress/${imageHandle}`
}
