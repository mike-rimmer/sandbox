<template>
  <div class = 'salescart'>
      <h3>Sales Cart</h3>
      <ul>
      <li v-for = "item in selectedItems" 
      :key= item.name>
      <span>
          {{item.name}}
      </span>
      <span>
          {{item.price | convert2Dollars}}
          </span> 
      </li> 
      </ul>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
computed: { ...mapState(['inventory', 'selectedItems', 'showCart'])},

filters:{
    convert2Dollars(value){
        return `$ ${value.toString()}.00`
    }
},



 data(){
     return{
      
     }
 },

}
</script>

<style scoped>

ul{
    padding:1em;
    min-width: 400px;
}


li{
    display:flex;
    justify-content:space-between;
    margin-top:10px;
    background-color:lightgrey;
}

.salescart{
    background-color: cornsilk;
    padding:.5em;
    border-style: solid;
    margin-bottom:10px;
    width:auto;
}


 
</style>>


