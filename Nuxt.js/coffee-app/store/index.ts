// import Vuex from 'vuex'
// import Vue from 'vue'

import axios from "axios"

// Vue.use(Vuex);


// export default () => new Vuex.Store({
//     state: {
//       currentJoke:'This is a Joke',
//       allJokes:[]
//     },
//     mutations: {
//       //syncrous
//       setCurrentJoke(state, payload){
//         state.currentJoke = payload;
//       }
//     },
//     actions: {
     
//     },
//     getters: {
//         getcurrentJoke: state => state.currentJoke
//       }
// })

//state 
export const state = () =>({
  users:[]
})

//getters
export const getters = {

}

//actions
export const actions = {
  async getUsers() {
    const users = await axios.get('https://picsum.photos/v2/list')
    return users
  }
}

//mutations
export const mutations = {
  
}