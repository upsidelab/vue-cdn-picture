# Custom Providers

To use a different CDN than the ones supported OOB, you can use the base `CdnPicture` component and provide it with a custom function that will generate a CDN url.

For example, the `GraphCmsCdnPicture` component is defined as follows:

```vue
<template>
  <CdnPicture
    :image-url-function="imageUrlFunction"
    :image-handle="imageHandle"
    :width="width"
    :height="height"
    :fit-mode="fitMode"
    :sizes="sizes"
    :classes="classes"
    :alt="alt"
  />
</template>
```

Where the `imageUrlFunction` is:

```js
const graphCmsBase = 'https://media.graphcms.com/'

export function imageUrl (imageHandle, format, width, height, fitMode) {
  const fitValue = fitMode === 'contain' ? 'clip' : 'crop'
  return `${graphCmsBase}resize=w:${width},h:${height},fit:${fitValue}/output=format:${format}/compress/${imageHandle}`
}
```

You can easily provide your own implementation that will link to your CDN of choice. Also, don't hesitate to open a PR that adds it to [our repository](https://github.com/upsidelab/vue-cdn-picture/), we'll be happy to include it in the upstream.
