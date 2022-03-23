<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  precision?: string |number
  modelValue: string | number
}>(), {
  precision: '',
})
// 正确的精度
const correctPrecision = ref<number>(0)
const inputValue = ref<string>('')
const formatPrecision = () => {
  const precision = props.precision
  if (typeof precision === 'number' && precision > 0) {
    correctPrecision.value = Math.floor(precision)
  }
  else if (typeof precision === 'string') {
    const match = precision.match(/^\d+$/)
    if (match) {
      const temp = Number(match[0])
      temp > 0 && (correctPrecision.value = Math.floor(temp))
    }
  }
}

const emit = defineEmits(['update:modelValue'])
watchEffect(() => {
  formatPrecision()
  console.log(correctPrecision.value)
  if (correctPrecision.value) {
    const tempModelValue: number = typeof props.modelValue === 'number' ? props.modelValue : Number(props.modelValue)
    inputValue.value = tempModelValue.toFixed(correctPrecision.value)
  }
  else { inputValue.value = props.modelValue.toString() }
  emit('update:modelValue', inputValue.value)
})
</script>
<template>
  <StInput v-model="inputValue" type="text" />
</template>
