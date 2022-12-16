class InventoryServiceClass {
    //в этом сервисе можно было бы дернуть данные с сервера используя апи и аксиос, но 
    // но вашему тз нужно сипользовать localstorage
    getInventoryData() {
        if (localStorage.getItem('data')) {
            return (JSON.parse(localStorage.getItem('data')))
        }
        return [{id:0, item: null},{id:1,item: {color: '#6a76e259', value: 20, id: 23} },{id:2,item: null},{id:3, item: {color: '#AA9765', value: 2, id: 21}},{id:4, item: null},{id:6, item: null},{id:7, item: null},{id:8, item: null},{id:9, item: null},{id:10, item: null},{id:11, item: {color: '#7FAA65', value: 6, id: 12} },{id:12, item: null},{id:5, item: null},{id:13, item: null},{id:14, item: null},{id:15, item: null},{id:16, item: null},{id:17, item: null},{id:18, item: null},{id:19, item: null},{id:20, item: null},{id:21, item: null},{id:22, item: null},{id:23, item: null},{id:24, item: null}]
    }
    setInventoryData(state) {
        if (state) {

            localStorage.setItem('data', JSON.stringify(state   ));
        }
    }
}

export const InventoryService = new InventoryServiceClass()