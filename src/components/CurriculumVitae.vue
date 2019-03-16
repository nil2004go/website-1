<template>
  <div id="cv">
    <div class="errorMsg">
      <h1 class="error">Please view on a desktop computer</h1>
    </div>

    <div class="page" size="A4">
      <h1>Curriculum Vitae</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CV"
};
</script>

<style scoped>
h1 .error {
  margin: 70px;
  font-size: 3em;
}

h1 {
  padding: 70px;
  font-size: 3em;
}

/* Remove shadows and margin on print */
@media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
}

@media screen and (min-width: 801px) {
  .errorMsg {
    display: none;
  }
}

/* Disable mobile users */
@media screen and (max-width: 800px) {
  .page {
    display: none;
  }
}
</style>

