const LApp = () => import('@/components/landing/App');
const LHome = () => import('@/components/landing/Home');
// const LContacts = () => import('@/components/landing/Contacts');
// const LVacancies = () => import('@/components/landing/Vacancies');
const LAuth = () => import('@/components/landing/Auth');

export default {
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
};
