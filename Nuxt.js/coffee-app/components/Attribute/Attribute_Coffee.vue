<template>
    <div class="Coffee">
        
        <div class="Coffee_option">

            <h1>Coffee</h1>

         
                <p v-for="post in posts" :key="post.id">{{post.title}}</p>
        

            <div class="option_type">
                <h3>Type</h3>
                
                <select>
                    <option>Espresso</option>
                    <option>Americano</option>
                    <option>Latte</option>
                </select>
               
            </div>


            <div class="option_type">
                <h3>Select sweetness</h3>

                <select>
                    <option>Default</option>
                    <option>Less sugar</option>
                    <option>More sugar</option>
                </select>
            </div>


            <div class="option_type">
                <h3>Hot or Cold?</h3>

                <select>
                    <option>Hot</option>
                    <option>Cold</option>
                </select>
            </div>

            <div class="option_type">
                


                <h3 value="straw">straw</h3>
          

                <h3 value="cup cover">cup cover</h3>
                
            </div>

            <div class="option_type">
                <h3>Item number</h3>
                <input type="number" name="quantity" min="1" max="10" >
            </div>

            <nuxt-link to="/Timer/Timer">
                <button class="button-68" type="button">Continue</button>
            </nuxt-link>
           
           
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            posts: []
        }
    },  
    async asyncData({ $axios }) {
        let {data} = await $axios.get('https://jsonplaceholder.typicode.com/todos')

        return {posts: data}
    },
    head: {
        title: 'รายการโพสต์'
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