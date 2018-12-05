import Vue from "vue";
import Router from "vue-router";

const App = () => import('@/components/App');
const Home = () => import('@/components/Home');
const Contacts = () => import('@/components/Contacts');
const Vacancies = () => import('@/components/Vacancies');
const Auth = () => import('@/components/Auth');

Vue.use(Router);

let router = new Router({
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      component: {template: '<router-view></router-view>'},
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
            {
              path: 'auth',
              name: 'auth',
              component: Auth,
              props: {routeName: 'auth'},
            },
          ],
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
