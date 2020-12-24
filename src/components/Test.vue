<template>
<div class="modal">
<div class="title">
  <h1><slot name="title">Core Component Title</slot></h1>
</div>
<div class="body">
  <slot name="body">Core Component Body</slot>
</div>
<div class="footer">
  <slot name="footer">Core Component Footer</slot>
</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>