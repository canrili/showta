<script setup lang="ts">

interface Prop{
  name: string
  color?: string
  box: boolean
  boxColor?: string
}

withDefaults(defineProps<Prop>(), {
  name: '',
  color: '#000',
  box: false,
  boxColor: 'transparent',
})
</script>
<template>
  <i class="material-icons st-icon" :class="[box ? 'st-icon-box' : '']" :style="{color, 'background-color': box ? boxColor : ''}">
    <slot>
      {{ name ? name : '' }}
    </slot>
  </i>
</template>
<style scoped lang="stylus">
@import 'material-design-icons/iconfont/material-icons.css';
.st-icon
  font-size: 20px;
  user-select: none;
  &-box
    border-radius: 5px;
    padding: 8px;

</style>
