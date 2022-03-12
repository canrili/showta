<script setup lang="ts">

interface Prop{
  name: string
  color?: string
}

withDefaults(defineProps<Prop>(), {
  name: '',
  color: '#44476a',
})
</script>
<template>
  <i class="material-icons st-icon" :style="{color}">
    <slot>
      {{ name ? name : '' }}
    </slot>
  </i>
</template>
