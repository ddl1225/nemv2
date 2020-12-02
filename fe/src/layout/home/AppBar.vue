<template>
    <v-container >
        <v-app-bar
                id="home-app-bar"
                app
                color="blue"
                dark
                height="80"
        >
            <v-spacer></v-spacer>
            <div>
                <v-tabs
                        background-color="transparent"
                        color="black"
                        right
                        icons-and-text>
                    <v-tab
                            v-for="(item,index) in toolbars"
                            :key="index.title"
                            link
                            router :to="item.route"
                            color="black"
                    >
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </div>
            <!--<v-btn icon>-->
                <!--<v-icon>mdi-magnify</v-icon>-->
            <!--</v-btn>-->

            <!--<v-btn-->
            <!--href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
            <!--target="_blank"-->
            <!--&gt;-->
            <!--<span class="mr-2">Latest Release</span>-->
            <!--<v-icon>mdi-open-in-new</v-icon>-->
            <!--</v-btn>-->
            <v-app-bar-nav-icon
                    @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <home-drawer

                :drawer="drawer"
        />
    </v-container>
</template>

<script>


    export default {


        name: 'HomeAppBar',
        components: {
            HomeDrawer: () => import('./Drawer'),
        },
        data(){
            return{
                tab: null,
                drawer: false,
                toolbars: [
                    { title: '홈',route:'/' },
                    { title: '라져', route:'/user'},
                    { title: '디지털 무전기',route:'/calculator'},
                    { title: '라져솔루션',route:'/information'},
                    { title: 'loT',route:'/address'},
                    { title: '가입신청',route:'/join'},
                    { title: '모바일',route:'/mobile'},
                ],
            }
        },
        computed:{
        },
        methods:{
        },
    }
</script>
<style lang="sass">
    #home-app-bar
        .v-tabs-slider
            max-width: 24px
            margin: 0 auto

        .v-tab
            &::before
                display: none

</style>
