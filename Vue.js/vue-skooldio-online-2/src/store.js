import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    items: []
  },
  mutations: {
    changeCount (state, count) {
      state.count = count
    },
    addItem (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    addTodo ({commit,state},item){
      commit('addItem',item)
      commit('changeCount',state.items.length)
    }
  },
  getters: {
    countText (state) {
      return 'Items' + state.count
    }
  }
})
