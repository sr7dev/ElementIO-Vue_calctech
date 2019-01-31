<template>
    <div style="height: 100%;">
        <el-menu default-active="dashboard"
                 router
                 class="el-menu-vertical-demo"
                 style="height: 100%;"
                 :collapse="collapsed">
            <el-menu-item index="dashboard">
                <i class="el-icon-location"></i>
                <span slot="title">Главная</span>
            </el-menu-item>
            <el-submenu v-if="isAdmin" index="0">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Aдминистратор</span>
                </template>
                <el-submenu
                        v-if="item.children"
                        v-for="item in items"
                        :index="item.url">
                    <span slot="title">{{item.name}}</span>
                    <el-menu-item v-for="child in item.children"
                                  :index="child.url">
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-for="item in items"
                              :index="item.url"
                              v-if="item.rolesAccess.includes('ROLE_ADMIN') && !item.children">
                    <span slot="title">{{item.name.for_admin ? item.name.for_admin : item.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Преподаватель</span>
                </template>
                <el-submenu
                        v-if="item.children"
                        v-for="item in items"
                        :index="item.url">
                    <span slot="title">{{item.name}}</span>
                    <el-menu-item v-for="child in item.children"
                                  :index="child.url">
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-for="item in items"
                              :index="item.url"
                              v-if="item.rolesAccess.includes('ROLE_ADMIN') && !item.children">
                    <span slot="title">{{item.name.for_tutor ? item.name.for_tutor : item.name}}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import {SidebarNav} from '@coreui/vue'

    let pathPrefix = '/adm/';

    export default {
        components: {SidebarNav},
        data() {
            return {
                items: [
                    {
                        name: 'Главная',
                        url: pathPrefix + 'dashboard',
                        icon: 'icon-home',
                        rolesAccess: []
                    },
                    {
                        name: {
                            for_admin: 'Задания',
                            for_tutor: 'Мои задания'
                        },
                        url: pathPrefix + 'tasks',
                        icon: 'icon-calculator',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']
                    },
                    {
                        name: 'Справочники',
                        icon: 'icon-layers',
                        url: pathPrefix + 'refs',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT'],
                        children: [
                            {
                                name: 'Языки',
                                url: pathPrefix + 'refs/langs',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Классы',
                                url: pathPrefix + 'refs/grades',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Предметы',
                                url: pathPrefix + 'refs/subjects',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Темы',
                                url: pathPrefix + 'refs/topics',
                                icon: 'icon-puzzle',
                            },
                            {
                                name: 'Подтемы',
                                url: pathPrefix + 'refs/sub_topics',
                                icon: 'icon-puzzle',
                            },
                        ],
                    },
                    {
                        name: 'Настройки',
                        icon: 'icon-settings',
                        url: pathPrefix + 'settings',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']
                    },
                    {
                        name: 'Уведомления',
                        icon: 'icon-info',
                        url: pathPrefix + 'notifications',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']
                    },
                    {
                        name: 'Роли и полномочия',
                        icon: 'icon-info',
                        url: pathPrefix + 'roles',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']
                    },
                    {
                        name: 'Пользователи',
                        icon: 'icon-info',
                        url: pathPrefix + 'users',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']

                    },
                    {
                        name: {
                            for_admin: 'Группы',
                            for_tutor: 'Мои группы'
                        },
                        icon: 'icon-info',
                        url: pathPrefix + 'groups',
                        rolesAccess: ['ROLE_ADMIN', 'ROLE_TEACHER', 'ROLE_STUDENT']
                    }
                ],
            };
        },
        computed: {
            collapsed() {
                return this.$store.state.isCollapsed
            },
            isAdmin () {
                return this.$store.state.profile.perms.includes('*')
            }
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>