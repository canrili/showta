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
const inputValue = ref<string | number>('')
const attrs = useAttrs()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  return (inputValue.value = value)
}
const handleInputChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  console.log(inputValue.value)
  emit('update:modelValue', inputValue.value)
  inputValue.value = ''
}
const getPrecision = (precision: string | number): number => {
  let temp = 0
  if (!precision)
    return temp

  const isString = typeof precision === 'string'
  if (isString)
    temp = Number(precision)

  else
    temp = precision

  return Number(temp.toFixed())
}

const getModelValue = (value: string | number) => {
  const isString = typeof value === 'string'
  if (isString)
    return Number(value)

  else
    return value
}
watchEffect(() => {
  const precision = getPrecision(props.precision)
  if (precision)
    inputValue.value = Number(getModelValue(props.modelValue).toFixed(precision))
  else
    inputValue.value = getModelValue(props.modelValue)
})
</script>
<template>
  <div class="st-input">
    <input type="number" class="st-input__inner" v-bind="attrs" :value="modelValue" @input="updateValue" @change="handleInputChange">
  </div>
</template>
