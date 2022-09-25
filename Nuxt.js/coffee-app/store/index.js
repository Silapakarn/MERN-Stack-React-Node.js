// import Vuex from 'vuex'
// import Vue from 'vue'

// export default () => new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       //syncrous
      
//     },
//     actions: {
     
//     },
//     getters: {
       
//     }
// })

import axios  from "axios"
// state 
export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter++
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}