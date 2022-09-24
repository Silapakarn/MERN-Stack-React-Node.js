<template>
    <div class = "payment" >

        <div class = "payment_container" >

            <h1> Payment </h1> <p> item </p> 

            <p> selected numberItem cup * price 
            per order </p> 
            
            <h2> Calculator * numberItem
            Bath </h2>
            
            <img src="https://cdn-icons-png.flaticon.com/512/438/438526.png"/>


        <div>
            <nuxt-link to="/Timer/Timer">
                <button class = "button-68" type = "button">Pay</button> 
            </nuxt-link>
        </div>
            
        
        </div> 
    </div>
</template>

<script>
export default {
    
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