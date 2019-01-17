const LApp = () => import('@/components/landing/App');
const LHome = () => import('@/components/landing/Home');
// const LContacts = () => import('@/components/landing/Contacts');
// const LVacancies = () => import('@/components/landing/Vacancies');
// const LAuth = () => import('@/components/landing/Auth');
const LAuth = () => import('@/components/landing/Auth/index');

export default {
  path: '/',
  name: 'l-app',
  component: LApp,
  redirect: {name: 'l-home'},
  children: [
    {
      path: 'home',
      name: 'l-home',
      component: LHome,
    },
    {
      path: 'auth',
      name: 'l-auth',
      component: LAuth,
    },
  ],
};
