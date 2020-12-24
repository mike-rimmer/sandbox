<template>
  <div>
    <div class="container">
      <div class="inventory">
        <CarInventory/>
       </div> 
      <div v-show="showCart">
        <SalesCart/>
      </div> 
         <button  v-show="selectedItems.length"
         @click="toggleCart"
        >Go To Cart
        </button>
   </div>
  </div>
</template>

<script>
// import simple from '@/components/simple.vue';
// import vuex101 from '@/components/vuex101.vue';
import {mapState} from 'vuex';
import CarInventory from '@/components/CarInventory.vue';
import SalesCart from '@/components/SalesCart.vue';
export default {
components:{
  CarInventory,
  SalesCart
},

computed:{
  ...mapState(['inventory', 'selectedItems', 'showCart']),

//  To toggle state in a vuex store use a get/set object


  },

data(){
  return{
  //  showCart:false,
  }
},

methods:{
  toggleCart(){
    this.$store.commit('toggleCart')
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