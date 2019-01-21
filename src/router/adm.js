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
const SubTopicsTable = () => import('@/components/admin/refs/sub_topics/Table');
const SubTopicCE = () => import('@/components/admin/refs/sub_topics/CE');
const TasksTable = () => import('@/components/admin/tasks/Table');
const TaskCE = () => import('@/components/admin/tasks/CE');
const Settings = () => import('@/components/admin/Settings');
const Notifications = () => import('@/components/admin/Notifications');
const Roles = () => import('@/components/admin/roles/Table');
const RolesCE = () => import('@/components/admin/roles/CE');




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
                {
                    path: 'sub_topics',
                    name: 'a-refs-sub_topics',
                    component: SubTopicsTable,
                    props: {routeName: 'a-refs-sub_topics'},
                    children: [
                        {
                            path: 'ce/:sub_topic_id',
                            name: 'a-refs-sub_topics-ce',
                            component: SubTopicCE,
                        },
                    ],
                },
            ],
        },
        {
            path: 'tasks',
            name: 'a-tasks',
            component: TasksTable,
            props: {routeName: 'a-tasks'},
            children: [
                {
                    path: 'ce/:task_id',
                    name: 'a-tasks-ce',
                    component: TaskCE,
                    props: {routeName: 'a-tasks-ce'},
                },
            ],
        },
        {
            path: 'settings',
            name: 'settings',
            component: Settings,
        },
        {
            path: 'notifications',
            name: 'notifications',
            component: Notifications,
        },
        {
            path: 'roles',
            component: {template: '<router-view></router-view>'},
            redirect: {name: 'roles'},
            children: [
                {
                    path: '',
                    name: 'roles',
                    component: Roles,
                },
                {
                    path: 'ce/:roles_id',
                    name: 'RolesCE',
                    component: RolesCE,
                },
            ],
        },
    ],
};
