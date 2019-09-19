<template>
    <div class="app">
        <Header></Header>
        <div class="app-body">
            <div>
                <SidebarNav></SidebarNav>
            </div>
            <main class="main px-2">
                <div class="container-fluid pt-4">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    import Header from './Header'
    import SidebarNav from './SidebarNav'

    export default {
        components: {Header, SidebarNav},
        created() {
           this.$store.dispatch('reloadPerms')
        }
    }
</script>
