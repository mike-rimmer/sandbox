<template>
  <div id = 'mikesEmail'>
    <h1>This is a props Example</h1>
    <h1>Here is the internal post <p>{{mail}}</p></h1>
    <button @click="sendReceipt">Msg Received</button>
    <p>Hi there</p>
     <a href="http://www.cissec.com">Internal Link</a>
    <p>Slot goes below</p>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['mail'],
  data(){
    {
      return{
     msgRx : false

    }
    } 
  },
  methods:{
    sendReceipt(){
      console.log("Asked to Send Receipt");
      this.$emit("msgreceived")
    }
  }

 
}
</script>

<style scoped>
#mikesEmail{
   padding:1em;
  background-color:lightgreen
}
</style>