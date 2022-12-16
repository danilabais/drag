<template>
  <input :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)" class="input" :placeholder="placeholder" type="nubmer" />
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.input {
  max-width: calc(100% - 60px);
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: red;
  outline: none;
  color: #ffffff;
  background: #262626;
  padding: 12px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin: 20px;
  margin-top: 0;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
}
</style>