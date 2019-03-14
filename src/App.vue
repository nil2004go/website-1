<template>
  <div id="app">
    <Construction/>
  </div>
</template>

<script>
import Construction from "./components/UnderConstruction.vue";

export default {
  name: "app",
  components: {
    Construction
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
