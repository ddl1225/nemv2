<template>
    <v-container>
        <v-navigation-drawer
                v-model="newModal">
            <v-card-title>
                <span class="headline">운영자등록</span>
            </v-card-title>
            <v-container>
                <v-form>
                    <v-row>
                        <v-col cols="3" align-self="center" ><span class="">이름</span></v-col>
                        <v-col cols="9" class="pa-2 pl-0 pr-2">
                            <v-text-field
                                    v-model="userComponent.name"
                                    class="pa-0 ma-0 rounded-0" autocomplete="off"
                                    hide-details="auto" outlined
                                    color="primary" single-line
                                    :height="36"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" align-self="center" ><span class="">나이</span></v-col>
                        <v-col cols="9" class="pa-2 pl-0 pr-2">
                            <v-text-field
                                    v-model="userComponent.age"
                                    class="pa-0 ma-0 rounded-0" autocomplete="off"
                                    hide-details="auto" outlined
                                    color="primary" single-line
                                    :height="36"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" align-self="center" ><span class="">성별</span></v-col>
                        <v-col cols="9" class="pa-2 pl-0 pr-2">
                            <v-text-field
                                    v-model="userComponent.sex"
                                    class="pa-0 ma-0 rounded-0" autocomplete="off"
                                    hide-details="auto" outlined
                                    color="primary" single-line
                                    :height="36"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>

                <v-card-action>
                    <v-spacer></v-spacer>
                    <v-btn @click="productCloseButton()">닫기</v-btn>
                    <v-btn @click="productSaveButton()">저장하기</v-btn>
                </v-card-action>
            </v-container>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
    window.onload = function () {

    };


    export default {
        name:'productModal',
        props:{
            newModal:Boolean,

        },
        data(){
            return{
                userComponent:{
                    name:'',
                    age:'',
                    sex:'',
                },

            }
        },
        methods:{
            productCloseButton: function () {
                this.$emit('closeProductModalCall', false);

            },
            productSaveButton: async function(){
                this.$emit('productSaveButton', this.userComponent);
                this.$emit('closeProductModalCall', false);

            }
        }

    }
</script>
