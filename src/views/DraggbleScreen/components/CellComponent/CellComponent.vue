<template>
    <div class="item" draggable="true" @dragstart="emit('onDragStart', $event, item?.id)" v-if="item"></div>
    <div class="item__value" v-if="item">{{item.value}}</div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
const emit = defineEmits(['onDragStart'])



</script>

<style lang="scss" scoped>

.item {
    width: 54px;
    height: 54px;
    background: #7FAA65;
    position: relative;
    left: -6px;
    bottom: -6px;
    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        right: -6px;
        top: -6px;
        background: rgba(184, 217, 152, 0.35);
        backdrop-filter: blur(6px);
    }
    &__value {
        position: absolute;
        right: 0;
        bottom: 0;
        border-left: 1px solid #4D4D4D;
        border-top: 1px solid #4D4D4D;
        height: 16px;
        width: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'inter';
        font-weight: 500;
        font-size: 10px;
        border-radius: 6px 0px 0px 0px;
        color: rgba($color: #fff, $alpha: .4);
    }
}
</style>