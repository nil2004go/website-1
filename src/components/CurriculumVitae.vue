<template>
  <div id="cv">
    <div class="errorMsg">
      <h1 class="error">Please view on a desktop computer
        <br>🤷🏻‍♂️
      </h1>
    </div>
    <div class="page" size="A4">
      <img src="../assets/profile.jpg" alt="Et billede af mig" id="profilepic">
      <h1 id="name">MIKKEL O. LAURSEN</h1>
      <h1 id="title">IKT-STUDERENDE</h1>

      <div id="contact">
        <img src="../assets/social/email.png" alt="E-mail">
        <p>m@ikkel.dk</p>
        <img src="../assets/social/phone-book.png" alt="Phone">
        <p>+45 26 78 90 90</p>
        <img src="../assets/social/linkedin.png" alt="LinkedIn">
        <p>mikkellaursen</p>
      </div>

      <div id="experience">
        <h1>ERFARING</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV"
};
</script>

<!--
<style module>
body {
  background: #fcf6f1 !important;
}
</style>
-->

<style lang="scss" scoped>
@import "../styles/_cv.scss";
</style>

