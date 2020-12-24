<template>
<div class="container">
  <div
   :style= "{backgroundColor: $store.state.ctrColor}"
   class ="card">
    <h1>
    {{$store.state.ctr}}</h1>
    <button @click="$store.dispatch('increment')">+</button>
    <button @click="$store.dispatch('decrement')">-</button>
  </div>
  <input type="text" placeholder="Enter a color for the counter" v-model.lazy= "ctrColor" >
</div>
</template>

<script>
  export default {
    name: 'vuex101',
    computed:{
      ctrColor:{
        get(){
          return this.$store.state.ctrColor
        },
        set(ctrColor){
          console.log(ctrColor)
          this.$store.dispatch("setCtrColor", ctrColor)
        },
      }
    }
  }
</script>
<style scoped>
.container{
  display:flex;
  flex-direction:column;
  align-items :space-around;
  width:50%;
  height:400px;
  margin:auto;
  background-color:blanchedalmond;

}

.card{
  display:flex;
  padding:1em;
  width:300px;
  background-color:azure;
  box-shadow: 5px 5px 5px rgba(40,40,40,.7);
  flex-direction: column;
  align-items:center;
  margin:auto;

}
 h3, button{
   font-size:24px;
 }

button{
  width:70px;
  margin:5px;
}

input{
  align-self:start;
  margin:1em;
}
</style>