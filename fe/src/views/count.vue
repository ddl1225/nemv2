<template>
    <v-container>
        <h1>
            {{ nameOfChild }}
        </h1>
    </v-container>
</template>
<script>
    export default {
        name: 'countView',

        props:['nameOfChild'],
        userInputModal:{
            nameOfChild:{
                type:Number,
                default: 0
            }
        },
        data(){
            return{

            }
        },

    }
</script>
