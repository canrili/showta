<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  precision?: string | number
  modelValue: string | number
}>(), {
  precision: '',
})

const attrs = useAttrs()

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

const setCurrentValue = (value: number | string) => {
  const oldValue = data.inputValue

  if (value === oldValue)
    return

  const newValue = Number(value).toFixed(correctPrecision.value)
  data.userInput = null
  emit('update:modelValue', newValue)
  emit('input', newValue)
  emit('change', newValue, data.inputValue)
  data.inputValue = newValue
}

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  data.userInput = value
}

const correctPrecision = computed(() => {
  const { precision } = props
  if (typeof precision === 'number')
    return Math.floor(precision)
  else if (typeof precision === 'string')
    return parseInt(precision)
  else return 0
})

const inputChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  const newValue = value !== '' ? Number(value) : ''
  if (!Number.isNaN(newValue) && newValue !== '')
    setCurrentValue(newValue)

  data.userInput = null
}

const emit = defineEmits(['update:modelValue', 'input', 'change'])

</script>
<template>
  <StInput :model-value="displayValue" type="text" v-bind="attrs" @input="updateValue" @change="inputChange" />
</template>
