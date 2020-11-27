<template>
    <v-container>
      <v-row>
          <!--vue-->
          <v-col cols="3"><v-btn @click="openInsertModal()">회원등록</v-btn></v-col>

        <!--vue-->
        <insert-modal :showModalFlag="insertModalFlag" @closeModalCall="closeInsertModal" ></insert-modal>
      </v-row>
        <v-row v-if="userForm != null">
            아이디: {{userForm.loginId}} 이름: {{userForm.name}} 소속: {{userForm.enterpriseId}} 레벨: {{userForm.level}}
        </v-row>
    </v-container>
</template>
<script>

    import insertModal from "./insertModal.vue";

    export default {
        components:{insertModal},
        data(){
            return{
                insertModalFlag: false,
                userForm: null,
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
        }
    }
</script>
