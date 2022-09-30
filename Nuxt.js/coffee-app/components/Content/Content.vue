<template>
    <div class = "categories">

        <div class="categoriesNuxt">   
            <!-- <nuxt-link to="/Attribute/Attribute_Coffee"> -->
            <div class = "categories_coffee" @click="routeAttributeCoffee">
                    <img src = "https://cdn-icons-png.flaticon.com/512/571/571504.png"
                    alt = "" >
                    <h2>{{dataListsCoffee}}</h2> 
            </div>
            <!-- </nuxt-link> -->

            <div class = "categories_tea">
                <img src = "https://cdn-icons-png.flaticon.com/512/571/571545.png"
                alt = "" >
                <h2 >{{dataListsTea}}</h2> 
            </div>

            <div class = "categories_tea">
                <img src = "https://cdn-icons-png.flaticon.com/512/571/571463.png"
                alt = "" >
                <h2 >{{dataListsSoft_drink}}</h2> 
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            dataListsCoffee: '',
            dataListsTea:'',
            dataListsSoft_drink:'',            
        }
    },
    mounted(){
        this.categories_API()
    },
    methods: {
        async categories_API() {
            const data = await this.$axios.get('http://localhost:8800/categories/');

            console.log('categories_res:',data.data);
            this.dataListsCoffee = data.data[0].beverages;
            this.dataListsTea = data.data[1].beverages;
            this.dataListsSoft_drink = data.data[2].beverages;
        },
        routeAttributeCoffee(){
            this.$router.push("/Attribute/Attribute_Coffee")
        }
    }
}
</script>

<style scoped>
.categories{
    /* padding: 40px; */
    background-image: url("../../assets/bg.jpg");
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center;
    /* max-width: 60%; */
    /* margin-top: 20px */
    padding-bottom: 360px;
    border: 2px solid rgb(255, 255, 255);
}

.categoriesNuxt{
    display: flex;
    lex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 100%;
    margin-top:260px;
    /* border: 2px solid rgb(187, 0, 0); */
}

.categories_coffee{
    text-align: center;
    background-color: rgb(241, 241, 241);
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
}

.categories_coffee:hover{
    background-color: rgb(227, 255, 239);
}

.categories_coffee h2{
    padding-top: 10px;
    color: rgb(136, 136, 136);
}

.categories_coffee img{
    max-width: 300px;
    max-height: 400px;
}

.categories_tea{
    text-align: center;
    background-color: rgb(241, 241, 241);
    padding: 20px;
    margin-left: 50px;
    border-radius: 10px;
    cursor: pointer;
}

.categories_tea:hover{
    background-color: rgb(227, 255, 239);
}

.categories_tea h2{
    padding-top: 10px;
    color: rgb(136, 136, 136);
}

img{
    max-width: 300px;
    max-height: 400px;
}
</style>