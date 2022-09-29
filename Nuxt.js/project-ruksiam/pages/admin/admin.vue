<template>
    <div>
        <h1>Admin</h1>
        
        <div v-for="action in toolbarActions" :key="action">
            <h2>{{action}}</h2>
        </div>

      <button @click="onsubmited">Out</button>

   
</div>
  </template>
  
  <script>

    export default {
      computed: {
        toolbarActions() {
            return this.$store.state.toolbar.toolbarActions
            },
        loadDataStore(){
            return this.$store.getters.getAllPosts
        }
      },
      methods: {
        onsubmited(){
            return this.$router.push("/")
        }
      }
    }
  </script>
  
  <style>
    .done {
      text-decoration: line-through;
    }
    h1{
        color:red;
    }
  </style>