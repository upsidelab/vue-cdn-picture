# Image classes

To apply custom classes on the image, you'll need to pass them via a `classes` (!) prop, as applying them directly on the `<picture>` tag won't work.

```vue
<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :width="800"
  :height="600"
  classes="custom-image-class"
/>

<style>
.custom-image-class {
  box-shadow: 5px 5px 5px #000;
  filter: contrast(150%);
}
</style>
```

This will result in:

<style>
.custom-image-class {
  box-shadow: 5px 5px 5px #000;
  filter: contrast(150%);
}
</style>

<GraphCmsCdnPicture
  image-handle="AmYDOhxYRoWKk2y8twQW"
  :width="800"
  :height="600"
  classes="custom-image-class"
/>
