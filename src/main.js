import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from "moment";
import "moment/locale/ru";
import store from './store';
import Scene from './Scene'
import router from './router'
import VueTyperPlugin from 'vue-typer'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



// require('es6-promise/auto');
require('es6-promise').polyfill();

Vue.config.productionTip = false;

moment.locale('ru');

Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin)
Vue.use(ElementUI);


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
