<template>
  <div class="app-section">
    <div class="app-section-cont">
      <div class="app-header">
        <div class="logo-cont"><img src="../static/img/logo.png"/></div>
        <div class="flex">&nbsp;</div>
        <router-link tag="div" :to="{ name: 'home' }" class="menu-item">
          <span>ГЛАВНАЯ СТРАНИЦА</span>
        </router-link>
        <div class="menu-item">
          <span>О НАС</span>
        </div>
        <div class="menu-item dd" @mouseover="mOpened.courses = true" @mouseout="mOpened.courses = false">
          <span>КУРСЫ</span><i class="fas fa-chevron-down fs0_7 ml-h"></i>
          <transition name="fade-in">
            <ul v-if="mOpened.courses">
              <li>ПОДГОТОВКА К ЕНТ</li>
              <li>ПОДГОТОВКА В НИШ</li>
              <li>ПОДГОТОВКА В НУ И ЗАРУБЕЖ</li>
              <li>АНГЛИЙСКИЙ ЯЗЫК</li>
              <li>ОТДЕЛЬНЫЕ ПРЕДМЕТЫ</li>
              <li>КНИЖНЫЙ КЛУБ</li>
              <li>РОБОТОТЕХНИКА</li>
            </ul>
          </transition>
        </div>
        <div class="menu-item">
          <span>ЛЕТНЯЯ ШКОЛА</span>
        </div>
        <div class="menu-item">
          <span>КОНТАКТЫ</span>
        </div>
        <router-link tag="div" :to="{ name: 'vacancies' }" class="menu-item">
          <span>ВАКАНСИИ</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mOpened: {
          courses: false,
        },
      };
    },
  }
</script>

<style scoped>
  .app-header {
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: 600;
    white-space: nowrap;
    padding: 1rem 0;
  }

  .app-header > .logo-cont {
    display: inline-block;
    padding: .5rem .5rem .5rem 0;
  }

  .app-header > .menu-item {
    position: relative;
    display: inline-block;
    padding: 1rem;
    cursor: pointer;
  }

  .app-header > .menu-item:last-child {
    padding-right: 0;
  }

  .app-header > .menu-item > span, .app-header > .menu-item > i {
    vertical-align: middle;
  }

  .app-header > .menu-item > ul {
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    display: block;
    border: 1px solid #f1f1f1;
    background-color: white;
  }

  .app-header > .menu-item > ul > li {
    display: block;
    padding: .6rem 1.8rem;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
    background-color: rgba(245, 245, 245, 0);
  }

  .app-header > .menu-item > ul > li:hover {
    background-color: rgba(245, 245, 245, 1);
  }
</style>
