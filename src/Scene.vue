<template>
  <div id="scene">
    <template v-if="ready">
      <template v-if="$store.state.appLoading">
        <div class="d-wide-flex-center">
          <i class="spnr big"></i>
        </div>
      </template>
      <template v-else="">
        <router-view></router-view>
      </template>
    </template>
    <div v-else-if="error" class="d-wide-flex-center p-1">
      <div class="t-align-center color-red app-fs-18">
        Извините, сайт временно не доступен, попробуйте зайти позже
      </div>
    </div>
    <div v-else="" class="d-wide-flex-center">
      <i class="spnr big"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ready: false,
        error: false,
      }
    },
    methods: {
      start() {
        this.ready = true;
      },
    },
    created() {
      this.start();
    },
  }
</script>

<style>
  @import "./static/css/app.css";
</style>