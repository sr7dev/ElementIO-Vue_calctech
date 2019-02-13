const pathPrefix = '/adm/';

export default [
    {
        name: 'Главная',
        url: pathPrefix + 'dashboard',
        icon: 'icon-home',
    },
    {
        name: {
            for_admin: 'Задания',
            for_tutor: 'Мои задания'
        },
        url: pathPrefix + 'tasks',
        icon: 'icon-calculator',
        perms: ['task-ce', 'not_own_task-e', 'task-moderate', 'not_own_task-v']
    },
    {
        name: 'Справочники',
        icon: 'icon-layers',
        url: pathPrefix + 'refs',
        children: [
            {
                name: 'Языки',
                url: pathPrefix + 'refs/langs',
                icon: 'icon-puzzle',
                perms: ['lang-ce'],
            },
            {
                name: 'Классы',
                url: pathPrefix + 'refs/grades',
                icon: 'icon-puzzle',
                perms: ['grade-ce'],
            },
            {
                name: 'Предметы',
                url: pathPrefix + 'refs/subjects',
                icon: 'icon-puzzle',
                perms: ['subject-ce']
            },
            {
                name: 'Темы',
                url: pathPrefix + 'refs/topics',
                icon: 'icon-puzzle',
                perms: ['topic-ce']
            },
            {
                name: 'Подтемы',
                url: pathPrefix + 'refs/sub_topics',
                icon: 'icon-puzzle',
                perms: ['sub_topic-ce']
            },
        ],
    },
    {
        name: 'Настройки',
        icon: 'icon-settings',
        url: pathPrefix + 'settings',
        perms: []
    },
    {
        name: 'Уведомления',
        icon: 'icon-info',
        url: pathPrefix + 'notifications',
        perms: []
    },
    {
        name: 'Роли и полномочия',
        icon: 'icon-info',
        url: pathPrefix + 'roles',
        perms: ['role-ce'],
    },
    {
        name: 'Пользователи',
        icon: 'icon-info',
        url: pathPrefix + 'users',
        perms: ['tutor']

    },
    {
        name: 'Группы',
        icon: 'icon-info',
        url: pathPrefix + 'groups',
        perms: ['tutor']
    }
]

export const routes = [
    {
        perms: ['*'], //Администратор
        name: '',
        children: []
    },
    {
        perms: [''], //Преподаватель
        name: '',
        children: []

    },
    {
        perms: [''], //Студент
        name: '',
    }
]


export const adminRoutes = [
    {
        name: 'Справочники',
        icon: 'icon-layers',
        url: pathPrefix + 'refs',
        perms: ['*'],
        children: [
            {
                name: 'Языки',
                url: pathPrefix + 'refs/langs',
                icon: 'icon-puzzle',
                perms: ['lang-ce'],
            },
            {
                name: 'Классы',
                url: pathPrefix + 'refs/grades',
                icon: 'icon-puzzle',
                perms: ['grade-ce'],
            },
            {
                name: 'Предметы',
                url: pathPrefix + 'refs/subjects',
                icon: 'icon-puzzle',
                perms: ['subject-ce']
            },
            {
                name: 'Темы',
                url: pathPrefix + 'refs/topics',
                icon: 'icon-puzzle',
                perms: ['topic-ce']
            },
            {
                name: 'Подтемы',
                url: pathPrefix + 'refs/sub_topics',
                icon: 'icon-puzzle',
                perms: ['sub_topic-ce']
            },
        ],
    },
    {
        name: 'Роли и полномочия',
        icon: 'icon-info',
        url: pathPrefix + 'roles',
        perms: ['role-ce'],
    },
    {
        name: 'Пользователи',
        icon: 'icon-info',
        url: pathPrefix + 'users',
        perms: ['*', ]

    },
    {
        name: 'Группы',
        icon: 'icon-info',
        url: pathPrefix + 'groups',
        perms: ['*']
    }
]
export const tutorRoutes = [
    {
        name: 'Задания',
        url: pathPrefix + 'tasks',
        icon: 'icon-calculator',
        perms: ['task-ce', 'not_own_task-e', 'task-moderate', 'not_own_task-v']
    },
    {
        name: 'Мои студенты',
        url: pathPrefix + 'my-students',
        icon: 'icon-calculator',
        perms: ['tutor']
    }
]
export const studentRoutes = []