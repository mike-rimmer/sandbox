<template>
  <div id="header">
    <span onclick="change-title">{{title}}</span>
    <button>Change Title</button>
  </div>
</template>

<script lang="ts">
import bus from "./../main";

export default {
  data() {
    return {
      title: "Event Bus Demo"
    };
  },
  methods: {
    changetitle() {
      bus.$emit("change-title", "My New Title");
    }
  }
};
</script>

<style scoped>
header{
  display:flex;
  background-color:bisque;
  text-align: center;
  height:100px;
}
</style>