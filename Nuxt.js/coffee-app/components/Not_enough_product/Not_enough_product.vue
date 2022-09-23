<template>
    <div class="out_of_stock">
        <div class="out_of_stock_container">
            <h1>Not enough product</h1>

            <h3>Please make a new transaction.</h3>
            <h2>You can order selected max to stock cups.</h2>
            

            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/4753/4753319.png" alt=""  className="Not_enough_product" />       
            </div>

            <nuxt-link to="/">
                <button class="button-68" type="button">Home</button>
            </nuxt-link>
            
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
h1{
    color: rgb(104, 192, 104)
}

    .out_of_stock{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 70px;
}

.out_of_stock_container{
    padding: 60px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
}

.out_of_stock_container h1{
    font-size: 50px
}


img{
    max-width: 300px;
    max-height: 300px;
}


.Not_enough_product{
    max-width: 200px;
    max-height: 200px;
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