<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm 3 md4 >
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
    export default {
    data(){
      return{
          users: [],
          getMd: '',
          postMd: '',
          putMd: '',
          delMd: '',

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
