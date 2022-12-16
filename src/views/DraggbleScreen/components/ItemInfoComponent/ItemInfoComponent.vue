<template>
  <div class="item-info"  :class="{'active': ItemInfoStore.isActive}">

  
    <div :style="`background:${ItemInfoStore.openedItem?.color}`" class="item-info__photo"></div>
    <div class="hr"></div>
    <div class="wrapper">
        <div class="ghost"></div>
        <div class="ghost small" v-for="item in 10" :key="item"></div>

    </div>
    <div class="item-info__delete-wrapper">
       <UIInput  v-if="deleteOpen" :placeholder="'Введите количество'" v-model.trim="inputValue " class="item-info__delete-input"/>
        <UIButton v-if="!deleteOpen"  @click="deleteOpen  = true" :isRed="true" :isBlock="true">Удалить предмет</UIButton>
        <div class="item-info__btn-wrapper" v-if="deleteOpen">
            <UIButton @click="deleteOpen  = false" :isBlock="true">Отмена</UIButton>
            <UIButton  @click="deleteCount()" :isBlock="true">Подтвердить</UIButton>
        </div>
    </div>
    <button class="item-info__close" @click="ItemInfoStore.closeItemInfo()">
        <img src="@/assets/img/close.svg"  >
    </button>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useItemInfoStore} from './stores/ItemInfoStore'
import {useInventoryStore} from '@/views/DraggbleScreen/components/InventoryComponent/stores/InventoryStore'
import {UIInput} from '@/UI/inputs/UIInput'
import {UIButton} from '@/UI/buttons/UIButton'

const ItemInfoStore = useItemInfoStore()
const InventoryStore = useInventoryStore()


const deleteOpen = ref(false)
const inputValue = ref('')

const deleteCount=()=>InventoryStore.deleteById(ItemInfoStore.openedItem.id, inputValue.value)



ItemInfoStore.$subscribe(()=>{
    deleteOpen.value=false
    inputValue.value = ''
}), { detached: true }
</script>

<style scoped lang="scss">
.wrapper {
    max-height: 150px;
    overflow: auto;
}
.hr {
    width: 220px;
    margin: 20px;
    height: 1px;
    background: #4D4D4D;
    
}
.ghost {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 8px;
    height: 30px;
    width: 211px;
    margin-bottom: 24px;
    &.small {
        margin-bottom: 16px;
        height: 10px;
    }
}
.item-info {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 250px;
    background: #000;
    transform: translateX(100%);
    background: rgba(38, 38, 38, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #4D4D4D;
    backdrop-filter: blur(8px);
    transition: all .3s;
    &.active {
         transform: translateX(0);
    }
    &__photo {
        width: 130px;
        height: 130px;
        position: relative;
        margin-bottom: 40px;
        margin-top: 55px;
        &::before {
            content: '';
            background: rgba(184, 217, 152, 0.35);
            backdrop-filter: blur(6px);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 7px;
            right: 7px;
        }
    }
    &__delete-wrapper {
        position: absolute;
        padding-top: 20px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(38, 38, 38, 0.6);
        border: 1px solid #4D4D4D;
        backdrop-filter: blur(8px);
    }
    &__btn-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        background: none;
        border: none;
        position: absolute;
        top: 14px;
        right: 14px;
    }
    &__delete-input {
        margin-bottom: 20px;

    }
}
</style>