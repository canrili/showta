<script setup lang="ts">

interface Prop{
  name: string
  color?: string
  box: boolean
  boxColor?: string
}

withDefaults(defineProps<Prop>(), {
  name: '',
  color: '#44476a',
  box: false,
  boxColor: 'transparent',
})
</script>
<template>
  <i class="material-icons st-icon" :class="[box ? 'st-icon-box shadow-soft' : '']" :style="{color, 'background-color': box ? boxColor : ''}">
    <slot>
      {{ name ? name : '' }}
    </slot>
  </i>
</template>
<style scoped lang="scss">
@import 'material-design-icons/iconfont/material-icons.css';
@import './StIcon.scss';
</style>
