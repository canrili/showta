<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">

const props = withDefaults(defineProps<{
  type: string
  prefixIcon?: string
  suffixIcon?: string
  modelValue: string | number
}>(), {
  type: 'text',
  prefixIcon: '',
  suffixIcon: '',
})

const attrs = useAttrs()

// 是正在中文拼音输入标识
const isComposing = ref<boolean>(false)

const emit = defineEmits(['update:modelValue', 'blur'])

// input
const updateValue = (e: Event) => {
  // 中文拼音正在输入中，直接return
  if (isComposing.value)
    return

  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
// 中文拼音开始输入
const compositionstart = (e: Event) => {
  isComposing.value = true
}
// 中文拼音输入结束
const compositionend = (e: Event) => {
  isComposing.value = false
  updateValue(e)
}
// 失去焦点
const onBlur = (e: Event) => {
  emit('blur', e)
}
</script>
<template>
  <div class="st-input">
    <div v-if="!!props.prefixIcon" class="st-input__prefix rounded-r-none">
      <StIcon :name="props.prefixIcon" />
    </div>
    <input
      :type="type"
      class="st-input__inner"
      v-bind="attrs"
      :class="{'rounded-l-none': !!props.prefixIcon, 'rounded-r-none': !!props.suffixIcon}"
      :value="props.modelValue"
      @compositionstart="compositionstart"
      @input="updateValue"
      @compositionend="compositionend"
      @blur="blur"
    >
    <div v-if="!!props.suffixIcon" class="st-input__prefix rounded-l-none">
      <StIcon :name="props.suffixIcon" />
    </div>
  </div>
</template>
