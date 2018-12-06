import Vue from "vue";
import Router from "vue-router";

import store from "../store"

import LandingRoutes from "./landing"
import AdmRoutes from "./adm"

Vue.use(Router);

let router = new Router({
  linkActiveClass: 'open active',
  scrollBehavior() {
    return {x: 0, y: 0};
  },
  routes: [
    LandingRoutes,
    AdmRoutes,
    {
      path: '*',
      redirect: {path: '/'},
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (!store.state.profile) {
      next({name: 'l_app'});
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
