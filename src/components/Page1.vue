<template>
  <Test>
    <template #title>Page One</template>
    <template #body>
      <ul>
        <li v-for="i in 10" :key="i">List Item {{i}}</li>
      </ul>
    </template>
    <template #footer>Page One Footer Text</template>
  </Test>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  components: {
    Test
  }
};
</script>

<style scoped>
.page1 {
  background-color: red;
}
</style>
