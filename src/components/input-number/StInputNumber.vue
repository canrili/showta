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
const data = reactive<{
  inputValue: number | string
  userInput: number | string | null
}>({
  inputValue: props.modelValue,
  userInput: null,
})

const displayValue = computed(() => {
  const { inputValue, userInput } = data
  if (userInput !== null)
    return userInput

  let currentValue: number | string = inputValue

  if (typeof currentValue === 'number') {
    if (Number.isNaN(currentValue))
      return ''

    if (correctPrecision.value)
      currentValue = currentValue.toFixed(correctPrecision.value)
  }

  return currentValue
})

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

</script>
<template>
  <StInput :model-value="displayValue" type="text" />
</template>
