<template>
    <div>
        <h1>Post</h1>

        <div v-for="item in items" :key="item.cation">
            <h2>{{item.cation}}</h2>
            <h3>{{item.title}}</h3>
            <h3>{{item.completed}}</h3>
            <img src="../../assets/kan.jpg" />
            <button>Read More</button>

            <h1 :title=title>{{title}}</h1>

            <nuxt-link to="/admin/admin">อ่านบทความ</nuxt-link>
        </div>
    </div>
</template>

<script>
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
            ]
        }
    },
    props:{
        title:{
            type: String,
            required: true
        },
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