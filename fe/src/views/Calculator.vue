<template>
        <v-container>
            <v-col>
                <v-btn @click="feesum_Click"> 열기</v-btn>
                <v-container v-if="feesum_Open">
                    <h1>이다빈</h1>
                    <v-row>
                       <v-col >
                           <h1>이름</h1>
                           v-layout
                       </v-col>
                       <v-col >
                           <h1>나이</h1>
                       </v-col>

                    </v-row>
                </v-container>
            </v-col>
        </v-container>
</template>

<script>
    export default {
        name: 'calculator',
    data(){
            return{
                feesum_Open:true

            }
        },
        methods:{
            feesum_Click: function () {
                this.feesum_Open = !this.feesum_Open
            }
        }

    }


</script>
