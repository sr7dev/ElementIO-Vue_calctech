import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from "moment";
import "moment/locale/ru";
import store from './store';
import Scene from './Scene'
import router from './router'
import {VueCharts} from "vue-chartjs";
import VueTyperPlugin from 'vue-typer'
import ElementUI from 'element-ui';
import VueMathjax from 'vue-mathjax'

// import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import VModal from 'vue-js-modal'




// require('es6-promise/auto');
require('es6-promise').polyfill();

Vue.config.productionTip = false;

moment.locale('ru');
Vue.use(VueCharts);
Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin)
Vue.use(ElementUI, { locale })
Vue.use(VModal)
Vue.use(VueMathjax)





function init() {
  store.dispatch('reloadDic').then(() => store.dispatch('refreshProfile')).catch(error => {
    if (error.status === 401) {
      store.commit('setProfile', null);
    } else {
      console.log(error);
      store.commit('set', ['appError', true]);
    }
  }).finally(() => {
    new Vue({
      store,
      router,
      render: h => h(Scene),
    }).$mount('#scene');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
