<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Add a new task" 
        @keypress.enter="addTask" />
      <button @click="addTask">Add</button>

      <button @click="addNumber">Plus</button>

    </div>

    <div>
      <h1>{{}}</h1>
    </div>
    
  </main>
</template>

<script>
export default {
  data (){
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    },
    addNumber(){
      console.log('Hello save!')
    }
  },
  computed:{
    loadData(){
      return this.$store.getters.getAllPosts
    }
  }
}
</script>
