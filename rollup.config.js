import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/build.esm.js'
    },
    external: ['vue'],
    plugins: [
      vue({
        css: true,
      }),
      commonjs(),
      buble(),
      terser({
        output: {
          ecma: 6
        }
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/build.ssr.js'
    },
    external: ['vue'],
    plugins: [
      vue({
        css: true,
        template: {
          optimizeSSR: true
        }
      }),
      commonjs(),
      buble()
    ]
  },
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/build.js',
      globals: {
        'vue': 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
      vue({
        css: true,
        template: {
          optimizeSSR: true
        }
      }),
      commonjs(),
      buble(),
      terser({
        output: {
          ecma: 5,
        },
      })
    ]
  }
]
