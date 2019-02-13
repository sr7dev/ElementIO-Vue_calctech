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
            <el-submenu index="1" v-if="adminRoutes.length">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Администратор</span>
                </template>
                <el-submenu v-for="item in adminRoutes" :index="item.url" v-if="item.children">
                    <span slot="title">{{item.name}}</span>
                    <el-menu-item v-for="child in item.children" :index="child.url">
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-for="item in adminRoutes" :index="item.url" v-if="!item.children">
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Преподаватель</span>
                </template>
                <el-submenu v-for="item in tutorRoutes" :index="item.url" v-if="item.children">
                    <span slot="title">{{item.name}}</span>
                    <el-menu-item v-for="child in item.children" :index="child.url">
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-for="item in tutorRoutes" :index="item.url" v-if="!item.children">
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="notifications">
                <i class="el-icon-location"></i>
                <span slot="title">Уведомления</span>
            </el-menu-item>
            <el-menu-item index="settings">
                <i class="el-icon-location"></i>
                <span slot="title">Настройки</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {SidebarNav} from '@coreui/vue'


    import {adminRoutes, tutorRoutes} from '@/components/admin/SidebarRoutes'

    export default {
        components: {SidebarNav},
        data() {
            return {};
        },
        computed: {
            adminRoutes() {
                return adminRoutes.filter(this.filterMethod)
            },
            tutorRoutes() {
                return tutorRoutes.filter(this.filterMethod)
            },
            collapsed() {
                return this.$store.state.isCollapsed
            },
            userPerms() {
                return this.$store.state.profile.perms
            },
        },
        methods: {
            filterMethod(route) {
                if (!route.perms) return true
                if (this.userPerms.includes('*')) return true
                return this.userPerms.some(perms => route.perms.includes(perms))
            },
            // mapMethod(item) {
            //     let route = JSON.parse(JSON.stringify(item))
            //
            //     if (route.children && !this.userPerms.includes('*')) {
            //
            //         route.children = route.children.filter(child => {
            //             if (!child.perms) return true
            //             this.userPerms.some(perms => child.perms.includes(perms))
            //         })
            //
            //         if (!route.children.length) route.children = null
            //     }
            //
            //     if (typeof route.name === 'object') {
            //         route.name = 'for_admin / for_tutor'
            //     }
            //
            //     return route
            // }
        },
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>