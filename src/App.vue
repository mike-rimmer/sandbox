<template>
  <div>
    <div class="container">
      <div class="inventory">
        <CarInventory/>
       </div> 
      <div v-show="showCart">
        <SalesCart/>
      </div> 
         <button  v-show="$store.state.selectedItems.length"
         @click="showCart = !showCart"
        >Go To Cart
        </button>
   </div>
  </div>
</template>

<script>
// import simple from '@/components/simple.vue';
// import vuex101 from '@/components/vuex101.vue';

import CarInventory from '@/components/CarInventory.vue';
import SalesCart from '@/components/SalesCart.vue';
export default {
components:{
  CarInventory,
  SalesCart
},

computed:{

},

data(){
  return{
   showCart:false,
  }
}

}
</script>

<style scoped>
.container{
  display: flex;
}

.cart{
  flex:50%
}

inventory{
  flex:50%;
}
</style>