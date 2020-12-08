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

<script>
import { imageUrl } from '../integrations/graphcms'

export default {
  name: 'GraphCmsCdnPicture',
  data () {
    return {
      imageUrlFunction: imageUrl
    }
  },
  props: {
    imageHandle: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    fitMode: {
      type: String,
      default: 'contain'
    },
    sizes: {
      type: Array,
      default: () => { [1, 2] }
    },
    classes: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>
