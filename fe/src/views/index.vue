<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container grid-list-sm :grid-list-md="!$vuetify.breakpoint.xs" :class="$vuetify.breakpoint.xs ? 'pa-0' : ''" >
        <v-row style="background: #f6f6f6">
            <v-col>
                <v-img
                max-height="850 "
                max-width="550"
                src="../assets/1.png"
                ></v-img>
            </v-col>
            <v-col>
                <v-container>
                    <p>파워톡 3.0 전용 LTE 무전기</p>
                    <h3>RADGER +10</h3>
                    <div  class="caption">
                        끊김 없는 전국 무전 통신<br>
                        우수한 스피커 음량<br>
                        터치 스크린<br>
                        원터치 PTT<br>
                        오래가는 대용량배터리
                    </div>
                    <v-divider/>
                    <v-row>
                        <div>
                            <v-btn
                                    color="red">
                                제품문의하기
                            </v-btn>
                        </div>
                        <div>
                            <v-btn
                                    class="pl-"
                                    color="grey">
                                이용가이드 다운로드
                            </v-btn>
                        </div>

                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <!--표-->
        <v-row
                class="pt-5"
                align="center"
                justify="center">
            <div class="text-h3 pb-5">요금제</div>
            <v-col cols="12" md7>
                <div>파워톡 3.0</div>
                <v-card>
                        <table class="fee" >
                            <thead >
                                <tr>
                                    <th rowspan="2">요금명</th>
                                    <th rowspan="2">월정액</th>
                                    <th colspan="2">무전</th>
                                    <th>이동전화</th>
                                </tr>
                                <tr>
                                    <th>개별</th>
                                    <th>그룹</th>
                                    <th>음성</th>
                                </tr>
                            <tr>
                                <th>PTT 20(新)</th>
                                <th>22,000원</th>
                                <th>무제한</th>
                                <th>100분</th>
                                <th>-</th>
                            </tr>
                                <tr>
                                    <th>PTT 24(新)</th>
                                    <th>22,000원</th>
                                    <th>무제한</th>
                                    <th>100분</th>
                                    <th>-</th>
                                </tr>
                                <tr>
                                    <th>PTT 26(新)</th>
                                    <th>22,000원</th>
                                    <th>무제한</th>
                                    <th>100분</th>
                                    <th>-</th>
                                </tr>
                                <tr>
                                    <th>PTT Full</th>
                                    <th>22,000원</th>
                                    <th>무제한</th>
                                    <th>100분</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                </v-card>

                <v-col cols="12">
                    <div>공통</div>
                    <div  class="caption">
                        ※ 약정할인: [2년] 15% / [3년] 20%<br>
                        ※ 위약금: [2년] : 88,000원 x 미사용일수/730 / [3년] : 176,000원 x 미사용일수/1095<br>
                        ※ 모든 요금제 대상 HD무전 기본 제공<br>
                        ※ 요금제별 부가서비스 5종 중 선택 : 멀티그룹수신, 지정그룹통화, 개별수신중발신, 이지메시지(무제한), 영상무전(30분)<br>
                        → [15/19/20요금] 1종 선택 [24요금] 2종 선택 [26/Full요금] 전체 제공(단, Full요금은 010 문자 무제한 및 이지아이 추가 제공)<br>
                        ※ 초과요율(VAT포함)<br>

                        [개별무전]13.2원/10초 · [그룹무전]24.2원/10초 · [음성]1.98원/초 · [영상]3.3원/초 · [데이터]22.52원/MB · [SMS]22원/건 · [LMS]33원/건 · [MMS]220원/건
                    </div>
                </v-col>
            </v-col>

        </v-row>
        <v-row>
            <v-col>
                <v-btn block @click="toggleOnOff">Click</v-btn>
                <v-container v-if="isStatusOn">
                    <v-row>
                            <v-col>
                                <div class="text-sm-h5 pl-3">요금제 선택</div>
                                <v-layout row>
                                    <v-col
                                            @click="feeT(index)"
                                            v-for="(card,index) in cards"
                                            :key="card.title"
                                            :cols="card.flex"
                                    >
                                        <v-card >
                                            <v-btn
                                                    block
                                                    height="70">
                                                {{card.title}} : {{index}}
                                            </v-btn>
                                        </v-card>
                                    </v-col>
                                </v-layout>
                            </v-col>
                            <v-col>
                                <div class="text-sm-h5 pl-3">요금제 확인</div>
                                <v-layout row>
                                    <v-col
                                            @click="feeT2(index)"
                                            v-for="(card, index) in cards2"
                                            :key="card.title"
                                            :cols="card.flex"
                                            v-model="cards"
                                    >
                                        <v-card>
                                            <v-btn
                                                    block
                                                    height="70">
                                                {{card.title}}
                                            </v-btn>
                                        </v-card>
                                    </v-col>
                                </v-layout>
                            </v-col>
                        </v-row>


                    <v-col clos="12" align-center justify-center>
                        <v-btn @click="feelTotal ">월 예상 납입금 조회하기</v-btn>
                        {{ cardsValue*cards2Value }}
                        <v-container v-if="feeContent">
                            //클릭했을떄 1-+ 버튼
                            <div @click="total +=1">
                                고객님의 월 예상 납입금은0 원 입니다.
                            </div>
                        </v-container>
                    </v-col>



                    <!--<v-row dense>-->
                        <!--<v-col-->
                                <!--v-for="card in cards"-->
                                <!--:key="card.title"-->
                                <!--:cols="card.flex"-->
                                <!--:rules="usernameRules"-->

                        <!--&gt;-->
                            <!--<v-card>-->
                                <!--<v-img-->
                                        <!--:src="card.src"-->
                                        <!--class="white&#45;&#45;text align-end"-->
                                        <!--gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
                                        <!--height="100px"-->
                                <!--&gt;-->
                                    <!--<v-card-title v-text="card.title"></v-card-title>-->
                                <!--</v-img>-->

                                <!--<v-card-actions>-->
                                    <!--<v-spacer></v-spacer>-->

                                    <!--<v-btn icon>-->
                                        <!--<v-icon>mdi-heart</v-icon>-->
                                    <!--</v-btn>-->

                                    <!--<v-btn icon>-->
                                        <!--<v-icon>mdi-bookmark</v-icon>-->
                                    <!--</v-btn>-->

                                    <!--<v-btn icon>-->
                                        <!--<v-icon>mdi-share-variant</v-icon>-->
                                    <!--</v-btn>-->
                                <!--</v-card-actions>-->
                            <!--</v-card>-->
                        <!--</v-col>-->
                    <!--</v-row>-->
                   <!--<v-row>-->
                       <!--<v-col cols="6">-->
                           <!--<v-card>-->

                           <!--</v-card>-->
                       <!--</v-col>-->
                       <!--<v-col cols="6"></v-col>-->
                   <!--</v-row>-->

                </v-container>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn v-on:click="counter +=1">+</v-btn>
                <v-btn v-on:click="counter -=1">-</v-btn>
            </v-col>
            <v-col cols="12">
                <countView :nameOfChild="counter"></countView>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import countView from './count.vue';
export default {
    // props:{
    //     sum: {
    //         type: Number,
    //         default: null
    //
    //     },
    // },

    data(){
        return{
            //요금 예상 금액 텍스트
            //월 예상 납입금 조회하기 클릭 확인
            feeContent: false,
            // +,- 숫자 더한 값
            counter:0,
            //Click 클릭 확인
            isStatusOn: true,

            //요금제 선택 버튼 클릭 확인
            cardsFlag: false,
            //요금제 선택 버튼 클릭 index 값 저장
            cardsIndex: 0,
            //요금제 선택 버튼 클릭 cards[index] 값 저장
            cardsValue: 0,
            cards: [
                {value: 14025,value36: 13200, title: 'PTT 15(新)', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,  },
                {value: 20000,value36: 13200, title: 'PTT 19(新)', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                {value: 15005,value36: 13200, title: 'PTT 24(新)', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                {value: 6565565,value36: 13200, title: 'PTT 26(新)', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                {value: 0,value36: 13200, title: 'PTT Full', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            ],
            //요금제 확인 버튼 클릭 확인
            cards2Flag: false,
            //요금제 확인 버튼 클릭 index 값 저장
            cards2Index: 0,
            //요금제 확인 버튼 클릭 cards2[index] 값 저장
            cards2Value: 0,
            cards2: [
                {value: 1,  title: '2년약정', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                {value: 2, title: '3년약정', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
            ],
        }
    },

    methods:{
        toggleOnOff: function() {
            //요금제 계산  버튼
            this.isStatusOn = !this.isStatusOn;
        },
        feelTotal: function () {

            // if(this.cardsFlag != true ) {
            //
            // }else {
            //     // alert('선택해주세요');
            // }
            if(this.cardsFlag == true && this.cards2Flag == true ) {
                alert('성공입니다.');
            }else {
                alert('선택해주세요');
            }

        },
        feeT: function (index) {
            //요금제 선택 버튼 클릭 index 값
            console.log("cards:"+index);
            console.log("cards title:"+this.getTitle(index));
            //cards 총 갯수
            console.log("cards length:" +this.cards.length);
            if(this.cards.length > index ){
                this.cardsFlag = true;
                this.cardsIndex = index;

                this.cardsValue = this.cards[index].value;

                // return this.cards[index].value;
            }
        },
        feeT2 : function (index) {
            //요금제확인 버튼 클릭 index 값
            console.log("cards2"+index);
            // console.log("cards2 title:"+this.getTitle(index));

            console.log("cards2 length:" + this.cards2.length);
            if (this.cards2.length >index) {
                this.cards2Flag = true;
                this.cards2Index = index;

                this.cards2Value = this.cards2[index].value;
            }



            },

        getTitle : function (index) {
            return index+"번 방이야.";
        }
    },
    components:{
        countView
    },
    computed:{
    }


}
</script>

<style>
    .fee{
        width: 100%;
    }
    tr,th{
        border: 1px solid #ddd;
    }
</style>
