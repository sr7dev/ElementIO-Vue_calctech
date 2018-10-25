<template>
  <div>
    <div class="d-flex align-items-center fs0_9 font-weight-500 ws-nowrap px-3 py-1">
      <div class="p-h"><img src="../static/img/logo.png"/></div>
      <div class="flex">&nbsp;</div>
      <div class="p-1 c-pointer">ГЛАВНАЯ СТРАНИЦА</div>
      <div class="p-1 c-pointer">О НАС</div>
      <div class="p-1 c-pointer">КУРСЫ</div>
      <div class="p-1 c-pointer">ЛЕТНЯЯ ШКОЛА</div>
      <div class="p-1 c-pointer">КОНТАКТЫ</div>
      <div class="p-1 c-pointer">ВАКАНСИИ</div>
    </div>
    <div class="b1">
      <div class="cont">
        <div class="fs5_0 bold">СЛОЖНЫЕ ТЕМЫ ЛЕГКО</div>
        <div class="app-fs-24 mt-2_5">Мы работаем на результат</div>
        <div class="btn1 mt-2_5">ЗАПИСАТЬСЯ</div>
      </div>
    </div>
    <div class="b2">
      <div class="col">
        <div class="icon icon-education-48">&#xe036;</div>
        <div class="fs1_5 mt-1_5">Качественное образование</div>
        <div class="desc mt-1">
          Мы очень тщательно подходим к выбору преподавателей.
          В CalcTech вы можете рассчитывать на первоклассный уровень преподавания.
        </div>
      </div>
      <div class="col">
        <div class="icon icon-finance">9</div>
        <div class="fs1_5 mt-1_5">Индивидуальный подход</div>
        <div class="desc mt-1">
          Несмотря на то, что у нас больше 200 учеников, мы
          за индивидуальный подход к каждому. Мы гордимся тем, что знаем имя каждого!
        </div>
      </div>
      <div class="col">
        <div class="icon icon-finance">&#xe02a;</div>
        <div class="fs1_5 mt-1_5">Доступные цены</div>
        <div class="desc mt-1">
          У нас очень большие расходы, но по возможности, мы
          стараемся делать цены доступными для всех.
        </div>
      </div>
    </div>
    <div class="b3">
      <swiper :options="swiperOption" style="width: 100%; height: 200px;">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import constants from "../constants";
  import utils from "../utils";
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {swiper, swiperSlide},
    data() {
      return {
        utils, constants,
        swiperOption: {
          // centeredSlides: true,
          // slidesOffsetBefore: 40,
          slidesOffsetAfter: 40,
        },
      };
    },
  }
</script>

<style scoped>
  .btn1 {
    display: inline-block;
    padding: 1.1rem 2rem;
    border-radius: 50px;
    border: 1px solid white;
    color: white;
    background-color: rgba(255, 255, 255, .1);
    cursor: pointer;
    transition: background-color .2s ease, color .2s ease;
  }

  .btn1:hover {
    color: black;
    background-color: rgba(255, 255, 255, 1);
  }

  .b1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../static/img/wall_bw.jpg) center/cover no-repeat;
  }

  .b1::before {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
  }

  .b1 > .cont {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
  }

  .b2 {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
    border-bottom: 1px solid #eee;
  }

  .b2 > .col {
    flex: 1;
    width: 33.33%;
    padding: 5rem 4rem;
    text-align: center;
    border-right: 1px solid #eee;
  }

  .b2 > .col:last-child {
    border-right: none;
  }

  .b2 .icon {
    display: inline-block;
    padding: 23px 25px;
    border-radius: 10rem;
    font-style: normal !important;
    font-size: 38px;
    color: white;
    background-color: #72c02c;
  }

  .b2 .desc {
    line-height: 1.6rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
