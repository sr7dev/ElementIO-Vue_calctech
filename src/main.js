import Vue from 'vue';
import moment from "moment";
import "moment/locale/ru";
import store from './store';
import router from './router';

moment.locale('ru');

function initSystem() {
  new Vue({
    el: '#app',
    store,
    router,
    template: '<router-view></router-view>',
  });
}

document.addEventListener('DOMContentLoaded', initSystem);
