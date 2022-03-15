<script setup lang="ts">
const email = ref<string>('1123')
</script>

<template>
  {{ email }}
  <div class="w-80 mx-auto mt-20">
    <StInput v-model="email" type="text" placeholder="请输入" />
  </div>
</template>
<style lang="scss">
@import '~/styles/index.scss';
</style>
