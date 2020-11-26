<template>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            bottom
            temporary
    >
        <v-list
                nav
                dense
        >
            <v-list-item-group

                    active-class="deep-purple--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

    export default {
        name: 'HomeDrawer',
        props:{
            drawer: Boolean
        },
        data(){
            return{
                items: [
                    { title: 'Home', icon: 'mdi-view-dashboard',route:'/' },
                    { title: 'About', icon: 'mdi-forum', route:'/user'},
                    { title: 'Calculator', icon: 'mdi-forum', route:'/calculator'},
                ],

            }
        }
    }
</script>
