<template>
<div>
  <div>
    <span>
      <slot :users="users">{{user.name}}></slot>
    </span>
  </div>
  <div>
    <slot>Default Current User Slot</slot>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: "Mike Rimmer calling from Mother Ship" }
    };
  }
};
</script>

<style scoped>
</style>