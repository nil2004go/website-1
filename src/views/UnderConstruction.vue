<template>
  <div id="container">
    <div v-konami="easterEgg"></div>
    <div id="assets">
      <img src="../assets/dozer.png" id="dozer">
      <h1 class="noselect">This site is under construction</h1>
      <div id="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Construction",
  loopTitle: "Building",
  methods: {
    easterEgg() {
      const speed = 15;
      let dozer = document.getElementById("dozer");
      dozer.style.position = "relative";

      let x = 0;
      let i = 1;

      let velF = 0.1;
      let accF = 0.02;
      let velB = 0.1;
      let accB = 0.01;

      var id = setInterval(() => {
        var pos = x + "px";

        if (i < 30) {
        } else if (i < 90) {
          x += velB;
          velB += accB;
        } else if (i < 150) {
          x += velB;
          velB -= accB;
        } else if (i < 180) {
          
        }
        else {
          x -= velF;
          velF += accF;
        }

        dozer.style.left = pos;

        i++;
        if (i > 1000) clearInterval(id);
      }, 100 / speed);
    }
  }
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


