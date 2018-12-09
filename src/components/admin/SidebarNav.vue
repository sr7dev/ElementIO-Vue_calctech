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
            url: pathPrefix + 'dashboard',
            icon: 'icon-home',
          },
          {
            name: 'Справочники',
            icon: 'icon-layers',
            url: pathPrefix + 'refs',
            children: [
              {
                name: 'Предметы',
                url: pathPrefix + 'refs/subjects',
                icon: 'icon-puzzle',
              },
              {
                name: 'Языки',
                url: pathPrefix + 'refs/langs',
                icon: 'icon-puzzle',
              },
            ],
          },
        ],
      };
    },
  }
</script>