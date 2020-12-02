<template>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            bottom
            temporary
            right
            v-on="$listeners"
            v-bind="$attrs"
    >
        <v-list
                nav
                dense
        >
          <v-list-item

          >

          </v-list-item>
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
                items: {
                    type: Array,
        default: () => ([]),
                },

            }
        }
    }
</script>
