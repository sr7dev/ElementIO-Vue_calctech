const App = () => import('@/components/admin/App');
const Dashboard = () => import('@/components/admin/Dashboard');
const LangsTable = () => import('@/components/admin/refs/langs/Table');
const LangCE = () => import('@/components/admin/refs/langs/CE');
const GradesTable = () => import('@/components/admin/refs/grades/Table');
const GradeCE = () => import('@/components/admin/refs/grades/CE');
const SubjectsTable = () => import('@/components/admin/refs/subjects/Table');
const SubjectCE = () => import('@/components/admin/refs/subjects/CE');
const TopicsTable = () => import('@/components/admin/refs/topics/Table');
const TopicCE = () => import('@/components/admin/refs/topics/CE');


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
          path: 'grades',
          name: 'a-refs-grades',
          component: GradesTable,
          props: {routeName: 'a-refs-grades'},
          children: [
            {
              path: 'ce/:grade_id',
              name: 'a-refs-grades-ce',
              component: GradeCE,
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
        {
          path: 'topics',
          name: 'a-refs-topics',
          component: TopicsTable,
          props: {routeName: 'a-refs-topics'},
          children: [
            {
              path: 'ce/:topic_id',
              name: 'a-refs-topics-ce',
              component: TopicCE,
            },
          ],
        },
      ],
    },
  ],
};
