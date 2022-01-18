# Vue CDN Picture

## Documentation

For a full documentation visit: [https://docs.upsidelab.io/vue-cdn-picture/](https://docs.upsidelab.io/vue-cdn-picture/)

## Getting Started

Modern CDNs and CMS systems provide ability to transform images that are to be served to the user. This makes it easier to optimize bandwidth usage, serve images in next-gen formats and provide multiple versions for HiDPI displays.

When it comes to the HTML markup, it gets a bit tricky. You still need to provide fallback for browsers that don't support `.webp` or `picture` HTML tag.

Vue CDN Picture is a simple library that makes it as simple as using the regular `img` tag.
It's designed to work with CDNs and request images in optimal form, to optimize network usage.

## Installing the library

```bash
yarn add @upsidelab/vue-cdn-picture
```

## Example use

```vue
<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :width="800"
  :height="600"
/>
```

will result in the following HTML markup:

```html
<picture>
  <source type="image/webp" srcset="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:webp/compress/AmYDOhxYRoWKk2y8twQW 1x,https://media.graphcms.com/resize=w:1600,h:1200,fit:clip/output=format:webp/compress/AmYDOhxYRoWKk2y8twQW 2x">
  <source type="image/jpeg" srcset="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW 1x,https://media.graphcms.com/resize=w:1600,h:1200,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW 2x">
  <img src="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW" height="600" width="800">
</picture>
```
