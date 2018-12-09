const App = () => import('@/components/admin/App');
const Dashboard = () => import('@/components/admin/Dashboard');
const SubjectsTable = () => import('@/components/admin/refs/subjects/Table');
const SubjectCE = () => import('@/components/admin/refs/subjects/CE');
const LangsTable = () => import('@/components/admin/refs/langs/Table');
const LangCE = () => import('@/components/admin/refs/langs/CE');


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
      redirect: {name: 'a-refs-langs'},
      children: [
        {
          path: 'langs',
          name: 'a-refs-langs',
          component: LangsTable,
          props: {routeName: 'a-refs-langs'},
          children: [
            {
              path: 'ce/:lang_id',
              name: 'a-refs-langs-ce',
              component: LangCE,
            },
          ],
        },
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
