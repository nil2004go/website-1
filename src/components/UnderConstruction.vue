<template>
  <div class="container">
    <h1>This site is under construction</h1>
  </div>
</template>

<script>
export default {
  name: "Construction"
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 60px);
}

h1::after {
  content: "...";
  color: yellow;
}
</style>


