<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import constants from "../constants";
  import utils from "../utils";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    components: {swiper, swiperSlide, Header, Footer},
    data() {
      return {
        utils, constants,
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        },
      };
    },
  }
</script>
