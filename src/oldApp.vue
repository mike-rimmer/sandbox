<template>
<div class="container">
<CarInventory v-show="! showCart" @DisplayCart="displayCart" />
<SalesCart v-show = 'showCart' />
</div>

</template>
<script>
import CarInventory from '@/components/CarInventory.vue';
import SalesCart from '@/components/SalesCart.vue';
export default {
  data(){
    return{
      showCart:false
    }
  },

  components: {
    CarInventory,
    SalesCart
  },

  methods: {
    displayCart(){
      alert('In Parent')
      this.showCart = true
    }
}

};
</script>


<style scoped>
  .constainer{
    display:flex
  }

</style>
