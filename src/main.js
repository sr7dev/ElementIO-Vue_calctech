import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from "moment";
import "moment/locale/ru";
import store from './store';
import Scene from './Scene'
import router from './router'

// require('es6-promise/auto');
require('es6-promise').polyfill();

Vue.config.productionTip = false;

moment.locale('ru');

Vue.use(BootstrapVue);

function init() {
  new Vue({
    store,
    router,
    render: h => h(Scene),
  }).$mount('#scene');
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
