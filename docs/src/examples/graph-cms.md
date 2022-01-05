# GraphCMS

[GraphCMS](https://graphcms.com) integration allows you to serve optimized images based on your CMS assets.
To do that, you'll need to pass asset's `handle` field received from the GraphQL API as `image-handle` to the component.

For example, this image: [https://media.graphcms.com//AmYDOhxYRoWKk2y8twQW](https://media.graphcms.com//AmYDOhxYRoWKk2y8twQW) (4032x3024, 4MB in size), can be displayed in 800x600

```vue
<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :width="800"
  :height="600"
/>
```

<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :width="800"
  :height="600"
/>
