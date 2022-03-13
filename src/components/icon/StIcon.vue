<script setup lang="ts">

const props = withDefaults(defineProps<{
  name: string
  color?: string
}>(), {
  name: '',
  color: '#44476a',
})
</script>
<template>
  <i class="material-icons st-icon" :style="{'color': props.color}">
    <slot>
      {{ props.name ? props.name : '' }}
    </slot>
  </i>
</template>
