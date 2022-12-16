import { defineStore } from 'pinia'

export const useItemInfoStore = defineStore('iteminfo', {
  state: () => {
    return { 
        isActive: false,
        openedItem: null,
     }
  },
  actions: {
    closeItemInfo() {
        this.isActive = false
        this.openedItem = null
    },
    openItemInfo(item) {
        this.openedItem = {...item}
        this.isActive = true
    },
    async openInfo(item){
        if (this.openedItem) {
            this.closeItemInfo()
            setTimeout(()=>{
            this.openItemInfo(item)
           },200)
            return
        } 
        
        this.openItemInfo(item)
    }
  },
})