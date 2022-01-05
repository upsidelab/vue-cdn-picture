# HiDPI sizes

By default generated srcset will include 1x and 2x versions of the image.
To change that, update the sizes array:

```vue
<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :sizes="[1, 2, 3]"
  :width="800"
  :height="600"
/>
```

This will result in the following HTML:

```html
<picture>
  <source type="image/webp" srcset="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:webp/compress/AmYDOhxYRoWKk2y8twQW 1x,https://media.graphcms.com/resize=w:1600,h:1200,fit:clip/output=format:webp/compress/AmYDOhxYRoWKk2y8twQW 2x,https://media.graphcms.com/resize=w:2400,h:1800,fit:clip/output=format:webp/compress/AmYDOhxYRoWKk2y8twQW 3x">
  <source type="image/jpeg" srcset="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW 1x,https://media.graphcms.com/resize=w:1600,h:1200,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW 2x,https://media.graphcms.com/resize=w:2400,h:1800,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW 3x">
  <img src="https://media.graphcms.com/resize=w:800,h:600,fit:clip/output=format:jpeg/compress/AmYDOhxYRoWKk2y8twQW" height="600" width="800">
</picture>
```

<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :sizes="[1, 2, 3]"
  :width="800"
  :height="600"
/>
