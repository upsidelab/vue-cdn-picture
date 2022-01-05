<template>
  <picture>
    <source type="image/webp" :srcset="webpSrcSet" />
    <source type="image/jpeg" :srcset="jpegSrcSet" />
    <img
      :src="fallbackSrc"
      :class="classes"
      :alt="alt"
      :height="height"
      :width="width"
    />
  </picture>
</template>

<script>
import { srcSet, fallbackImgSrc } from './image'

export default {
  name: 'CdnPicture',
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
    imageUrlFunction: {
      type: Function,
      required: true
    },
    fitMode: {
      type: String,
      default: 'contain'
    },
    sizes: {
      type: Array,
      default: () => [1, 2]
    },
    classes: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    webpSrcSet () {
      return srcSet(
        this.imageHandle,
        this.imageUrlFunction,
        'webp',
        { width: this.width, height: this.height },
        this.sizes,
        this.fitMode
      )
    },
    jpegSrcSet () {
      return srcSet(
        this.imageHandle,
        this.imageUrlFunction,
        'jpeg',
        { width: this.width, height: this.height },
        this.sizes,
        this.fitMode
      )
    },
    fallbackSrc () {
      return fallbackImgSrc(
        this.imageHandle,
        this.imageUrlFunction,
        'jpeg',
        { width: this.width, height: this.height },
        this.fitMode
      )
    }
  }
}
</script>
