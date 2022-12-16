import { defineStore } from 'pinia'
import {InventoryService} from '@/views/DraggbleScreen/components/InventoryComponent/services/InventoryService'
import { useItemInfoStore } from '@/views/DraggbleScreen/components/ItemInfoComponent/stores/ItemInfoStore.js'
import {watch} from 'vue'
export const useInventoryStore = defineStore('inventory', {

  state: () => {
    return { 
        inventory: InventoryService.getInventoryData()
     }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    onDragStart(e,idx) {  
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('id', String(idx))
    },
    async tryOpenInfo(cell){
      const ItemInfoStore =  useItemInfoStore()
      if (cell.item!==null) {
        ItemInfoStore.openInfo(cell.item)
      } else {
        ItemInfoStore.closeItemInfo()
      }
    },
    deleteById(id,value) {
      if (value) {
        const findedItem = this.inventory.find(el=>el.item?.id === id).item
        if (findedItem.value <= Number(value)) {
          //если мы отнимем полностью, удалим элемент
          this.inventory = this.inventory.map(el=>{
            if (el.item?.id === id) {
              return {...el,item: null}
            } else {
              return {...el}
            }
          }) 
        } else {
          //если мы не полностью все отнимем
          findedItem.value -=value
        }


      }
    },
    
    initStore() {
      watch(() => this.inventory, (state) => {
        InventoryService.setInventoryData(state)
      },{deep:true})
    },
    onDrop(e,CellId) {
      const itemId = Number(e.dataTransfer.getData('id'))
      this.insertingToCell(CellId, itemId)
    }, 
    insertingToCell(CellId,itemId) {
        const choosedItemCell = this.inventory.find(el=>el.item?.id === itemId)
        const choosedCell = this.inventory.find(el=>el.id ===CellId)
        
        if (choosedCell.item ===null) {
          //если в ячейке не было элемента до 
          choosedCell.item=choosedItemCell.item
          choosedItemCell.item =null
        } else  {
          //если в ячейке был элемент то мы свапнем местами их
          let tempVal = {...choosedItemCell.item}
          choosedItemCell.item = {...choosedCell.item}
          choosedCell.item = {...tempVal}
        }

    }, 
    deleteItem(id) {

    }
    // increment() {
    //   this.count++
    // },
  },
})