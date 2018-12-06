const App = () => import('@/components/App');


export default {
  path: '/adm',
  name: 'app',
  component: App,
  meta: {requiresAuth: true},
  // redirect: {name: 'l_home'},
  // children: [
  //   {
  //     path: 'home',
  //     name: 'home',
  //     component: LHome,
  //     props: {routeName: 'l_home'},
  //   },
  // ],
};
