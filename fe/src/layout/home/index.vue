<template>
    <v-app>
        <home-app-bar />
        <h1>sdss</h1>
        <home-view />

        <home-footer />
    </v-app>
</template>

<script>
    import HomeAppBar from "@/layout/home/AppBar";
    import HomeFooter from "@/layout/home/Footer";
    import HomeView from "@/layout/home/View";

    export default {
        name: 'HomeLayout',

        components:{
            HomeAppBar,
            HomeFooter,
            HomeView
        },
    }
</script>
