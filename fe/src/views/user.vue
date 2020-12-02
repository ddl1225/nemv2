<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm 3 md4 >
                <v-btn @click="showModalClick()">모달 띠우기</v-btn>
                <insert-modal2 :showModalFlag="showModal" @changeMobileDataAxios="changeMobileDataAxios" @mobileCloseModal="mobileCloseModal"></insert-modal2>
                <v-data-table
                        :headers="headers"
                        :items="userinformation"
                        sort-by="calories"
                        class="elevation-1"
                        width="100%"
                        @click:row="showEditBtn"
                ></v-data-table>
                <!--<v-btn   @click="showEditBtn();">수정하기</v-btn>-->
                <insertModal3 :showModalFlag3="showModal3" :updatesum="editedItem" @updateCloseModal="updateCloseModal"></insertModal3>
                <v-row v-if="userForm != null" >
                    아이디: {{userForm.loginId}} 이름: {{userForm.name}} 소속: {{userForm.enterpriseId}} 레벨: {{userForm.level}}
                </v-row>
                <v-col row>
                    <h1>유저 페이지</h1>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="">
                                <h3 class="headline mb-0">get</h3>
                            </div>
                        </v-card-title >
                        <v-card-text>
                            <v-textarea v-model="getMd">

                            </v-textarea>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn  color="orange" @click="getReq">submit</v-btn>

                        </v-card-actions>
                    </v-card>

                    <v-card>
                        <v-card-title primary-title>
                            <div class="">
                                <h3 class="headline mb-0">post</h3>
                            </div>
                        </v-card-title >
                        <v-card-text>
                            <v-textarea v-model="postMd">

                            </v-textarea>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn  color="orange" @click="postReq">submit</v-btn>

                        </v-card-actions>
                    </v-card>

                    <v-card>
                        <v-card-title primary-title>
                            <div class="">
                                <h3 class="headline mb-0">put</h3>
                            </div>
                        </v-card-title >
                        <v-card-text>
                            <v-textarea v-model="putMd">

                            </v-textarea>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn  color="orange" @click="putReq">submit</v-btn>

                        </v-card-actions>
                    </v-card>

                    <v-card>
                        <v-card-title primary-title>
                            <div class="">
                                <h3 class="headline mb-0">del</h3>
                            </div>
                        </v-card-title >
                        <v-card-text>
                            <v-textarea v-model="delMd">

                            </v-textarea>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn  color="orange" @click="delReq">submit</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import insertModal2 from "./insertModal2.vue";
import insertModal3 from "./insertModal3.vue";
    export default {
        components:{
            insertModal2,insertModal3
        },
        props:{

        },
    data(){
      return{
          userinformation2:null,
          showModal3:false,
          showModal:false,
          userForm: null,
          users: [],
          getMd: '',
          postMd: '',
          putMd: '',
          delMd: '',
          headers:[
              {text: "이름", value: "enterpriseId", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "나이",value: "level", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "성별", value: "loginId", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "성별", value: "password", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "성별", value: "name", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "성별", value: "phone", width:"80px", class: "px-2",divider: true,align: 'center' },
              {text: "성별", value: "memo", width:"80px", class: "px-2",divider: true,align: 'center' },
          ],
          userinformation:[
              {"enterpriseId":"올리고","level":"","loginId":"kk1","password":"","name":"","phone":"","memo":""},
              {"enterpriseId":"올리고","level":"","loginId":"kk2","password":"","name":"","phone":"","memo":""},
              {"enterpriseId":"올리고","level":"","loginId":"kk3","password":"","name":"","phone":"","memo":""},
              {"enterpriseId":"올리고","level":"","loginId":"kk4","password":"","name":"","phone":"","memo":""},
              {"enterpriseId":"올리고","level":"","loginId":"kk5","password":"","name":"","phone":"","memo":""},
              {"enterpriseId":"올리고","level":"","loginId":"kk6","password":"","name":"","phone":"","memo":""},
          ],
          editedItem: {"enterpriseId":"","level":"","loginId":"","password":"","name":"","phone":"","memo":""},


      }
    },
   mounted (){
     axios.get('http://localhost:3000/api/user')
         .then((r) => {
             this.getMd = r.data
         })
         .catch((e) => {
             console.error(e.message)
         })

   },
        methods:{
            showModalClick: function(){
            this.showModal = !this.showModal
            },
            changeMobileDataAxios: function(data){
                console.log(data);
                this.userinformation.push((Object.assign({}, data)));
                this.showModal=false;
            },
            mobileCloseModal:function(){
                this.showModal=false;
            },
            showEditBtn:function(data){
                this.editedItem = data;
                // console.log(MouseEvent);
                // this.userinformation2.push((Object.assign({}, data)));
                console.log('들어왔따');
                this.showModal3 =  true;
            },
            updateCloseModal:function(){
                this.showModal3=false;
            },


        getReq(){
            axios.get('http://localhost:3000/api/user', {
                user : 'getMan'
            })
                .then((r) => {
                    this.getMd = JSON.stringify(r.data)
                })
                .catch((e) => {
                    console.error(e.message)
                })
        },
            postReq(){
                axios.post('http://localhost:3000/api/user',{
                    user : 'postMan'
                })
                    .then((r) => {
                        this.postMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            putReq(){
                axios.put('http://localhost:3000/api/user/_id',{
                    user : 'putMan'
                })
                    .then((r) => {
                        this.putMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            delReq(){
                axios.delete('http://localhost:3000/api/user/_id')
                    .then((r) => {
                        this.delMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            }
       },

    }
</script>
