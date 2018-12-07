<template>
  <div class="app">
    <Header></Header>
    <div class="app-body">
      <Sidebar fixed>
        <SidebarNav></SidebarNav>
      </Sidebar>
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import {Sidebar} from '@coreui/vue'
  import Header from './Header'
  import SidebarNav from './SidebarNav'

  export default {
    components: {Header, Sidebar, SidebarNav},
  }
</script>
