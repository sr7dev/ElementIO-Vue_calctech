<template>
  <div id="scene">
    <template v-if="ready">
      <router-view></router-view>
    </template>
    <div v-else-if="error" class="d-wide-flex-center p-1">
      <div class="pos-fix pos-top-0 pos-left-0 pos-zi-1 d-wide-flex-center t-align-center color-red app-fs-20">
        Извините, сайт временно не доступен, попробуйте зайти позже
      </div>
    </div>
    <div v-else="" class="pos-fix pos-top-0 pos-left-0 pos-zi-1 d-wide-flex-center">
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
  /* CoreUI Icons Set */
  /*@import '~@coreui/icons/css/coreui-icons.min.css';*/

  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';

  /* Import Simple Line Icons Set */
  /*$simple-line-font-path: '~simple-line-icons/fonts/';*/
  /*@import '~simple-line-icons/scss/simple-line-icons.scss';*/

  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  // Import Main styles for this application
  @import 'assets/scss/style';
</style>