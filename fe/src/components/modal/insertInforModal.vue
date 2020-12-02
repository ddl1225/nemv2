<template>
    <div>
        <v-navigation-drawer
        v-model="insert"
        app
        right
        temporary
        width="450"
        >
            <v-container>
                <v-card-title>
                    <span>정보등록하기</span>

                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form>
                            <!--이름-->
                            <v-row>
                                <v-col cols="1" align-self="center" >1</v-col>
                                <v-col cols="4" align-self="center" >이름</v-col>
                                <v-col cols="7">
                                    <v-text-field
                                    v-model="inforComponent.name"
                                    :height="36" dense
                                    placeholder="이름을 입력해주세요."
                                    >

                                    </v-text-field>
                                </v-col>
                                <v-col></v-col>
                            </v-row>
                            <!--주소-->
                            <v-row>
                                <v-col cols="1" align-self="center" >1</v-col>
                                <v-col cols="4" align-self="center" >주소</v-col>
                                <v-col cols="7">
                                    <v-text-field
                                            v-model="inforComponent.address"
                                            :height="36" dense
                                            placeholder="주소를 입력해주세요."
                                    >

                                    </v-text-field>
                                </v-col>
                                <v-col></v-col>
                            </v-row>
                            <!--이름-->
                            <v-row>
                                <v-col cols="1" align-self="center" >1</v-col>
                                <v-col cols="4" align-self="center" >요금</v-col>
                                <v-col cols="7">
                                    <v-text-field
                                            v-model="inforComponent.fee"
                                            :height="36" dense
                                            placeholder="요금을 입력해주세요."
                                    >

                                    </v-text-field>
                                </v-col>
                                <v-col></v-col>
                            </v-row>
                            <!--센터요금-->
                            <v-row>
                                <v-col cols="1" align-self="center" >1</v-col>
                                <v-col cols="4" align-self="center" >센터요금</v-col>
                                <v-col cols="7">
                                    <v-text-field
                                            v-model="inforComponent.centerfee"
                                            :height="36" dense
                                            placeholder="요금을 입력해주세요."
                                    >

                                    </v-text-field>
                                </v-col>
                                <v-col></v-col>
                            </v-row>
                            <!--<v-row>-->
                                <!--<v-col cols="1" align-self="center" >mdi-person</v-col>-->
                                <!--<v-col cols="2" align-self="center" ><span class="">아이디</span></v-col>-->
                                <!--<v-col cols="9" class="pa-2 pl-0 pr-2">-->
                                    <!--<v-text-field-->
                                            <!--class="pa-0 ma-0 rounded-0" autocomplete="off"-->
                                            <!--v-model="modalComponent.loginId"-->
                                            <!--hide-details="auto" outlined-->
                                            <!--color="primary" single-line-->
                                            <!--:height="36" dense-->
                                    <!--&gt;</v-text-field>-->
                                <!--</v-col>-->
                            <!--</v-row>-->
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="inforCancelBtn">취소하기</v-btn>
                    <v-btn @click="inforSaveBtn">저장하기</v-btn>
                </v-card-actions>
            </v-container>

        </v-navigation-drawer>

    </div>
</template>

<script>
    export default {

        props:{
            insert:Boolean,
        },
        data(){
            return{
                inforComponent:{
                    name:'',
                    address:'',
                    fee:'',
                    centerfee:'',
                }

            }
        },
        methods:{
            //취소
            // inforCancelBtn:function(){
            //   this.$emit('inforCancelBtn',false);
            // },
            //저장하는 버튼
            // inforSaveBtn:function () {
            //     this.$emit('inforSaveBtn' ,this.inforComponent);
            // },

        }
    }
</script>
