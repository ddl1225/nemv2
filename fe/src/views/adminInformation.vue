<template>
    <div>
        <v-navigation-drawer
                v-model="newAdminmodal"
                bottom right
                width="500px">
            <v-card-title>
                <span class="headline">운영자등록</span>
            </v-card-title>
            <v-container>
                <v-form>
                    <v-row>
                        <v-col cols="3" align-self="center" ><span class="">이름</span></v-col>
                        <v-col cols="9" class="pa-2 pl-0 pr-2">
                            <v-text-field
                                    v-model="adminComponent.name"
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
                                    v-model="adminComponent.age"
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
                                    v-model="adminComponent.sex"
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
                    <v-btn @click="cancelBtn()">닫기</v-btn>
                    <v-btn @click="saveBtn()">저장하기</v-btn>
                </v-card-action>
            </v-container>
        </v-navigation-drawer>
    </div>
</template>

<script>

    export default {
        props:{
            newAdminmodal:Boolean,
        },
        data(){
            return{
                adminComponent:{
                    name:'',
                    age:'',
                    sex:'',
                }
            }
        },
        methods:{
            cancelBtn: function () {
                this.$emit('closeAdminBtn',false)
            },
            saveBtn: function(){
                this.$emit('saveAdminBtn',this.adminComponent);
                this.$emit('closeAdminBtn',false)
            }
        }
    }
</script>
