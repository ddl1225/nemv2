
export const CommonsDoc = {
    data() {
        return {
            processFlag: false
        }
    },
    methods: {
        tableMakingClass: function (col) {
            var classVar =  [];
            classVar.push(col.class);
            classVar.push('text-'+col.align);
            if(col.divider) classVar.push('v-data-table__divider');
            if(this.headers.length > this.colI){
                this.colI = this.colI+1;
            }
            return classVar;
        },
        setKeyPreventDefaultEvent(e){
            e.preventDefault();
        },
        setKeyTabEvent(e){
            e.preventDefault();
            if (e.keyCode === 9 ) { return ',000';}
            return '';
        },
        resetTextInput(str){
            /*텍스트가 NULL 일 경우, 공백처리*/
            //console.log('str: '+str)
            if(str == null) return '';
            return str;
        },
        filteringDateHandler: function (str) {
            /*날짜 자동 컴마*/
            //console.log(str);
            if(str == null) return '';
            return str.toString().substr(0, 10);
        },
        filteringDateTimeHandler: function (str) {
            /*날짜,시간 자동 컴마*/
            //console.log(str);
            if(str == null) return '';
            return str.toString().substr(0, 16);
        },
        filteringCommaHandler: function (str) {
            /*가격 자동 컴마*/
            // console.log('filteringCommaHandler: '+str);
            if(str == null) return '';
            // return str.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            if(str.length > 1) str = str.toString().replace(/\D/g, '').replace(/(^0+)/, '');

            if(/^-[0-9]+/g.test(str.toString().replace(/^-\D/g, '')) === true) return '-'+str.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return str.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        filteringFeeCommaHandler: function (str) {
            /*수수료 10%*/
            //console.log(str);
            if(str == null) return '';
            return Math.floor((str.toString().replace(/\D/g, '')/10)).replace(/(^0+)/, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        filteringCardCommaHandler: function (str) {
            /*카드 4자리마다 하이푼 붙이기*/
            //console.log(str);
            if(str == null) return '';
            return str.toString().replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, '-');
        },
        filteringPhoneCommaHandler: function (str) {
            /*번호 4자리마다 하이푼 붙이기*/
            //console.log(str);
            if(str == null) return '';
            if(/^-[0-9]+/g.test(str.toString().replace(/^-\D/g, '')) === true) return '-'+str.toString().replace(/\D/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3");
            return str.toString().replace(/\D/g, '').replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3");
        },
        textInputRule: function(){return [ v =>  !!v || '입력이 필요합니다.', v =>  (v && v.length > 0) || '한글자 미만입니다.' ];},
        phoneInputRule: function(){return [ v =>  !!v || '입력이 필요합니다.', v =>  /^\d{3}-\d{3,4}-\d{4}$/.test(v) || '핸드폰번호에 맞지 않습니다.' ];},
        cardInputRule: function(){return [ v =>  !!v || '입력이 필요합니다.', v =>  /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(v) || '카드번호 맞지 않습니다.' ];},
        numberInputRule: function(){ return [ v => !!v || '입력이 필요합니다.', v =>  /^[0-9]+$/.test(v) || '숫자만 입력해주세요.' ];},
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        startAxiosProcess: async function () {
            console.log('startAxiosProcess');
            // this.$store.dispatch('flagsModule/setIsLoading', true);
            // this.processFlag = await true;
        },
        finishAxiosProcess: async function () {
            console.log('finishAxiosProcess');
            // this.processFlag = await false;
            // this.$store.dispatch('flagsModule/setIsLoading', false);
        },
    }
}
