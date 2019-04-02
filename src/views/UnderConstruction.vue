<template>
  <div id="container">
    <img src="../assets/dozer.png" id="dozer">
    <h1 class="noselect">This site is under construction</h1>
    <div id="dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Construction",
  loopTitle: "Building"
};
</script>

<style lang="scss" scoped>
@import "../styles/_construction.scss";

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>


