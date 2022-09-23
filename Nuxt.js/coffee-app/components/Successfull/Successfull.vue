<template>
    <div class="Successful">
        <div class="Successful_container">
            <h1>Successful transaction !</h1>

            <p>Please receive the products below</p>

            <div>
            <img src="https://www.phpsupport.co/wp-content/uploads/2017/10/sign-check-icon.png" alt="" className="Successful_img" />
            </div>
            
            <nuxt-link to="/">
                <button type="button" class="button-68">Home</button>
            </nuxt-link>
            
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .Successful{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    text-align: center;
    margin-top: 70px;
}


.Successful_container{
    padding: 70px;
    padding-top: 30px;
    padding-bottom: 20px;
  
    background-color: rgb(241, 241, 241);
    border-radius: 10px;
}

.Successful_container button{
    margin-bottom: 20px;
}


.Successful_img{
    max-width: 400px;
    max-height: 400px;
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