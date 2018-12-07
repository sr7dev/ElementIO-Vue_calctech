const App = () => import('@/components/admin/App');
const Dashboard = () => import('@/components/admin/Dashboard');
const Subjects = () => import('@/components/admin//refs/Subjects');


export default {
  path: '/adm',
  name: 'adm',
  component: App,
  meta: {requiresAuth: true},
  redirect: {name: 'a-dashboard'},
  children: [
    {
      path: 'dashboard',
      name: 'a-dashboard',
      component: Dashboard,
    },
    {
      path: 'refs',
      name: 'a-refs',
      component: {template: '<router-view></router-view>'},
      children: [
        {
          path: 'subjects',
          name: 'a-refs-subjects',
          component: Subjects,
        },
      ],
    },
  ],
};
