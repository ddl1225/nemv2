<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
      <v-row>
          <!--vue-->
          <v-col cols="3"><v-btn @click="openInsertModal()">회원등록</v-btn></v-col>
        <!--vue-->
        <insert-modal :showModalFlag="insertModalFlag" @closeModalCall="closeInsertModal" @changeDataAxios="changeDataAxios"></insert-modal>
      </v-row>
        <!--<v-row v-if="userForm != null" >-->
        <v-row v-if="userForm != null" >
            아이디: {{userForm.loginId}} 이름: {{userForm.name}} 소속: {{userForm.enterpriseId}} 레벨: {{userForm.level}}
        </v-row>

        <v-btn @click="addProduct()">제품 등록하기</v-btn>
        <productModal :newModal="addProductModal" @closeProductModalCall="closeProductModalCall" @productSaveButton="saveProductModalCall"></productModal>
        <!--<v-row v-if="userForm2 != null" >-->
            <!--이름: {{userForm2.name}} 나이: {{userForm2.age}} 성별: {{userForm2.sex}}-->
        <!--</v-row>-->
        <v-data-table :headers="headers" :items="userForm2">
        </v-data-table>
        <v-container>
            <!--new클릭버튼-->
            <v-btn @click="newAdminBtn()">NEW관리자추가하기</v-btn>
            <admin-information :newAdminmodal="childNewAdminModal" @closeAdminBtn="closeAdminBtn" @saveAdminBtn="saveAdminBtn"></admin-information>
            <v-data-table :headers="headers" :items="userForm3">
            </v-data-table>
        </v-container>


    </v-container>
</template>
<script>

    import insertModal from "./insertModal.vue";
    import productModal from "./productModal.vue";
    import adminInformation from "./adminInformation.vue";


    export default {
        components:{
            insertModal,
            productModal,
            adminInformation

        },
        props:{
            tableList:null,
        },
        data(){
            return{
                //모달내용
                childNewAdminModal:false,


                adminNewModalFlag:false,
                headers:[
                    {text: "이름", value: "name", width:"80px", class: "px-2",divider: true,align: 'center' },
                    { text: "나이",value: "age", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "성별", value: "sex", width:"80px", class: "px-2",divider: true,align: 'center' },
                ],
                bodys: [],
                insertModalFlag: false,
                userForm: null,

                data:3,
                addProductModal:false,
                userForm2:[
                ],
            }
        },
        methods:{
            openInsertModal: function (){
                //회원등록 버튼 클릭.vue
                this.insertModalFlag = !this.insertModalFlag
            },
            closeInsertModal: function (data){
                console.log('closeInsertModal() '+data);
                this.insertModalFlag = data;
            },
            changeDataAxios :function (data) {
                console.log(data);
                this.userForm = data;
            },
            // 등록하기버튼클릭했을떄
            addProduct :function () {
                this.addProductModal = !this.addProductModal
            },
            //취소버튼
            closeProductModalCall: function (data) {
                console.log('closeInsertModal() '+data);
                this.addProductModal = data;
            },
            //저장하기 버튼
            saveProductModalCall:function (data) {
                console.log(data);
                console.log(this.data);
                // this.userForm2.push(data);
                this.userForm2.push(Object.assign({}, data));
                // this.userForm2 = data;
            },
            //new버튼 클릭
            newAdminBtn:function (){
                this.childNewAdminModal = !this.childNewAdminModal
            },
            //취소버튼
            closeAdminBtn: function (data) {
                console.log('childNewAdminModal() '+data);
                this.childNewAdminModal = data;
            },
        //    저장하기 버튼
            saveAdminBtn: function (data) {
                console.log(data);

            }
        },

    }
</script>
