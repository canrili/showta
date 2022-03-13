<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  prefixIcon?: string
  suffixIcon?: string
}>(), {
  prefixIcon: '',
  suffixIcon: '',
})

const attrs = useAttrs()
</script>
<template>
  <div class="st-input">
    <div v-if="!!props.prefixIcon" class="st-input__prefix rounded-r-none">
      <StIcon :name="props.prefixIcon" />
    </div>
    <input
      type="text" value=""
      class="st-input__inner"
      v-bind="attrs"
      :class="{'rounded-l-none': !!props.prefixIcon, 'rounded-r-none': !!props.suffixIcon}"
    >
    <div v-if="!!props.suffixIcon" class="st-input__prefix rounded-l-none">
      <StIcon :name="props.suffixIcon" />
    </div>
  </div>
</template>
