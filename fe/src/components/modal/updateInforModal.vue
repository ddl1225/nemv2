<template>
    <div>
        <v-card
                v-model="update"
                class="mx-auto"
                max-width="400"
        >

            <v-text-field
                    v-model="inforComponent.name"
                    :height="36" dense
                    placeholder=" 이름입력해주세요."
            >

            </v-text-field>
            <v-text-field
                    v-model="inforComponent.address"
                    :height="36" dense
                    placeholder="주소을 입력해주세요."
            >

            </v-text-field>
            <v-text-field
                    v-model="inforComponent.fee"
                    :height="36" dense
                    placeholder="요금을 입력해주세요."
            >

            </v-text-field>
            <v-text-field
                    v-model="inforComponent.centerfee"
                    :height="36" dense
                    placeholder="센터요금을 입력해주세요."
            >

            </v-text-field>
            <v-card-actions>
                <v-btn
                        color="orange"
                        text
                >
                    Share
                </v-btn>

                <v-btn
                        color="orange"
                        text
                >
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        props:{
            update:Boolean,
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

            //저장하는 버튼


        }
    }
</script>
