<template>
  <div class="app">
    <Header fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="/">
        <img class="navbar-brand-full" src="img/logo.png" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/logo.png" width="30" height="25" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg"/>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="fa fa-bell-o"></i>
          <!--<b-badge pill variant="danger">3</b-badge>-->
        </b-nav-item>
        <b-nav-item class="d-md-down-none px-3">
          Администратор
        </b-nav-item>
      </b-navbar-nav>
    </Header>
    <div class="app-body">
      <Sidebar fixed>
        <SidebarNav></SidebarNav>
      </Sidebar>
      <main class="main">
        <div class="container-fluid">
          hello world
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import {Header, Sidebar, SidebarToggler} from '@coreui/vue'
  import SidebarNav from './SidebarNav'

  export default {
    name: 'app',
    components: {Header, Sidebar, SidebarToggler, SidebarNav},
    data() {
      return {};
    },
  }
</script>
