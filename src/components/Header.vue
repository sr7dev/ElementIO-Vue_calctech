<template>
  <Header fixed>
    <SidebarToggler class="d-lg-none" display="md" mobile/>
    <b-link class="navbar-brand" to="/">
      <img class="navbar-brand-full" src="img/logo.png" width="89" height="25" alt="CoreUI Logo"/>
    </b-link>
    <SidebarToggler class="d-md-down-none" display="lg"/>

    <b-navbar-nav class="ml-auto mr-4">
      <b-nav-item>
        <i class="fa fa-bell-o"></i>
        <b-badge pill variant="danger">3</b-badge>
      </b-nav-item>
      <b-nav-item class="px-3">
        {{profile.first_name}}
      </b-nav-item>
    </b-navbar-nav>
  </Header>
</template>

<script>
  import {mapState} from 'vuex'
  import {Header, SidebarToggler} from '@coreui/vue'

  export default {
    components: {Header, SidebarToggler},
    computed: {
      ...mapState(['profile']),
    },
  }
</script>
