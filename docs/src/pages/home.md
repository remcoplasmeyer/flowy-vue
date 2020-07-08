---
title: Documentation
desc: Vue Flowy makes creating flowchart or hierarchy chart functionality an easy task. Build automation software, mind mapping tools, organisation charts, or simple programming platforms in minutes by implementing the library into your project.
---

Vue Flowy makes creating flowchart or hierarchy chart functionality an easy task. Build automation software, mind mapping tools, organisation charts, or simple programming platforms in minutes by implementing the library into your project.

## Features

- Use Vue components to create a flowchart or hierarchy system
- Easily extendable logic
- Drag and drop events
- Use any component in your node tree, variable widths supported
- (Optional) [Quasar](https://www.quasar.dev) app extension

## Install

### Default / Vue CLI

Install package with npm (or yarn)

`npm i --save @hipsjs/flowy-vue`

Enable plugin and import css

```js
import Vue from "vue";
import FlowyPlugin from "@hipsjs/flowy-vue";
import "@hipsjs/flowy-vue/dist/lib/flowy-vue.css";

Vue.use(FlowyPlugin);
```

### UMD

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@hipsjs/flowy-vue/dist/lib/flowy-vue.css" rel="stylesheet" type="text/css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar/dist/flowy-vue.umd.min.js"></script>
</body>
```

### Quasar

With the Quasar CLI
`quasar ext add flowy`

**OR**

Create a boot file and enable your boot file in quasar.conf.js
`npm i --save @hipsjs/flowy-vue`

```js
import FlowyPlugin from "@hipsjs/flowy-vue";
import "@hipsjs/flowy-vue/dist/lib/flowy-vue.css";

export default ({ Vue }) => {
  Vue.use(FlowyPlugin);
}
```

### Codepen

Click the codepen button in the examples below :)

## Usage

- Use `FlowyNewBlock` component to define blocks can be dragged and how the nodes will render
- Wrap your drag handles with the `FlowyDragHandle` component
- Use `Flowy` component and pass the initial `nodes` and define your logic using the event and method system

The example below uses all current features of Flowy Vue. Quasar was used for the UI components and can be easily replaced with any Vue component.
The `add`, `move`, `remove` events have to be implemented for Flowy Vue to work, the example below implements simple logic using lodash.

It will:

- Add and move nodes to the tree upon drag
- Restrict the upper parent node from being draggable
- Restrict the non-draggable block from being draggable

<doc-example title="Example" file="home/demo" />

## API

### Flowy

<doc-api file="Flowy" />

### FlowyNewBlock

<doc-api file="FlowyNewBlock" />

### FlowyDragHandle

<doc-api file="FlowyDragHandle" />
