<template>
    <div class="Hi">
        {{text + ' ' + 'Silapakarn'}}


        <ul>
            <li v-for="todo in sortItem" :key="todos.time" class="red">
                <img :src=todo.srcUrl />
                <h1>{{todo.text}}</h1>
            </li>
            {{text}}

        </ul>
        <input type="text" v-model="text">
        <button @click="save()">save</button>

        <h1><todoList /></h1>
    </div>
        
   
</template>

<script>
import todoList from '../todoList.vue'

export default {
    name: 'Hi',
    components: {
        todoList
    },
    beforeCreate (){
        console.log('before Create')
    },
    
    watch:{
        todos (oldVal,newVal) {
            console.log(oldVal,newVal)
        }
    },

    mounted () {
        console.log('mounted !!')
    },
    updated (){
        console.log('updated !!')
    },
    computed: {
        sortItem () {
            return this.todos.sort((a,b)=>{b.time - a.time})
        }
    },
    filters: {
        capitalize (val){
            return val.toUpperCase()
        }
    },

    methods:{
        save2 (){
            this.save()
        },
        save(){
            console.log('save')
        }
    },

    data() {
        return {
            text: 'Hello World',
            todos:[{
                srcUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png',
                text: '<h1>Hello</h1>',
                time: 154023265,
                completed: true               
            },
            {
                srcUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png',
                text: '<h1>World</h1>',
                time: 154023266,
                completed: false  
            }
            ]
        }
    }
}
</script>

<style scoped>
    .red{
        color: red;
    }
</style>
