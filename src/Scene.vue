<template>
  <div id="scene">
    <template v-if="ready">
      <router-view></router-view>
    </template>
    <div v-else-if="error" class="fixed-top h-100 d-flex align-items-center justify-content-center bg-white p-4">
      <div class="font-xl font-weight-bold text-danger">
        Извините, сайт временно не доступен, попробуйте зайти позже
      </div>
    </div>
    <div v-else="" class="fixed-top h-100 d-flex align-items-center justify-content-center bg-white">
      <i class="spnr big"></i>
    </div>
  </div>
</template>

<script>
  import dict from './dict'

  export default {
    data() {
      return {
        ready: false,
        error: false,
      }
    },
    methods: {
      start() {
        // stg.set('auth_token', '');
        dict.reload().then(() => this.$store.dispatch('refreshProfile')).then(() => {
          this.ready = true;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.ready = true;
          } else {
            this.error = true;
            console.log(error);
          }
        });
      },
    },
    created() {
      this.start();
    },
  }
</script>

<style lang="scss">
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';

  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  // Import Main styles for this application
  @import 'assets/scss/style';
</style>