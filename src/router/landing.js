const LApp = () => import('@/components/landing/App');
const LHome = () => import('@/components/landing/Home');
const LContacts = () => import('@/components/landing/Contacts');
const LVacancies = () => import('@/components/landing/Vacancies');
// const LAuth = () => import('@/components/landing/Auth');
const LAuth = () => import('@/components/landing/Auth/index');
const ENT = () => import('@/components/landing/courses/ENT');
const NIS = () => import('@/components/landing/courses/NIS');
const NU = () => import('@/components/landing/courses/NU');
const English = () => import('@/components/landing/courses/English');
const separateSubjects = () => import('@/components/landing/courses/separateSubjects');
const readingClub = () => import('@/components/landing/courses/readingClub');
const Robotics = () => import('@/components/landing/courses/Robotics');
const About = () => import('@/components/landing/About');
const SummerSchool = () => import('@/components/landing/SummerSchool');

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
        {
            path: '/contacts',
            name: 'contacts',
            component: LContacts,
        },
        {
            path: 'prepareforENT',
            name: 'ENT',
            component: ENT,
        },
        {
            path: 'prepareforNIS',
            name: 'NIS',
            component: NIS,
        },
        {
            path: 'prepareforNU',
            name: 'NU',
            component: NU,
        },
        {
            path: 'learnEnglish',
            name: 'english',
            component: English,
        },
        {
            path: 'separatesubjects',
            name: 'separateSubjects',
            component: separateSubjects,
        },
        {
            path: 'readingclub',
            name: 'readingClub',
            component: readingClub,
        },
        {
            path: 'robotics',
            name: 'robotics',
            component: Robotics,
        },
        {
            path: 'about',
            name: 'About',
            component: About,
        },
        {
            path: 'summerschool',
            name: 'SummerSchool',
            component: SummerSchool,
        },
        {
            path: 'vacancies',
            name: 'vacancies',
            component: LVacancies,
        },
    ],
};
