<template>
    <div id="home">
        <ul>
            <li v-for="item in sortedItem" :key="item.time">
               <button @click="done()">Done</button>{{item.text}} 
            </li>
        </ul>
        
        <form @submit.prevent="save()">
            <input type="text" v-model="inputText"><button type="summit">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
      return{
        inputText: '',
        items: []
        } 
    },
    filters: {
        captitalize (val) {
            return val.toUpperCase()
        }
    },
    computed: {
        sortedItem () {
            return this.items.sort((a,b) => {
                return b.time - a.time
            }).filter(ele => {
                return ele.completed === false
            })
        }
    },
    methods: {
        done (id) {
            his.items = this.items.map(ele => {
                if(id === ele.time) {
                    ele.completed = true
                }
                return ele
            })
        },
        save() {
            this.items.push({
                text:this.inputText,
                time: Date.now(),
                completed: false
            })
        }
    }
  }

</script>

<style>

</style>
