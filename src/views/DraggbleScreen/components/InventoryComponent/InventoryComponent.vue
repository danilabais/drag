<template>
  <div class="inventory__wrapper common-wrapper"  >
    <div @click="open(cell)" @dragover.prevent @dragenter.prevent v-for="cell in InventoryStore.inventory" @drop="InventoryStore.onDrop($event,cell.id)" :key="cell.id" class="inventory__cell">
        <CellComponent @onDragStart="InventoryStore.onDragStart" :item="cell.item"/>
    </div>
    <ItemInfoComponent />
  </div>
</template>

<script setup> 
import {ref} from 'vue'
import {CellComponent} from '@/views/DraggbleScreen/components/CellComponent'
import {useInventoryStore} from '@/views/DraggbleScreen/components/InventoryComponent/stores/InventoryStore'
import {ItemInfoComponent} from '@/views/DraggbleScreen/components/ItemInfoComponent'
const InventoryStore = useInventoryStore()

InventoryStore.initStore()
const open=(cell)=>InventoryStore.tryOpenInfo(cell)



</script>

<style lang="scss" scoped>
@import url('@/common/styles.scss');

.inventory {
    &__wrapper {
        position: relative;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-template-rows: repeat(5,1fr);
        overflow: hidden;

    }
    &__cell {
        border-bottom: 1px solid #4D4D4D;
        border-right: 1px solid #4D4D4D;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &:hover {
            background: #2F2F2F;
        }
        &:nth-child(5n) {
            border-right: none;
        }
        &:nth-child(n+21) {
            border-bottom: none;
        }
    }
    

}
</style>