<template>
    <Header fixed>
        <!--<SidebarToggler @click="toggleSidebar" class="d-lg-none" display="md" mobile/>-->
        <b-link class="navbar-brand" :to="{name: 'l-home'}">
            <img class="navbar-brand-full" src="img/logo.png" width="89" height="25" alt="CoreUI Logo"/>
        </b-link>
        <span class="navbar-toggler-icon" style="cursor: pointer" @click="toggleSidebar"></span>
        <!--<SidebarToggler @click="toggleSidebar" class="d-md-down-none" display="lg"/>-->
        <b-navbar-nav class="ml-auto mr-4">
            <!--<b-nav-item>-->
            <!--<i class="fa fa-bell-o"></i>-->
            <!--<b-badge pill variant="danger">3</b-badge>-->
            <!--</b-nav-item>-->
            <b-nav-item-dropdown class="px-3" right no-caret>
                <template slot="button-content">
                    <img :src="utils.fmtMediaImageFit(profile.avatar, 300, 300) || 'img/default_avatar.jpg'"
                         class="img-avatar" :alt="profile.username"/>
                    {{utils.fmtNameFromObj(profile)}}
                </template>
                <b-dropdown-item @click="onLogoutClick">
                    <i class="fa fa-sign-out text-black-50"/> Logout
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </Header>
</template>
<script>
    import {Header, SidebarToggler} from '@coreui/vue'
    import utils from '../../utils'
    export default {
        components: {Header, SidebarToggler},
        data() {
            return {utils};
        },
        computed: {
            profile() {
                return this.$store.state.profile;
            },
        },
        methods: {
            toggleSidebar(){
                this.$store.commit('toggleSidebar')
            },
            onLogoutClick() {
                this.$store.commit('setProfile', null);
                this.$router.push('/');
            },
        },
    }
</script>
