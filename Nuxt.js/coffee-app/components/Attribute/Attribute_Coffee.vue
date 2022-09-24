<template>
    <div class="Coffee">
        
        <div class="Coffee_option">

            <h1>Coffee</h1>        

            <div class="option_type">
                <h3>Type</h3>
                
                <select>
                    <option>{{postsCoffee_Espresso}}</option>
                    <option>{{postsCoffee_Americano}}</option>
                    <option>{{postsCoffee_Latte}}</option>
                </select>
               
            </div>


            <div class="option_type">
                <h3>Select sweetness</h3>

                <select>
                    <option>{{postsSweetness_Default}}</option>
                    <option>{{postsSweetness_LessSugar}}</option>
                    <option>{{postsSweetness_MoreSugar}}</option>
                </select>
            </div>


            <div class="option_type">
                <h3>Hot or Cold?</h3>

                <select>
                    <option>{{posts_Hot}}</option>
                    <option>{{posts_Cold}}</option>
                </select>
            </div>

            <div class="option_type">
                
                <h3 value="straw">straw</h3>
                <input type="checkbox">

                <h3 value="cup cover">cup cover</h3>
                <input type="checkbox">
                <!-- <label>{{checked}}</label> -->
                
            </div>

            <div class="option_type">
                <h3>Item number</h3>
                <input type="number" min="1" max="10">
            </div>

            <nuxt-link to="/Payment/Payment">
                <button class="button-68" type="button">Continue</button>
            </nuxt-link>
           
           
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            postsCoffee_Espresso: '',
            postsCoffee_Americano:'',
            postsCoffee_Latte:'',

            postsSweetness_Default: '',
            postsSweetness_LessSugar: '',
            postsSweetness_MoreSugar: '',

            posts_Hot: '',
            posts_Cold:'',
        }
    },
    mounted(){
        this.asyncData_Coffee()
    },
    methods:{
        async asyncData_Coffee() {
            let data = await this.$axios.get('https://picsum.photos/v2/list')

            console.log('res:',data.data)
            
            //-----------------Type-------------------
            this.postsCoffee_Espresso = data.data[0].author;
            this.postsCoffee_Americano = data.data[2].author;
            this.postsCoffee_Latte = data.data[1].author;

            //---------------Sweetness---------------
            this.postsSweetness_Default = data.data[6].author;
            this.postsSweetness_LessSugar = data.data[4].author;
            this.postsSweetness_MoreSugar = data.data[5].author;

            //---------------Hot or Cold?------------
            this.posts_Hot = data.data[7].author
            this.posts_Cold = data.data[8].author
        },
    }
}
</script>


<style scoped>
    .Coffee{
    display: flex;
    justify-content: center;
    padding-top: 70px;
    }


.Coffee_option{
    /* border: 1px solid red;  */
    padding: 40px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
    text-align: center;
}

.option_type h3{
    padding-right: 10px;
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