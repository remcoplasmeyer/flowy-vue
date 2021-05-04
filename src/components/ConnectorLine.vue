<template>
  <div
    :style="styling"
    class="flowy-line-block overflow-visible"
    :class="{ 'flowy-line-block--vertical': vertical, '-mt-64px': verticalOffset }"
  >
    <svg
      class="flowy-line"
      preserveaspectratio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- line -->
      <path :d="path" stroke="#C5CCD0" stroke-width="2px" />

      <!-- arrow -->
      <path v-if="showArrow" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ConnectorLine',

  props: {
    styling: Object,
    vertical: Boolean,
    verticalOffset: Boolean,
    path: String,
    showArrow: Boolean,
  },
};
</script>

<style lang="scss">
.flowy-line-block {
  position: absolute;
  width: 100%;
  overflow: visible;
  pointer-events: none;

  svg {
    width: -webkit-fill-available;
    overflow: visible;
  }

  &--vertical {
    top: 100%;
  }
}
</style>
