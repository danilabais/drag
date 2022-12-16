<template>
<div class="container">
  <div class="wrapper">
    <SidebarComponent class="draggble__sidebar"/>
    <InventoryComponent class="draggble__inventory"/>
    <UIGhostBig class="draggble__ghost"/>
  </div>
 </div>
</template>

<script setup>
import {SidebarComponent} from '@/views/DraggbleScreen/components/SidebarComponent'
import {InventoryComponent} from '@/views/DraggbleScreen/components/InventoryComponent'
import {UIGhostBig} from '@/UI/ghosts/UIGhostBig'

</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  max-width: 785px;
  width: 100%;
  display: grid; 
  grid-template-columns: 236px auto;
  grid-template-rows: 500px 72px;
  gap: 24px;
}
.draggble {
  &__ghost {
    grid-area: 2 / 1 / 3 / 3;
  }
}
</style>