<template>
  <Header fixed>
    <b-container>
      <b-navbar toggleable="lg" class="w-100">
        <b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>
        <b-navbar-brand href="#/">
          <img class="navbar-brand-full" src="img/logo.png" width="134" height="31" alt="CoreUI Logo">
          <!--<img class="navbar-brand-minimized" src="img/logo.png" width="134" height="31" alt="CoreUI Logo">-->
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="font-weight-bold ml-auto">
            <b-nav-item class="px-2">
              ГЛАВНАЯ
            </b-nav-item>
            <b-nav-item class="px-2">
              О НАС
            </b-nav-item>
            <b-nav-item class="px-2">
              КУРСЫ
            </b-nav-item>
            <b-nav-item class="px-2">
              ЛЕТНЯЯ ШКОЛА
            </b-nav-item>
            <b-nav-item class="px-2">
              КОНТАКТЫ
            </b-nav-item>
            <b-nav-item class="px-2">
              ВАКАНСИИ
            </b-nav-item>
            <b-nav-item class="px-2">
              ВОЙТИ
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </Header>
</template>

<script>
  import {Header} from '@coreui/vue'

  export default {
    components: {Header},
    computed: {
      profile() {
        return this.$store.state.profile;
      },
    },
  }
</script>