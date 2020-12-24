<template>
  <div>
    <h1>Very Simple Vuex</h1>
    <button @click='addOneToCounter'>Add One</button>
    <p>My counter is {{showCounter}}</p>
    <p>Another way to access through Getters {{showCtr}}</p>
    <p>Yet another way to access through mapGetters calling wooblepoop{{wooblypoop}}</p>
    <h3>Showing How to access the Fruit array in the Vuex Store</h3>
    <div>
      <p v-for="(fruit, index) in fruits" :key= 'index'>
        {{index}} {{fruit}}
      </p>
    </div>
    <div>

      <input type="text" name="capture" id="fruity" placeholder="Add Fruit" v-model = value>
      <button @click="addToArray">Click to Add</button>
      {{value}}
    
    </div>
  </div>
</template>

<script>
   import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
  name:'simple',
  data(){
    return{
      value:''
    }
  },

  computed:{
   ...mapGetters(['showCtr', 'showCounter', 'wooblypoop', 'fruits']),

  //  fruits(){
  //    return this.$store.getters.fruits
  //  }
  // wooblypoop(){
  //   return this.$store.getters.wooblypoop
  // },

  // showCounter(){
  //   return this.$store.state.ctr 
  // },

  // showCtr(){
  //   return this.$store.getters.showCtr
  // }
  },

  methods:{
    ...mapActions(['addOneToCounter', 'addFruit']),
    // addToCounter(){
    // Here we are calling the mutation directly with commit... Caution not recommended since Vuex does not provide any means to track the event. By using 'dispatch' vuex provides a nice way to track the event by time
    //  this.$Store.commit('addOneToCounter')
    // },


    // addOneToCounter(amount){
    //   // We use dispatch to initiate and action
    //   this.$store.dispatch('addOneToCounter', amount)
    // },

    // addToArray(){
    //   this.$store.dispatch('addFruit', this.value)
    //   this.value = ''
    // }

    addToArray(){
      this.addFruit(this.value)
    }
    
    // addNumberToCounter(amount){
    //   // passing values to the store are done by using a second parameter 
    //   this.$store.dispatch('addOneToCounter', amount)
    // }
  }
  }


</script>

<style lang="scss" scoped>

</style>