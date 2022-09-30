<template>
    <div class="Coffee">
        
        <div class="Coffee_option">
            <img src="../../assets/coffee.png">
            <!-- <h1>Coffee</h1>         -->

            <div class="option_type">
                <h3>Type</h3>
                
                <select id="type">
                    <option>{{coffeeEspresso}}</option>
                    <option>{{coffeeAmericano}}</option>
                    <option>{{coffeeLatte}}</option>
                </select>
               
            </div>


            <div class="option_type">
                <h3>Select sweetness</h3>

                <select id="sweetness">
                    <option>{{sweetnessDefault}}</option>
                    <option>{{sweetnessLessSugar}}</option>
                    <option>{{sweetnessMoreSugar}}</option>
                </select>
            </div>


            <div class="option_type">
                <h3>Hot or Cold?</h3>

                <select id="hotOrCold">
                    <option>{{Hot}}</option>
                    <option>{{Cold}}</option>
                </select>
            </div>

 
                
                <section id="checkboxOption" class="option_type">
                    <h3>straw</h3>
                    <input type="checkbox" value="straw">

                    <h3>cup cover</h3>
                    <input type="checkbox" value="cup cover">
                </section>
        

            <div class="option_type">
                <h3>Item number</h3>
                <input type="number" min="1" max="10" id="numberItem">
            </div>

            <nuxt-link to="/Payment/Payment">
                <button @click="saveType" class="button-68" type="button">Continue</button>
            </nuxt-link>
           
           
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            coffeeEspresso: [],
            coffeeAmericano:[],
            coffeeLatte:[],

            sweetnessDefault: [],
            sweetnessLessSugar: [],
            sweetnessMoreSugar: [],

            Hot: [],
            Cold:[],

            stockEspresso:[],
            stockAmericano:[],
            stockLatte:[],

            durationEspresso:[],
            durationAmericano:[],
            durationLatte:[],

        }
    },
    created(){
        this.asyncData_Coffee()
    },
    methods:{
        async asyncData_Coffee() {
            let data = await this.$axios.get('http://localhost:8800/coffee')
            let dataAttribute = await this.$axios.get('http://localhost:8800/attribute')

            console.log('resData:',data.data)
            console.log('resDataAttribute:', dataAttribute.data)
            
            //-----------------Type-------------------
            this.coffeeEspresso = data.data[0].type;
            this.coffeeAmericano = data.data[1].type;
            this.coffeeLatte = data.data[2].type;

            //---------------Sweetness---------------
            this.sweetnessDefault = data.data[0].sweetness;
            this.sweetnessLessSugar = data.data[1].sweetness;
            this.sweetnessMoreSugar = data.data[2].sweetness;

            //---------------Hot or Cold?------------
            this.Hot = dataAttribute.data[0].type
            this.Cold = dataAttribute.data[1].type

            //----------------stock---------------------
            this.stockEspresso = parseInt(data.data[0].stock) 
            this.stockAmericano = parseInt(data.data[1].stock) 
            this.stockLatte = parseInt(data.data[2].stock) 
            //----------------Duration-----------------
            this.durationEspresso = data.data[0].duration
            this.durationAmericano = data.data[1].duration
            this.durationLatte = data.data[2].duration

        },
        saveType(){

        
           if(document.getElementById("type").value === 'Espresso'){
                
                    localStorage.setItem("id",1)

                    let selectType = document.getElementById("type").value
                    localStorage.setItem("type",selectType)

                    let selectSweetness = document.getElementById("sweetness").value
                    localStorage.setItem("sweetness",selectSweetness)

                    let selectNumberItem = document.getElementById("numberItem").value
                    localStorage.setItem("numberItem",selectNumberItem)
                    
                    let  selecthotOrCold = document.getElementById("hotOrCold").value
                    localStorage.setItem("hotOrCold", selecthotOrCold)

                    let selectCheckBoxOption = document.getElementById("checkboxOption").value
                    localStorage.setItem("checkboxOption", selectCheckBoxOption)

                    localStorage.setItem("stock", this.stockEspresso)

                    localStorage.setItem("duration", this.durationEspresso)


           }else if(document.getElementById("type").value === 'Americano'){
            
                    localStorage.setItem("id",2)

                    let selectType = document.getElementById("type").value
                    localStorage.setItem("type",selectType)

                    let selectSweetness = document.getElementById("sweetness").value
                    localStorage.setItem("sweetness",selectSweetness)

                    let selectNumberItem = document.getElementById("numberItem").value
                    localStorage.setItem("numberItem",selectNumberItem)
                    
                    let  selecthotOrCold = document.getElementById("hotOrCold").value
                    localStorage.setItem("hotOrCold", selecthotOrCold)

                    let selectCheckBoxOption = document.getElementById("checkboxOption").value
                    localStorage.setItem("checkboxOption", selectCheckBoxOption)

                    localStorage.setItem("stock", this.stockAmericano)

                    localStorage.setItem("duration", this.durationAmericano)

                

           }else if(document.getElementById("type").value === 'Latte'){

                    localStorage.setItem("id",3)

                    let selectType = document.getElementById("type").value
                    localStorage.setItem("type",selectType)

                    let selectSweetness = document.getElementById("sweetness").value
                    localStorage.setItem("sweetness",selectSweetness)

                    let selectNumberItem = document.getElementById("numberItem").value
                    localStorage.setItem("numberItem",selectNumberItem)

                    let  selecthotOrCold = document.getElementById("hotOrCold").value
                    localStorage.setItem("hotOrCold", selecthotOrCold)

                    let selectCheckBoxOption = document.getElementById("checkboxOption").value
                    localStorage.setItem("checkboxOption", selectCheckBoxOption)

                    localStorage.setItem("stock", this.stockLatte)

                    localStorage.setItem("duration", this.durationLatte)
           }
            
        }
    }
}
</script>


<style scoped>
.Coffee{
    background-image: url("../../assets/Attribute.jpg");
    background-repeat: no-repeat;
    background-position: center;
    font-family: 'Inter Tight', sans-serif;
    /* display: flex;
    justify-content: center; */
    /* padding-top: 500px; */
    padding-bottom: 300px;

    border: 3px solid rgb(255, 255, 255);
    }



.Coffee_option{
    margin: auto;
    width: 30%;
    margin-top: 90px;
    /* border: 2px solid red;  */
    padding: 40px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    text-align: center;
}

.Coffee_option img{
    max-width: 150px;
    max-height: 150px;
}

.Coffee_option h1{
    color: #27ae60;
}

.option_type h3{
    padding-right: 10px;
    color:rgb(102, 102, 102)
}

.option_type{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    padding-left: 60px;
    padding-right: 60px;
    margin: 20px;
}


/* CSS */
.button-68 {
    margin-top: 50px;
    appearance: none;
    backface-visibility: hidden;
    background-color: #42ce7d;
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