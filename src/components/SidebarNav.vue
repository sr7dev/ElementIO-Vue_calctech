<template>
  <SidebarNav :navItems="items"></SidebarNav>
</template>

<script>
  import {SidebarNav} from '@coreui/vue'

  export default {
    components: {SidebarNav},
    data() {
      return {
        items: [
          {
            name: 'Пользователи',
            url: '/usrs',
            icon: 'fa fa-user-o',
          },
        ],
      };
    },
  }
</script>