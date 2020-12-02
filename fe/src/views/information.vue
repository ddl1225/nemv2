<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<v-container>
    <v-toolbar>
        <v-toolbar-title>정보관리</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="inforAddBtn()">정보추가하기</v-btn>
    </v-toolbar>
    <insertInforModal :insert="insertInfoModal" @inforSaveBtn="inforSaveBtn" @inforCancelBtn="inforCancelBtn"></insertInforModal>
    <v-data-table
            :headers="headers"
            :items="userinformation"
            sort-by="calories"
            class="elevation-1"
    ></v-data-table>

    <v-btn @click="edit = !edit">수정하기</v-btn>
    <update-infor-modal :update="update" ></update-infor-modal>
</v-container>
</template>
<script>
    import insertInforModal from '../components/modal/insertInforModal.vue'
    import updateInforModal from '../components/modal/updateInforModal.vue'
export default {


    data(){
        return{
            update:false,


            insertInfoModal:false,
            headers:[
                {text: '회원정보관리', align: 'left', sortable: false, value: 'name'},
                { text: '나이', value: 'address' },
                { text: '활성화', value: 'active' },
                { text: '성별', value: 'fee' },
                { text: '종류', value: 'centerfee' },
            ] ,
            userinformation:[],
        }
    },
    methods:{
        // 클릭버튼
        inforAddBtn: function () {
            this.insertInfoModal = !this.insertInfoModal
        },
        //저장버튼child
        inforSaveBtn: function (data) {
            console.log(data);
            // console.log(this.data);

            this.userinformation.push(Object.assign({}, data));
            this.insertInfoModal= false;
        },
        //닫기버튼child
        inforCancelBtn:function (data) {
            console.log('inforCancelBtn() '+data);
            this.insertInfoModal = data;
        },
        // 클릭버튼
        edit: function () {
            this.update = !this.update;
        },


    },
    components:{
        insertInforModal,updateInforModal
    }
}
</script>
