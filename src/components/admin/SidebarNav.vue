<template>
  <SidebarNav :navItems="items"></SidebarNav>
</template>

<script>
  import {SidebarNav} from '@coreui/vue'

  let pathPrefix = '/adm/';

  export default {
    components: {SidebarNav},
    data() {
      return {
        items: [
          {
            name: 'Главная',
            url: pathPrefix+'dashboard',
            icon: 'fa fa-home',
          },
          {
            name: 'Предметы',
            url: pathPrefix+'refs/subjects',
            icon: 'icon-layers',
          },
        ],
      };
    },
  }
</script>