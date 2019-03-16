<template>
  <div class="container">
    <img src="../assets/dozer.png" id="dozer">
    <h1>This site is under construction</h1>
  </div>
</template>

<script>
export default {
  name: "Construction",
  loopTitle: "Building"
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 60px);
  }
}

h1::after {
  content: "...";
  margin-left: 5px;
  color: #ffe169;
}

#dozer {
  width: 150px;
  padding-bottom: 75px;
  margin-right: 40px;
}
</style>


