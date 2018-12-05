import Vue from "vue";
import Router from "vue-router";

const LApp = () => import('@/components/landing/App');
const LHome = () => import('@/components/landing/Home');
// const LContacts = () => import('@/components/landing/Contacts');
// const LVacancies = () => import('@/components/landing/Vacancies');
const LAuth = () => import('@/components/landing/Auth');

Vue.use(Router);

let router = new Router({
  linkActiveClass: 'open active',
  scrollBehavior() {
    return {x: 0, y: 0};
  },
  routes: [
    {
      path: '/',
      name: 'l_app',
      component: LApp,
      redirect: {name: 'l_home'},
      children: [
        {
          path: 'home',
          name: 'l_home',
          component: LHome,
          props: {routeName: 'l_home'},
        },
        {
          path: 'auth',
          name: 'l_auth',
          component: LAuth,
          props: {routeName: 'l_auth'},
        },
      ],
    },
    {
      path: '*',
      redirect: {path: '/'},
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to.fullPath, to.params);
//   next();
// });

export default router;
