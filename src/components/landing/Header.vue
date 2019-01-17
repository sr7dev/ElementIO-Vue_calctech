<template>
  <Header fixed>
    <b-container>
      <b-navbar toggleable="lg" class="w-100">
        <b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>
        <b-navbar-brand :to="{name: 'l-home'}">
          <img class="navbar-brand-full" src="img/logo.png" width="134" height="31" alt="CoreUI Logo">
          <!--<img class="navbar-brand-minimized" src="img/logo.png" width="134" height="31" alt="CoreUI Logo">-->
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="font-weight-bold font-sm ml-auto">
            <b-nav-item :to="{name: 'l-home'}" class="px-2">
              ГЛАВНАЯ
            </b-nav-item>
            <b-nav-item class="px-2">
              О НАС
            </b-nav-item>
            <b-nav-item-dropdown text="КУРСЫ" left>
              <b-dropdown-item>Подготовка к ЕНТ</b-dropdown-item>
              <b-dropdown-item>Подготовка в НИШ</b-dropdown-item>
              <b-dropdown-item>Подготовка в НУ и зарубеж</b-dropdown-item>
              <b-dropdown-item>Английский язык</b-dropdown-item>
              <b-dropdown-item>Отдельные предметы</b-dropdown-item>
              <b-dropdown-item>Книжный Клуб</b-dropdown-item>
              <b-dropdown-item>Робототехника</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="px-2">
              ЛЕТНЯЯ ШКОЛА
            </b-nav-item>
            <b-nav-item class="px-2">
              КОНТАКТЫ
            </b-nav-item>
            <b-nav-item class="px-2">
              ВАКАНСИИ
            </b-nav-item>
            <b-nav-item :to="{name: (profile ? 'adm' : 'l-auth')}" class="px-2">
              {{ (profile ? 'КАБИНЕТ' : 'ВХОД / РЕГИСТРАЦИЯ') }}
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