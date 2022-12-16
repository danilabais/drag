<template>
  <div class="sidebar__wrapper common-wrapper">
    <div class="sidebar__img-wrapper">
      <img class="sidebar__img" src="@/assets/img/Img.png" alt="">
      <div class="sidebar__ghost"></div>
      <div class="sidebar__ghost small" v-for="item in 5" :style="`width: ${100 / item * 1.3}%`"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/common/styles.scss');
.sidebar {
  &__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__img {
    margin-top: 18px;
  }
  &__img-wrapper {
    position: relative;
    
  }
  &__ghost {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 8px; 
    height: 20px;
    margin-top: 20px;
    margin-bottom: 24px;
    &.small {
      margin-bottom: 16px;
      margin-left: auto;
      margin-right: auto;
      height: 10px;
    }
  }
}
</style>