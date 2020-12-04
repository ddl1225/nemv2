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
                        mobile-breakpoint
                        @click:row="showEditBtn"
                ></v-data-table>
                <!--<v-btn   @click="showEditBtn();">수정하기</v-btn>-->
                <insertModal3 :showModalFlag3="showModal3" :updatesum="editedItem" @updateCloseModal="updateCloseModal" @updateMobileDataAxios="updateMobileDataAxios"></insertModal3>
                <v-row v-if="userForm != null" >
                    아이디: {{userForm.loginId}} 이름: {{userForm.name}} 소속: {{userForm.enterpriseId}} 레벨: {{userForm.level}}
                </v-row>
                      <!--{{users}}-->
                <v-flex xs12 sm6 md4 v-for= "u  in users" :key="u._id">
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{u.name}}</h3>
                                <div>{{u.age}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn text colcor="orange" @click="putUser(user._id)">수정</v-btn>
                            <v-btn text colcor="green" @click="delUser(user._id)">삭제</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <!--<v-col row>-->
                    <!--<h1>유저 페이지</h1>-->
                    <!--<v-card>-->
                        <!--<v-card-title primary-title>-->
                            <!--<div class="">-->
                                <!--<h3 class="headline mb-0">get</h3>-->
                            <!--</div>-->
                        <!--</v-card-title >-->
                        <!--<v-card-text>-->
                            <!--<v-textarea v-model="getMd">-->

                            <!--</v-textarea>-->
                        <!--</v-card-text>-->

                        <!--<v-card-actions>-->
                            <!--<v-btn  color="orange" @click="getReq">submit</v-btn>-->

                        <!--</v-card-actions>-->
                    <!--</v-card>-->

                    <!--<v-card>-->
                        <!--<v-card-title primary-title>-->
                            <!--<div class="">-->
                                <!--<h3 class="headline mb-0">post</h3>-->
                            <!--</div>-->
                        <!--</v-card-title >-->
                        <!--<v-card-text>-->
                            <!--<v-textarea v-model="postMd">-->

                            <!--</v-textarea>-->
                        <!--</v-card-text>-->

                        <!--<v-card-actions>-->
                            <!--<v-btn  color="orange" @click="postReq">submit</v-btn>-->

                        <!--</v-card-actions>-->
                    <!--</v-card>-->

                    <!--<v-card>-->
                        <!--<v-card-title primary-title>-->
                            <!--<div class="">-->
                                <!--<h3 class="headline mb-0">put</h3>-->
                            <!--</div>-->
                        <!--</v-card-title >-->
                        <!--<v-card-text>-->
                            <!--<v-textarea v-model="putMd">-->

                            <!--</v-textarea>-->
                        <!--</v-card-text>-->

                        <!--<v-card-actions>-->
                            <!--<v-btn  color="orange" @click="putReq">submit</v-btn>-->

                        <!--</v-card-actions>-->
                    <!--</v-card>-->

                    <!--<v-card>-->
                        <!--<v-card-title primary-title>-->
                            <!--<div class="">-->
                                <!--<h3 class="headline mb-0">del</h3>-->
                            <!--</div>-->
                        <!--</v-card-title >-->
                        <!--<v-card-text>-->
                            <!--<v-textarea v-model="delMd">-->

                            <!--</v-textarea>-->
                        <!--</v-card-text>-->

                        <!--<v-card-actions>-->
                            <!--<v-btn  color="orange" @click="delReq">submit</v-btn>-->

                        <!--</v-card-actions>-->
                    <!--</v-card>-->
                <!--</v-col>-->

            </v-flex>

            <v-btn
            absolute
            dark
            fab
            center
            right
            color="pink"
            @click="adup"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-layout>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">회원등록하기</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                            >
                                <v-text-field
                                        label="Legal last name*"
                                        hint="userName"
                                        persistent-hint
                                        required
                                        v-model="userName"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        label="Password*"
                                        type="password"
                                        required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                                    sm="6"
                            >
                                <v-select
                                        :items="userAges"
                                        label="Age"
                                        required
                                        v-model="userAge"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                    <!--<small>*indicates required field</small>-->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="postUser"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
                colcor="green"
                v-model="snackbar"
        >
            {{ sbMsg }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>


</template>

<!--<script>-->
<!--import axios from 'axios'-->
<!--import insertModal2 from "./insertModal2.vue";-->
<!--import insertModal3 from "./insertModal3.vue";-->
    <!--export default {-->
        <!--components:{-->
            <!--insertModal2,insertModal3-->
        <!--},-->
        <!--props:{-->

        <!--},-->
        <!--watch:{-->

        <!--},-->
    <!--data(){-->
      <!--return{-->
          <!--userinformation2:null,-->
          <!--showModal3:false,-->
          <!--showModal:false,-->
          <!--userForm: null,-->
          <!--users: [],-->
          <!--getMd: '',-->
          <!--postMd: '',-->
          <!--putMd: '',-->
          <!--delMd: '',-->
          <!--headers:[-->
              <!--{text: "소속", value: "enterpriseId", width:"80px", class: "px-2",divider: true,align: 'center' },-->
              <!--{text: "등급",value: "level", width:"80px", class: "px-2",divider: true,align: 'center' },-->
              <!--{text: "아이디", value: "loginId", width:"80px", class: "px-2",divider: true,align: 'center' },-->
              <!--{text: "비밀번호", value: "password", width:"80px", class: "px-2",divider: true,align: 'center' },-->
              <!--{text: "성명", value: "name", width:"80px", class: "px-2",divider: true,align: 'center' },-->
              <!--{text: "메모", value: "phone", width:"80px", class: "px-2",divider: true,align: 'center' },-->

          <!--],-->
          <!--userinformation:[-->
              <!--{"enterpriseId":"1","level":"2","loginId":"3","password":"4","name":"5","phone":"6","memo":"7"},-->
              <!--{"enterpriseId":"15654","level":"28664644","loginId":"8883","password":"4","name":"5","phone":"6","memo":"7"},-->
              <!--{"enterpriseId":"14564","level":"45646462","loginId":"485863","password":"4","name":"5","phone":"6","memo":"7"},-->
              <!--{"enterpriseId":"18454","level":"87852","loginId":"3","password":"4","name":"5","phone":"6","memo":"7"},-->
              <!--{"enterpriseId":"157485","level":"246646","loginId":"3666768","password":"4","name":"5","phone":"6","memo":"7"},-->
          <!--],-->
          <!--editIndex: 0,-->
          <!--editedItem: {"enterpriseId":"","level":"","loginId":"","password":"","name":"","phone":"","memo":""},-->
          <!--editedItem2:{},-->

          <!--dialog:false,-->
          <!--userAges:[-->

          <!--],-->
          <!--userAge:0,-->
          <!--userName:'',-->
          <!--snackbar:false,-->
          <!--sbMsg:'',-->
      <!--}-->
    <!--},-->
   <!--mounted (){-->
     <!--axios.get('http://localhost:3000/api/user')-->
         <!--.then((r) => {-->
             <!--this.getMd = r.data-->
         <!--})-->
         <!--.catch((e) => {-->
             <!--console.error(e.message)-->
         <!--})-->
       <!--for(let i = 10; i < 40; i++) this.userAges.push(i)-->


   <!--},-->
        <!--methods:{-->
            <!--showModalClick: function(){-->
            <!--this.showModal = !this.showModal-->
            <!--},-->
            <!--changeMobileDataAxios: function(data){-->
                <!--console.log(data);-->
                <!--this.userinformation.push((Object.assign({}, data)));-->
                <!--this.showModal=false;-->
            <!--},-->
            <!--mobileCloseModal:function(){-->
                <!--this.showModal=false;-->
            <!--},-->
            <!--showEditBtn:function(data){-->
                <!--this.editedItem = data;-->
                <!--// console.log(MouseEvent);-->
                <!--// this.userinformation2.push((Object.assign({}, data)));-->
                <!--console.log('들어왔따');-->
                <!--this.editIndex = this.userinformation.indexOf(data);-->
                <!--console.log('['+this.editIndex+']');-->
                <!--this.showModal3 =  true;-->
            <!--},-->
            <!--updateCloseModal:function(){-->
                <!--this.showModal3 =!this.showModal3;-->
                <!--// this.userinformation=[];-->
                <!--// this.tableList = res.data.data;-->
            <!--},-->
            <!--// updateMobileDataAxios:function(data){-->
            <!--//     console.log(data);-->
            <!--//-->
            <!--// },-->
        <!--updateMobileDataAxios: function (data)-->
        <!--{-->
        <!--console.log(data);-->
        <!--// (object.assign({},this.userinformation[this.editIndex].data));-->
        <!--// let update = object.assign({},this.userinformation[this.editIndex].data);-->
        <!--// this.userinformation.push((Object.assign({}, data)))-->
        <!--// let updated=Object.assign({},,data);-->
        <!--// Object.assign({},editedItem2,{editedItem:Object.assign({},this.userinformation[this.editIndex].data),});-->
        <!--// Object.assign(this.userinformation[this.editIndex],data);-->
        <!--console.log(typeof this.userinformation[this.editIndex].loginId);-->
        <!--console.log(typeof data.loginId);-->
        <!--Object.assign(this.userinformation[this.editIndex].loginId,data.loginId);-->
        <!--Object.assign(this.userinformation[this.editIndex],Object.assign({},{"loginId":data.loginId}));-->
        <!--// cloneDeep({},this.userinformation[this.editIndex],data);-->

        <!--// this.editedItem2= Object.assign({},(Object.assign({},this.userinformation[this.editIndex], {"loginId": data.loginId})));-->
        <!--// console.log("editedItem2");-->
        <!--console.log(this.userinformation[this.editIndex]);-->

        <!--},-->


        <!--getReq(){-->
            <!--axios.get('http://localhost:3000/api/user', {-->
                <!--user : 'getMan'-->
            <!--})-->
                <!--.then((r) => {-->
                    <!--this.getMd = JSON.stringify(r.data)-->
                <!--})-->
                <!--.catch((e) => {-->
                    <!--console.error(e.message)-->
                <!--})-->
        <!--},-->
            <!--postReq(){-->
                <!--axios.post('http://localhost:3000/api/user',{-->
                    <!--user : 'postMan'-->
                <!--})-->
                    <!--.then((r) => {-->
                        <!--this.postMd = JSON.stringify(r.data)-->
                    <!--})-->
                    <!--.catch((e) => {-->
                        <!--console.error(e.message)-->
                    <!--})-->
            <!--},-->
            <!--putReq(){-->
                <!--axios.put('http://localhost:3000/api/user/_id',{-->
                    <!--user : 'putMan'-->
                <!--})-->
                    <!--.then((r) => {-->
                        <!--this.putMd = JSON.stringify(r.data)-->
                    <!--})-->
                    <!--.catch((e) => {-->
                        <!--console.error(e.message)-->
                    <!--})-->
            <!--},-->
            <!--delReq(){-->
                <!--axios.delete('http://localhost:3000/api/user/_id')-->
                    <!--.then((r) => {-->
                        <!--this.delMd = JSON.stringify(r.data)-->
                    <!--})-->
                    <!--.catch((e) => {-->
                        <!--console.error(e.message)-->
                    <!--})-->
            <!--},-->
            <!--adup(){-->
                <!--this.dialog = true;-->
            <!--},-->
            <!--postUser(){-->
                <!--// console.log(this.userName,this.userAge);-->
                <!--this.dialog=false;-->
                <!--this.pop(this.userName)-->
                    <!--axios.post('http://localhost:3000/api/user',{-->
                        <!--name : this.userName, age: this.userAge-->
                    <!--})-->
                        <!--.then(() => {-->
                         <!--this.pop('사용자등록완료')-->
                        <!--})-->
                        <!--.catch((e) => {-->
                            <!--this.pop(e.message)-->
                        <!--})-->
            <!--},-->
            <!--getUsers(){-->
                <!--axios.get('http://localhost:3000/api/user', {-->
                    <!--user : 'getMan'-->
                <!--})-->
                    <!--.then((r) => {-->
                        <!--this.getMd = JSON.stringify(r.data)-->
                    <!--})-->
                    <!--.catch((e) => {-->
                        <!--console.error(e.message)-->
                    <!--})-->
            <!--},-->
            <!--pop(msg){-->
                <!--this.snackbar = true;-->
                <!--this.sbMsg = msg;-->
            <!--},-->

       <!--},-->

    <!--}-->
<!--</script>-->
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
        watch:{
        },
        data(){
            return{
                userinformation2:null,
                showModal3:false,
                showModal:false,
                userForm: null,
                getMd: '',
                postMd: '',
                putMd: '',
                delMd: '',
                headers:[
                    {text: "소속", value: "enterpriseId", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "등급",value: "level", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "아이디", value: "loginId", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "비밀번호", value: "password", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "성명", value: "name", width:"80px", class: "px-2",divider: true,align: 'center' },
                    {text: "메모", value: "phone", width:"80px", class: "px-2",divider: true,align: 'center' },
                ],
                userinformation:[
                    {"enterpriseId":"1","level":"2","loginId":"3","password":"4","name":"5","phone":"6","memo":"7"},
                    {"enterpriseId":"15654","level":"28664644","loginId":"8883","password":"4","name":"5","phone":"6","memo":"7"},
                    {"enterpriseId":"14564","level":"45646462","loginId":"485863","password":"4","name":"5","phone":"6","memo":"7"},
                    {"enterpriseId":"18454","level":"87852","loginId":"3","password":"4","name":"5","phone":"6","memo":"7"},
                    {"enterpriseId":"157485","level":"246646","loginId":"3666768","password":"4","name":"5","phone":"6","memo":"7"},
                ],
                editIndex: 0,
                editedItem: {"enterpriseId":"","level":"","loginId":"","password":"","name":"","phone":"","memo":""},
                editedItem2:{},
                dialog:false,
                users:[],
                userAges:[],
                userName:'',
                userAge:0,
                //put 수정하기
                userNamePut:'',
                userAgePut :0,
                snackbar:false,
                sbMsg:'',
                //put user팝업

            }
        },
        mounted (){
           for (let i =10; i<40; i++)this.userAges.push(i)
          this.getUsers()
            // axios.get('http://localhost:3000/api/user')
            //     .then((r) => {
            //         this.getMd = r.data
            //     })
            //     .catch((e) => {
            //         console.error(e.message)
            //     })
        },
        methods: {
            showModalClick: function () {
                this.showModal = !this.showModal
            },
            changeMobileDataAxios: function (data) {
                console.log(data);
                this.userinformation.push((Object.assign({}, data)));
                this.showModal = false;
            },
            mobileCloseModal: function () {
                this.showModal = false;
            },
            showEditBtn: function (data) {
                this.editedItem = data;
                // console.log(MouseEvent);
                // this.userinformation2.push((Object.assign({}, data)));
                console.log('들어왔따');
                this.editIndex = this.userinformation.indexOf(data);
                console.log('[' + this.editIndex + ']');
                this.showModal3 = true;
            },
            updateCloseModal: function () {
                this.showModal3 = !this.showModal3;
                // this.userinformation=[];
                // this.tableList = res.data.data;
            },
            // updateMobileDataAxios:function(data){
            //     console.log(data);
            //
            // },
            updateMobileDataAxios: function (data) {
                console.log(data);
                // (object.assign({},this.userinformation[this.editIndex].data));
                // let update = object.assign({},this.userinformation[this.editIndex].data);
                // this.userinformation.push((Object.assign({}, data)))
                // let updated=Object.assign({},,data);
                // Object.assign({},editedItem2,{editedItem:Object.assign({},this.userinformation[this.editIndex].data),});
                // Object.assign(this.userinformation[this.editIndex],data);
                console.log(typeof this.userinformation[this.editIndex].loginId);
                console.log(typeof data.loginId);
                Object.assign(this.userinformation[this.editIndex].loginId, data.loginId);
                Object.assign(this.userinformation[this.editIndex], Object.assign({}, {"loginId": data.loginId}));
                // cloneDeep({},this.userinformation[this.editIndex],data);
                // this.editedItem2= Object.assign({},(Object.assign({},this.userinformation[this.editIndex], {"loginId": data.loginId})));
                // console.log("editedItem2");
                console.log(this.userinformation[this.editIndex]);
            },
            getReq() {
                axios.get('http://localhost:3000/api/user', {
                    user: 'getMan'
                })
                    .then((r) => {
                        this.getMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            postReq() {
                axios.post('http://localhost:3000/api/user', {
                    user: 'postMan'
                })
                    .then((r) => {
                        this.postMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            putReq() {
                axios.put('http://localhost:3000/api/user/_id', {
                    user: 'putMan'
                })
                    .then((r) => {
                        this.putMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            delReq() {
                axios.delete('http://localhost:3000/api/user/_id')
                    .then((r) => {
                        this.delMd = JSON.stringify(r.data)
                    })
                    .catch((e) => {
                        console.error(e.message)
                    })
            },
            adup() {
                this.dialog = true;
            },
            postUser() {
                console.log(this.userName,this.userAge);
                this.dialog = false;
                this.pop(this.userName)
                axios.post('http://localhost:3000/api/user', {
                    name: this.userName, age: this.userAge
                })
                    .then(() => {
                        this.pop('사용자등록완료')
                        this.getUsers()
                    })
                    .catch((e) => {
                        this.pop(e.message)
                    })
            },

            getUsers() {
                axios.get('http://localhost:3000/api/user',)
                    .then((r) => {
                        console.log(r.data)
                        //왜 users 가 아니라 user인가
                        // this.users = r.data.user
                        this.users = r.data.user
                    })
                    .catch((e) => {
                        this.pop(e.message)
                    })
            },
            putUser(id){
                axios.put(`http://localhost:3000/api/user/${id}`, {
                    name: this.userName, age: this.userAge
                })
                    .then(() => {
                        this.pop('사용자수정완료')
                        this.getUsers()
                    })
                    .catch((e) => {
                        this.pop(e.message)
                    })
            },
            delUser(id){
                axios.delete(`http://localhost:3000/api/user/${id}`)
                    //인자없이 그냥 넘겨도 된다
                    .then(() => {
                        this.pop('사용자삭제완료')
                        this.getUsers()
                    })
                    .catch((e) => {
                        this.pop(e.message)
                    })
            },
            pop(msg) {
                this.snackbar = true;
                this.sbMsg = msg;
            },

        },

    }
</script>
