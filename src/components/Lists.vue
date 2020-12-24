<template>
  <div>
    <ul>
      <li v-for="i in List"
      :key='i'
      >{{i}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      List:["Finnegan","Fletcher","Lilly","Archer"]
    }
  },
  components: {
  }
};
</script>

<style scoped>

</style>