<template>
    <div class="app">
        <AppHeader fixed>
            <SidebarToggler class="d-lg-none" display="md" mobile/>
            <b-link class="navbar-brand" to="#">
                <img src="img/brand/logo.svg" alt="Logo" class="navbar-brand-full" width="89" height="25">
                <img src="img/brand/sygnet.svg" alt="Logo" class="navbar-brand-minimized" width="30" height="30">
            </b-link>
            <SidebarToggler class="d-md-down-none" display="lg" />
            <b-navbar-nav class="d-md-down-none">
                <b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>
                <b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>
                <b-nav-item class="px-3">Settings</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="d-md-down-none">
                    <i class="icon-bell"></i>
                    <b-badge pill variant="danger">5</b-badge>
                </b-nav-item>
                <b-nav-item class="d-md-down-none">
                    <i class="icon-list"></i>
                </b-nav-item>
                <b-nav-item class="d-md-down-none">
                    <i class="icon-location-pin"></i>
                </b-nav-item>
            </b-navbar-nav>
        </AppHeader>
        <div class="app-body">

        </div>
        <TheFooter>
            <div>
                <a href="#">Admin</a>
                <span class="ml-1">&copy; 2018 gyumin</span>
            </div>
        </TheFooter>
    </div>
</template>

<script>
    import {Header as AppHeader,
            SidebarToggler,
            Footer as TheFooter} from '@coreui/vue'
    export default {
        name: "DefaultContainer",
        components: {
            AppHeader,
            TheFooter
        }
    }
</script>

<style scoped>

</style>