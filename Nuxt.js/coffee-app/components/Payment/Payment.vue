<template>
    <div class = "payment" >

        <div class = "payment_container" >

            <h1> Payment </h1> <p>{{types}} item </p> 

            <p> {{numberItem}} cup * {{price}} 
            Bath per order </p> 
            
            <h2> {{price * numberItem}}
            Bath </h2>
            
            <img src="https://cdn-icons-png.flaticon.com/512/438/438526.png"/>

            <!-- Test -->
            <!-- <h1>{{id }}</h1> -->
                
            <div>
                
                    <button class = "button-68" type = "button" @click="savePayment">Pay</button> 
                
            </div>
            
        
        </div> 
    </div>
</template>

<script>

export default {
    data(){
        return {
            price: [],

            types:'',
            sweetness:'',
            numberItem:0,
            hotOrCole: '',
            stock:0,
            id:[],
            
            stockUpdate:0,
        }
    },created(){
        this.asyncData(),
        this.getValueInLocalStorage()
    },
    mounted(){
        
    },
    methods:{
        async asyncData() {
            let data = await this.$axios.get('http://localhost:8800/coffee')
            let dataAttribute = await this.$axios.get('http://localhost:8800/attribute')

            console.log('asyncData:',data.data)
            console.log('dataAttribute:', dataAttribute.data)

            //---------------stockUpdate--------------
            this.stockUpdate = parseInt(this.stock -  this.numberItem)
            console.log('stockUpdate:', this.stockUpdate)

            //-----------------Type-------------------
            if(this.types === 'Espresso' && this.hotOrCole === 'Cold'){
                return this.price = data.data[0].price + dataAttribute.data[1].price
            }else if(this.types === 'Espresso'){
                return this.price = data.data[0].price
            }else if(this.types === 'Americano' && this.hotOrCole === 'Cold'){
                return this.price = data.data[1].price + dataAttribute.data[1].price
            }else if(this.types === 'Americano'){
                return this.price = data.data[1].price
            }else if(this.types === 'Latte' && this.hotOrCole === 'Cold'){
                return this.price = data.data[2].price + dataAttribute.data[1].price
            }else if(this.types === 'Latte'){
                return this.price = data.data[2].price
            }

        },
        getValueInLocalStorage(){
            let selectType =  localStorage.getItem("type")
            let selectNumberItem = localStorage.getItem("numberItem")
            let selectHotOrCole = localStorage.getItem("hotOrCold")
            let selectStock = localStorage.getItem("stock")
            let selectId = localStorage.getItem("id")

            this.types = selectType
            this.numberItem = parseInt(selectNumberItem)   
            this.hotOrCole = selectHotOrCole
            this.stock =  parseInt(selectStock)
            this.id = selectId

            console.log('stock:',this.stock)
            console.log('numberItem:',this.numberItem)
        },
        async savePayment(){
                if(this.stockUpdate >= 0 && this.stock >= this.numberItem){
                    if(this.types === 'Espresso'){
                        await this.$axios.$patch(`http://localhost:8800/coffee/1`, {
                        "stock": this.stockUpdate
                        })
                        console.log('Save Data  stock !!')
                        this.$router.push("/Timer/Timer")
                    }else if(this.types === 'Americano'){
                        await this.$axios.$patch(`http://localhost:8800/coffee/2`, {
                        "stock": this.stockUpdate
                        })
                        console.log('Save Data  stock !!')
                        this.$router.push("/Timer/Timer")
                    }else if(this.types === 'Latte'){
                        await this.$axios.$patch(`http://localhost:8800/coffee/3`, {
                        "stock": this.stockUpdate
                        })
                        console.log('Save Data  stock !!')
                        this.$router.push("/Timer/Timer")
                    }
                }else if(this.stock < this.numberItem && this.stock > 0){
                    this.$router.push("/Not_enough_product/Not_enough_product")
                }else if(this.stock === 0){
                    this.$router.push("/Out_of_stock/Out_of_stock")
                }
        }
    }
}




</script>

<style scoped>
    .payment{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 70px;
}

.payment_container{
    padding: 60px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
}

.payment_container h2{
    font-size: 30px
}

.payment_container img{
    margin-top: 10px;
    max-width: 300px;
    max-height: 300px;
}


/* CSS */
.button-68 {
    margin-top: 50px;
  appearance: none;
  backface-visibility: hidden;
  background-color: #27ae60;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.button-68:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.button-68:active {
  transform: translateY(2px);
  transition-duration: .35s;
}

.button-68:hover {
  box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
}
</style>