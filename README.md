
<h2 align="middle">Shopify Draggable Vue</h2>
<p align="middle">
    <a href="https://www.npmjs.com/package/shopify-draggable-vue" target="_blank">
      <img src="https://img.shields.io/npm/v/shopify-draggable-vue.svg?style=flat-square&color=007acc&label=version"
           alt="npm version" /></a>
    <a href="https://github.com/remcoplasmeyer/shopify-draggable-vue" target="_blank">
      <img
        src="https://img.shields.io/github/stars/remcoplasmeyer/shopify-draggable-vue.svg?color=42b883&style=flat-square"
        alt="github stars"/></a>
    <a href="https://github.com/remcoplasmeyer/shopify-draggable-vue/blob/master/LICENSE" target="_blank">
      <img
        src="https://img.shields.io/github/license/remcoplasmeyer/shopify-draggable-vue.svg?style=flat-square&label=license&color=08CE5D"
        alt="license"
      />
    </a>
    <a href="" target="_blank">
      <img src="https://flat.badgen.net/bundlephobia/minzip/shopify-draggable-vue" alt="Minified library size">
    </a>
    <a href="https://github.com/remcoplasmeyer/shopify-draggable-vue" target="_blank"><img
      alt="Vue"
      src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"></a>
</p>
<p align="middle">Shopify Draggable Vue</p>
<p align="middle"><a href="https://todo"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Shopify Draggable Vue Demo"></a></p>

## 🔥 Features

* todo

## ⚙️ Installation

```sh
npm i @hips/shopify-draggable-vue
```

## 📄 Documents

* [**todo**](https://github.com/remcoplasmeyer/shopify-draggable-vue/blob/master/README.md)

## 🚀 How to use

```vue
<template>
  <div>todo</div>
</template>
<script>
import { todo } from '@hips/shopify-draggable-vue';

export default {
  name: 'Demo',
  components: {
    todo,
  },
  data: () => ({

  }),
  methods: {

  }
}
</script>
```

## Polyfills

Library use few browser built-ins and *doesn't* include polyfills for them. This ensures you don't include unnecessary polyfills in your code, as it should be the responsibility of the consuming app to include them.

[Vue CLI includes them in babel config by default](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills) but here is a list (in case you what to add them manually):

```
# for core-js@2
es6.array.filter
es6.object.keys
es6.symbol        # optional

# for core-js@3
es.array.filter
es.object.keys
es.symbol         # optional
```

For direct usage in browser consider using <https://polyfill.io/v3/>

## ⚙️ Developments

### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to `@hips/shopify-draggable-vue` or other packages, please write the [issue](https://github.com/remcoplasmeyer/shopify-draggable-vue/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/remcoplasmeyer/shopify-draggable-vue/issues) on GitHub.

## 📝 License

This project is [MIT](https://github.com/remcoplasmeyer/shopify-draggable-vue/blob/master/LICENSE) licensed.
