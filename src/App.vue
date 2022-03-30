<script setup lang="ts">
const email = ref<number>(11.32323)
</script>

<template>
  {{ email }}
  <div class="w-80 mx-auto mt-20">
    <StInputNumber v-model="email" readonly />
  </div>
</template>
<style lang="scss">
@import '~/styles/index.scss';
</style>
