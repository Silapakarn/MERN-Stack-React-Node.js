<template>
    <div>
        <h2>Hello Post</h2>

        <div v-for="item in items" :key="item.cation">
            <h2>{{item.cation}}</h2>
            <h3>{{item.title}}</h3>
            <h3>{{item.completed}}</h3>
            <img src="../../assets/kan.jpg" />
            <button>Read More</button>

            <h1 :title=title>{{title}}</h1>
            
            <input type="text" v-model="form.name" />
            
            <nuxt-link to="/admin/admin">อ่านบทความ</nuxt-link>

            <p>{{form}}</p>

            <button @submit="onsubmit">Save</button>
            <button @reset="onreset">Clear</button>


            <p>{{loadData}}</p>
            <p>{{loadasyncData}}</p>
            
        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios';


export default {
    data(){
        return {
            items: [
                {
                    cation:"A",
                    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    completed: true
                },
                {
                    cation:"B",
                    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    completed: true
                },
                {
                    cation:"C",
                    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    completed: true
                },
            ],
            form:{
                name:"",
            },
            loadData:[]
            ,
            loadasyncData:[]
        }
    },
    props:{
        title:{
            type: String,
            required: true
        }
    },
    methods:{
        onsubmit(e){
            e.preventDefault();
            console.log(this.form)
        },
        onreset(e){
            e.preventDefault();
            this.from.name='';
        },
        async postAll(){
         let data = await this.$axios.get('https://jsonplaceholder.typicode.com/todos')
            console.log('res:',data.data[0])
            this.loadData = data.data[0]
        },
        onsubmited(){
            this.$store.dispatch("addPost",postData).then(()=>{
                this.$router.push("/admin/admin")
            })
        }
    },
    mounted(){
        this.postAll()
    },
    asyncData(){
        return axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            const data = [];
            for(const key in res.data){
                data.push({...res.data[key],id:key})
            }
            return{
                loadasyncData:data
            }
        })
    },
    computed:{
        
    }
}
</script>

<style scoped>
    h2{
        font-size: 100px;
        color: rebeccapurple;
    }
    h1{
        color:red
    }
</style>