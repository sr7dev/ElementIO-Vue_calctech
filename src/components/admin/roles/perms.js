let perms = [

    {
        label: 'Все полномочия',
        value: '*'
    },
    {
        label: 'Может видеть дополнительные данные других пользователей',
        value: 'usr-vei'
    },
    {
        label: 'Может создавать, менять данные других пользователей',
        value: 'usr-ce'
    },
    {
        label: 'Может менять роли',
        value: 'role-ce'
    },
    {
        label: 'Может менять справочник “языки”',
        value: 'lang-ce'
    },
    {
        label: 'Может менять справочник “предметы”',
        value: 'subject-ce'
    },
    {
        label: 'Может менять справочник “Темы”',
        value: 'topic-ce'
    },
    {
        label: 'Может менять справочник “Подтемы”',
        value: 'sub_topic-ce'
    },
    {
        label: 'Может менять справочник “Классы”',
        value: 'grade-ce'
    },
    {
        label: 'Может создавать, изменять свои задачи',
        value: 'task-ce'
    },
    {
        label: 'Может менять чужие задачи',
        value: 'not_own_task-ce'
    },
    {
        label: 'Может назначать задачу другому пользователю',
        value: 'usr_task_subscription-ce'
    },
    {
        label: 'Может менять группы (чужие)',
        value: 'group-ce'
    },
]

export default perms;