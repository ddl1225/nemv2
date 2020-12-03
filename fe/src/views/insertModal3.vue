<template>
    <div id="modalPage">
        <v-navigation-drawer
                v-model="showModal3"
                :fixed="true"
                bottom right
                temporary
                width="500px"
                :stateless="processFlag"
                @input="visibleModal($event)"
        >
            <v-container>
                <v-card-title>
                    <span class="headline">운영자수정</span>
                </v-card-title>
                <v-card-text class="px-0">
                    <v-container class="px-1">
                        <v-form ref="postForm" :name="'userForm'" lazy-validation >
                            <!--소속-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">소속</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-select :items="[enterpriseArray]" v-model="modalComponent.enterpriseId"
                                              class="pa-0 ma-0 rounded-0" single-line
                                              placeholder="선택하세요." dense hide-details="true"
                                              color="primary" height="36" outlined
                                              item-text="value" item-value="value"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <!--등급-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">등급</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-select :items="[levelArray]" v-model="modalComponent.level"
                                              class="pa-0 ma-0 rounded-0" single-line
                                              placeholder="선택하세요." dense hide-details="true"
                                              color="primary" height="36" outlined
                                              item-text="value" item-value="value"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <!--아이디-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">아이디</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-text-field
                                            class="pa-0 ma-0 rounded-0" autocomplete="off"
                                            v-model="modalComponent.loginId"
                                            hide-details="auto" outlined
                                            color="primary" single-line
                                            :height="36" dense
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!--비밀번호-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">비밀번호</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-text-field
                                            class="pa-0 ma-0 rounded-0" autocomplete="off"
                                            v-model="modalComponent.password"
                                            hide-details="auto" outlined
                                            color="primary" single-line
                                            :height="36" dense type="password"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!--성명-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">성명</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-text-field
                                            class="pa-0 ma-0 rounded-0" autocomplete="off"
                                            v-model="modalComponent.name"
                                            hide-details="auto" outlined
                                            color="primary" single-line
                                            :height="36" dense
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <!--메모-->
                            <v-row>
                                <v-col cols="1" align-self="center" >*</v-col>
                                <v-col cols="2" align-self="center" ><span class="">메모</span></v-col>
                                <v-col cols="9" class="pa-2 pl-0 pr-2">
                                    <v-textarea class="pa-0 ma-0 rounded-0"
                                                v-model="modalComponent.memo"
                                                clearable clear-icon="cancel" rows="5"
                                                color="primary" hide-details="auto" dense
                                                outlined :no-resize="true"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small tile depressed outlined color="primary" width="100" height="40" @click="closeModal()" >닫기</v-btn>
                    <v-btn small tile depressed dark color="primary" width="100" height="40" class="pr-2" @click="updateMobileDataAxios()" >수정완료<br>(F2)</v-btn>
                </v-card-actions>
            </v-container>

        </v-navigation-drawer>
    </div>
</template>
<script>

    import {CommonsDoc} from "./json/mixin/commons";

    export default {
        props:{
            showModalFlag3:Boolean,
            updatesum:{ type: Object },
        },
        components: {  },
        created () { }, updated () { },
        mounted() {
            // window.addEventListener('keydown', this._keyListener);
        },
        beforeDestroy() {
            // window.removeEventListener('keydown', this._keyListener);
        },
        data() {
            return {
                showModal3: this.showModalFlag3 /*모달 띄우기 키*/

                , modalComponent: {
                    enterpriseId: ''
                    ,level: ''
                    ,loginId:''
                    ,password:''
                    ,name: ''
                    ,phone: ''
                    ,memo: ''
                }
                ,enterpriseArray: [
                    {key:1,value:"삼천리"},
                    {key:2,value:"올리고"},
                    {key:3,value:"사다리차스카이차"},
                ]
                ,levelArray: [
                    {key:1,value:"SUPER"},
                    {key:2,value:"MASTER"},
                    {key:3,value:"NORMAL"},
                ]
            }
        },
        watch: {
            showModalFlag3: function () {
                this.showModal3= this.showModalFlag3;
                console.log('showModalFlag3 Watch');
                if(this.showModal3=== true){
                    this.resetComponent();
                }
                // this.showModal3= this.showModalFlag3;
            },
            showModal3: function () {
                console.log('showModal3 Watch');
            },
            updatesum: function () {
                console.log('showModal1');
                this.resetComponent();
                if ( !(typeof this.updatesum  == 'undefined'||this.updatesum == null)){
                    this.modalComponent.enterpriseId=this.updatesum.enterpriseId;
                    this.modalComponent.level=this.updatesum.level;
                    this.modalComponent.loginId=this.updatesum.loginId;
                    this.modalComponent.password=this.updatesum.password;
                    this.modalComponent.name=this.updatesum.name;
                    this.modalComponent.phone=this.updatesum.phone;
                    this.modalComponent.memo=this.updatesum.memo;
                }
            },
        },
        computed: { /*testShow(){return this.showModalFlag}*/},
        methods: {
            _keyListener: function(e) {
                if(this.showModal === true && this.$store.getters['flagsModule/getIsLoading'] === false){
                    if (e.keyCode === 113 ) { this.validateComponent();}
                }
            },
            visibleModal: async function (event){
                if(this.processFlag === true && event === false) {
                    this.processFlag = false;
                    return;
                }
                if(event === false){
                    var con_test = await confirm("운영자 수정을 취소 하시겠습니까?");
                    if(con_test === true){
                        this.closeModal();
                    } else {
                        this.showModal3=true;
                        // this.$emit('visibleModal',true);
                    }
                }
            },
            /*[Modal 이용 함수들]*/
            resetComponent () {
                /*리셋 초기화 함수*/
                this.modalComponent.enterpriseId = '';
                this.modalComponent.level = '';
                this.modalComponent.loginId = '';
                this.modalComponent.password = '';
                this.modalComponent.name = '';
                this.modalComponent.phone = '';
                this.modalComponent.memo = '';
            },
            closeModal() {
                this.$emit('updateCloseModal',false);
            },
            //닫기
            updateCloseModal() {
                this.$emit('updateCloseModal',false);
            },
            //확인
            updateMobileDataAxios: async function () {
                this.$emit('updateMobileDataAxios',this.modalComponent);
                this.processFlag = true;
                this.$emit('updateCloseModal',false);

            },

            // this.$emit('selectObject',{'stringKey':'editItem','returnType':'Object','select':Object.assign({}, item)})

        }, mixins: [CommonsDoc]
    }

</script>
