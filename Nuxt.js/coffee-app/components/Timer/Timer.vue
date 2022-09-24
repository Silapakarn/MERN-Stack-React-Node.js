<template>
    <div class="Timer">
        
        <div class="Timer_container">
            <h2>machine is working please wait...</h2>
            <h1>{{countDown}}</h1>
        </div>
        
    </div>
</template>


<script>

export default {
    data () {
        return {
            countDown: 35
        }
    },
    methods: {
        countDownTimer () {
                if (this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }else{
                    // navigateTo('/')
                }
            }
        },
        created () {
            this.countDownTimer()
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