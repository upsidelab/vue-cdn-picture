# Contentful

[Contentful](https://contentful.com) integration allows you to serve optimized images based on your CMS assets.
To do that, you'll need to pass asset's `url` received from the API as `image-handle` to the component.

For example, this image: [https://images.ctfassets.net/mp2rfrpa94wq/4WphEUlc9OLdHgnZ0RAmWL/ded3b54975b28f4e63867ff8dd51ba33/california.jpeg](https://images.ctfassets.net/mp2rfrpa94wq/4WphEUlc9OLdHgnZ0RAmWL/ded3b54975b28f4e63867ff8dd51ba33/california.jpeg) (4032x3024, 4MB in size), can be displayed in 800x600

```vue
<ContentfulCdnPicture
  image-handle="https://images.ctfassets.net/mp2rfrpa94wq/4WphEUlc9OLdHgnZ0RAmWL/ded3b54975b28f4e63867ff8dd51ba33/california.jpeg"
  :width="800"
  :height="600"
/>
```

<ContentfulCdnPicture
  image-handle="https://images.ctfassets.net/mp2rfrpa94wq/4WphEUlc9OLdHgnZ0RAmWL/ded3b54975b28f4e63867ff8dd51ba33/california.jpeg"
  :width="800"
  :height="600"
/>
