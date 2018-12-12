<template>
  <div id="scene">
    <div v-if="$store.state.appError"
         class="fixed-top h-100 d-flex align-items-center justify-content-center bg-white p-4">
      <div class="font-xl font-weight-bold text-danger">
        Извините, сайт временно не доступен, попробуйте зайти позже
      </div>
    </div>
    <template v-else-if="ready">
      <router-view></router-view>
      <Modal v-if="$store.state.modal"></Modal>
    </template>
    <div v-else="" class="fixed-top h-100 d-flex align-items-center justify-content-center bg-white">
      <i class="spnr big"></i>
    </div>
  </div>
</template>

<script>
  import Modal from './components/common/modals/Modal'

  export default {
    components: {Modal},
    data() {
      return {
        ready: true,
      }
    },
  }
</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>