<template>
  <div>
    hello from template!
  </div>
</template>
<script>
  import constants from "../constants";
  import utils from "../utils";

  export default {
    data() {
      return {
        utils, constants,
      };
    },
  }
</script>
<style scoped>
</style>
