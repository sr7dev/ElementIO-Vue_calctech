const App = () => import('@/components/admin/App');
const Dashboard = () => import('@/components/admin/Dashboard');
const SubjectsTable = () => import('@/components/admin/refs/subjects/Table');
const SubjectCE = () => import('@/components/admin/refs/subjects/CE');


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
          component: SubjectsTable,
          props: {routeName: 'a-refs-subjects'},
          children: [
            {
              path: 'ce/:subject_id',
              name: 'a-refs-subjects-ce',
              component: SubjectCE,
            },
          ],
        },
      ],
    },
  ],
};
