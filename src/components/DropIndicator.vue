<template>
  <transition name='scale'>
    <div
      class='indicator'
      :class='{ "not-allowed": !notAllowed }'
      v-show='show'
    />
  </transition>
</template>

<script>
export default {
  name: 'DropIndicator',

  props: {
    show: Boolean,
    notAllowed: Boolean,
  },
};
</script>

<style lang='scss' scoped>
.indicator {
  width: 12px;
  height: 12px;
  border-radius: 60px;
  background-color: #217ce8;
  left: 50%;
  bottom: -5px;
  margin-top: -5px;
  margin-left: -6px;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  transform: scale(1);
  position: absolute;
  z-index: 2;

  &:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: #217ce8;
    transform: scale(1.7);
    opacity: 0.5;
    border-radius: 60px;
  }
}

.indicator .not-allowed {
  background-color: #f5365c;

  &:after {
    background-color: #f5365c;
  }
}
</style>
