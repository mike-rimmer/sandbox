<template>
  <div>
  <header>
    <h1>
      <slot name="title">This is Frame Title Slot</slot>
    </h1>
    <h2>
      <slot name="subTitle">This is Frame Sub Title Slot</slot>
    </h2>
  </header>
  <slot>Generic Frame Slot</slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>