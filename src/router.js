import Vue from "vue";
import Router from "vue-router";

import Scene from "./Scene.vue";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import Vacancies from "./components/Vacancies.vue";

Vue.use(Router);

let router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'scene',
      component: Scene,
      redirect: {name: 'app'},
      children: [
        {
          path: 'app',
          name: 'app',
          component: App,
          redirect: {name: 'home'},
          children: [
            {
              path: 'home',
              name: 'home',
              component: Home,
              props: {routeName: 'home'},
            },
            {
              path: 'contacts',
              name: 'contacts',
              component: Contacts,
              props: {routeName: 'contacts'},
            },
            {
              path: 'vacancies',
              name: 'vacancies',
              component: Vacancies,
              props: {routeName: 'vacancies'},
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: {name: 'scene'},
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to.fullPath, to.params);
//   next();
// });

export default router;
