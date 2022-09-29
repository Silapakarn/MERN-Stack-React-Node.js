<template>
    <div class="Timer">
        
        <div class="Timer_container">
            <h2>machine is working please wait...</h2>
            <h1>{{duration}}</h1>
        </div>
        
    </div>
</template>


<script>

export default {
    data () {
        return {
            countDown: 35,
            duration: 0,
            types: '',
            hotOrCole: '',
            durationCold: 0,
            numberItem: 0,
            
        }
    },
    methods: {
        async asyncData_Duration() {
            let dataAttribute = await this.$axios.get('http://localhost:8800/attribute')
            this.durationCold = parseInt(dataAttribute.data[1].duration)

            console.log('dataAttribute:',dataAttribute.data)
            console.log('durationCold:',this.durationCold)
        },
        getValueInLocalStorage(){
            let selectType =  localStorage.getItem("type")
            let selectDuration = localStorage.getItem("duration")
            let selectHotOrCole = localStorage.getItem("hotOrCold")
            let selectNumberItem = localStorage.getItem("numberItem")

            this.types = selectType
            this.duration = parseInt(selectDuration)
            this.hotOrCole = selectHotOrCole
            this.numberItem = parseInt(selectNumberItem)

            if(this.hotOrCole === 'Cold'){
                this.duration = parseInt(selectDuration) + 5 
            }else{
                this.duration = parseInt(selectDuration)
            }

            console.log('hotOrCole:',this.hotOrCole)
            console.log('duration:',this.duration)
        },
        countDownDuration(){
            if(this.duration > 0){
                setTimeout(() => {
                    this.duration -= 1
                    this.countDownDuration()
                }, 1000);
            }else{
                this.$router.push("/Successfull/Successfull")
            }
        }
    },
    created () {
        this.getValueInLocalStorage(),
        this.asyncData_Duration()
    },
    mounted(){
        this.countDownDuration()
    }

}
</script>


<style scoped>
    .Timer{
        display: flex;
        justify-content: center;
        padding-top: 20px;
        text-align: center;
        margin-top: 70px;
    }


    .Timer h1{
        color: rgb(70, 192, 70);
        font-size: 150px;
    }


    .Timer_container{
        padding: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: rgb(241, 241, 241);
        border-radius: 10px;
    }
</style>