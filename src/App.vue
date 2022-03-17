<script setup lang="ts">
const email = ref<number>(11)
</script>

<template>
  {{ email }}
  <div class="w-80 mx-auto mt-20">
    <StInputNumber v-model="email" placeholder="please input" precision="2"/>
  </div>
</template>
<style lang="scss">
@import '~/styles/index.scss';
</style>
