<template>
  <button class="btn" :class="{'isRed': isRed}" ><slot/></button>
</template>

<script setup>
defineProps({
  isRed: {
    type: Boolean,
    defualt: false,
  }

})
</script>


<style lang="scss" scoped>
.btn {
  font-family: 'sf';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 11px;
  background: #FFFFFF;
  color: #2D2D2D;
  border-radius: 8px;
  border: none;
  outline: none;
  display: block;
  width: calc(100% - 40px);
  margin: 20px;
  margin-top: 0;
  &.isRed {
    background: #FA7272;
    color: #FFFFFF;
  }

}
</style>