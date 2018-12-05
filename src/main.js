import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import moment from "moment";
import "moment/locale/ru";
import store from './store';
import Scene from './Scene'
import router from './router'

Vue.config.productionTip = false;

moment.locale('ru');

Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  render: h => h(Scene),
}).$mount('#scene');
