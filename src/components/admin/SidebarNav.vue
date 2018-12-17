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
            name: 'Задачи',
            url: pathPrefix + 'tasks',
            icon: 'icon-calculator',
          },
          {
            name: 'Справочники',
            icon: 'icon-layers',
            url: pathPrefix + 'refs',
            children: [
              {
                name: 'Языки',
                url: pathPrefix + 'refs/langs',
                icon: 'icon-puzzle',
              },
              {
                name: 'Классы',
                url: pathPrefix + 'refs/grades',
                icon: 'icon-puzzle',
              },
              {
                name: 'Предметы',
                url: pathPrefix + 'refs/subjects',
                icon: 'icon-puzzle',
              },
              {
                name: 'Темы',
                url: pathPrefix + 'refs/topics',
                icon: 'icon-puzzle',
              },
              {
                name: 'Подтемы',
                url: pathPrefix + 'refs/sub_topics',
                icon: 'icon-puzzle',
              },
            ],
          },
        ],
      };
    },
  }
</script>