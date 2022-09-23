<template>
    <div class = "categories" >

    <nuxt-link to="/Attribute/Attribute_Coffee">
        <div class = "categories_coffee">
                <img src = "https://cdn-icons-png.flaticon.com/512/571/571504.png"
                alt = "" >
                <h2>{{dataListsCoffee}}</h2> 
        </div>
    </nuxt-link>

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

    <!-- <div v-for="dataList in dataLists" :key="dataList.id">
        <h1>{{dataList[0].author}}</h1>
    </div> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
        dataListsCoffee: '',
        dataListsTea:'',
        dataListsSoft_drink:''
        }
    },
    mounted(){
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const data = await this.$axios.get('https://picsum.photos/v2/list?limit=12');

            console.log('res:',data.data);
            this.dataListsCoffee = data.data[0].author;
            this.dataListsTea = data.data[1].author;
            this.dataListsSoft_drink = data.data[2].author;
        },
    }

   
}
</script>

<style scoped>
    
.categories{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px;
    /* margin-top: 20px */
    /* border: 2px solid rgb(187, 106, 0); */
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